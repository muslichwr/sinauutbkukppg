(function (root) {
  'use strict';
  const clone = value => JSON.parse(JSON.stringify(value));
  function answered(q, answer) {
    const letters = 'ABCDE'.slice(0, q.options.length);
    if (q.type === 'PG') return typeof answer === 'string' && answer.length === 1 && letters.includes(answer);
    if (!Array.isArray(answer)) return false;
    if (q.type === 'Kategori') return answer.length === q.options.length && answer.every(v => v === 'T' || v === 'F');
    return answer.length > 0 && new Set(answer).size === answer.length && answer.every(v => typeof v === 'string' && v.length === 1 && letters.includes(v));
  }
  function correct(q, answer) {
    if (!answered(q, answer)) return false;
    if (q.type === 'PG') return answer === q.key;
    if (q.type === 'Kategori') return answer.every((v, i) => v === q.key[i]);
    return answer.length === q.key.length && answer.every(v => q.key.includes(v));
  }
  function createAttempt(pack, minutes, now, id) {
    if (pack.questions.length !== 80 || !Number.isInteger(minutes) || minutes < 0 || minutes > 600) throw new Error('Paket/durasi tidak sah');
    return { id, packageId: pack.id, title: pack.title, bankVersion: pack.version,
      questions: clone(pack.questions), answers: {}, flagged: {}, idx: 0,
      status: 'active', startedAt: now, deadline: minutes ? now + minutes * 60000 : null,
      completedAt: null, finishReason: null };
  }
  function remaining(a, now) { return a.deadline === null ? null : Math.max(0, a.deadline - now); }
  function finish(a, reason, now) {
    if (a.status !== 'active') return false;
    a.status = 'completed'; a.completedAt = now; a.finishReason = reason;
    return true;
  }
  function expire(a, now) {
    return a.status === 'active' && a.deadline !== null && now >= a.deadline ? finish(a, 'timeout', a.deadline) : false;
  }
  function setAnswer(a, uid, answer, now) {
    if (expire(a, now) || a.status !== 'active') return false;
    const q = a.questions.find(q => q.uid === uid);
    if (!q) return false;
    a.answers[uid] = clone(answer);
    return true;
  }
  function review(a, idx) {
    if (a.status === 'active' || !a.questions[idx]) return null;
    const q = a.questions[idx];
    return { question: q, answer: a.answers[q.uid], correct: correct(q, a.answers[q.uid]) };
  }
  function summarize(a) {
    if (a.status === 'active') return null;
    const r = { total: a.questions.length, correct: 0, unanswered: 0, sections: {}, types: {}, codes: {}, wrong: [] };
    a.questions.forEach((q, idx) => {
      const ok = correct(q, a.answers[q.uid]);
      r.correct += Number(ok); r.unanswered += Number(!answered(q, a.answers[q.uid]));
      if (!ok) r.wrong.push(idx);
      for (const [group, key] of [[r.sections, q.section], [r.types, q.type], [r.codes, q.code]]) {
        group[key] ||= { total: 0, correct: 0 };
        group[key].total++; group[key].correct += Number(ok);
      }
    });
    return r;
  }
  function importLegacy(old, questions, now) {
    if (!old || !Array.isArray(old.pool) || !old.pool.length || new Set(old.pool).size !== old.pool.length || !old.pool.every(id => Number.isInteger(id) && questions.some(q => q.id === id))) return null;
    const qs = old.pool.map(id => ({ ...clone(questions.find(q => q.id === id)), uid: `legacy-${id}` }));
    const answers = {}, flagged = {};
    qs.forEach(q => {
      if (old.answers && old.answers[q.id] !== undefined) answers[q.uid] = clone(old.answers[q.id]);
      if (old.flagged && old.flagged[q.id]) flagged[q.uid] = true;
    });
    return { id: 'legacy-v1', packageId: 1, title: 'Arsip prototipe', bankVersion: 'prototipe-v0',
      questions: qs, answers, flagged, idx: Math.min(Math.max(Number(old.idx) || 0, 0), qs.length - 1),
      status: 'archived', startedAt: now, deadline: null, completedAt: now,
      finishReason: old.done ? 'legacy-completed' : 'legacy-unfinished' };
  }
  function validDatabase(db) {
    if (!db || db.schemaVersion !== 2 || !Number.isInteger(db.revision) || !Array.isArray(db.attempts) || typeof db.legacyImported !== 'boolean') return false;
    const ids = new Set();
    return db.attempts.every(a => {
      if (!a || typeof a.id !== 'string' || ids.has(a.id)) return false;
      ids.add(a.id);
      return ['active', 'completed', 'archived'].includes(a.status) && typeof a.title === 'string' && typeof a.bankVersion === 'string' &&
        Number.isFinite(a.startedAt) && (a.deadline === null || Number.isFinite(a.deadline)) &&
        a.answers && typeof a.answers === 'object' && !Array.isArray(a.answers) && a.flagged && typeof a.flagged === 'object' && !Array.isArray(a.flagged) &&
        Number.isInteger(a.idx) && Array.isArray(a.questions) && a.questions.length > 0 && a.idx >= 0 && a.idx < a.questions.length &&
        (a.status === 'archived' || a.questions.length === 80) &&
        new Set(a.questions.map(q => q && q.uid)).size === a.questions.length &&
        a.questions.every(q => q && typeof q.uid === 'string' && typeof q.stem === 'string' &&
          typeof q.why === 'string' && ['PG', 'MCMA', 'Kategori'].includes(q.type) &&
          Array.isArray(q.options) && q.options.length >= 2 && q.options.length <= 5 && q.options.every(v => typeof v === 'string') && answered(q, q.key) &&
          (a.status === 'archived' && q.explanations === undefined || Array.isArray(q.explanations) && q.explanations.length === q.options.length && q.explanations.every(e => typeof e === 'string'))) &&
        Object.entries(a.answers).every(([uid, value]) => {
          const q = a.questions.find(q => q.uid === uid);
          if (!q) return false;
          if (q.type === 'PG') return answered(q, value);
          if (!Array.isArray(value)) return false;
          if (q.type === 'MCMA') return value.length === 0 || answered(q, value);
          return value.length === q.options.length && value.every(v => v === '' || v === 'T' || v === 'F');
        });
    });
  }
  const api = { answered, correct, createAttempt, remaining, finish, expire, setAnswer, review, summarize, importLegacy, validDatabase };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ExamCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
