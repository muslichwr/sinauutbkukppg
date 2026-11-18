# Drill UTBK UKPPPG 2026 — PPLG/RPL

Latihan orisinal, bukan soal resmi/bocoran. Satu simulasi selalu **80 soal: 50 PCK + 30 PU**, meliputi PG, PGK Kategori, MCMA, dan 17 subkompetensi. Tersedia **Paket 1** versi `2026-11-18.6` (dibekukan), **Paket 2** dan **Paket 3** masing-masing versi `2026-11-18.1`. Lihat [laporan Paket 2](docs/PAKET_2_SIAP.md) dan [laporan Paket 3](docs/PAKET_3_SIAP.md).

## Cara memakai

1. Buka **`index.html` langsung di Chrome/Edge**; pertahankan folder `assets/` dan `data/` di sampingnya. Tidak perlu internet, server, instalasi, atau build untuk belajar.
2. Pilih paket dan durasi. Default 150 menit; **0 = tanpa batas waktu**. Ini timer latihan; ikuti kartu ujian/TUK untuk sesi sebenarnya.
3. Jawab satu pilihan PG, semua pilihan tepat pada MCMA, dan setiap pernyataan Kategori. Gunakan nomor navigasi, Sebelumnya/Berikutnya, serta Tandai ragu. Jawaban boleh diubah sebelum selesai.
4. Refresh membuka sesi aktif terakhir. Beranda dan penutupan tab tidak menghentikan timer; jika deadline terlewati saat halaman tertutup, sesi diakhiri ketika dibuka lagi.
5. Klik **Akhiri ujian**, konfirmasi, lalu lihat nilai dan rekap bagian, bentuk, serta kode. Kunci dan alasan tiap opsi muncul dalam review setelah selesai. Review salah mencakup butir belum lengkap.
6. **Ulang paket penuh** selalu membuat percobaan 80 soal baru. Semua percobaan sebelumnya, termasuk yang masih berjalan, tetap tersedia. Mulai dari beranda melanjutkan sesi aktif terbaru untuk paket terpilih bila ada.

Skor latihan: satu poin jika seluruh respons pada butir tepat, selain itu nol. Bukan rumus nilai atau batas kelulusan resmi. Distribusi **40 PG, 20 Kategori, 20 MCMA** dan jumlah per kode adalah keputusan internal latihan.

## Data lokal dan riwayat

- Key stabil: `ukpppg-pplg-drill:v2`. Setiap percobaan menyimpan versi dan snapshot soal; pembaruan bank tidak mengganti soal/kunci riwayat. Tidak ada penghapusan otomatis.
- Progres prototipe dari key `ukin2026-pplg-v1` disalin sebagai **arsip prototipe** dengan urutan, soal, serta jawaban asli. Arsip mungkin parsial/pernah membuka kunci; tidak dianggap simulasi penuh. Key asli tetap utuh.
- Data melekat pada browser, profil, dan lokasi berkas. Penghapusan data, mode privat, perpindahan perangkat/folder, atau kuota penuh dapat menghilangkan akses riwayat. Tidak ada sinkronisasi akun.
- Chrome/Edge modern memakai Web Locks untuk penulisan antartab. Pada browser tanpa Web Locks gunakan **satu tab**; fallback belum menjamin penulisan serentak.
- Pesan **BELUM tersimpan** berarti progres terbaru hanya di memori. Tab tersebut mempertahankan drafnya agar tidak tertimpa tab lain. Tetap di halaman dan **Unduh cadangan** sebelum menutup/refresh; penambahan kuota tidak otomatis menyimpan kembali draf itu.
- Storage rusak tidak ditimpa; sesi baru berjalan di memori dengan peringatan. Cadangan menyertakan data asli yang rusak untuk pemulihan manual.
- Cadangan JSON untuk arsip/pemulihan manual; **belum ada tombol impor otomatis**. Ekspor sesi aktif memuat soal dan jawaban tanpa kunci/pembahasan, dengan paket/versi/UID untuk pencocokan. Sesi selesai diekspor lengkap.
- Kunci terkunci dalam alur antarmuka dan ekspor aktif. Sumber bank offline tetap dapat diperiksa melalui kode/devtools; ini bukan sistem ujian dengan perlindungan antikecurangan.

## Audit dan QA

Lihat [audit Paket 1](docs/AUDIT_PAKET_1.md) dan [laporan QA](docs/QA.md). Juknis lokal hal. 7 dan 47 menjadi sumber format/cakupan. Panduan pendamping hal. 8–19 dan 22–23 hanya inspirasi mutu kasus dan analisis pengecoh. Esai tidak dicampur ke dalam 80 soal.

Semua butir ditelaah manual oleh agent dan strukturnya diuji otomatis. Belum ada validasi psikometrik atau penelaahan independen pakar UKPPPG/PPLG. Paket awal relatif mudah; skor bukan prediksi kelulusan.

## Pemeliharaan (untuk agent)

JSON adalah sumber kebenaran; aplikasi memakai bundle lokal, tanpa `fetch()`.

- `data/packages.json`: katalog dan versi paket.
- `data/bank_soal_80.json`: Paket 1; ID lama 1–80 tetap, UID global `p1-001` sampai `p1-080`.
- `data/codes.json`: deskripsi 17 kode dari Juknis hal. 47.
- `scripts/build.py`: validator/build Python stdlib.
- `data/bank.bundle.js` dan Markdown di `references/`: hasil build; jangan edit langsung.
- `data/versions.json`: sidik isi versi; naikkan versi untuk mengubah isi yang sudah terdaftar.
- `references/archive/`: JSON, HTML, dan Markdown prototipe asli; jangan ubah. Buka `index.html` utama untuk belajar, bukan HTML arsip.

```powershell
python scripts/build.py
python scripts/build.py --check
python -m unittest discover -s tests -p "test_*.py"
node --test tests/core.test.cjs
```

QA browser saja memerlukan Node, Chrome terpasang, serta Playwright lokal. Aplikasi tidak memakai dependensi ini:

```powershell
npm install --prefix .tools playwright
node tests/browser.cjs
node tests/browser-edge.cjs
```

Tes memakai profil browser terisolasi dan tidak menyentuh progres profil belajar. Screenshot ada di `test-results/`.

## Menambah paket berikutnya

Paket 3 sudah tersedia. Kirim `PROMPT_TAMBAH_PAKET.md` hanya jika kelak membutuhkan paket berikutnya. Gunakan nomor serta jalur baru; jangan menimpa paket yang tersedia. Untuk Paket 4, sesuaikan contoh pola di bawah menjadi nomor 4:

1. Membaca paket lama dan rujukan, menulis `data/paket_3.json`: 80 butir baru, 50/30, tiga bentuk, 17 kode. Tiap butir memuat `package: 3`, `id: 1..80`, UID `p3-001` dst., `code`, `section`, `type`, `difficulty`, `cp_element`, `stem`, `options`, `key`, `why`, dan `explanations` satu alasan per opsi.
2. Menambahkan entri katalog ID 3 dengan judul, versi, file tersebut, dan `reviewFile: references/Paket_3_dan_Pembahasan.md`. Jalur review wajib unik, `.md`, dan di luar arsip. Jangan menimpa Paket 1 atau Paket 2.
3. Mengaudit kunci, indikator utama, pengecoh, pembahasan, dan kemiripan makna dengan seluruh paket lama. Validator mendeteksi duplikasi teks yang dinormalisasi; kemiripan substansi perlu telaah manual.
4. Menjalankan build, tes, dan alur paket baru di browser. Mesin ujian membaca katalog sehingga tidak perlu diubah. Simpan JSON, katalog, registry versi, bundle, dan Markdown bersama.

Paket 1 versi 2026-11-18.6 dibekukan setelah tindak lanjut audit akademik. Jangan menyuntingnya lagi kecuali ada masalah substansial yang teridentifikasi; setiap koreksi harus memakai versi baru dan menjaga snapshot riwayat. Lihat docs/FINALISASI_PAKET_1.md.
