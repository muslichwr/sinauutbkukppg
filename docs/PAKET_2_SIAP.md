# Paket 2 — laporan penyusunan dan validasi

Versi **2026-11-18.1**, tanggal 18 November 2026. Paket utuh siap dikerjakan: **80 butir baru, 50 PCK dan 30 PU**. Berkas sumber `data/paket_2.json`; hasil bacaan `references/Paket_2_dan_Pembahasan.md`. Pilih Paket 2 dari beranda aplikasi offline yang sudah ada.

## Dasar dan batas sumber

- Juknis lokal hal. 7 dan Lampiran 4 hal. 47 diperiksa untuk bentuk, komposisi, dan subkompetensi. Tidak ditambahkan aturan jumlah opsi atau bobot per elemen dari contoh latihan.
- CP **Keputusan BSKAP 046/H/KR/2025, Lampiran III, bagian Capaian Pembelajaran Rekayasa Perangkat Lunak**, diunduh dan bagian rasional, tujuan, karakteristik, serta capaian Fase F dibaca dari [PDF resmi Kemendikdasmen](https://kurikulum.kemendikdasmen.go.id/file/1753929861_manage_file.pdf). Empat elemen dipakai untuk variasi pengelolaan data, pemrograman/GUI/pustaka, web, serta pengembangan dan dokumentasi mobile. Rincian kasus adalah pengembangan latihan, bukan daftar topik ujian yang dijamin muncul.
- Panduan Definitif dosen dipakai sebagai pendamping pola bukti–tujuan–keputusan dan pembahasan pengecoh, sebagaimana telaah halaman 8–19 dan 22–23 sebelumnya. Contoh dan analisis halaman 12–19 dibaca kembali; contoh IPA tidak disalin menjadi materi PCK.
- Seluruh stimulus Paket 1 dibaca untuk menghindari pengulangan. Masukan pengguna yang tersedia adalah kebutuhan cakupan lebih luas, kasus baru, serta bahasa natural; tidak diasumsikan ada data performa atau respons pengguna per butir yang belum diberikan.

## Pemetaan dan cakupan

Pemetaan nomor, kode utama, bentuk, elemen, dan fokus kasus dibuat **sebelum penulisan**, dalam `PEMETAAN_PAKET_2.md`. Ada satu perubahan saat penyuntingan: rencana 33 tentang identitas daftar web diganti menjadi pengodean parameter URL agar berbeda dari 47 tentang daur ulang baris mobile. Kode PF.3 dipertahankan karena fokus 33 adalah kebutuhan prasyarat membedakan struktur URL dan nilai.

| Elemen PCK Fase F | Butir | Cakupan latihan |
|---|---:|---|
| Basis Data | 13 (1–13) | NULL, agregasi, HAVING, ketepatan bilangan, tanggal, pemulihan backup, indeks, kamus data, DISTINCT, view/hak akun, CSV, retensi, desain pengumpulan data |
| Pemrograman Berbasis Teks, Grafis, dan Multimedia | 13 (14–26) | Override/polimorfisme, event GUI, koordinat, waktu animasi, model dan tampilan, rekursi, referensi/salinan object, alpha, dependensi, exception, profiling, state diagram, audio |
| Pemrograman Web | 12 (27–38) | Cascade, box model, semantik HTML, propagasi event, cache, response usang, pengodean parameter, sesi/draf, keluaran teks, deployment path, dokumentasi endpoint, audit keyboard |
| Pemrograman Perangkat Bergerak | 12 (39–50) | Orientasi/state, izin, latar belakang, thread UI, pencatatan luring, konflik sinkronisasi, listener, density, daur ulang baris, status request, notifikasi, build/dokumentasi |

PCK meminta guru memilih demonstrasi, dukungan prasyarat, bukti asesmen, umpan balik, atau keputusan kurikuler/profesional yang bergantung pada perilaku teknis kasus. PU memakai konteks matematika, bahasa, sejarah, kegiatan kelas, keluarga, dan komunitas. Distribusi ini **rancangan internal**, bukan bobot UKPPPG resmi.

| Kode utama | Jumlah |
|---|---:|
| P.1 | 11 |
| P.2 | 6 |
| P.3 | 4 |
| P.4 | 6 |
| P.5 | 5 |
| P.6 | 11 |
| K.1 | 2 |
| K.2 | 2 |
| K.3 | 2 |
| S.1 | 2 |
| S.2 | 2 |
| S.3 | 2 |
| PF.1 | 4 |
| PF.2 | 6 |
| PF.3 | 5 |
| PF.4 | 6 |
| PF.5 | 4 |

Semua 17 kode terwakili. Bentuk: **40 PG, 20 Kategori, 20 MCMA**. PG memiliki empat opsi, Kategori tiga pernyataan, MCMA empat opsi dengan dua atau tiga kunci. Tidak ada penambahan opsi untuk menyamai contoh dosen. Tingkat kesulitan dicatat per butir: 20 dasar, 39 sedang, 21 menantang; ini perkiraan editorial berdasarkan tuntutan penalaran, belum hasil uji peserta. Metadata `cp_element` mencatat elemen bagi seluruh PCK; PU bernilai null.

## Penyuntingan dan pemeriksaan mutu

1. Per kelompok penulisan, stimulus diperiksa terhadap konsep dan indikator utama; kunci serta alasan tiap opsi ditulis bersama. Pada penyuntingan akhir seluruh 80 butir ditinjau untuk memastikan alasan benar-benar sesuai opsi, bukan sekadar huruf kunci.
2. Draf awal mempunyai petunjuk panjang yang kuat (39/40 jawaban PG merupakan opsi terpanjang). Opsi benar diringkas tanpa menghilangkan tindakan inti; banyak pengecoh diganti dengan tindakan yang membantu hal lain tetapi belum menjawab tujuan kasus. Hasil akhir heuristik terpanjang **9/40**, terpendek **9/40**. Tidak dilakukan penyamaan panjang secara otomatis.
3. Contoh pengecoh yang diperbaiki: urutan CSV dibandingkan dengan kasus koma dalam nilai; kecocokan indeks dibedakan dari pengaruh ukuran data; moderasi penilaian dibedakan dari merata-ratakan skor; dokumentasi endpoint dibedakan dari sekadar daftar alamat. Pembahasan menjelaskan batas manfaat tindakan tersebut.
4. Dua kasus daftar web/mobile pada draf dinilai terlalu dekat, sehingga kasus 33 diganti. Materi ERD, PK/FK, inventaris, peminjaman, dan kasus nama ganda tidak dijadikan inti baru.
5. Pemeriksaan terhadap Paket 1 membedakan kedekatan kompetensi dari duplikasi kasus. Misalnya, 14 menguji prediksi override melalui referensi induk, bukan lagi membedakan class/object; 44 memeriksa konflik dua perubahan luring, bukan atomisitas transaksi; 60/77 membahas kalibrasi skor, bukan hanya umpan balik umum. Cakupan etika dan asesmen tetap beririsan karena kisi-kisinya sama.
6. Validator tidak menemukan stimulus identik setelah normalisasi. Pemeriksaan kemiripan makna tetap penilaian manual; tidak diklaim terbukti bebas semua kemungkinan kemiripan melalui otomatisasi.

## Integrasi dan pengujian proporsional

- Katalog ditambah satu entri Paket 2. Tidak ada perubahan HTML, CSS, mesin sesi, JavaScript UI, atau fitur.
- `python scripts/build.py` dan `python scripts/build.py --check` lulus: 80/paket, 50/30, 17 kode, bentuk/kunci, ID/UID, opsi dan alasan, duplikasi teks, versi, serta kesamaan JSON–bundle–Markdown.
- Satu smoke test Chrome desktop headless melalui **file:// dengan jaringan dimatikan**, profil uji terisolasi: memilih Paket 2, membuka 80 nomor, menjawab PG pertama, mengakhiri sesi dengan konfirmasi, dan melihat hasil Paket 2 beserta 17 kode. Status selesai, ID paket, jumlah soal, dan jawaban tersimpan diperiksa; tidak ditemukan pageerror.
- Pemeriksaan SHA-256 atas 10 berkas terlindungi lulus: Paket 1 dan Markdown-nya, runtime, tiga arsip prototipe, serta rilis lama tetap identik. Registry versi lama dipertahankan oleh build; snapshot di browser pengguna tidak disentuh.
- Sesuai batas tugas, tidak ditambah dependency atau suite tes permanen, tidak diulang tes mobile/lintas browser/screenshot/kegagalan storage. Skrip kerja lokal di `.tools` bukan bagian runtime aplikasi.

**Status:** siap untuk latihan Paket 2 penuh. Belum ada validasi psikometrik, telaah independen pakar terhadap paket ini, atau bukti kesetaraan dengan soal resmi. Skor latihan tidak menjamin kelulusan.
