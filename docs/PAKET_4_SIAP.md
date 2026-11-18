# Paket 4 dan pemeriksaan mobile Mode Belajar

18 November 2026. **Paket 4 versi 2026-11-18.1 siap digunakan** melalui pemilih paket yang sama, baik Simulasi Ujian maupun Mode Belajar. Sumber: `data/paket_4.json`; naskah lengkap hasil build: `references/Paket_4_dan_Pembahasan.md`.

## Isi dan rujukan

80 soal baru: **50 PCK + 30 PU**, **40 PG / 20 Kategori / 20 MCMA**, seluruh 17 subkompetensi. Setiap butir mempunyai UID stabil, indikator utama, bentuk, perkiraan kesulitan, stimulus, opsi/pernyataan, kunci, pembahasan dan alasan tiap opsi. PCK juga mencatat elemen CP; konsep PPG dicatat sebagai metadata. Distribusi berikut merupakan keputusan latihan internal, bukan bobot resmi.

| Elemen PCK | Jumlah | Contoh fokus baru |
|---|---:|---|
| Basis Data | 13 | Prioritas logika, penggandaan hasil JOIN, scope subquery, siklus hierarki, median, durabilitas, pencarian simbol literal, posisi kolom UNION, dua peran self join |
| Teks/Grafis/Multimedia | 13 | Argumen default mutable, sorting stabil, cleanup resource, serialisasi object, identitas dan kesamaan, counter paralel, collision hash, atlas gambar, kompresi ulang, modul tertutupi, evaluasi generator, vektor |
| Web | 12 | CSRF, batas ukuran flex, parsing format lokal, history, kelompok radio, polling sesuai kebutuhan, ruang induk, prioritas route, array Promise, fokus dialog, cache personal, batas pembatalan request |
| Perangkat Bergerak | 12 | Photo picker, skala font, penandatangan pembaruan, metadata orientasi, identitas pointer, integritas unduhan, back stack, pesan multibahasa, penundaan kerja latar, verifikasi server, keluaran sensor, variasi kemampuan perangkat |

| Kode | Jumlah | Kode | Jumlah |
|---|---:|---|---:|
| P.1 | 10 | K.1 | 2 |
| P.2 | 8 | K.2 | 2 |
| P.3 | 4 | K.3 | 2 |
| P.4 | 6 | S.1 | 2 |
| P.5 | 5 | S.2 | 2 |
| P.6 | 10 | S.3 | 2 |
| PF.1 | 5 | PF.2 | 6 |
| PF.3 | 5 | PF.4 | 5 |
| PF.5 | 4 | | |

Bagian relevan sumber berikut tersedia dan digunakan: Juknis hal. 7 dan Lampiran 4 hal. 47; Panduan Definitif dosen untuk pembacaan kasus dan analisis pengecoh; CP RPL 046/H/KR/2025 pada empat elemen Fase F; kedua PDF LPTK; pedoman penyelarasan PPG; serta bank Paket 1–3. CP tersedia sebagai salinan kerja `.tools/CP_046_2025.pdf` dari [PDF Kemendikdasmen](https://kurikulum.kemendikdasmen.go.id/file/1753929861_manage_file.pdf). Kedua rangkuman LPTK dibaca melalui ekstraksi teks pada bagian relevan, bukan diklaim seluruh halaman ditelaah. Tidak ada sumber wajib yang hilang. Juknis menentukan format dan kode; sumber pendamping tidak dijadikan kisi-kisi tambahan atau bocoran. PCK Bahasa Indonesia tidak disalin.

Konsep pendamping digunakan sesuai keputusan dalam kasus: UbD pada bukti akhir dan adaptasi unit; asesmen diagnostik/formatif/as learning; diferensiasi, TaRL, ZPD dan scaffolding; UDL; sumber lokal dan CRT; proyek bertahap dan penyelidikan masalah; TPACK serta evaluasi manfaat teknologi; CASEL, growth mindset, refleksi, komunikasi dan etika. Nama model atau mata kuliah tidak dijadikan jawaban hafalan maupun kuota.

## Telaah mutu

- Pemetaan dibuat sebelum penulisan, lalu fokus 55 dan 58 diganti saat telaah karena terlalu dekat dengan kasus lama. Pemetaan akhir ada di `PEMETAAN_PAKET_4.md`. Kode utama tidak berubah.
- Seluruh 80 butir ditelaah untuk hubungan indikator–bukti–keputusan, ketepatan kunci dan alasan opsi. Asumsi teknis dibuat eksplisit pada pembagian integer, urutan router, kebijakan pembaruan, kerja latar, dan keluaran accelerometer. Nomor 44 menyediakan acuan tepercaya untuk bukti integritas; nomor 38 membedakan pembatalan penantian browser dan transaksi server yang sudah tersimpan.
- Draf awal terlalu sering menempatkan jawaban PG benar sebagai opsi terpanjang. Opsi benar dan pengecoh diringkas atau diperjelas berdasarkan maknanya, tanpa menambah kalimat pengisi. Pola kunci Kategori dan jumlah jawaban MCMA juga tidak diseragamkan. Panjang opsi bukan ukuran validitas.
- Validator tidak menemukan stimulus duplikat setelah normalisasi pada empat paket. Telaah semantik membandingkan fokus, bukti dan keputusan dengan Paket 1–3; konsep yang sama tetap muncul karena cakupan kompetensinya sama, tetapi tidak sengaja membuat ulang kasus hanya dengan mengganti tokoh atau teknologi. Telaah ini oleh agent, belum penelaahan pakar independen maupun uji psikometrik.

## Pengujian dan perbaikan nyata

- `python scripts/build.py` dan `python scripts/build.py --check`: lulus untuk empat paket, termasuk 80/50/30, 17 kode, tiga bentuk, UID, struktur kunci, kelengkapan alasan, duplikasi stimulus dan konsistensi hasil build. Versi lama dipertahankan; Paket 4 memakai entri versi baru.
- Satu smoke desktop Chrome 1280 × 900, `file://` dalam kondisi offline: memilih Paket 4, menjawab PG, pembahasan tetap terkunci, mengakhiri ujian dan menampilkan hasil 1/80 serta 17 kode. Angka tersebut berasal dari satu jawaban benar; soal lain sengaja belum dijawab.
- Emulasi Chrome dengan viewport **390 × 844** dan **414 × 896**, `isMobile` dan sentuhan aktif: memilih Paket 4 → Belajar, PG salah/benar, Kategori, MCMA, pemeriksaan hanya lewat tombol, Lihat Pembahasan tanpa jawaban, alasan dari bank, navigasi nomor/Sebelumnya/Berikutnya, refresh dan pemulihan jawaban/pembahasan. Termasuk pemeriksaan butir dengan jumlah teks terbanyak (55). Tidak ditemukan horizontal overflow pada keadaan yang diperiksa; tidak ada error JavaScript.
- Temuan nyata awal: tombol nomor pada layar kecil hanya **36,25 × 38** dan **39,25 × 38 px**. Penyebabnya delapan kolom dan tinggi tetap 38 px. CSS pada lebar maksimum 470 px diubah menjadi enam kolom, tinggi nomor 44 px, serta tinggi minimum tombol dan label Kategori 44 px. Hasil ukur: **50,33 × 44** dan **54,33 × 44 px**; label Kategori 44 px. Tata letak dan posisi navigasi tetap mengikuti aplikasi semula.
- Dalam dua profil emulasi terisolasi, tiga snapshot simulasi lama beserta jawaban/skor dan tiga progres belajar Paket 1–3 disemai sebagai fixture. Setelah belajar Paket 4 dan refresh, isinya identik; memulai simulasi Paket 4 menambah percobaan baru. Pembahasan simulasi tetap tidak muncul sebelum selesai.
- Sidik SHA-256 berkas terlindungi dibandingkan sebelum/sesudah: bank dan naskah Paket 1–3, arsip prototipe, rilis/snapshot, `index.html`, `app.js`, dan `core.js` tetap identik. Tidak ada perubahan mekanisme penyimpanan. Perubahan aplikasi hanya CSS; katalog, registry dan bundle diperbarui melalui mekanisme paket yang ada.

Pengujian mobile tersebut **emulasi, bukan perangkat fisik**. Tidak dilakukan tes lintas browser, stress storage, atau pengujian UI menyeluruh. Offline diuji langsung melalui `index.html`; tidak ada dependency runtime, backend, API atau perubahan jalur aset/routing. Deployment Vercel langsung tidak dijalankan atau diuji. Data pengguna pada profil browser sehari-hari tidak diakses. Paket ini latihan orisinal; hasilnya bukan bukti kesetaraan dengan soal resmi atau prediksi kelulusan.
