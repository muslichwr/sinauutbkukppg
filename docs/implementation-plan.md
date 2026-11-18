# Rencana implementasi Paket 1

**Goal:** audit 80 soal awal dan sediakan simulasi penuh offline dengan riwayat multi-paket.
**Architecture:** JSON sebagai sumber; Python stdlib memvalidasi dan membangun bundle JavaScript serta Markdown. HTML/CSS yang ada dipertahankan, mesin sesi JavaScript terpisah. Setiap percobaan menyimpan snapshot versi soal.
**Tech Stack:** HTML, CSS, JavaScript biasa; Python dan Node hanya untuk pemeliharaan/QA.
**Spec:** AGENTS.md dan PROMPT_UNTUK_AGENT.md; pengguna meminta eksekusi mandiri tanpa pertanyaan teknis kecil.

## Batasan

- Tepat 80 soal/paket, 50 PCK + 30 PU, 17 kode, tiga bentuk. Hanya Paket 1.
- Offline file://, tanpa fetch, backend, framework, atau publikasi.
- Pembahasan hanya setelah selesai; skor latihan seluruh respons harus tepat.
- ID/versi stabil; percobaan lama menyimpan snapshot; storage prototipe tidak dihapus.
- Timer pilihan pengguna (default 150 menit), bukan klaim aturan sesi resmi.

## Review focus

- Refresh/meninggalkan tab tetap menghitung waktu dari deadline absolut.
- Storage ditolak/penuh/rusak menghasilkan pesan yang jelas dan tidak diam-diam menghapus data.
- Pembukaan dua tab tidak boleh saling menimpa jawaban.
- Paket berikutnya tidak mengubah versi/snapshot percobaan lama.
- Respons Kategori parsial dan MCMA berlebih dihitung belum lengkap/salah dengan tepat.

## Task 1 — rujukan dan bank

- [x] Baca sumber, bandingkan JSON/HTML/Markdown awal, simpan snapshot asli.
- [x] Audit manual semua soal, catat alasan revisi dan pola berulang.
- [x] Tulis tes gagal validasi/multi-paket/build; implementasikan validator dan build deterministik.
- [x] Tambahkan ID paket/UID, pembahasan per opsi, perbaikan terarah; bangun ulang dan uji konsistensi.

## Task 2 — simulasi dan persistensi

- [x] Tulis tes gagal untuk penilaian, deadline, snapshot, riwayat, impor prototipe.
- [x] Implementasikan mesin sesi dan tampilan beranda/ujian/hasil/review; pertahankan CSS dasar.
- [x] Pastikan jawaban bisa diubah, fokus keyboard tidak hilang, dan guard pembahasan berlaku.
- [x] Jalankan tes mesin serta browser file:// untuk ketiga bentuk, refresh, timer, hasil, ulang, mobile, keyboard, storage gagal, dua tab.

## Task 3 — dokumentasi dan peninjauan akhir

- [x] Perbarui README, catatan audit, dan panduan menambah paket.
- [x] Jalankan seluruh verifikasi; lakukan review akhir terpisah; catat batas tes faktual.

## Catatan eksekusi

- Folder ini bukan repositori Git; pengerjaan dilakukan langsung pada folder yang diminta, tanpa commit/worktree.
- Pilihan implementasi diputuskan mandiri sesuai instruksi pengguna; tidak ada publikasi.
- Baseline: belum ada suite tes. JSON sama persis dengan bank tersemat HTML; 80 butir, 50/30, 40 PG/20 Kategori/20 MCMA, seluruh 17 kode.

## Hasil akhir

- Versi Paket 1 2026-11-18.4, tidak ada Paket 2 aktual.
- Build check, 4 tes Python, 6 tes Node, dan dua suite Chrome file:// lulus.
- Review independen oleh subagent menemukan celah ekspor aktif, draf quota/tab lain, ulang yang melanjutkan sesi, struktur storage rusak, dan benturan output build; semuanya diperbaiki dengan tes reproduksi.
- Petunjuk panjang opsi disunting: heuristik terpanjang 10/40 dan terpendek 9/40 pada versi akhir.
- Dokumentasi audit 80 butir, batas QA, cara pakai dan tambah paket tersedia.
- Tidak ada commit/branch karena folder bukan repositori Git; tidak ada publikasi.
