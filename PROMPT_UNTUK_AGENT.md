# PROMPT UTAMA — jalankan sekali (eksekusi pertama)

Saya baru pertama kali menjalankan Coding Agent di proyek ini. Tujuannya **drill simulasi UTBK penuh secara berulang**, bukan mengembangkan aplikasi besar.

Baca `AGENTS.md`, `README.md`, kedua PDF di `references/`, bank soal JSON, pembahasan, dan `index.html`. **Prioritas rujukan:** Juknis resmi (halaman 7 dan 47) menentukan cakupan/format; `Panduan_Definitif_UTBK_UKPPPG_2026_NQ.pdf` hanya referensi pendamping untuk pola soal berbasis kasus, strategi membaca stimulus, dan analisis jawaban (terutama halaman 8–19 serta 22).

**Laksanakan:**
1. Audit kualitas **80 soal awal** (kunci, ambiguitas, konsep RPL, kecocokan dengan 17 indikator, mutu pengecoh/pembahasan, variasi). Perbaiki yang terbukti perlu dan catat alasannya. Jadikan **Paket 1**.
2. Buat pengalaman **Simulasi Ujian Penuh**: pilih paket, kerjakan **80 soal = 50 PCK + 30 PU**, mencakup PG, PGK Kategori, dan MCMA; navigasi, tandai ragu, timer latihan, simpan jawaban, akhiri ujian, lalu lihat nilai, pembahasan, analisis indikator dan review kesalahan. Jangan tampilkan kunci sebelum selesai.
3. Susun struktur bank soal **multi-paket** yang membuat agent dapat menambahkan **Paket 2, 3, dst. masing-masing 80 soal baru** melalui instruksi sederhana di masa depan. Jangan hapus/acak riwayat dan jangan membuat soal otomatis melalui browser. **Tidak perlu menghasilkan Paket 2 sekarang**.
4. Jaga aplikasi tetap ringan dan offline (dibuka melalui `index.html`), tanpa backend, login, atau framework kompleks. Dahulukan mutu soal di atas estetika.
5. Validasi secara nyata struktur 80 butir, 50/30, 17 kode, setiap jenis kunci, tidak ada kunci bocor, persistensi, hasil, dan alur penggunaan. Laporan hasil verifikasi harus jujur.

**Batasan penting:** PDF pendamping bukan aturan resmi tambahan; contoh IPA dalam PDF boleh menginspirasi struktur kasus tetapi PCK paket ini perlu relevan dengan pengajaran PPLG/RPL. Esai studi kasus tidak termasuk dalam 80 soal objektif. Distribusi PG/Kategori/MCMA bukan bobot resmi bila tidak disebut Juknis.

Kerjakan mandiri tanpa pertanyaan teknis kecil. Di akhir laporkan pekerjaan selesai/terbatas, kualitas bank soal, perubahan, hasil pengujian, dan cara memakai aplikasi. Fokus saya belajar untuk UTBK, bukan membangun produk komersial.
