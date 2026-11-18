import copy
import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


class BankTests(unittest.TestCase):
    def test_every_item_has_stable_package_identity_and_specific_explanations(self):
        bank = json.loads((ROOT / 'data/bank_soal_80.json').read_text(encoding='utf-8'))
        self.assertEqual(len(bank), 80)
        for q in bank:
            self.assertEqual(q.get('package'), 1, q['id'])
            self.assertEqual(q.get('uid'), f"p1-{q['id']:03d}")
            self.assertEqual(len(q.get('explanations', [])), len(q['options']), q['id'])

    def test_validation_rejects_invalid_keys_counts_codes_and_duplicates(self):
        spec = importlib.util.spec_from_file_location('build', ROOT / 'scripts/build.py')
        build = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(build)
        bank = json.loads((ROOT / 'data/bank_soal_80.json').read_text(encoding='utf-8'))
        build.validate(bank, 1)
        mutations = [lambda b: b.pop(), lambda b: b[0].update(key='Z'),
                     lambda b: b[1].update(key=['B', 'B']),
                     lambda b: b[3].update(key=['T']),
                     lambda b: b[0].update(code='P.7'),
                     lambda b: b[0].update(section='PU'),
                     lambda b: b[1].update(uid=b[0]['uid']),
                     lambda b: b[1].update(stem=b[0]['stem'])]
        for mutate in mutations:
            bad = copy.deepcopy(bank)
            mutate(bad)
            with self.assertRaises(ValueError):
                build.validate(bad, 1)

    def test_generated_files_match_source(self):
        result = subprocess.run(['python', str(ROOT / 'scripts/build.py'), '--check'],
                                cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_catalog_rejects_colliding_and_unsafe_review_paths(self):
        spec = importlib.util.spec_from_file_location('build', ROOT / 'scripts/build.py')
        build = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(build)
        with tempfile.TemporaryDirectory(dir=ROOT / '.tools') as temp:
            base = Path(temp)
            (base / 'data').mkdir()
            (base / 'references/archive').mkdir(parents=True)
            bank = json.loads((ROOT / 'data/bank_soal_80.json').read_text(encoding='utf-8'))
            (base / 'data/p1.json').write_text(json.dumps(bank), encoding='utf-8')
            for q in bank:
                q['package'] = 2
                q['uid'] = f"p2-{q['id']:03d}"
                q['stem'] = 'Test fixture only: ' + q['stem']
            (base / 'data/p2.json').write_text(json.dumps(bank), encoding='utf-8')
            (base / 'references/archive/paket-1-prototipe.json').write_text('[]', encoding='utf-8')
            catalog = {'schemaVersion': 1, 'packages': [
                {'id': 1, 'title': 'P1', 'version': '1', 'file': 'p1.json', 'reviewFile': 'references/shared.md'},
                {'id': 2, 'title': 'P2 test only', 'version': '1', 'file': 'p2.json', 'reviewFile': 'references/shared.md'}]}
            build.ROOT = base
            path = base / 'data/packages.json'
            path.write_text(json.dumps(catalog), encoding='utf-8')
            with self.assertRaisesRegex(ValueError, 'reviewFile'):
                build.build()
            catalog['packages'] = catalog['packages'][:1]
            for unsafe in ['references/source.pdf', 'references/archive/original.md']:
                catalog['packages'][0]['reviewFile'] = unsafe
                path.write_text(json.dumps(catalog), encoding='utf-8')
                with self.assertRaisesRegex(ValueError, 'reviewFile'):
                    build.build()


if __name__ == '__main__':
    unittest.main()
