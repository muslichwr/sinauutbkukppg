"""Validasi sumber JSON dan bangun aset offline. Tanpa dependensi eksternal."""
import argparse
from collections import Counter
import hashlib
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
CODES = json.loads((ROOT / 'data/codes.json').read_text(encoding='utf-8'))


def validate(bank, package_id):
    def require(ok, message):
        if not ok:
            raise ValueError(f'Paket {package_id}: {message}')
    require(isinstance(bank, list) and len(bank) == 80, 'harus tepat 80 butir')
    require(Counter(q.get('section') for q in bank) == {'PCK': 50, 'PU': 30}, 'komposisi harus 50/30')
    require(set(q.get('code') for q in bank) == set(CODES), 'harus mencakup 17 kode yang sah')
    require(set(q.get('type') for q in bank) == {'PG', 'Kategori', 'MCMA'}, 'harus memuat tiga bentuk')
    seen_ids, seen_uids, seen_stems = set(), set(), set()
    for q in bank:
        n = q.get('id')
        require(type(n) is int and n > 0 and n not in seen_ids, f'ID tidak sah/duplikat: {n}')
        seen_ids.add(n)
        uid = q.get('uid')
        require(uid == f'p{package_id}-{n:03d}' and uid not in seen_uids, f'UID tidak sah/duplikat: {uid}')
        seen_uids.add(uid)
        require(q.get('package') == package_id, f'{uid}: nomor paket salah')
        require(all(isinstance(q.get(k), str) and q[k].strip() for k in ['stem', 'why']), f'{uid}: teks kosong')
        norm = re.sub(r'\W+', '', q['stem'].casefold())
        require(norm not in seen_stems, f'{uid}: duplikasi stimulus')
        seen_stems.add(norm)
        opts, key = q.get('options'), q.get('key')
        require(isinstance(opts, list) and 2 <= len(opts) <= 5 and all(isinstance(o, str) and o.strip() for o in opts), f'{uid}: opsi invalid')
        require(len(set(o.casefold().strip() for o in opts)) == len(opts), f'{uid}: opsi duplikat')
        reasons = q.get('explanations')
        require(isinstance(reasons, list) and len(reasons) == len(opts) and all(isinstance(e, str) and len(e.strip()) >= 20 for e in reasons), f'{uid}: alasan per opsi tidak lengkap')
        letters = list('ABCDE'[:len(opts)])
        if q['type'] == 'PG':
            require(isinstance(key, str) and key in letters, f'{uid}: kunci PG invalid')
        elif q['type'] == 'MCMA':
            require(isinstance(key, list) and len(key) >= 2 and all(isinstance(x, str) for x in key) and len(set(key)) == len(key) and all(x in letters for x in key), f'{uid}: kunci MCMA invalid')
        else:
            require(isinstance(key, list) and len(key) == len(opts) and all(x in ['T', 'F'] for x in key), f'{uid}: kunci Kategori invalid')


def review_markdown(p):
    bank = p['questions']
    counts = Counter(q['type'] for q in bank)
    out = [f"# {p['title']} — latihan UTBK UKPPPG PPLG/RPL", '',
           f"Versi: {p['version']}. Dihasilkan oleh `python scripts/build.py` dari `{p['file']}`; jangan edit hasil build.", '',
           'Latihan orisinal, bukan soal resmi/bocoran. Rujukan utama: Juknis yang disediakan, halaman 7 dan 47. Panduan pendamping hanya inspirasi mutu kasus.', '',
           f"80 soal = 50 PCK + 30 PU; {counts['PG']} PG, {counts['Kategori']} PGK Kategori, {counts['MCMA']} MCMA. Distribusi bentuk dan kode merupakan keputusan latihan internal, bukan bobot resmi.", '',
           'Skor latihan: 1 poin jika seluruh respons pada butir tepat; selain itu 0. Bukan rumus nilai atau ambang kelulusan resmi.', '',
           '| Kode utama | Subkompetensi (Juknis hal. 47) | PCK | PU |', '|---|---|---:|---:|']
    for code, name in CODES.items():
        out.append(f"| {code} | {name} | {sum(q['code']==code and q['section']=='PCK' for q in bank)} | {sum(q['code']==code and q['section']=='PU' for q in bank)} |")
    out += ['', '## Soal', '', 'Kunci dan pembahasan berada setelah seluruh soal.']
    for q in bank:
        out += ['', f"### {q['id']}. [{q['uid']} • {q['section']} • {q['code']} • {q['type']}]", '', q['stem'], '']
        out += [f"{i+1 if q['type']=='Kategori' else chr(65+i)}. {v}" for i,v in enumerate(q['options'])]
    out += ['', '## Kunci dan pembahasan', '']
    for q in bank:
        key = q['key'] if q['type']=='PG' else ' / '.join('Tepat' if k=='T' else 'Tidak tepat' for k in q['key']) if q['type']=='Kategori' else ', '.join(q['key'])
        out += [f"### {q['id']}. {q['uid']} — {key}", '', q['why'], '']
        out += [f"- {i+1 if q['type']=='Kategori' else chr(65+i)}: {e}" for i,e in enumerate(q['explanations'])]
        out.append('')
    return '\n'.join(out) + '\n'


def build(check=False):
    catalog = json.loads((ROOT/'data/packages.json').read_text(encoding='utf-8'))
    if catalog['schemaVersion'] != 1:
        raise ValueError('Schema katalog tidak didukung')
    packages, ids, uids, stems, review_paths = [], set(), set(), set(), set()
    registry_path = ROOT/'data/versions.json'
    registry = json.loads(registry_path.read_text(encoding='utf-8')) if registry_path.exists() else {}
    old_registry = dict(registry)
    outputs = {}
    for meta in catalog['packages']:
        pid = meta['id']
        if type(pid) is not int or pid < 1 or pid in ids or not meta['version'] or not meta['title']:
            raise ValueError('Metadata/ID paket tidak sah atau duplikat')
        ids.add(pid)
        path = (ROOT/'data'/meta['file']).resolve()
        review = (ROOT/meta['reviewFile']).resolve()
        if not path.is_relative_to(ROOT/'data') or not review.is_relative_to(ROOT/'references'):
            raise ValueError('Path paket harus berada dalam direktori proyek yang sesuai')
        if review.suffix.lower() != '.md' or review.is_relative_to(ROOT/'references/archive') or review in review_paths:
            raise ValueError('reviewFile harus unik, berakhiran .md, dan bukan di references/archive')
        review_paths.add(review)
        bank = json.loads(path.read_text(encoding='utf-8'))
        validate(bank, pid)
        for q in bank:
            stem = re.sub(r'\W+', '', q['stem'].casefold())
            if q['uid'] in uids or stem in stems:
                raise ValueError('UID/stimulus duplikat antarpaket: '+q['uid'])
            uids.add(q['uid']); stems.add(stem)
        fingerprint = hashlib.sha256(json.dumps(bank, ensure_ascii=False, sort_keys=True).encode('utf-8')).hexdigest()
        version_key = f"{pid}@{meta['version']}"
        if version_key in registry and registry[version_key] != fingerprint:
            raise ValueError(f'{version_key}: konten berubah; naikkan versi, jangan mengubah versi terbit')
        registry[version_key] = fingerprint
        p = dict(meta, questions=bank)
        packages.append(p)
        outputs[review] = review_markdown(p)
    if not packages:
        raise ValueError('Minimal satu paket diperlukan')
    legacy = json.loads((ROOT/'references/archive/paket-1-prototipe.json').read_text(encoding='utf-8'))
    payload = dict(schemaVersion=1, codes=CODES, packages=packages, legacyQuestions=legacy)
    outputs[ROOT/'data/bank.bundle.js'] = '// Generated by scripts/build.py; edit JSON sources only.\nwindow.UKPPPG_BANK = '+json.dumps(payload,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')+';\n'
    outputs[registry_path] = json.dumps(registry,indent=2,sort_keys=True)+'\n'
    stale = [str(p.relative_to(ROOT)) for p,content in outputs.items() if not p.exists() or p.read_text(encoding='utf-8') != content]
    if check and stale:
        raise ValueError('Hasil build berbeda: '+', '.join(stale))
    if not check:
        for p,content in outputs.items():
            p.parent.mkdir(parents=True,exist_ok=True)
            p.write_text(content,encoding='utf-8',newline='\n')
    for p in packages:
        print(f"{p['title']} v{p['version']}: 80; PCK 50; PU 30; 17 kode; {dict(Counter(q['type'] for q in p['questions']))}")
    print('OK: validasi dan konsistensi build' + (' (--check)' if check else ''))


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    try:
        build(args.check)
    except (ValueError, KeyError, TypeError) as error:
        parser.exit(1, str(error)+'\n')
