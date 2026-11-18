(function () {
  'use strict';
  const Core = window.ExamCore, bank = window.UKPPPG_BANK;
  const STORAGE = 'ukpppg-pplg-drill:v2', LEGACY = 'ukin2026-pplg-v1';
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clone = x => JSON.parse(JSON.stringify(x));
  const btn = (action, text, attrs = '', cls = '') => `<button type="button" class="btn ${cls}" data-action="${action}" ${attrs}>${text}</button>`;
  const typeName = type => ({ PG: 'Pilihan ganda', Kategori: 'PGK Kategori', MCMA: 'PGK MCMA' }[type]);
  const fresh = () => ({ schemaVersion: 2, revision: 0, attempts: [], legacyImported: false });
  let db = fresh(), lastRaw = null, storageBlocked = false, storageWarning = '', corruptRaw = null;
  let view = { mode: 'home', id: null, wrongOnly: false }, minutes = 150;
  const app = document.getElementById('app');
  function load() {
    try {
      lastRaw = localStorage.getItem(STORAGE);
      if (lastRaw !== null) {
        const parsed = JSON.parse(lastRaw);
        if (!Core.validDatabase(parsed)) throw new Error('struktur tidak dikenali');
        db = parsed;
      }
    } catch (e) {
      corruptRaw = lastRaw; storageBlocked = true;
      storageWarning = 'Penyimpanan tidak dapat dibaca atau strukturnya rusak. Data lama tidak ditimpa. Sesi baru hanya berada di memori; unduh cadangan sebelum menutup halaman.';
    }
  }
  load();
  const STUDY_STORAGE = 'ukpppg-pplg-study:v1';
  let study = { schemaVersion: 1, lastOpen: null, sessions: {} }, studyWarning = '', studyBlocked = false;
  try {
    const saved = JSON.parse(localStorage.getItem(STUDY_STORAGE) || 'null');
    if (saved) {
      if (saved.schemaVersion !== 1 || !saved.sessions || typeof saved.sessions !== 'object' || Array.isArray(saved.sessions)) throw new Error('Progres belajar tidak sah');
      study = saved;
    }
  } catch (e) { studyBlocked = true; studyWarning = 'Progres belajar tidak dapat dibaca. Belajar hanya di memori; data lama tidak ditimpa.'; }
  function studyPack() { return bank.packages.find(p => `${p.id}@${p.version}` === view.studyKey); }
  function studySession() {
    const pack = studyPack(), progress = study.sessions[view.studyKey];
    return pack && progress ? { ...progress, title: pack.title, questions: pack.questions, status: 'active', flagged: {} } : null;
  }
  function saveStudy() {
    if (!studyBlocked) {
      try { localStorage.setItem(STUDY_STORAGE, JSON.stringify(study)); }
      catch (e) { studyBlocked = true; studyWarning = 'Progres belajar BELUM tersimpan. Tetap di halaman ini; progres terbaru hanya di memori.'; }
    }
    showStorage();
  }
  function openStudy(packageId) {
    const pack = bank.packages.find(p => p.id === packageId);
    if (!pack) return;
    const key = `${pack.id}@${pack.version}`;
    let progress = study.sessions[key];
    if (!progress || !Number.isInteger(progress.idx) || progress.idx < 0 || progress.idx >= pack.questions.length ||
        !progress.answers || typeof progress.answers !== 'object' || !progress.shown || typeof progress.shown !== 'object') {
      progress = { idx: 0, answers: {}, shown: {} };
      study.sessions[key] = progress;
    }
    view = { mode: 'study', studyKey: key, wrongOnly: false };
    study.lastOpen = key; saveStudy(); render();
  }
  function current(data = db) { return data.attempts.find(a => a.id === view.id); }
  function showStorage() {
    const el = document.getElementById('storage-status');
    const warning = view.mode === 'study' ? studyWarning : storageWarning;
    el.className = warning ? 'hint storage-error' : 'muted small';
    el.textContent = warning || 'Progres tersimpan di browser ini. Data dapat hilang jika data browser dihapus; tidak tersinkron antarperangkat.';
  }
  // Web Locks serializes read/merge/write across tabs where supported, including modern Chrome file://.
  async function mutate(action, fullRender = true) {
    const work = () => {
      if (!storageBlocked) {
        try {
          const latest = localStorage.getItem(STORAGE);
          if (latest !== lastRaw) {
            const parsed = latest === null ? fresh() : JSON.parse(latest);
            if (!Core.validDatabase(parsed)) throw new Error('Data tab lain tidak sah');
            db = parsed; lastRaw = latest;
          }
        } catch (e) {
          storageBlocked = true;
          storageWarning = 'Data penyimpanan berubah atau tidak dapat dibaca. Progres berikutnya hanya di memori; unduh cadangan sebelum menutup halaman.';
        }
      }
      const draft = clone(db);
      action(draft);
      draft.revision++;
      db = draft;
      if (!storageBlocked) {
        try {
          const raw = JSON.stringify(db);
          localStorage.setItem(STORAGE, raw); lastRaw = raw; storageWarning = '';
        } catch (e) {
          storageBlocked = true;
          storageWarning = 'Progres terbaru BELUM tersimpan (penyimpanan ditolak atau penuh). Sesi tab ini selanjutnya hanya di memori agar jawaban tidak tertimpa tab lain. Tetap di halaman ini dan unduh cadangan sebelum menutup atau refresh.';
        }
      }
      if (fullRender) render(); else updateProgress();
      showStorage();
    };
    if (navigator.locks) await navigator.locks.request(STORAGE, work);
    else work();
  }
  async function initialize() {
    await mutate(data => {
      if (!data.legacyImported) {
        try {
          const old = JSON.parse(localStorage.getItem(LEGACY) || 'null');
          const archive = Core.importLegacy(old, bank.legacyQuestions, Date.now());
          if (archive && !data.attempts.some(a => a.id === archive.id)) data.attempts.push(archive);
        } catch (e) { /* Old key stays untouched, including malformed legacy values. */ }
        data.legacyImported = true;
      }
      data.attempts.forEach(a => Core.expire(a, Date.now()));
    });
    // Resume the last active full attempt after refresh; Beranda never ends its timer.
    const active = [...db.attempts].reverse().find(a => a.status === 'active');
    if (active) view = { mode: 'exam', id: active.id, wrongOnly: false };
    const lastStudy = bank.packages.find(p => `${p.id}@${p.version}` === study.lastOpen);
    if (lastStudy) { openStudy(lastStudy.id); return; }
    render();
  }
  function date(ms) { return new Date(ms).toLocaleString('id-ID'); }
  function home() {
    const options = bank.packages.map(p => `<option value="${p.id}">${esc(p.title)} • 80 soal • v${esc(p.version)}</option>`).join('');
    const active = db.attempts.filter(a => a.status === 'active');
    const history = [...db.attempts].reverse().filter(a => a.status !== 'active');
    return `<section class="hero"><span class="pill">LATIHAN ORISINAL • PPLG/RPL</span><h1>Simulasi Ujian Penuh</h1><p>Kerjakan satu paket utuh: <b>80 soal = 50 PCK + 30 Pedagogi Umum</b>. Jawaban dapat diubah dan ditandai ragu. Pada Simulasi Ujian, nilai, kunci, serta pembahasan terbuka setelah selesai. Pilih Mode Belajar untuk memeriksa dan membaca pembahasan per soal.</p><div class="chips"><span class="chip">PG</span><span class="chip">PGK Kategori</span><span class="chip">PGK MCMA</span><span class="chip">17 subkompetensi</span></div></section>
      <section class="panel"><h2>Mulai latihan</h2><div class="controls"><label for="package-select">Pilih paket</label><select id="package-select">${options}</select><label for="mode-select">Mode latihan</label><select id="mode-select"><option value="exam">Simulasi Ujian</option><option value="study">Mode Belajar (Pembahasan Langsung)</option></select><span id="duration-controls"><label for="duration">Durasi latihan (menit)</label><input id="duration" type="number" min="0" max="600" step="1" value="${minutes}" inputmode="numeric"><span class="small muted">0 = tanpa batas waktu</span></span>${btn('start', 'Mulai simulasi 80 soal', '', 'primary')}</div><p id="timer-hint" class="small muted">Default 150 menit adalah pengaturan latihan. Ikuti durasi pada kartu ujian/TUK untuk sesi sebenarnya. Timer berjalan saat pindah ke beranda, menutup tab, atau komputer tidur; waktu habis mengakhiri ujian.</p><p class="small muted">Komposisi bentuk soal dan distribusi per kode merupakan rancangan latihan internal, bukan bobot resmi. Skor: satu poin per butir jika seluruh respons tepat; bukan nilai atau batas lulus resmi.</p></section>
      ${active.length ? `<section class="panel spaced"><h2>Simulasi berjalan</h2>${active.map(a => `<div class="history-row"><div><b>${esc(a.title)}</b><div class="small muted">${count(a)}/80 lengkap • dimulai ${date(a.startedAt)} • v${esc(a.bankVersion)}</div></div>${btn('resume', 'Lanjutkan simulasi', `data-id="${esc(a.id)}"`, 'primary')}</div>`).join('')}</section>` : ''}
      <section class="panel spaced"><h2>Riwayat latihan</h2>${history.length ? history.map(a => { const r = Core.summarize(a); return `<div class="history-row"><div><b>${esc(a.title)}</b> • ${a.status === 'archived' ? 'arsip, bukan simulasi penuh' : `${r.correct}/80 benar (${Math.round(r.correct / 80 * 100)}%)`}<div class="small muted">${date(a.completedAt)} • v${esc(a.bankVersion)}${a.finishReason === 'timeout' ? ' • waktu habis' : ''}</div></div>${btn('result', a.status === 'archived' ? 'Buka arsip prototipe' : 'Lihat hasil', `data-id="${esc(a.id)}"`)}</div>`; }).join('') : '<p class="muted">Hasil muncul setelah simulasi pertama selesai.</p>'}</section>
      <p class="resource">Rujukan: <a href="references/Juknis%20UKPPPG%20Calon%20Guru%20Tahun%202026.pdf">Juknis resmi yang disediakan</a> hal. 7 dan 47. <a href="references/Panduan_Definitif_UTBK_UKPPPG_2026_NQ.pdf">Panduan pendamping</a> digunakan untuk pola kasus dan analisis pengecoh. Ini latihan, bukan soal resmi/bocoran.</p>`;
  }
  function count(a) { return a.questions.filter(q => Core.answered(q, a.answers[q.uid])).length; }
  function timerText(a) {
    const ms = Core.remaining(a, Date.now());
    if (ms === null) return 'Tanpa batas waktu';
    const sec = Math.ceil(ms / 1000);
    return `${Math.floor(sec / 3600).toString().padStart(2, '0')}:${Math.floor(sec % 3600 / 60).toString().padStart(2, '0')}:${(sec % 60).toString().padStart(2, '0')}`;
  }
  function choices(q, a, disabled) {
    const response = a.answers[q.uid];
    if (q.type === 'Kategori') return `<div class="statements">${q.options.map((text, i) => `<fieldset class="stmt"><legend>${i + 1}. ${esc(text)}</legend><div class="radioopts">${['T', 'F'].map(v => `<label><input id="cat-${i}-${v}" type="radio" name="statement-${i}" data-cat="${i}" value="${v}" ${response && response[i] === v ? 'checked' : ''} ${disabled ? 'disabled' : ''}> ${v === 'T' ? 'Tepat' : 'Tidak tepat'}</label>`).join('')}</div></fieldset>`).join('')}</div>`;
    return `<div class="choices">${q.options.map((text, i) => { const letter = 'ABCDE'[i]; return `<label class="choice"><input id="opt-${letter}" type="${q.type === 'PG' ? 'radio' : 'checkbox'}" name="answer" value="${letter}" ${q.type === 'PG' ? response === letter ? 'checked' : '' : Array.isArray(response) && response.includes(letter) ? 'checked' : ''} ${disabled ? 'disabled' : ''}><span class="letter">${letter}</span><span>${esc(text)}</span></label>`; }).join('')}</div>`;
  }
  function indices(a) { return view.wrongOnly && a.status !== 'active' ? Core.summarize(a).wrong : a.questions.map((_, i) => i); }
  function nav(a) {
    return indices(a).map(i => { const q = a.questions[i], answered = Core.answered(q, a.answers[q.uid]);
      const flag = a.flagged[q.uid], done = a.status !== 'active', ok = done && Core.correct(q, a.answers[q.uid]);
      const state = `${answered ? 'lengkap' : 'belum lengkap'}${flag ? ', ragu' : ''}${done ? ok ? ', benar' : ', perlu dipelajari' : ''}`;
      return `<button type="button" data-action="go" data-index="${i}" class="${a.idx === i ? 'current' : ''} ${answered ? 'answered' : ''} ${flag ? 'flagged' : ''} ${done ? ok ? 'good' : 'wrong' : ''}" aria-label="Soal ${i + 1}, ${state}" ${a.idx === i ? 'aria-current="true"' : ''}>${i + 1}</button>`;
    }).join('');
  }
  function answerText(q, response) {
    if (q.type === 'PG') return response || 'belum dijawab';
    if (q.type === 'MCMA') return Array.isArray(response) && response.length ? response.join(', ') : 'belum dijawab';
    return q.options.map((_, i) => response && response[i] === 'T' ? 'Tepat' : response && response[i] === 'F' ? 'Tidak tepat' : '—').join(' / ');
  }
  function reviewPanel(a, idx, studyResult = null) {
    const r = studyResult ? { question: a.questions[idx], answer: a.answers[a.questions[idx].uid], correct: studyResult === 'checked' ? Core.correct(a.questions[idx], a.answers[a.questions[idx].uid]) : null } : Core.review(a, idx);
    if (!r) return '';
    const q = r.question;
    return `<section class="review ${r.correct === false ? 'bad' : ''}"><h3>${studyResult ? r.correct === null ? 'Pembahasan' : r.correct ? 'Jawaban benar' : 'Jawaban salah' : r.correct ? 'Jawaban tepat' : 'Perlu dipelajari'}</h3><p>Jawabanmu: ${esc(answerText(q, r.answer))}</p><p><b>Kunci:</b> ${esc(answerText(q, q.key))}</p><p>${esc(q.why)}</p>${(q.explanations || []).map((reason, i) => `<p class="option-reason"><b>${q.type === 'Kategori' ? `Pernyataan ${i + 1}` : `Opsi ${'ABCDE'[i]}`}:</b> ${esc(reason)}</p>`).join('')}</section>`;
  }
  function studyView(a) {
    const q = a.questions[a.idx];
    return `<div class="examhead"><div><b>${esc(a.title)} • Mode Belajar</b><p class="small muted">Tanpa timer. Periksa jawaban atau langsung baca pembahasan. Progres ini terpisah dari simulasi.</p></div><span class="pill">Soal ${a.idx + 1} / ${a.questions.length}</span></div>
      <div class="layout spaced"><article class="panel question"><div class="qinfo"><span class="pill">${q.section} • ${q.code} • ${typeName(q.type)}</span></div><h2 id="question-title" class="qtitle" tabindex="-1">${esc(q.stem)}</h2><p class="small muted">${q.type === 'PG' ? 'Pilih satu jawaban paling tepat.' : q.type === 'MCMA' ? 'Pilih semua jawaban yang tepat, lalu tekan Periksa Jawaban.' : 'Jawab tiap pernyataan, lalu tekan Periksa Jawaban.'}</p>${choices(q, a, false)}<div class="controls">${btn('study-check', 'Periksa Jawaban', '', 'primary')}${btn('study-reveal', 'Lihat Pembahasan')}</div>${a.shown[q.uid] ? reviewPanel(a, a.idx, a.shown[q.uid]) : ''}<div class="bar">${btn('go', '← Sebelumnya', `data-index="${a.idx - 1}" ${a.idx === 0 ? 'disabled' : ''}`)}${btn('go', 'Berikutnya →', `data-index="${a.idx + 1}" ${a.idx === a.questions.length - 1 ? 'disabled' : ''}`, 'primary')}</div></article><aside class="panel sticky"><b>Navigasi nomor</b><nav class="numbers" aria-label="Navigasi soal">${nav(a)}</nav><p class="small muted">Hijau muda: jawaban lengkap. Pelajari nomor mana pun; tidak perlu menyelesaikan seluruh paket.</p>${btn('home', 'Kembali ke beranda')}</aside></div>`;
  }
  function exam(a) {
    const done = a.status !== 'active', q = a.questions[a.idx], list = indices(a), position = list.indexOf(a.idx);
    return `<div class="examhead"><div><b>${esc(a.title)}${done ? view.wrongOnly ? ' • Review jawaban salah' : ' • Review jawaban' : ' • Simulasi penuh'}</b><div id="answered-count" class="muted small">${count(a)}/${a.questions.length} soal lengkap</div></div><div><span class="pill">Soal ${a.idx + 1} / ${a.questions.length}</span> ${!done ? '<span id="timer" class="pill" role="timer" aria-label="Sisa waktu">' + timerText(a) + '</span>' : ''}</div></div><div class="progtrack" role="progressbar" aria-label="Jawaban lengkap" aria-valuenow="${count(a)}" aria-valuemin="0" aria-valuemax="${a.questions.length}"><div class="prog" style="width:${count(a) / a.questions.length * 100}%"></div></div>
      <div class="layout spaced"><article class="panel question"><div class="qinfo"><span class="pill">${q.section} • ${q.code} • ${typeName(q.type)}</span><span class="muted small">${esc(bank.codes[q.code])}</span></div><h2 id="question-title" class="qtitle" tabindex="-1">${esc(q.stem)}</h2><p class="muted small">${q.type === 'PG' ? 'Pilih satu jawaban paling tepat.' : q.type === 'MCMA' ? 'Pilih SEMUA jawaban yang tepat (lebih dari satu).' : 'Jawab Tepat atau Tidak tepat pada SETIAP pernyataan.'}</p>${choices(q, a, done)}${done ? reviewPanel(a, a.idx) : ''}<div class="bar"><div class="left">${!done ? btn('flag', a.flagged[q.uid] ? 'Hapus tanda ragu' : 'Tandai ragu', `aria-pressed="${!!a.flagged[q.uid]}" id="flag-button"`) : ''}</div><div class="right">${btn('go', '← Sebelumnya', `data-index="${list[position - 1]}" ${position <= 0 ? 'disabled' : ''}`)}${btn('go', 'Berikutnya →', `data-index="${list[position + 1]}" ${position >= list.length - 1 ? 'disabled' : ''}`, 'primary')}</div></div></article><aside class="panel sticky"><div class="navtitle"><b>Navigasi nomor</b><span class="small muted">${list.length} soal</span></div><nav class="numbers" aria-label="Navigasi soal">${nav(a)}</nav><p class="small muted">Hijau muda: lengkap; garis kuning: ragu; biru: nomor aktif.${done ? ' Hasil: benar atau perlu dipelajari.' : ' Nomor Kategori lengkap setelah semua pernyataan dijawab.'}</p>${btn(done ? 'result' : 'finish', done ? 'Kembali ke hasil' : 'Akhiri ujian', `data-id="${esc(a.id)}"`, done ? 'primary wide' : 'danger wide')}<p class="small muted">${done ? 'Riwayat ini memakai snapshot soal saat sesi dimulai.' : 'Pembahasan terbuka setelah selesai. Timer tetap berjalan saat meninggalkan halaman.'}</p></aside></div>`;
  }
  function table(group, title, name) {
    return `<h3>${title}</h3><table class="tb" data-group="${name}"><thead><tr><th scope="col">${title}</th><th scope="col">Benar / total</th></tr></thead><tbody>${Object.entries(group).map(([key, value]) => `<tr><th scope="row">${esc(name === 'codes' ? key + ' — ' + bank.codes[key] : name === 'types' ? typeName(key) : key)}</th><td>${value.correct} / ${value.total}</td></tr>`).join('')}</tbody></table>`;
  }
  function results(a) {
    const r = Core.summarize(a);
    if (!r) return exam(a);
    const archived = a.status === 'archived';
    return `<section class="hero"><span class="pill">HASIL LATIHAN • BUKAN NILAI UKPPPG</span><h1>Hasil ${esc(a.title)}</h1><p>${archived ? 'Arsip prototipe dipertahankan dengan soal dan urutan jawaban asli. Sesi awal dapat berupa latihan parsial dan pernah membuka kunci; arsip ini bukan hasil simulasi penuh.' : `Selesai ${date(a.completedAt)}${a.finishReason === 'timeout' ? ' karena waktu habis' : ''}.`} Versi soal: ${esc(a.bankVersion)}.</p></section><section class="panel"><div class="result-grid"><div class="stat"><div>Ketepatan latihan</div><div class="score">${Math.round(r.correct / r.total * 100)}%</div></div><div class="stat"><div>Benar</div><strong>${r.correct} / ${r.total}</strong></div><div class="stat"><div>Belum lengkap</div><strong>${r.unanswered}</strong></div></div><p class="small muted">Satu butir bernilai 1 jika seluruh respons tepat. Jawaban sebagian atau pilihan MCMA berlebih bernilai 0. Butir salah termasuk belum lengkap: ${r.wrong.length}. Bukan rumus nilai atau batas kelulusan resmi.</p>${table(r.sections, 'Per bagian', 'sections')}${table(r.types, 'Per bentuk soal', 'types')}${table(r.codes, 'Per subkompetensi utama', 'codes')}<div class="endsection">${btn('review', 'Tinjau semua jawaban')}${r.wrong.length ? btn('wrong', 'Review jawaban salah', '', 'teal') : ''}${!archived ? btn('retry', 'Ulang paket penuh', '', 'primary') : ''}${btn('home', 'Kembali ke beranda')}</div><p class="small muted">Review kesalahan menampilkan hasil sesi ini. Ulang paket selalu memulai 80 soal baru pada versi paket yang tersedia; riwayat lama tetap disimpan.</p></section>`;
  }
  function render() {
    if (view.mode === 'study') {
      const session = studySession();
      if (session) { app.innerHTML = studyView(session); showStorage(); return; }
      view.mode = 'home';
    }
    const a = current();
    if (view.mode !== 'home' && !a) view.mode = 'home';
    if (a && view.mode === 'result' && a.status === 'active') view.mode = 'exam';
    app.innerHTML = view.mode === 'home' ? home() : view.mode === 'result' || (a.status !== 'active' && view.mode === 'exam') ? results(a) : exam(a);
    showStorage();
  }
  function updateProgress() {
    const a = current();
    if (!a || a.status !== 'active' || view.mode !== 'exam') { render(); return; }
    const n = count(a);
    const counter = document.getElementById('answered-count');
    if (counter) counter.textContent = `${n}/${a.questions.length} soal lengkap`;
    const track = app.querySelector('.progtrack');
    if (track) { track.setAttribute('aria-valuenow', n); track.firstElementChild.style.width = `${n / a.questions.length * 100}%`; }
    const numbers = app.querySelector('.numbers');
    if (numbers) numbers.innerHTML = nav(a);
    const flag = document.getElementById('flag-button');
    if (flag) { const flagged = !!a.flagged[a.questions[a.idx].uid]; flag.textContent = flagged ? 'Hapus tanda ragu' : 'Tandai ragu'; flag.setAttribute('aria-pressed', flagged); }
  }
  async function startPackage(packageId, forceNew = false) {
    const pack = bank.packages.find(p => p.id === packageId);
    if (!pack) return;
    study.lastOpen = null; saveStudy();
    await mutate(data => {
      data.attempts.forEach(a => Core.expire(a, Date.now()));
      let a = forceNew ? null : [...data.attempts].reverse().find(a => a.packageId === packageId && a.status === 'active');
      if (!a) {
        a = Core.createAttempt(pack, minutes, Date.now(), crypto.randomUUID());
        data.attempts.push(a);
      }
      view = { mode: 'exam', id: a.id, wrongOnly: false };
    });
    document.getElementById('question-title')?.focus();
  }
  document.addEventListener('click', async event => {
    const target = event.target.closest('[data-action]');
    if (!target || target.disabled) return;
    const action = target.dataset.action;
    if (action === 'home') { study.lastOpen = null; saveStudy(); view.mode = 'home'; render(); return; }
    if (action === 'export') { exportData(); return; }
    if (action === 'start') {
      if (document.getElementById('mode-select').value === 'study') { openStudy(Number(document.getElementById('package-select').value)); return; }
      const input = document.getElementById('duration');
      if (!input.reportValidity() || input.value.trim() === '') return;
      minutes = Number(input.value);
      await startPackage(Number(document.getElementById('package-select').value)); return;
    }
    if (action === 'resume' || action === 'result') {
      study.lastOpen = null; saveStudy();
      if (target.dataset.id) view.id = target.dataset.id;
      view.mode = action === 'resume' ? 'exam' : 'result'; view.wrongOnly = false;
      await mutate(data => { const a = current(data); if (a) Core.expire(a, Date.now()); }); return;
    }
    if (view.mode === 'study') {
      const a = studySession(); if (!a) return;
      const progress = study.sessions[view.studyKey], q = a.questions[a.idx];
      if (action === 'go') {
        const i = Number(target.dataset.index);
        if (!Number.isInteger(i) || i < 0 || i >= a.questions.length) return;
        progress.idx = i;
      } else if (action === 'study-check') {
        if (!Core.answered(q, a.answers[q.uid])) { alert('Lengkapi jawaban terlebih dahulu, atau pilih Lihat Pembahasan.'); return; }
        progress.shown[q.uid] = 'checked';
      } else if (action === 'study-reveal') progress.shown[q.uid] = 'revealed';
      else return;
      saveStudy(); render();
      if (action === 'go') document.getElementById('question-title')?.focus();
      return;
    }
    const a = current();
    if (!a) return;
    if (action === 'retry') { await startPackage(a.packageId, true); return; }
    if (action === 'review' || action === 'wrong') {
      if (a.status === 'active') return;
      view.mode = 'review'; view.wrongOnly = action === 'wrong';
      await mutate(data => { const session = current(data); if (session) session.idx = view.wrongOnly ? Core.summarize(session).wrong[0] ?? 0 : 0; }); return;
    }
    if (action === 'go') {
      const i = Number(target.dataset.index);
      if (!Number.isInteger(i) || !indices(a).includes(i)) return;
      await mutate(data => { const session = current(data); if (session) { Core.expire(session, Date.now()); session.idx = i; } });
      document.getElementById('question-title')?.focus(); return;
    }
    if (action === 'flag') {
      const uid = a.questions[a.idx].uid;
      await mutate(data => { const session = current(data); if (session && !Core.expire(session, Date.now()) && session.status === 'active') session.flagged[uid] = !session.flagged[uid]; }, false); return;
    }
    if (action === 'finish') {
      if (a.status !== 'active') return;
      const incomplete = a.questions.length - count(a);
      if (!confirm(`Akhiri ujian? ${incomplete} soal belum lengkap. Setelah selesai jawaban tidak dapat diubah dan pembahasan akan terbuka.`)) return;
      await mutate(data => { const session = current(data); if (session) { if (!Core.expire(session, Date.now())) Core.finish(session, 'manual', Date.now()); } view.mode = 'result'; });
    }
  });
  app.addEventListener('change', async event => {
    const input = event.target;
    if (input.id === 'mode-select') {
      const learning = input.value === 'study';
      document.querySelector('[data-action="start"]').textContent = learning ? 'Mulai Mode Belajar' : 'Mulai simulasi 80 soal';
      document.getElementById('duration-controls').hidden = learning;
      document.getElementById('timer-hint').hidden = learning;
      return;
    }
    if (!input.matches('input[name="answer"], input[data-cat]')) return;
    if (view.mode === 'study') {
      const a = studySession(); if (!a) return;
      const q = a.questions[a.idx], progress = study.sessions[view.studyKey];
      let response;
      if (input.dataset.cat !== undefined) {
        response = Array.isArray(a.answers[q.uid]) ? [...a.answers[q.uid]] : Array(q.options.length).fill('');
        response[Number(input.dataset.cat)] = input.value;
      } else if (q.type === 'PG') response = input.value;
      else { response = Array.isArray(a.answers[q.uid]) ? a.answers[q.uid].filter(v => v !== input.value) : []; if (input.checked) response.push(input.value); response.sort(); }
      progress.answers[q.uid] = response;
      delete progress.shown[q.uid]; saveStudy();
      app.querySelector('.review')?.remove();
      app.querySelector('.numbers').innerHTML = nav(studySession());
      return;
    }
    const a = current();
    if (!a || a.status !== 'active') return;
    const uid = a.questions[a.idx].uid, value = input.value, checked = input.checked, cat = input.dataset.cat;
    await mutate(data => {
      const session = current(data); if (!session) return;
      const q = session.questions.find(q => q.uid === uid); if (!q) return;
      let response;
      if (cat !== undefined) {
        response = Array.isArray(session.answers[uid]) ? [...session.answers[uid]] : Array(q.options.length).fill('');
        response[Number(cat)] = value;
      } else if (q.type === 'PG') response = value;
      else { response = (session.answers[uid] || []).filter(v => v !== value); if (checked) response.push(value); response.sort(); }
      Core.setAnswer(session, uid, response, Date.now());
    }, false);
  });
  function exportData() {
    const backup = clone(db);
    backup.attempts.filter(a => a.status === 'active').forEach(a => a.questions.forEach(q => {
      delete q.key; delete q.why; delete q.explanations;
    }));
    const data = { exportedAt: new Date().toISOString(), activeAnswersOnly: true, database: backup, unreadableOriginal: corruptRaw };
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'ukpppg-cadangan.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  window.addEventListener('storage', event => {
    if (event.key === STORAGE && !storageBlocked && !storageWarning) {
      try { const latest = event.newValue === null ? fresh() : JSON.parse(event.newValue); if (!Core.validDatabase(latest)) return; db = latest; lastRaw = event.newValue; const focused = document.activeElement?.id; render(); if (focused) document.getElementById(focused)?.focus(); } catch (e) { /* Next write detects invalid data and preserves it. */ }
    }
  });
  setInterval(async () => {
    if (db.attempts.some(a => a.status === 'active' && a.deadline !== null && Date.now() >= a.deadline)) {
      await mutate(data => data.attempts.forEach(a => Core.expire(a, Date.now())));
    }
    const timer = document.getElementById('timer'), a = current();
    if (timer && a) timer.textContent = timerText(a);
  }, 1000);
  initialize();
})();
