const { chromium } = require('../.tools/node_modules/playwright');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const KEY='ukpppg-pplg-drill:v2', OLD='ukin2026-pplg-v1';
const url=pathToFileURL(path.resolve('index.html')).href;

(async()=>{
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try {
    // Deadline survives closed tab / reload; use browser virtual clock, never wait a real minute.
    const context=await browser.newContext(); await context.setOffline(true);
    let page=await context.newPage();
    await page.clock.install({time:new Date('2026-11-18T01:00:00Z')});
    await page.goto(url);
    await page.getByLabel('Durasi latihan (menit)').fill('1');
    await page.getByRole('button',{name:'Mulai simulasi 80 soal'}).click();
    await page.locator('#question-title').waitFor();
    await page.locator('#opt-B').check();
    await page.clock.fastForward(30000);
    const firstDeadline=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).attempts[0].deadline,KEY);
    await page.reload(); await page.locator('#timer').waitFor();
    assert.equal(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).attempts[0].deadline,KEY),firstDeadline);
    assert.match(await page.locator('#timer').innerText(),/00:00:30/);
    await page.getByRole('button',{name:'Beranda',exact:true}).click();
    await page.clock.fastForward(31000);
    await page.getByRole('button',{name:'Lihat hasil',exact:true}).waitFor();
    await page.getByRole('button',{name:'Lihat hasil',exact:true}).click();
    await page.getByRole('heading',{name:'Hasil Paket 1'}).waitFor();
    assert.match(await page.locator('main').innerText(),/karena waktu habis/);
    await page.reload();
    await page.getByRole('button',{name:'Lihat hasil',exact:true}).click();
    const expired=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).attempts[0],KEY);
    assert.equal(expired.status,'completed'); assert.equal(expired.finishReason,'timeout');
    assert.equal(expired.completedAt,firstDeadline);
    await context.close();
    console.log('PASS: timer absolut, refresh, beranda, timeout, hasil beku');

    // Legacy storage untouched; original categories and partial scope preserved.
    const legacyContext=await browser.newContext(); page=await legacyContext.newPage();
    const legacy={pool:[1,4],answers:{1:'B',4:['T','F','T']},flagged:{4:true},idx:0,done:false,mode:'quiz'};
    await page.addInitScript(({key,value})=>{if(!localStorage.getItem(key))localStorage.setItem(key,value)}, {key:OLD,value:JSON.stringify(legacy)});
    await page.goto(url); await page.getByRole('button',{name:'Buka arsip prototipe'}).click();
    await page.getByRole('heading',{name:'Hasil Arsip prototipe'}).waitFor();
    assert.equal(await page.evaluate(k=>localStorage.getItem(k),OLD),JSON.stringify(legacy));
    await page.reload();
    assert.equal(await page.getByRole('button',{name:'Buka arsip prototipe'}).count(),1);
    assert.equal(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).attempts.length,KEY),1);
    await legacyContext.close();
    console.log('PASS: impor arsip prototipe idempoten, kunci lama dan storage asli tetap');

    // Storage denial: keep the current response visible and export a backup.
    const deniedContext=await browser.newContext(); page=await deniedContext.newPage();
    await page.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException('denied','QuotaExceededError')}});
    await page.goto(url); await page.getByLabel('Durasi latihan (menit)').fill('0');
    await page.getByRole('button',{name:'Mulai simulasi 80 soal'}).click();
    await page.locator('#opt-B').check();
    assert.match(await page.locator('#storage-status').innerText(),/BELUM tersimpan/);
    const download=page.waitForEvent('download'); await page.getByRole('button',{name:'Unduh cadangan'}).click();
    const file=await download; const downloaded=JSON.parse(fs.readFileSync(await file.path(),'utf8'));
    assert.equal(downloaded.database.attempts[0].answers['p1-001'],'B');
    assert.equal(downloaded.database.attempts[0].questions[0].key,undefined,'active backup must not reveal keys');
    assert.equal(downloaded.database.attempts[0].questions[0].why,undefined);
    assert.equal(downloaded.database.attempts[0].questions[0].explanations,undefined);
    await deniedContext.close();
    console.log('PASS: storage ditolak, peringatan terlihat, jawaban dapat diunduh');

    // Corrupt new data must never be overwritten by initialization or a new session.
    const corruptContext=await browser.newContext(); page=await corruptContext.newPage();
    await page.addInitScript(k=>{if(!localStorage.getItem(k))localStorage.setItem(k,'{BROKEN')},KEY);
    await page.goto(url); assert.match(await page.locator('#storage-status').innerText(),/rusak/);
    await page.getByRole('button',{name:'Mulai simulasi 80 soal'}).click();
    await page.locator('#question-title').waitFor();
    assert.equal(await page.evaluate(k=>localStorage.getItem(k),KEY),'{BROKEN');
    await corruptContext.close();
    console.log('PASS: storage rusak dipertahankan tanpa ditimpa');

    const concurrentContext=await browser.newContext();
    const aPage=await concurrentContext.newPage(); await aPage.goto(url);
    await aPage.getByLabel('Durasi latihan (menit)').fill('0');
    await aPage.getByRole('button',{name:'Mulai simulasi 80 soal'}).click();
    await aPage.locator('#question-title').waitFor();
    const bPage=await concurrentContext.newPage(); await bPage.goto(url);
    await bPage.locator('#question-title').waitFor();
    await aPage.evaluate(()=>{window.originalSet=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw new DOMException('full','QuotaExceededError')}});
    await aPage.locator('#opt-B').check();
    await aPage.waitForFunction(()=>document.querySelector('#storage-status').textContent.includes('BELUM tersimpan'));
    await bPage.getByRole('button',{name:'Soal 3,',exact:false}).click();
    await bPage.waitForFunction(()=>document.querySelector('.numbers [aria-current="true"]').textContent==='3');
    await bPage.locator('#opt-C').check();
    await aPage.evaluate(()=>{Storage.prototype.setItem=window.originalSet});
    await aPage.getByRole('button',{name:'Tandai ragu',exact:true}).click();
    assert.equal(await aPage.locator('#opt-B').isChecked(),true);
    assert.match(await aPage.locator('#storage-status').innerText(),/BELUM tersimpan/);
    const concurrentDownload=aPage.waitForEvent('download');
    await aPage.getByRole('button',{name:'Unduh cadangan'}).click();
    const concurrentFile=await concurrentDownload;
    const volatile=JSON.parse(fs.readFileSync(await concurrentFile.path(),'utf8'));
    assert.equal(volatile.database.attempts[0].answers['p1-001'],'B');
    const otherSaved=await bPage.evaluate(k=>JSON.parse(localStorage.getItem(k)),KEY);
    assert.equal(otherSaved.attempts[0].answers['p1-003'],'C');
    await concurrentContext.close();
    console.log('PASS: storage penuh + perubahan tab lain tidak membuang jawaban lokal yang belum tersimpan');

    // User-facing flow for 80 correct answers: answer through actual controls.
    const perfectContext=await browser.newContext(); page=await perfectContext.newPage();
    await perfectContext.setOffline(true); await page.goto(url);
    await page.getByLabel('Durasi latihan (menit)').fill('0');
    await page.getByRole('button',{name:'Mulai simulasi 80 soal'}).click();
    await page.locator('#question-title').waitFor();
    const questions=JSON.parse(fs.readFileSync('data/bank_soal_80.json','utf8'));
    for(let i=0;i<80;i++) {
      if(i) await page.getByRole('button',{name:`Soal ${i+1},`,exact:false}).click();
      await page.waitForFunction(n=>document.querySelector('.numbers [aria-current="true"]')?.textContent===String(n),i+1);
      const q=questions[i];
      if(q.type==='PG') await page.locator('#opt-'+q.key).check();
      else if(q.type==='MCMA') for(const k of q.key) await page.locator('#opt-'+k).check();
      else for(let n=0;n<q.key.length;n++) await page.locator(`#cat-${n}-${q.key[n]}`).check();
      assert.equal(await page.locator('.review').count(),0);
    }
    console.log('Full-run stored incomplete:', await page.evaluate(k=>{const a=JSON.parse(localStorage.getItem(k)).attempts[0];return a.questions.filter(q=>!window.ExamCore.answered(q,a.answers[q.uid])).map(q=>({id:q.id,type:q.type,answer:a.answers[q.uid]}));},KEY));
    assert.match(await page.locator('#answered-count').innerText(),/80\/80/);
    page.once('dialog',d=>d.accept()); await page.getByRole('button',{name:'Akhiri ujian',exact:true}).click();
    await page.getByRole('heading',{name:'Hasil Paket 1'}).waitFor();
    assert.equal(await page.locator('.score').innerText(),'100%');
    assert.equal(await page.getByRole('button',{name:'Review jawaban salah'}).count(),0);
    await page.setViewportSize({width:390,height:844});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
    await page.screenshot({path:'test-results/mobile-results.png',fullPage:true});
    // Snapshot still shows original after a newer runtime bank revision is injected.
    await page.evaluate(()=>{window.UKPPPG_BANK.packages[0].questions[0].stem='A changed future draft';window.UKPPPG_BANK.packages[0].version='test-next';});
    await page.getByRole('button',{name:'Tinjau semua jawaban'}).click();
    await page.locator('.review').waitFor();
    assert.match(await page.locator('#question-title').innerText(),/Nisa/);
    await perfectContext.close();
    console.log('PASS: 80 respons nyata, tanpa pembahasan sebelum selesai, skor 100%, snapshot lama, hasil mobile');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exit(1)});
