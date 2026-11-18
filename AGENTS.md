# Aturan proyek untuk Coding Agent — Drill UTBK UKPPPG Calon Guru 2026

## Sasaran

Proyek ini adalah **aplikasi drill ujian penuh** untuk persiapan UKPPPG Calon Guru bidang PPLG/RPL. **Setiap paket selalu 80 soal (50 PCK + 30 Pedagogi Umum)**. Pengguna mengerjakan Paket 1, Paket 2, Paket 3, dst., yang berisi soal baru dengan cakupan kisi-kisi yang sama. Ini **latihan orisinal**, bukan kumpulan soal resmi/bocoran.

Jangan mengubah sasaran menjadi latihan 10–20 soal per paket, dashboard kompleks, atau pembuat soal otomatis di browser. Agent coding menambahkan **paket baru 80 soal** hanya saat diminta pada giliran berikutnya.

## Hierarki referensi

1. **Resmi, otoritas utama:** `references/Juknis UKPPPG Calon Guru Tahun 2026.pdf` — halaman 7 (50 PCK, 30 PU, PG/PGK Kategori/PGK MCMA), halaman 47 Lampiran 4 (P.1–P.6, K.1–K.3, S.1–S.3, PF.1–PF.5). Gunakan teks asli sebagai sumber ketentuan.
2. **Pendamping, bukan peraturan baru:** `references/Panduan_Definitif_UTBK_UKPPPG_2026_NQ.pdf` — halaman 8–9 (pembedaan kompetensi), 10–11 (strategi membaca kasus), 12–19 (4 contoh dan analisis pengecoh), 22–23 (jebakan strategi). Manfaatkan polanya untuk mutu pertanyaan dan pembahasan, **jangan** mengklaim semua contoh/heuristiknya resmi atau mengubah format dan bobot.
3. **Data latihan yang wajib diaudit:** `data/bank_soal_80.json`, `references/Bank_Soal_80_dan_Pembahasan.md`, dan `index.html`. Semua ini buatan latihan awal; jangan menganggap kuncinya pasti benar.
4. **Di luar cakupan fitur ini:** latihan esai/laporan studi kasus dalam PDF pendamping (halaman 20–21). Jangan dicampur ke dalam 80 soal objektif.

Saat PDF tidak dapat dibaca oleh tooling, nyatakan keterbatasan dan jangan mengaku sudah memverifikasi halamannya.

## Konten dan kualitas soal

- Per paket **tepat** 80 soal: 50 PCK + 30 PU; PG, PGK Kategori, PGK MCMA; keseluruhan 17 subkompetensi harus terwakili. Juknis **tidak** menetapkan proporsi antar-jenis soal maupun per subkompetensi. Distribusi latihan adalah keputusan internal yang harus dilabeli demikian.
- PCK relevan dengan praktik guru PPLG/RPL (algoritma, pengembangan web, basis data, rekayasa perangkat lunak, dsb.) dengan **ketepatan konten dan pedagogi**. Contoh IPA pada PDF pendamping **bukan** daftar soal teknis yang perlu disalin.
- Utamakan **stimulus/kasus realistis → tujuan atau bukti → tindakan guru paling tepat**. Hindari hafalan istilah tanpa pengambilan keputusan.
- Untuk setiap soal: ID unik dan stabil, nomor paket, bagian (PCK/PU), kode subkompetensi, bentuk, stimulus, opsi/pernyataan, kunci, pembahasan spesifik, dan (jika digunakan) tingkat kesulitan. Jika ada dua kompetensi bersinggungan, pilih satu indikator utama untuk penilaian dan boleh mencatat indikator tambahan.
- PG: tepat satu jawaban terbaik; MCMA: semua jawaban benar jelas; PGK Kategori: setiap pernyataan mempunyai kategori/jawaban yang tegas. Periksa pengecoh: masuk akal tetapi salah dengan alasan yang dapat diterangkan.
- Pembahasan harus menjelaskan **mengapa benar dan mengapa opsi lainnya tidak tepat**, termasuk perbedaan keputusan yang tampak mirip. Hindari kalimat generik yang hanya mengulang kunci.
- Hindari duplikasi **makna dan pola kasus**, bukan sekadar teks sama. Setiap paket harus memvariasikan situasi, bukti awal, tujuan dan keputusan guru. Simpan paket lama; jangan mengganti soal pernah dikerjakan secara diam-diam, atau merusak riwayatnya.

## Perilaku aplikasi

- Satu sesi simulasi = **80 soal penuh** dari satu paket, dengan navigasi nomor, tandai ragu, ubah jawaban sebelum selesai, hitung hasil, dan pembahasan **hanya sesudah selesai**.
- Tampilkan rekap PCK/PU, bentuk soal, dan subkompetensi; review jawaban salah, dan ulang paket. Bila menyediakan Mode Belajar, jadikan tambahan opsional yang tidak mengganggu simulasi utama.
- Progres dan riwayat antar paket di browser lokal (misalnya localStorage) dengan key/versi stabil. Jelaskan keterbatasan data lokal terhadap penghapusan data/perpindahan perangkat.
- Timer dapat disesuaikan. Lampiran jadwal Juknis menyebut durasi pengerjaan 150 menit tetapi rentang sesi lain tampak berbeda; jangan menyatakan timer buatan sama persis dengan aturan sesi pengguna tanpa verifikasi kartu ujian/TUK.
- Tetap bisa jalan **offline dengan membuka `index.html` langsung**. Jangan bergantung pada `fetch()` atas file JSON melalui `file://` yang dapat diblokir browser. Gunakan satu sumber kebenaran untuk data dan hasil build lokal bila perlu.
- Jangan bangun backend, login, akun, API generatif, hosting, framework besar, atau redesign kosmetik berlebihan.

## Eksekusi awal dan QA

1. Baca referensi; audit bank 80 soal dan cek struktur aplikasi awal yang punya data tersemat. Catat temuan penting, perbaiki secara minimal dengan alasan.
2. Jadikan 80 soal lama sebagai **Paket 1** dan implementasikan dukungan paket-paket penuh berikutnya. **Jangan otomatis menghasilkan Paket 2 pada eksekusi pertama** kecuali diminta.
3. Uji otomatis data: panjang 80, pembagian 50/30, 17 kode, validitas tipe/kunci, ID stabil, duplikasi teks, dan konflik antarfile; lakukan peninjauan semantik manual terhadap duplikasi substantif.
4. Uji alur PG, Kategori, MCMA; persistensi refresh; selesai/hasil; pembahasan terkunci sebelum selesai; navigasi; pengulangan; mobile dan keyboard jika memungkinkan.
5. Laporkan singkat temuan, perubahan, pengujian faktual (bukan klaim tanpa tes), keterbatasan dan cara menambah Paket 2.

Jangan memodifikasi proyek lain atau mempublikasikan sesuatu tanpa diminta.

## Pembekuan Paket 1 setelah finalisasi

Paket 1 versi `2026-11-18.6` dibekukan. Jangan melakukan penyuntingan tambahan untuk preferensi gaya atau mengulang audit tanpa masalah substansial yang teridentifikasi. Koreksi substansial harus dicatat alasannya, memakai versi bank baru, dan mempertahankan snapshot riwayat. Penambahan Paket 2 tidak boleh mengubah Paket 1. Lihat `docs/FINALISASI_PAKET_1.md`.

## Penyelarasan substansi PPG untuk paket berikutnya

Gunakan `docs/PENYELARASAN_PPG_UKPPPG.md`: tentukan subkompetensi Juknis dahulu, baru konsep PPG yang mendukung dan keputusan guru pada kasus. Nama/jumlah mata kuliah bukan kisi-kisi atau bobot resmi. PPL hanya sumber inspirasi kasus; kegiatan/produk Projek Kepemimpinan, Seminar PPG, dan Pengembangan Kebugaran Jasmani tidak dijadikan topik tersendiri tanpa hubungan langsung dengan indikator. Kolaborasi, inovasi, dan refleksi tetap boleh diuji menurut indikator yang sesuai. Paket 1 dan 2 tidak ditulis ulang untuk penyelarasan ini; gunakan hasil audit cakupan untuk variasi paket baru.
