# PROMPT LANJUTAN — digunakan setiap ingin 80 soal baru

Tambahkan **satu paket simulasi ujian penuh berikutnya**: tepat **80 soal baru (50 PCK + 30 Pedagogi Umum)**, ketiga bentuk PG/PGK Kategori/MCMA, dan cakupan seluruh 17 subkompetensi Lampiran 4 Juknis resmi.

Gunakan Juknis sebagai otoritas; PDF panduan definitif sebagai inspirasi tingkat penalaran/kualitas distraktor, bukan sebagai kisi-kisi baru. Baca seluruh paket lama, variasikan indikator, konteks kasus RPL/PPLG untuk PCK, kualitas bukti/stimulus, dan tindakan pedagogis. Hindari duplikasi substansi atau hanya mengganti tokoh/angka; jangan salin contoh soal pendamping mentah-mentah.

Baca `docs/PENYELARASAN_PPG_UKPPPG.md` sebagai pedoman konsep PPG dan celah cakupan paket lama. Mulai dari kode resmi, pilih konsep pendukung yang diperlukan, lalu susun kasus pengambilan keputusan. Jangan menentukan bobot per mata kuliah, menguji hafalan nama teori/produk perkuliahan, atau menulis ulang Paket 1 dan 2. Untuk PCK pertahankan integrasi materi empat elemen CP RPL dengan keputusan pedagogis; untuk PU gunakan konteks umum. Utamakan pendalaman yang belum beragam, bukan mengulang pola kasus lama.

Untuk setiap butir, verifikasi satu kunci yang tepat (atau kombinasi/kategori valid), pembahasan yang membedakan opsi, pemetaan kode, dan kelayakan kesulitan. Integrasikan sebagai paket baru tanpa menimpa soal/riwayat lama. Jalankan tes jumlah, komposisi, tipe kunci, ID unik, tampilan paket baru, penilaian dan pembahasan. Jangan mengklaim telah menguji hal yang tidak diuji.

Laporkan paket ke berapa, kode yang tercakup, komposisi tiga bentuk soal (rancangan latihan), temuan audit, dan hasil validasi.

Gunakan struktur yang sudah ada: tambahkan `data/paket_N.json` dan entri `data/packages.json` dengan nomor paket, versi, serta jalur Markdown unik. Butir memakai UID `pN-001` sampai `pN-080` dan `explanations` per opsi/pernyataan. Jangan edit bundle atau Markdown hasil build secara langsung. Jalankan `python scripts/build.py`, `python scripts/build.py --check`, tes Python, tes mesin Node, dan tes alur browser; periksa paket baru melalui pemilih paket. Jangan mengubah paket terbit tanpa versi baru, mengubah arsip prototipe, atau memodifikasi snapshot riwayat. Lihat README dan audit Paket 1 untuk batas sumber, pola kasus berulang, dan petunjuk panjang opsi yang perlu dihindari.
