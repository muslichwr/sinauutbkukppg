# Verifikasi faktual — 18 November 2026

Tambahan Mode Belajar: `node tests/study.cjs` lulus pada Chrome desktop file:// offline menggunakan dependensi QA yang sudah tersedia. Satu rangkaian memeriksa PG benar/salah, MCMA dan Kategori yang tidak dinilai saat klik opsi, tombol lihat tanpa menjawab, alasan dari bank, navigasi, refresh, akses ketiga paket, penguncian simulasi, dan kesamaan snapshot/riwayat simulasi sebelum-sesudah belajar. `node --check assets/app.js` lulus. Tidak mengulang tes mobile, lintas browser, stress/storage, atau seluruh suite UI lama untuk penambahan ini. Isi bank diperiksa dengan build `--check`, tanpa build yang menulis ulang data.

Lingkungan Windows, Python 3.11, Node 24, Chrome headless dan Playwright lokal. Aplikasi diuji melalui `file://`; alur utama dan pengisian penuh diuji dengan jaringan dimatikan. Tidak ada server atau publikasi.

| Perintah | Cakupan |
|---|---|
| `python scripts/build.py --check` | 80/paket, 50/30, 17 kode, tiga bentuk, key sah, UID, duplikasi teks/opsi, alasan per opsi, konsistensi bundle/Markdown, sidik versi |
| `python -m unittest discover -s tests -p "test_*.py"` | 4 tes, termasuk mutasi data invalid dan benturan jalur output antarpaket/arsip/PDF |
| `node --test tests/core.test.cjs` | 6 tes: penilaian parsial/berlebih, snapshot, deadline, hasil dan rekap, paket sintetis, arsip prototipe, storage tidak sah |
| `node tests/browser.cjs` | PG/MCMA/Kategori, ubah pilihan, ragu, refresh, navigasi, fokus keyboard, dua tab, konfirmasi batal/selesai, hasil 17 kode/2 bagian/3 bentuk, review salah, ulang dengan riwayat tetap, viewport 390 px |
| `node tests/browser-edge.cjs` | Deadline absolut/jam virtual, refresh/beranda/timeout, arsip idempoten, storage ditolak/rusak/penuh + tab lain, cadangan aktif tanpa kunci, 80 respons melalui kontrol nyata menghasilkan 100%, snapshot tetap saat bank diubah, hasil mobile |

Pengisian penuh mengikuti kunci sumber untuk menguji alur/penilaian; **bukan bukti bahwa seluruh kunci secara akademis pasti benar**. Telaah konten dicatat dalam audit.

## Temuan yang diperbaiki

- Ekspor aktif semula membuka kunci. Kini `key`, `why`, dan `explanations` dihilangkan dari setiap snapshot aktif saat ekspor. Tes reproduksi gagal sebelum perbaikan.
- Gagal menyimpan lalu tab lain menulis semula dapat membuang draf lokal. Kini kegagalan membuat tab menetap di mode memori dengan peringatan dan ekspor, tanpa mengganti draf dari storage tab lain. Tes reproduksi gagal sebelum perbaikan.
- Ulang hasil lama semula melanjutkan sesi aktif. Kini membuat percobaan penuh baru dan mempertahankan sesi sebelumnya; diuji dengan tiga percobaan.
- MCMA tersimpan sebagai string dan pembahasan sebagai objek semula lolos pembacaan. Struktur sesi kini divalidasi, termasuk respons Kategori parsial yang sah; storage tidak sah tidak ditimpa.
- Jalur Markdown yang sama pada dua paket semula saling menimpa. Build kini menolak benturan, ekstensi non-Markdown, dan penulisan ke arsip.
- Skrip pengisian penuh semula mengeklik input sebelum navigasi asinkron selesai. Tes kini menunggu nomor aktif yang benar, tanpa jeda waktu sembarang.

## Batas pengujian

- Chrome headless di Windows; Edge, Firefox, Safari, pembaca layar, dan ponsel fisik belum diuji. Mobile memakai viewport 390 × 844, screenshot, dan cek tidak ada overflow horizontal.
- Durasi 150 menit tidak ditunggu nyata; deadline diuji melalui jam virtual dan tes mesin. Perubahan manual jam sistem dapat memengaruhi timer.
- Storage penuh disimulasikan melalui `QuotaExceededError`, bukan memenuhi disk/profil pengguna. Cadangan belum punya impor otomatis.
- Multi-paket memakai fixture sintetis terisolasi; bank aktual hanya Paket 1. Belum ada pengujian mutu bank Paket 2 yang belum ditulis.
- Kunci bank lokal dapat diperiksa lewat sumber/devtools; penguncian hanya pada alur aplikasi. Tidak ada klaim keamanan ujian resmi.
- Tidak ada klaim validasi psikometrik, kesetaraan kesulitan ujian resmi, atau jaminan kelulusan.
