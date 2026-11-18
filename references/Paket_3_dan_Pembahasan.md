# Paket 3 — latihan UTBK UKPPPG PPLG/RPL

Versi: 2026-11-18.1. Dihasilkan oleh `python scripts/build.py` dari `paket_3.json`; jangan edit hasil build.

Latihan orisinal, bukan soal resmi/bocoran. Rujukan utama: Juknis yang disediakan, halaman 7 dan 47. Panduan pendamping hanya inspirasi mutu kasus.

80 soal = 50 PCK + 30 PU; 40 PG, 20 PGK Kategori, 20 MCMA. Distribusi bentuk dan kode merupakan keputusan latihan internal, bukan bobot resmi.

Skor latihan: 1 poin jika seluruh respons pada butir tepat; selain itu 0. Bukan rumus nilai atau ambang kelulusan resmi.

| Kode utama | Subkompetensi (Juknis hal. 47) | PCK | PU |
|---|---|---:|---:|
| P.1 | Merancang dan memfasilitasi pengalaman belajar Murid yang mendorong pemahaman konseptual, penerapan kontekstual, dan refleksi bermakna terhadap proses pembelajaran | 7 | 2 |
| P.2 | Melaksanakan pembelajaran yang responsif terhadap keragaman latar belakang, kebutuhan, dan potensi Murid melalui berbagai model pembelajaran | 6 | 3 |
| P.3 | Menciptakan proses pembelajaran yang berkesadaran, bermakna, dan menggembirakan | 3 | 2 |
| P.4 | Mengintegrasikan teknologi informasi dan komunikasi secara kritis dan kreatif dalam pembelajaran untuk memperluas akses, memperdalam pemahaman, dan mendukung literasi digital Murid | 4 | 2 |
| P.5 | Menerapkan strategi pembelajaran atau pembimbingan yang sesuai karakteristik Murid dengan memanfaatkan sumber belajar dan mempertimbangkan potensi lingkungan dan kearifan lokal | 3 | 1 |
| P.6 | Melaksanakan asesmen untuk mengetahui kebutuhan belajar, memberikan umpan balik, dan mengukur hasil belajar Murid secara berkesinambungan dan reflektif | 7 | 4 |
| K.1 | Menampilkan perilaku etis dan keteladanan yang mencerminkan kematangan spiritual, moral, dan emosional berdasarkan Ketuhanan Yang Maha Esa dan nilai-nilai keberagaman | 0 | 2 |
| K.2 | Melakukan refleksi diri secara berkesinambungan, mengembangkan pola pikir bertumbuh, serta belajar sepanjang hayat untuk peningkatan kualitas diri | 0 | 2 |
| K.3 | Mengambil keputusan dan bertindak secara konsisten dalam mengembangkan potensi dan budaya belajar Murid | 0 | 2 |
| S.1 | Berkomunikasi secara inklusif, empatik, dan efektif secara lisan, tulisan, dan/atau isyarat dengan memperhatikan keragaman dan kebutuhan Murid | 0 | 2 |
| S.2 | Berkolaborasi dengan Murid, sesama Pendidik, Tenaga Kependidikan selain Pendidik, orang tua/wali Murid, dan masyarakat untuk meningkatkan kualitas pembelajaran | 0 | 2 |
| S.3 | Berpartisipasi aktif dalam organisasi profesi dan komunitas pembelajaran untuk pengembangan keprofesian berkelanjutan | 0 | 2 |
| PF.1 | Menguasai tujuan pendidikan terutama pada Satuan Pendidikan yang diampu | 4 | 1 |
| PF.2 | Menguasai disiplin ilmu sesuai dengan materi/muatan pembelajaran atau pembimbingan | 4 | 0 |
| PF.3 | Memahami potensi dan kebutuhan belajar Murid berdasarkan karakteristik materi pembelajaran atau pembimbingan dan konteks lokal | 4 | 1 |
| PF.4 | Memahami, menerapkan, dan mengembangkan kurikulum secara adaptif dan kontekstual sesuai perkembangan zaman | 5 | 1 |
| PF.5 | Mengembangkan praktik profesional pendidikan secara konseptual, empiris, kreatif, dan inovatif | 3 | 1 |

## Soal

Kunci dan pembahasan berada setelah seluruh soal.

### 1. [p3-001 • PCK • PF.4 • PG]

Guru menyusun unit basis data. Targetnya murid dapat memperbaiki rancangan yang menyebabkan perubahan alamat cabang harus dilakukan di banyak baris. Bukti akhir yang paling selaras adalah ...

A. Menjelaskan definisi normalisasi dari modul.
B. Merevisi rancangan, menguji perubahan alamat pada kasus baru, dan menjelaskan mengapa pembaruan tidak lagi berulang.
C. Meminta diagram rancangan yang sama persis dengan contoh latihan.
D. Menghitung jumlah tabel dalam rancangan akhir.

### 2. [p3-002 • PCK • P.1 • Kategori]

Murid menulis kondisi A dan B, dengan B memanggil fungsi pencatat. Pada bahasa yang memakai short circuit, fungsi tidak dipanggil ketika A salah. Nilai kegiatan berikut sebagai Tepat atau Tidak tepat.

1. Mengajarkan bahwa setiap operand selalu dievaluasi agar penelusuran seragam.
2. Membandingkan log saat A benar dan salah.
3. Meminta murid menjelaskan risiko efek samping pada operand kedua.

### 3. [p3-003 • PCK • P.6 • PG]

Pada web tugas kelas, akun A dapat membaca berkas akun B setelah ID pada URL diganti. Murid berpendapat menyembunyikan tombol sudah cukup. Bukti perbaikan paling kuat adalah ...

A. Tombol berkas B hilang dari tampilan akun A.
B. URL berkas diberi ID yang lebih panjang.
C. Menguji hanya alur akses berkas milik akun yang sedang login.
D. Menguji penolakan request akun A ke berkas B di server.

### 4. [p3-004 • PCK • PF.1 • MCMA]

Dalam proyek mobile SMK, murid menyimpan rahasia layanan bersama di dalam paket aplikasi agar tim penerima mudah memasangnya. Guru ingin menilai tanggung jawab profesional. Pilih semua tindakan yang tepat.

A. Meminta murid memeriksa apakah rahasia dapat diekstrak dari paket.
B. Mengganti nama variabel rahasia sebagai perlindungan utama.
C. Menilai rancangan layanan perantara yang tidak membagikan rahasia bersama ke klien.
D. Menilai keamanan dari kecilnya ukuran file instalasi.

### 5. [p3-005 • PCK • PF.2 • PG]

Laporan membaca saldo dua rekening melalui dua query terpisah. Transfer terjadi di antaranya sehingga total tampak berubah. Guru ingin murid memahami konsistensi pembacaan. Demonstrasi terbaik adalah ...

A. Memodelkan pembacaan pada satu snapshot.
B. Membulatkan saldo laporan agar selisih tidak terlihat.
C. Mengulang laporan saat aktivitas transfer dihentikan sementara.
D. Mengganti tipe tampilan saldo menjadi teks.

### 6. [p3-006 • PCK • PF.3 • Kategori]

Sebelum membahas efisiensi algoritma, guru menemukan murid menyamakan panjang kode dengan banyaknya operasi. Nilai pemetaan kebutuhan berikut sebagai Tepat atau Tidak tepat.

1. Meminta hitungan operasi untuk dua ukuran masukan pada contoh pendek.
2. Menentukan kesiapan dari jumlah bahasa pemrograman yang pernah dipakai.
3. Membandingkan loop tunggal dan loop bersarang dengan pencatatan operasi.

### 7. [p3-007 • PCK • P.4 • PG]

Murid menyimpulkan API aman dari akses tak sah karena browser menolak response lintas origin. Guru memakai alat jaringan untuk menguji dugaan itu. Kegiatan terbaik adalah ...

A. Mengganti origin sampai pesan browser hilang.
B. Membandingkan status HTTPS dan HTTP sebagai satu-satunya uji akses API.
C. Menguji CORS browser dan autentikasi server secara terpisah.
D. Menghapus dokumentasi origin dari tugas kelompok.

### 8. [p3-008 • PCK • P.5 • MCMA]

Aplikasi pemandu nelayan setempat menampilkan posisi terakhir walau pengukuran sudah lama. Guru memakai kebutuhan mitra untuk mengajarkan pembacaan data lokasi. Pilih semua kegiatan yang tepat.

A. Memilih koordinat dengan angka desimal paling banyak sebagai posisi terkini.
B. Meminta murid menyertakan waktu pengukuran saat menilai kelayakan posisi.
C. Menghapus penanda waktu agar layar lebih sederhana.
D. Membandingkan keputusan tampilan untuk posisi lama dan baru pada skenario mitra.

### 9. [p3-009 • PCK • P.1 • PG]

Dua log dari zona waktu berbeda tampak menunjukkan balasan terjadi sebelum permintaan. Murid ingin mengurutkannya sebagai teks waktu lokal. Langkah guru terbaik adalah ...

A. Mengurutkan berdasarkan nama perangkat pengirim.
B. Menyamakan acuan waktu log.
C. Menyeragamkan format penulisan waktu sambil mengabaikan offset zona.
D. Memilih log yang tampil paling rinci sebagai urutan benar.

### 10. [p3-010 • PCK • P.2 • Kategori]

Guru merancang unit GUI tentang status proses. Sejak awal ia ingin status dapat dipahami murid yang sulit membedakan warna, dengan sasaran interpretasi status yang sama. Nilai rancangan berikut sebagai Tepat atau Tidak tepat.

1. Memadukan warna, label teks, dan simbol yang dijelaskan.
2. Menguji apakah status masih dipahami ketika warna tidak ditampilkan.
3. Mengganti sasaran murid tersebut menjadi menghafal nama warna.

### 11. [p3-011 • PCK • P.6 • PG]

Web pendaftaran membuat dua entri ketika pengguna menekan kirim dua kali. Murid menonaktifkan tombol, lalu menyatakan masalah selesai. Umpan balik paling tepat adalah ...

A. Perbesar tombol agar pengguna melihatnya dengan jelas.
B. Menambahkan konfirmasi di browser sebelum request dikirim.
C. Menguji satu kali klik pada koneksi cepat lalu mencatat respons sukses.
D. Menguji request ulang dan menjelaskan aturan servernya.

### 12. [p3-012 • PCK • PF.4 • MCMA]

Guru merancang unit upgrade aplikasi mobile yang menambah kolom lokal tetapi harus mempertahankan data versi lama. Pilih semua bukti dan kegiatan yang selaras.

A. Menetapkan keberhasilan dari data lama yang tetap terbaca setelah migrasi.
B. Menguji instalasi bersih saja sebagai bukti upgrade.
C. Menyiapkan basis data versi lama berisi contoh untuk uji migrasi.
D. Meminta murid menjelaskan aturan nilai awal untuk kolom baru.

### 13. [p3-013 • PCK • P.2 • PG]

Murid mampu menjelaskan kondisi DELETE ketika didampingi, tetapi ragu memilih baris secara mandiri. Guru hendak mengurangi bantuan secara bertahap. Langkah berikut paling tepat adalah ...

A. Memberi kondisi baru untuk dipilih murid, meminta prediksi baris, lalu menguji keputusan pada data latihan yang aman.
B. Mempertahankan seluruh petunjuk langkah demi langkah pada setiap kasus baru.
C. Langsung memberi akses penghapusan data produksi mitra.
D. Mengganti unit dengan hafalan nama perintah administrasi.

### 14. [p3-014 • PCK • P.1 • Kategori]

Murid membuat subclass untuk setiap kombinasi alat pembayaran dan jenis diskon. Guru ingin mereka menilai kapan komposisi lebih sesuai. Nilai kegiatan berikut sebagai Tepat atau Tidak tepat.

1. Menganggap jumlah subclass besar selalu membuktikan desain lengkap.
2. Menguji perubahan satu kebijakan diskon tanpa mengganti alat pembayaran.
3. Membandingkan delegasi ke object kebijakan dengan penambahan subclass.

### 15. [p3-015 • PCK • PF.5 • PG]

Guru mencoba demonstrasi pengukuran waktu muat gambar agar murid menyeimbangkan mutu visual dan kinerja web. Bukti dampak pembelajaran paling kuat adalah ...

A. Membandingkan ukuran file akhir sebagai satu-satunya ukuran pemahaman.
B. Meminta murid memberi peringkat kualitas visual gambar pada layar yang sama.
C. Menilai alasan pilihan aset baru beserta bukti waktu muat.
D. Kecepatan guru menyelesaikan demonstrasi.

### 16. [p3-016 • PCK • P.6 • MCMA]

Murid menguji aplikasi penghitung langkah dengan menggoyangkan ponsel. Guru ingin membedakan pemahaman aturan pengolahan data dari keberhasilan sensor nyata. Pilih semua bukti yang relevan.

A. Uji aturan hitung dengan urutan data sensor buatan yang diketahui.
B. Uji perangkat nyata dengan prosedur gerak dan pembanding yang dijelaskan.
C. Jumlah sensor yang tercantum pada spesifikasi ponsel.
D. Kemiripan ikon aplikasi dengan penghitung langkah komersial.

### 17. [p3-017 • PCK • P.5 • PG]

Data nama kegiatan budaya lokal diurutkan berbeda oleh dua konfigurasi basis data. Guru ingin murid memahami kaitan aturan pembandingan dengan kebutuhan masyarakat pengguna. Langkah terbaik adalah ...

A. Menghapus karakter yang berbeda dari ejaan pengguna.
B. Membahas collation dan kebutuhan urutan bersama pengguna.
C. Menyeragamkan urutan berdasarkan konfigurasi bawaan komputer sekolah.
D. Menyediakan tabel padanan ejaan lalu menganggap aturan pembandingan otomatis sama.

### 18. [p3-018 • PCK • P.1 • Kategori]

Dalam bahasa yang menangkap binding variabel loop yang sama, beberapa callback menampilkan nilai akhir loop. Guru ingin murid membedakan nilai saat pembuatan dan pemanggilan callback. Nilai kegiatan berikut sebagai Tepat atau Tidak tepat.

1. Mencatat kedua waktu tersebut pada contoh dua callback.
2. Mengubah teks label tombol sebagai penjelasan utama.
3. Membandingkan binding per iterasi dengan binding bersama.

### 19. [p3-019 • PCK • PF.3 • PG]

Murid memahami state pencarian selama halaman terbuka, tetapi belum mengerti mengapa tautan yang dibagikan membuka hasil awal. Sebelum membahas navigasi web, diagnosis awal terbaik adalah ...

A. Mengecek kemampuan mengganti warna hasil pencarian.
B. Menguji pencarian berulang pada tab yang sama selama sesi tetap terbuka.
C. Meminta daftar browser yang dipakai murid.
D. Memetakan state URL dan memori.

### 20. [p3-020 • PCK • P.2 • MCMA]

Pada layar mobile, beberapa tombol bergambar memiliki label pembaca layar yang sama. Guru ingin seluruh murid dapat menguji hubungan fungsi dan label. Pilih semua dukungan yang tepat.

A. Menyediakan daftar fungsi kontrol dan meminta pasangan memeriksa label yang terbaca.
B. Meminta murid menghafal urutan posisi tombol sebagai solusi permanen.
C. Menggunakan uji audio label disertai catatan teks hasilnya.
D. Mengganti tujuan menjadi mengenali warna ikon saja.

### 21. [p3-021 • PCK • PF.1 • PG]

Dalam proyek sistem pencatatan layanan SMK, pengguna ingin mengetahui siapa mengoreksi data dan alasannya. Guru menargetkan tanggung jawab kerja, bukan sekadar hasil data terbaru. Bukti paling sesuai adalah ...

A. Menguji jejak pelaku, waktu, dan alasan pada koreksi data lalu menjelaskan bagaimana pengguna yang berwenang menelusurinya.
B. Menilai dari banyaknya perubahan data yang dapat diselesaikan tim.
C. Kesamaan warna pada seluruh layar koreksi.
D. Kecilnya ukuran tabel setelah riwayat dihapus.

### 22. [p3-022 • PCK • P.6 • Kategori]

Murid menguji fungsi membalik urutan list hanya dengan satu contoh. Guru ingin mereka menilai sifat yang seharusnya tetap benar untuk berbagai masukan. Nilai bukti berikut sebagai Tepat atau Tidak tepat.

1. Murid menguji bahwa membalik dua kali menghasilkan urutan awal.
2. Murid memeriksa panjang serta elemen list tetap terjaga.
3. Murid menganggap dua sifat itu sudah membuktikan semua implementasi pasti benar.

### 23. [p3-023 • PCK • P.2 • PG]

Kelas membuat situs informasi darurat. Murid dapat menulis konten HTML, tetapi beberapa belum memahami pengambilan data lewat JavaScript. Tujuan inti ialah informasi awal tetap terbaca ketika script gagal. Strategi paling tepat adalah ...

A. Mewajibkan pemuatan seluruh konten melalui script sebelum halaman bisa dibaca.
B. Menilai jumlah animasi sebelum memeriksa konten awal.
C. Membangun konten HTML dasar lalu menambah pengayaan bertahap.
D. Mengganti informasi dengan pesan agar pengguna memasang browser tertentu.

### 24. [p3-024 • PCK • P.3 • MCMA]

Dalam proyek mobile, murid berdebat karena gestur dari tepi layar bertabrakan dengan navigasi sistem. Guru ingin diskusi tetap produktif. Pilih semua tindakan yang tepat.

A. Memilih usulan dari anggota yang paling cepat menyelesaikan kode.
B. Menguji skenario pengguna pada perangkat dan mencatat konflik yang terjadi.
C. Menetapkan semua gestur buatan aplikasi harus dipertahankan.
D. Memberi giliran menjelaskan alasan dan mencoba alternatif yang dapat dibatalkan.

### 25. [p3-025 • PCK • P.1 • PG]

Tabel pemesanan mensyaratkan tanggal selesai tidak lebih awal daripada tanggal mulai. Murid merasa tipe DATE sudah menjamin aturan itu. Langkah guru terbaik adalah ...

A. Meminta murid mengganti format tampilan tanggal.
B. Menguji hubungan dua tanggal sah.
C. Memeriksa bahwa kedua tanggal dapat dibaca dan disimpan oleh basis data.
D. Mengganti nama kolom dengan istilah yang lebih panjang.

### 26. [p3-026 • PCK • PF.2 • Kategori]

Murid membuat fungsi resize gambar dan menganggap lebar serta tinggi boleh diubah sendiri-sendiri tanpa konsekuensi bentuk. Nilai kegiatan guru berikut sebagai Tepat atau Tidak tepat.

1. Memilih hasil yang ukuran filenya paling kecil sebagai bukti bentuk terjaga.
2. Membandingkan lingkaran sebelum dan sesudah skala horizontal berbeda dari vertikal.
3. Meminta murid menjelaskan hubungan faktor skala dan rasio aspek.

### 27. [p3-027 • PCK • P.6 • PG]

Pagination memakai ORDER BY skor saja, padahal beberapa baris berskor sama. Murid melihat urutan antarhalaman berubah meski data tidak diedit. Bukti pemahaman perbaikan paling kuat adalah ...

A. Menguji jumlah baris per halaman dan menganggap urutannya ikut terjamin.
B. Tampilan angka halaman menjadi lebih besar.
C. Nama kolom hasil dibuat lebih singkat.
D. Menambah pembanding unik pada skor seri, mengulang pembacaan, dan meminta alasan kestabilan urutan pada data tetap.

### 28. [p3-028 • PCK • P.4 • MCMA]

Guru memakai penguji deep link mobile. Murid menganggap semua tautan yang membuka aplikasi pasti boleh menjalankan aksi di dalamnya. Pilih kegiatan penggunaan alat yang kritis.

A. Menguji path dan parameter yang tidak dikenali aplikasi.
B. Menilai keamanan dari kemiripan alamat dengan nama aplikasi.
C. Membandingkan pembukaan layar dan pemeriksaan hak sebelum aksi sensitif.
D. Menerima semua parameter agar demonstrasi selalu berhasil.

### 29. [p3-029 • PCK • P.1 • PG]

Kelompok A berisi 2 respons dengan rata-rata 90; kelompok B berisi 8 respons dengan rata-rata 60. Murid mengambil rata-rata dua rata-rata untuk laporan gabungan. Tindakan guru paling tepat adalah ...

A. Menghitung kontribusi tiap respons dengan bobot ukuran kelompok.
B. Memberi bobot setengah untuk masing-masing rata-rata karena ada dua kelompok.
C. Membulatkan kedua rata-rata sebelum digabung.
D. Memeriksa rata-rata tiap kelompok sudah benar lalu menjumlahkan keduanya dengan bobot sama.

### 30. [p3-030 • PCK • PF.3 • Kategori]

Murid terbiasa teks ASCII dan mengira satu karakter selalu satu byte. Sebelum praktik pembacaan teks UTF-8, guru memetakan kesiapan. Nilai tindakan berikut sebagai Tepat atau Tidak tepat.

1. Membandingkan jumlah byte dan code point pada contoh huruf ASCII serta huruf non-ASCII.
2. Menentukan kesiapan hanya dari kecepatan mengetik.
3. Menganggap semua kegagalan decoding disebabkan file terlalu besar.

### 31. [p3-031 • PCK • P.2 • PG]

Pada tugas regex sederhana, murid dapat mencocokkan satu digit tetapi masih bergantung pada contoh untuk menyatakan satu atau lebih digit. Guru ingin mengurangi bantuan. Langkah berikut terbaik adalah ...

A. Menampilkan pola lengkap setiap kali murid mencoba contoh baru.
B. Memindahkan murid langsung ke pola bertingkat yang lebih panjang.
C. Menguji dua pola dengan petunjuk pengulangan yang dikurangi.
D. Meminta murid melengkapi bagian pola yang hilang dengan contoh yang identik setiap kali.

### 32. [p3-032 • PCK • PF.5 • MCMA]

Guru memakai emulator kamera saat mengajar pemindaian kode. Murid berhasil membaca gambar contoh, tetapi belum mencoba pencahayaan berbeda. Pilih semua langkah pengembangan praktik yang beralasan.

A. Memisahkan keberhasilan logika baca gambar dari integrasi kamera nyata.
B. Mengumpulkan hasil pada kondisi cahaya yang direncanakan.
C. Menyimpulkan emulator selalu lebih buruk sehingga harus dihapus.
D. Menilai apakah tugas tambahan mengubah alasan murid tentang batas pengujian.

### 33. [p3-033 • PCK • PF.2 • PG]

Dalam SQL, subquery daftar pengecualian dapat memuat NULL. Murid memakai NOT IN lalu heran tidak ada baris yang lolos. Guru ingin mengajarkan logika tiga nilai. Demonstrasi terbaik adalah ...

A. Memperpanjang timeout query agar hasil muncul.
B. Menguji NULL dalam kondisi NOT IN.
C. Memeriksa bahwa nilai biasa tidak ada dalam daftar sambil melewati pengujian NULL.
D. Mengganti nama tabel daftar pengecualian.

### 34. [p3-034 • PCK • PF.4 • Kategori]

Guru menyusun unit pemodelan modul. Proyek contoh memiliki A bergantung pada B dan B bergantung pada A sehingga build sulit disusun. Nilai tujuan belajar berikut sebagai Tepat atau Tidak tepat.

1. Murid menjelaskan siklus dan menilai pemisahan tanggung jawab untuk memutuskannya.
2. Murid menghafal pesan error build sebagai bukti utama penguasaan desain modul.
3. Murid mengganti warna diagram sebagai pengganti analisis ketergantungan.

### 35. [p3-035 • PCK • P.4 • MCMA]

Guru memakai penguji unggah web. Murid menganggap file aman jika ekstensi namanya sesuai. Pilih semua kegiatan yang mendukung literasi pengujian.

A. Memilih nama file yang paling pendek agar mudah diperiksa.
B. Membandingkan ekstensi, informasi tipe, dan isi file uji yang sengaja tidak cocok.
C. Meminta murid menjelaskan pemeriksaan server sesuai jenis berkas yang diizinkan.
D. Menerima berkas selama ikon pada komputer tampak benar.

### 36. [p3-036 • PCK • P.5 • PG]

Mitra pemantau suhu ruang penyimpanan pangan hanya memerlukan perubahan lambat, tetapi aplikasi mobile mengambil sampel sangat rapat dan baterai cepat habis. Kegiatan kontekstual terbaik adalah ...

A. Menguji interval sampel terhadap perubahan suhu yang dibutuhkan.
B. Menetapkan interval paling rapat berdasarkan kemampuan maksimum sensor.
C. Menghapus seluruh riwayat agar baterai tampak lebih awet.
D. Memilih interval dari aplikasi populer sebelum mencocokkannya dengan perubahan suhu ruang mitra.

### 37. [p3-037 • PCK • P.3 • PG]

Saat menyelidiki perubahan data yang tidak tampak di kode aplikasi, kelompok mulai saling menyalahkan. Ada trigger basis data yang belum mereka periksa. Guru ingin memulihkan diskusi berbukti. Langkah terbaik adalah ...

A. Menugasi anggota paling berpengalaman membaca kode sendiri lalu menyerahkan simpulan akhir.
B. Menilai setiap potongan kode aplikasi secara terpisah sebelum membuka log basis data.
C. Menyepakati bahasa netral lalu menelusuri log dan trigger.
D. Memberi nilai dari banyaknya dugaan yang diajukan.

### 38. [p3-038 • PCK • PF.2 • Kategori]

Sebuah implementasi interface mengembalikan null pada kondisi yang menurut kontrak harus mengembalikan list kosong. Guru ingin murid menilai substitusi implementasi. Nilai kegiatan berikut sebagai Tepat atau Tidak tepat.

1. Menganggap nama method sama sudah menjamin implementasi dapat saling menggantikan.
2. Menguji pemanggil yang sah terhadap dua implementasi.
3. Meminta murid membedakan perbaikan implementasi dan perubahan kontrak.

### 39. [p3-039 • PCK • PF.1 • PG]

Dalam proyek web SMK, urutan visual sudah menarik tetapi urutan baca DOM membingungkan pengguna. Guru ingin murid bertanggung jawab pada kegunaan produknya. Bukti terkuat adalah ...

A. Menggunakan screenshot sebagai bukti utama kesesuaian urutan informasi.
B. Menguji urutan baca dari struktur DOM, membandingkannya dengan kebutuhan pengguna, lalu menjelaskan revisi struktur yang dipilih.
C. Jumlah efek transisi yang berhasil dipasang.
D. Kemiripan screenshot dengan contoh industri.

### 40. [p3-040 • PCK • P.6 • MCMA]

Aplikasi mobile mengukur durasi latihan dari jam kalender. Ketika jam perangkat disesuaikan, durasi meloncat. Guru ingin menilai diagnosis murid. Pilih semua bukti yang relevan.

A. Murid membandingkan jam kalender dan sumber waktu berlalu yang sesuai platform.
B. Murid memperbesar angka timer agar loncatan lebih terlihat.
C. Murid menyimpan durasi sebagai teks agar tidak berubah.
D. Murid menguji penyesuaian jam pada skenario yang dikendalikan.

### 41. [p3-041 • PCK • P.6 • PG]

Tujuan SQL ialah menampilkan setiap transaksi beserta total per kelompok pada baris yang sama. Murid hanya menyerahkan hasil GROUP BY sehingga detail transaksi hilang. Bukti asesmen paling sesuai adalah ...

A. Jumlah kelompok pada hasil rekap.
B. Meminta hasil total setiap kelompok sebagai satu-satunya keluaran tugas.
C. Nama alias kolom yang mudah dibaca.
D. Menyajikan keluaran pada setiap transaksi disertai total kelompok, lalu menjelaskan mengapa agregat jendela mempertahankan baris detail.

### 42. [p3-042 • PCK • P.3 • Kategori]

Kelompok membuat pemutar video dengan audio terpisah. Saat suara terlambat, anggota saling memotong penjelasan. Guru ingin murid mengelola konflik sambil menelusuri sinkronisasi. Nilai tindakan berikut sebagai Tepat atau Tidak tepat.

1. Memberi jeda singkat lalu meminta tiap anggota menyebut pengamatan, bukan tuduhan.
2. Meminta kelompok menyepakati acuan waktu sebelum menguji offset audio.
3. Memilih usulan dari anggota yang paling keras mempertahankannya.

### 43. [p3-043 • PCK • P.1 • PG]

Alamat API pada web tetap menunjuk server uji meski file konfigurasi server produksi diubah. Nilai itu dimasukkan ke bundle saat build. Guru ingin meluruskan dugaan bahwa semua konfigurasi dibaca saat runtime. Demonstrasi terbaik adalah ...

A. Membandingkan bundle dari dua build dengan nilai konfigurasi berbeda.
B. Mengganti file konfigurasi lalu memuat ulang browser tanpa membuat bundle baru.
C. Mengurutkan nama file konfigurasi berdasarkan panjangnya.
D. Memeriksa bahwa file konfigurasi produksi berisi nilai benar sebelum menguji isi bundle yang dikirim.

### 44. [p3-044 • PCK • PF.3 • MCMA]

Murid mampu membaca koordinat mobile, tetapi menganggapnya titik pasti ketika aplikasi memeriksa batas lokasi. API juga memberi estimasi akurasi. Pilih semua dukungan prasyarat yang tepat.

A. Mengajarkan bahwa lebih banyak desimal selalu menghilangkan ketidakpastian.
B. Memodelkan posisi sebagai estimasi dengan daerah ketidakpastian.
C. Menguji titik dekat batas dengan beberapa nilai akurasi.
D. Menghapus informasi akurasi agar murid fokus pada koordinat.

### 45. [p3-045 • PCK • P.2 • PG]

Sebagian murid memahami satu kondisi CASE, tetapi kesulitan saat dua kondisi sama-sama benar. SQL memakai hasil dari WHEN pertama yang cocok. Guru menyiapkan dukungan bertahap. Langkah terbaik adalah ...

A. Menambah label keluaran tanpa mengubah atau membandingkan urutan kondisi.
B. Memberi tugas dengan sepuluh kondisi langsung.
C. Menukar urutan dua WHEN yang sama-sama cocok.
D. Meminta semua murid menyalin satu hasil akhir.

### 46. [p3-046 • PCK • PF.5 • Kategori]

Guru ingin memperbaiki pembelajaran program acak karena murid sulit membedakan bug dan variasi hasil. Ia mencoba penggunaan seed tetap saat diagnosis. Nilai evaluasi praktik berikut sebagai Tepat atau Tidak tepat.

1. Membandingkan kemampuan murid mereproduksi kegagalan sebelum dan sesudah strategi.
2. Menyimpulkan satu seed berhasil membuktikan program benar untuk semua masukan.
3. Memeriksa apakah murid tetap menguji beberapa seed setelah diagnosis.

### 47. [p3-047 • PCK • PF.4 • PG]

Guru menyusun unit tes otomatis web. Tes murid gagal setelah teks tombol diterjemahkan meski fungsi tetap sama. Tujuan yang paling sesuai untuk unit lanjutan adalah ...

A. Murid mempertahankan semua teks antarmuka agar tes lama tidak berubah.
B. Murid memilih acuan tes berdasarkan perilaku yang ingin dijamin.
C. Menjadikan jumlah selector yang ditulis sebagai ukuran utama keberhasilan tes.
D. Mengganti seluruh tes dengan pemeriksaan bahwa halaman berhasil dibuka setelah teks diterjemahkan.

### 48. [p3-048 • PCK • P.4 • MCMA]

Guru memakai alat pemantau Bluetooth untuk aplikasi pengendali lampu. Murid menyimpulkan status tersambung berarti perintah sudah dijalankan perangkat. Pilih semua kegiatan yang tepat.

A. Membandingkan status koneksi, pengiriman perintah, dan konfirmasi perangkat.
B. Menganggap ikon koneksi sebagai bukti tunggal lampu berubah.
C. Menguji kasus perintah gagal meski koneksi masih ada.
D. Meminta murid menjelaskan tampilan ketika konfirmasi belum diterima.

### 49. [p3-049 • PCK • PF.4 • PG]

Unit laporan basis data akan memakai ringkasan tersimpan untuk mempercepat pembacaan. Pengguna membutuhkan data yang dapat berubah setiap jam. Guru ingin tujuan, kegiatan, dan asesmen selaras. Pilihan terbaik adalah ...

A. Menilai hanya waktu baca laporan setelah ringkasan tersimpan dipakai.
B. Menghapus penanda waktu pembaruan dari laporan.
C. Meminta murid menghafal semua nama tabel sumber.
D. Merancang jadwal pembaruan ringkasan dan menguji apakah jeda kesegaran masih memenuhi kebutuhan pengguna yang berubah setiap jam.

### 50. [p3-050 • PCK • PF.1 • Kategori]

Dalam proyek pengolah file besar di SMK, program berhasil pada contoh kecil tetapi kehabisan memori pada data mitra. Nilai bukti kesiapan kerja berikut sebagai Tepat atau Tidak tepat.

1. Murid hanya menyerahkan hasil dari file contoh kecil.
2. Murid menjelaskan pemrosesan bertahap dan menguji penggunaan memori.
3. Murid mendokumentasikan batas ukuran dan kondisi pengujiannya.

### 51. [p3-051 • PU • PF.4 • PG]

Guru merencanakan unit tentang menilai kekuatan argumen. Ia sudah memilih debat yang menarik, tetapi asesmen hanya meminta definisi argumen. Langkah perbaikan paling tepat adalah ...

A. Menetapkan bukti penilaian argumen sebelum merancang dukungan debat.
B. Memperbaiki aturan giliran debat sebelum menelaah bukti asesmen.
C. Memperpanjang daftar definisi untuk ujian akhir.
D. Mempertahankan kuis definisi lalu menambah catatan bahwa kegiatan debat berlangsung aktif.

### 52. [p3-052 • PU • P.2 • MCMA]

Guru memilih antara penyelidikan masalah dan proyek produk. Kelas perlu belajar menimbang dua solusi masalah banjir dari data yang tersedia; produk fisik bukan tujuan. Pilih semua keputusan yang tepat.

A. Memilih proyek miniatur karena semua pembelajaran aktif harus menghasilkan benda.
B. Memulai masalah dan membimbing penyelidikan alasan memilih solusi.
C. Menilai dari keindahan poster sebagai bukti utama.
D. Meminta perbandingan solusi beserta batas bukti sebelum simpulan.

### 53. [p3-053 • PU • P.1 • PG]

Murid menemukan dugaan pola pada tiga contoh bilangan. Guru memakai discovery learning dan ingin mencegah generalisasi terlalu cepat. Tindakan terbaik adalah ...

A. Mengumumkan bahwa setiap pola dari tiga contoh pasti benar.
B. Menambah contoh yang semuanya mendukung dugaan awal sebagai pembuktian akhir.
C. Menguji dugaan pada contoh pembeda lalu membahas batasnya.
D. Meminta tiap kelompok menyatakan dugaan dengan istilah matematika yang lebih baku.

### 54. [p3-054 • PU • P.2 • Kategori]

Guru merancang unit peta wilayah sejak awal untuk kelas dengan kebutuhan akses beragam. Tujuan tetap menafsirkan hubungan lokasi. Nilai rancangan berikut sebagai Tepat atau Tidak tepat.

1. Menyediakan peta dengan label jelas serta uraian hubungan spasial yang setara.
2. Mengizinkan penjelasan lisan atau tertulis dengan kriteria hubungan lokasi yang sama.
3. Membebaskan semua murid yang memakai dukungan dari penalaran lokasi.

### 55. [p3-055 • PU • P.2 • PG]

Asesmen membaca menunjukkan tiga tingkat capaian. Setelah dua pekan, beberapa murid telah maju. Guru menerapkan pembelajaran sesuai tahap capaian. Keputusan terbaik adalah ...

A. Mempertahankan kelompok awal sambil menambah jumlah latihan yang sama.
B. Meninjau kelompok memakai bukti terbaru.
C. Memindahkan semua murid ke tugas tersulit secara bersamaan.
D. Menetapkan kelompok dari usia yang sama saja.

### 56. [p3-056 • PU • P.3 • MCMA]

Seorang murid kecewa setelah idenya ditolak dan hendak merobek hasil kerja kelompok. Guru ingin menumbuhkan pengelolaan emosi dan tanggung jawab. Pilih semua langkah yang tepat.

A. Membantu murid mengenali perasaan dan mengambil jeda aman.
B. Langsung memaksa murid menyetujui ide kelompok agar cepat selesai.
C. Setelah tenang, meminta murid memilih cara menyampaikan keberatan yang tidak merusak.
D. Menganggap semua perilaku saat kecewa tidak perlu ditindaklanjuti.

### 57. [p3-057 • PU • S.1 • PG]

Dua murid berbeda pendapat tentang pembagian peran dan mulai menganggap temannya tidak mau bekerja. Guru ingin membantu komunikasi empatik. Respons terbaik adalah ...

A. Menilai pembagian peran dari jumlah pekerjaan yang terlihat selesai pada akhir pertemuan.
B. Meminta keduanya menuliskan usulan masing-masing tanpa memeriksa maksud teman.
C. Mengganti seluruh anggota kelompok sebelum mendengar masing-masing.
D. Meminta tiap murid memparafrasekan maksud teman sebelum bersepakat.

### 58. [p3-058 • PU • K.1 • Kategori]

Guru merasa marah ketika murid menyela penjelasannya. Ia menyadari nada suaranya mulai meninggi. Nilai respons berikut sebagai Tepat atau Tidak tepat.

1. Mengambil jeda singkat dan kembali menyatakan batas perilaku dengan tenang.
2. Menetapkan konsekuensi saat marah agar tampak konsisten.
3. Meninjau kejadian bersama murid setelah kondisi lebih tenang.

### 59. [p3-059 • PU • K.3 • PG]

Murid telah berlatih berulang dengan cara yang sama tetapi hasilnya belum membaik. Guru ingin membangun pola pikir bertumbuh yang disertai strategi. Respons terbaik adalah ...

A. Menelaah pola salah lalu mencoba dan memantau strategi baru.
B. Menambah durasi latihan dengan strategi lama sebagai satu-satunya tindak lanjut.
C. Menyimpulkan kemampuan tidak dapat berkembang.
D. Menetapkan target hasil lebih rendah sambil tetap mempertahankan cara latihan yang tidak membantu.

### 60. [p3-060 • PU • P.6 • MCMA]

Murid menilai drafnya sendiri dengan rubrik dan menyadari simpulan belum didukung data. Guru ingin penilaian diri menjadi bagian pembelajaran. Pilih semua tindakan yang tepat.

A. Mengumpulkan skor diri saja sebagai akhir kegiatan.
B. Meminta murid memilih bagian yang perlu diperbaiki dan alasannya.
C. Membandingkan draf revisi dengan sasaran yang dipilih murid.
D. Mengajak murid mencatat strategi yang akan dipakai pada tugas berikutnya.

### 61. [p3-061 • PU • P.6 • PG]

Exit ticket menunjukkan separuh kelas dapat memilih jawaban benar tetapi alasan mereka bertentangan dengan konsep. Guru harus menentukan kegiatan besok. Pilihan terbaik adalah ...

A. Mencatat nilai benar lalu melanjutkan topik karena target angka tercapai.
B. Mengulang pilihan soal yang sama untuk memperlancar pengenalan jawaban.
C. Membahas dua alasan pembanding lalu mengecek alasan pada kasus baru.
D. Memberi tambahan waktu pada soal identik lalu menilai kembali pilihan akhirnya.

### 62. [p3-062 • PU • P.6 • Kategori]

Guru menentukan capaian akhir unit berdasarkan tugas kinerja dan penjelasan individu. Satu murid sangat cemas saat presentasi, tetapi produk dan percakapan terstruktur memberi bukti penguasaan. Nilai keputusan berikut sebagai Tepat atau Tidak tepat.

1. Menggunakan kelancaran presentasi sebagai pengganti seluruh kriteria penguasaan materi.
2. Menafsirkan beberapa bukti terhadap kriteria tujuan yang sama.
3. Mencatat kebutuhan dukungan komunikasi tanpa otomatis menghapus bukti capaian materi.

### 63. [p3-063 • PU • P.3 • PG]

Menjelang ujian, murid mengatakan gugup membuatnya beralih soal sebelum membaca tujuan pertanyaan. Guru ingin membantu kesadaran proses, bukan memberi trik menebak. Langkah paling tepat adalah ...

A. Menaikkan target kecepatan berpindah soal sebelum membahas pemicu kegugupan.
B. Melatih jeda sadar membaca tuntutan soal.
C. Menjamin semua murid akan lulus jika mengikuti nasihat guru.
D. Menghapus seluruh latihan soal menjelang ujian.

### 64. [p3-064 • PU • P.4 • MCMA]

Tim guru ingin mengganti lembar latihan dengan aplikasi yang fiturnya lebih tinggi menurut SAMR. Tujuan unit sudah tercapai lewat latihan sederhana; waktu belajar terbatas. Pilih semua keputusan yang beralasan.

A. Menilai manfaat perubahan tugas terhadap tujuan sebelum memilih alat.
B. Memilih tingkat tertinggi agar pembelajaran otomatis mendalam.
C. Menghapus alat sederhana meski memberi bukti belajar yang baik.
D. Mempertahankan cara sederhana bila alat baru tidak memberi manfaat yang diperlukan.

### 65. [p3-065 • PU • P.5 • PG]

Kelas membahas kisah lokal, tetapi satu versi yang dianggap umum tidak sesuai pengalaman beberapa murid. Guru ingin pembelajaran tanggap budaya. Respons terbaik adalah ...

A. Memilih versi kelompok terbesar sebagai satu-satunya pengalaman yang sah.
B. Memakai satu versi buku sebagai pengganti seluruh penjelasan pengalaman murid.
C. Meminta murid yang berbeda menyesuaikan ceritanya dengan buku.
D. Menelaah versi kisah dan sumber bersama murid.

### 66. [p3-066 • PU • K.1 • Kategori]

Murid meminta memilih isu diskusi sendiri. Salah satu usulan berpotensi membuka pengalaman pribadi teman yang belum memberi persetujuan. Guru ingin menghargai suara murid sekaligus menjaga martabat. Nilai keputusan berikut sebagai Tepat atau Tidak tepat.

1. Menawarkan pembahasan kasus rekaan dengan persoalan serupa.
2. Membiarkan identitas teman dibahas karena keputusan berasal dari mayoritas.
3. Menjelaskan batas pilihan dan melibatkan murid mencari bentuk diskusi yang aman.

### 67. [p3-067 • PU • K.2 • PG]

Dari rekaman pelajaran, guru melihat ia memberi pertanyaan menantang kepada murid tertentu dan pertanyaan ingatan kepada yang lain. Nilai awal mereka ternyata sebanding. Langkah refleksi paling tepat adalah ...

A. Menelaah ekspektasi dan merancang kesempatan menalar yang adil.
B. Membandingkan nilai akhir saja untuk menyatakan pola pertanyaan guru sudah adil.
C. Mengganti semua pertanyaan menjadi hafalan.
D. Menjadikan kesan kelancaran berbicara sebagai dasar tetap pembagian pertanyaan.

### 68. [p3-068 • PU • S.2 • MCMA]

Sekolah ingin menyesuaikan dukungan untuk murid yang sering kewalahan oleh tugas. Guru memiliki catatan kelas; keluarga melaporkan murid dapat bekerja baik dengan jadwal singkat. Pilih semua langkah kolaboratif yang tepat.

A. Menentukan dukungan hanya dari catatan salah satu pihak.
B. Menyepakati dukungan terbatas dan bukti kemajuan yang dipantau bersama.
C. Melibatkan murid menjelaskan bagian tugas yang paling membebaninya.
D. Menganggap laporan keluarga pasti membantah laporan guru.

### 69. [p3-069 • PU • S.3 • PG]

Komunitas guru mengadakan lesson study. Pengamat cenderung menilai gaya bicara guru model, padahal fokus yang disepakati ialah cara murid menghubungkan dua konsep. Kontribusi paling tepat adalah ...

A. Membandingkan jumlah slide tiap guru model.
B. Membandingkan kejelasan penjelasan guru model sebagai satu-satunya fokus telaah.
C. Menelaah catatan respons murid bersama komunitas.
D. Meminta guru model menjelaskan maksud setiap langkah tanpa membawa catatan respons murid.

### 70. [p3-070 • PU • PF.1 • Kategori]

Di sekolah dasar, murid ingin menentukan aturan penggunaan pojok baca. Guru menargetkan kemandirian sekaligus tanggung jawab terhadap hak teman. Nilai tindakan berikut sebagai Tepat atau Tidak tepat.

1. Membimbing murid menimbang akibat aturan bagi pembaca lain.
2. Menyepakati aturan yang dapat ditinjau setelah dicoba.
3. Menyerahkan semua konflik kepada murid tanpa dukungan karena otonomi berarti guru tidak terlibat.

### 71. [p3-071 • PU • PF.3 • PG]

Murid menolak tugas grafik dan disebut kurang motivasi. Percakapan menunjukkan ia ingin menyelesaikannya tetapi tidak memahami skala sumbu; pada tugas dengan skala sederhana ia bertahan lebih lama. Keputusan awal terbaik adalah ...

A. Menambah hadiah penyelesaian sambil mempertahankan skala yang belum dipahami.
B. Menguji prasyarat skala dan menyiapkan dukungan yang sesuai.
C. Menetapkan murid tidak berminat pada semua kegiatan numerik.
D. Mengurangi seluruh data grafik menjadi satu angka agar murid segera menyelesaikan tugas.

### 72. [p3-072 • PU • PF.5 • MCMA]

Guru mencoba strategi penjelasan berpasangan. Nilai tugas langsung meningkat, tetapi ia ingin mengetahui apakah murid dapat memakai konsep secara mandiri beberapa hari kemudian. Pilih semua langkah evaluasi praktik yang tepat.

A. Memberi tugas baru yang setara setelah jeda dengan kriteria yang sama.
B. Menggunakan kesukaan murid sebagai bukti tunggal keberhasilan.
C. Membandingkan alasan murid saat bekerja sendiri dengan saat berpasangan.
D. Menyimpulkan nilai langsung sudah cukup membuktikan dampak jangka panjang.

### 73. [p3-073 • PU • K.3 • PG]

Murid berulang kali meninggalkan alat bersama dalam keadaan berantakan. Teguran singkat belum mengubah kebiasaan. Guru ingin disiplin positif yang membangun tanggung jawab. Keputusan terbaik adalah ...

A. Mengganti alat bersama dengan alat individual agar kewajiban merapikan tidak perlu dibahas lagi.
B. Mengabaikan kondisi alat agar hubungan tetap nyaman.
C. Menambah frekuensi teguran dengan prosedur merapikan yang tetap belum diajarkan.
D. Menyepakati pemulihan dampak dan meninjau kebiasaan merapikan.

### 74. [p3-074 • PU • S.1 • Kategori]

Murid mengatakan penjelasan guru terlalu cepat. Guru merasa sudah mengulang beberapa kali. Ia ingin merespons empatik sekaligus menjaga kebutuhan kelas. Nilai respons berikut sebagai Tepat atau Tidak tepat.

1. Menjelaskan bahwa pengulangan membuktikan semua murid seharusnya paham.
2. Meminta contoh bagian yang sulit lalu memparafrasekan keluhan murid.
3. Menyepakati cara memberi tanda ketika penjelasan perlu dijeda.

### 75. [p3-075 • PU • S.2 • PG]

Dalam proyek pameran, mitra menuntut produk cepat sementara guru ingin murid belajar merencanakan dan mengevaluasi proses. Langkah kolaborasi paling tepat adalah ...

A. Menyepakati tonggak dan bukti proses dengan mitra serta murid.
B. Membiarkan mitra menyelesaikan bagian sulit atas nama murid.
C. Membebaskan kelompok menentukan jadwal masing-masing tanpa menyepakati tonggak dengan mitra.
D. Memakai mutu produk akhir sebagai satu-satunya bukti meski tujuan mencakup perencanaan.

### 76. [p3-076 • PU • K.2 • MCMA]

Guru merasa semua kegagalan murid merupakan kesalahan dirinya, lalu menambah bantuan hingga murid tidak lagi mencoba sendiri. Pilih langkah refleksi yang tepat.

A. Menghentikan seluruh bantuan agar murid sepenuhnya mandiri.
B. Memilah bukti tentang kebutuhan murid dan dampak bantuan yang diberikan.
C. Menganggap kerja keras guru selalu menjamin hasil yang sama untuk semua murid.
D. Menyepakati dengan rekan kapan bantuan ditambah atau dikurangi berdasarkan bukti.

### 77. [p3-077 • PU • P.1 • PG]

Setelah tugas penyelidikan, murid menulis “harus lebih teliti” tetapi terus mengulang kesalahan memilih bukti. Guru ingin refleksi mengubah cara belajar. Respons terbaik adalah ...

A. Meminta refleksi memakai istilah teori yang lebih lengkap.
B. Meminta murid mengurutkan kesulitan yang dirasakan tanpa menghubungkannya dengan rencana berikutnya.
C. Mengaitkan satu kesalahan dengan langkah pemeriksaan bukti berikutnya.
D. Menerima semua refleksi sebagai bukti pemahaman yang sama.

### 78. [p3-078 • PU • S.3 • Kategori]

Komunitas memperkenalkan strategi diskusi yang berhasil di kelas kecil. Guru mengajar kelas besar dengan waktu terbatas. Nilai kontribusi berikut sebagai Tepat atau Tidak tepat.

1. Mengajukan adaptasi peran dan melaporkan bukti penerapannya ke komunitas.
2. Menyalin seluruh prosedur sebagai kewajiban semua sekolah.
3. Membahas bagian prinsip yang perlu dipertahankan dan bagian teknis yang dapat diubah.

### 79. [p3-079 • PU • P.4 • PG]

Murid memakai AI untuk menyusun draf laporan, tetapi penjelasan lisannya tidak sesuai dengan klaim dalam draf. Aturan tugas mengizinkan AI sebagai bantuan dengan pengungkapan penggunaannya. Tindakan guru paling tepat adalah ...

A. Melarang semua bantuan digital secara permanen setelah satu kasus.
B. Meminta jejak penggunaan AI dan penjelasan ulang klaim berbukti.
C. Memakai kelancaran draf sebagai bukti utama bahwa seluruh klaim sudah dipahami.
D. Meminta murid mengganti semua kalimat draf dengan sinonim sebelum menilai proses penggunaannya.

### 80. [p3-080 • PU • P.6 • MCMA]

Guru menilai dua sasaran: ketepatan penalaran dan kualitas penyajian laporan. Ia membutuhkan informasi bagian yang perlu ditindaklanjuti, bukan hanya urutan nilai akhir. Pilih semua rancangan asesmen yang tepat.

A. Memakai kriteria terpisah dengan deskripsi capaian untuk kedua sasaran.
B. Mengembalikan hasil per kriteria beserta bukti pada laporan.
C. Memberi satu kesan umum tanpa menunjukkan dimensi yang dinilai.
D. Menentukan tindak lanjut dari pola capaian pada tiap kriteria.

## Kunci dan pembahasan

### 1. p3-001 — B

Dalam perancangan mundur, bukti harus menunjukkan kemampuan yang ditargetkan. Perubahan alamat pada kasus baru menguji alasan rancangan, bukan kemiripan dengan contoh.

- A: Definisi belum membuktikan keputusan perbaikan pada kasus.
- B: Uji baru memperlihatkan apakah anomali pembaruan teratasi.
- C: Kesamaan contoh belum menguji apakah murid memahami alasan perbaikan pada kasus baru.
- D: Jumlah tabel saja tidak menjamin rancangan mengatasi masalah.

### 2. p3-002 — Tidak tepat / Tepat / Tepat

Murid perlu membedakan hasil logika dan evaluasi ekspresi. Log pemanggilan menjadi bukti pembentukan konsep.

- 1: Aturan itu bertentangan dengan short circuit yang dinyatakan.
- 2: Perbandingan menunjukkan kapan operand kedua dievaluasi.
- 3: Efek samping dapat tidak terjadi sehingga perlu dipertimbangkan.

### 3. p3-003 — D

Asesmen harus menguji batas hak akses di server. Menyembunyikan kontrol hanya mengubah antarmuka.

- A: Tampilan belum menguji permintaan langsung ke sumber.
- B: ID sulit ditebak tidak menggantikan pemeriksaan hak akses.
- C: Akses sah perlu berjalan, tetapi belum membuktikan akses ke berkas orang lain ditolak.
- D: Uji itu langsung memeriksa otorisasi sumber yang bermasalah.

### 4. p3-004 — A, C

Kesiapan kerja mencakup keputusan distribusi dan tanggung jawab atas kredensial. Rahasia bersama dalam aplikasi klien bukan terlindungi hanya karena kodenya dikompilasi.

- A: Pemeriksaan menguji asumsi kerahasiaan distribusi aplikasi.
- B: Nama variabel tidak menjamin isi paket tidak dapat diperiksa.
- C: Rancangan memindahkan kewenangan rahasia ke lingkungan yang dapat dikendalikan.
- D: Ukuran paket tidak menunjukkan perlindungan rahasia.

### 5. p3-005 — A

Masalahnya bukan penjumlahan, melainkan penggabungan dua keadaan berbeda. Snapshot yang konsisten perlu diuji pada dukungan basis data yang digunakan.

- A: Urutan memperlihatkan campuran keadaan yang berbeda.
- B: Pembulatan tidak menyelesaikan waktu pembacaan berbeda.
- C: Kondisi tenang dapat menghasilkan laporan benar tetapi menyembunyikan masalah pembacaan serentak.
- D: Format teks tidak memberi konsistensi pembacaan.

### 6. p3-006 — Tepat / Tidak tepat / Tepat

Kebutuhan materi terletak pada cara menghitung pekerjaan program terhadap ukuran masukan. Kode pendek belum tentu murah.

- 1: Perubahan ukuran membantu mengungkap model biaya murid.
- 2: Jumlah bahasa tidak menunjukkan pemahaman pertumbuhan operasi.
- 3: Perbandingan menanggapi prasyarat hubungan struktur dan biaya.

### 7. p3-007 — C

CORS mengatur perilaku berbagi response pada browser, bukan menggantikan pemeriksaan identitas dan hak pada server.

- A: Hilangnya pesan belum menguji otorisasi layanan.
- B: Keamanan transport tidak membuktikan otorisasi sumber atau menjelaskan pembatasan lintas origin.
- C: Dua bukti membedakan CORS dari kontrol akses server.
- D: Penghapusan informasi menghindari konsep yang sedang salah dipahami.

### 8. p3-008 — B, D

Sumber lokal memberi alasan teknis memeriksa kesegaran data, bukan sekadar menambahkan tema nelayan pada tugas.

- A: Ketelitian penulisan bukan bukti waktu pengukuran.
- B: Umur data penting untuk kebutuhan pengguna yang bergerak.
- C: Penyederhanaan menghilangkan informasi yang relevan.
- D: Skenario menautkan umur data dengan tindakan aplikasi.

### 9. p3-009 — B

Waktu lokal tidak dapat langsung dibandingkan lintas zona. Murid perlu memeriksa offset dan acuan sebelum menarik simpulan urutan.

- A: Nama tidak menjelaskan urutan peristiwa.
- B: Acuan bersama memungkinkan pembandingan waktu yang bermakna.
- C: Format seragam belum membuat nilai lokal merujuk pada acuan yang sama.
- D: Kerincian format tidak memastikan acuan waktu sama.

### 10. p3-010 — Tepat / Tepat / Tidak tepat

Rancangan inklusif menyediakan beberapa representasi sejak awal sambil mempertahankan konstruk belajar.

- 1: Beberapa petunjuk membantu akses terhadap makna status.
- 2: Uji memeriksa ketergantungan informasi pada warna.
- 3: Penggantian sasaran tidak menilai interpretasi status proses.

### 11. p3-011 — D

Umpan balik mengarah pada jaminan pemrosesan di server, misalnya identitas operasi yang diproses sekali, bukan sekadar mengubah tampilan tombol.

- A: Keterlihatan tidak menjamin satu pemrosesan.
- B: Konfirmasi dapat mengurangi klik tidak sengaja, tetapi belum menjamin server menangani request berulang secara tepat.
- C: Uji alur normal belum memunculkan pengiriman ulang yang menjadi sumber masalah.
- D: Uji melampaui penguncian tombol untuk memeriksa pemrosesan berulang.

### 12. p3-012 — A, C, D

Perancangan mundur membedakan instalasi baru dan upgrade. Aktivitas harus menghadirkan kondisi awal yang hendak dipertahankan.

- A: Bukti sesuai tujuan mempertahankan data.
- B: Instalasi bersih belum memeriksa perpindahan data lama.
- C: Kondisi awal memungkinkan pengujian tujuan sebenarnya.
- D: Aturan diperlukan agar data lama memiliki makna setelah skema berubah.

### 13. p3-013 — A

Scaffolding dikurangi berdasarkan bukti kesiapan. Prediksi dan data uji memberi ruang keputusan murid sebelum pengaman dilepas.

- A: Tugas mempertahankan tantangan sambil memberi pengaman yang dapat dikurangi.
- B: Petunjuk tetap dapat membantu penyelesaian, tetapi belum menguji kemandirian yang mulai ditargetkan.
- C: Risiko data nyata tidak diperlukan untuk mengukur kesiapan.
- D: Penggantian tidak mengembangkan keputusan yang sudah mulai dikuasai.

### 14. p3-014 — Tidak tepat / Tepat / Tepat

Pemilihan desain dinilai melalui variasi kebutuhan, bukan menghafal bahwa pewarisan atau komposisi selalu lebih baik.

- 1: Banyak subclass dapat menunjukkan kombinasi tanggung jawab yang sulit diubah.
- 2: Perubahan independen memperlihatkan kebutuhan memisahkan tanggung jawab.
- 3: Perbandingan menilai konsekuensi desain terhadap kebutuhan perubahan.

### 15. p3-015 — C

Perbaikan praktik dinilai dari keputusan murid pada tugas baru, bukan sekadar keberhasilan demonstrasi alat.

- A: Ukuran file merupakan bukti teknis parsial, bukan alasan memilih trade-off mutu dan waktu muat.
- B: Penilaian visual memberi sebagian bukti mutu, tetapi belum menunjukkan keputusan trade-off dengan waktu muat.
- C: Bukti menghubungkan pengukuran dengan keputusan yang dapat ditransfer.
- D: Kinerja guru belum menunjukkan perubahan pemahaman murid.

### 16. p3-016 — A, B

Uji logika dan uji integrasi menjawab pertanyaan berbeda. Keduanya perlu dibedakan agar keberhasilan satu tidak dianggap membuktikan lainnya.

- A: Masukan terkendali membantu memeriksa logika pengolahan.
- B: Pengujian ini memeriksa perilaku integrasi sensor.
- C: Daftar sensor bukan bukti aturan hitung bekerja.
- D: Ikon tidak menunjukkan ketepatan pengolahan data.

### 17. p3-017 — B

Konteks budaya memengaruhi kebutuhan pembandingan teks. Murid perlu menilai pilihan teknis tanpa menganggap satu kebiasaan ejaan berlaku bagi semua pengguna.

- A: Penghapusan mengubah informasi budaya untuk menyesuaikan alat.
- B: Aturan teknis ditelaah terhadap kebutuhan bahasa setempat.
- C: Bawaan alat dapat menjadi titik awal, tetapi belum diperiksa terhadap kebutuhan bahasa pengguna setempat.
- D: Padanan ejaan dapat membantu mengenali nama, tetapi tidak otomatis menetapkan perilaku collation sesuai kebutuhan pengguna.

### 18. p3-018 — Tepat / Tidak tepat / Tepat

Masalah bergantung pada semantik binding bahasa yang dinyatakan, bukan semua callback selalu salah. Contoh kecil menampakkan waktu pembacaan nilai.

- 1: Dua waktu memperlihatkan kapan nilai dibaca.
- 2: Label tidak mengubah binding yang ditangkap.
- 3: Perbandingan menguji penyebab perilaku callback.

### 19. p3-019 — D

Kebutuhan belajar terletak pada representasi keadaan yang dapat dibawa tautan. State memori tidak otomatis dikirim kepada penerima tautan.

- A: Styling bukan prasyarat berbagi keadaan pencarian.
- B: Uji ini dapat mempertahankan state memori tetapi belum menunjukkan keadaan yang ikut dalam tautan.
- C: Nama browser belum mengungkap model state.
- D: Pembedaan menargetkan prasyarat navigasi dan berbagi tautan.

### 20. p3-020 — A, C

Dukungan menyediakan cara mengamati yang beragam, tetapi semua tetap menilai fungsi kontrol, bukan sekadar mengoperasikan alat bantu.

- A: Daftar fungsi menjadi acuan saat menilai makna label.
- B: Posisi bukan pengganti identifikasi fungsi yang dapat diakses.
- C: Dua cara pengamatan membuka akses pada tujuan pengujian yang sama.
- D: Warna tidak mengukur kecocokan label dengan fungsi.

### 21. p3-021 — A

Tujuan kejuruan mencakup pekerjaan yang dapat ditelusuri. Jejak harus relevan dan aksesnya dikelola, bukan mengumpulkan informasi pribadi tanpa tujuan.

- A: Jejak menghubungkan keterampilan dengan akuntabilitas pekerjaan.
- B: Banyak perubahan tidak menunjukkan pelaku, waktu, dan alasan koreksi dapat ditelusuri.
- C: Kesamaan tampilan bukan bukti jejak perubahan.
- D: Penghapusan justru menghilangkan bukti yang diminta pengguna.

### 22. p3-022 — Tepat / Tepat / Tidak tepat

Asesmen meminta penalaran tentang sifat dan keterbatasan tes. Invarian memperluas bukti, tetapi perlu dilengkapi contoh yang membedakan operasi membalik dari tidak mengubah urutan.

- 1: Sifat itu menguji hubungan dua pemanggilan pada banyak masukan.
- 2: Invarian ini memeriksa bahwa operasi tidak membuang atau menambah elemen.
- 3: Fungsi identitas pun dapat memenuhi kedua sifat sehingga contoh hasil tetap diperlukan.

### 23. p3-023 — C

Tahap dasar dan pengayaan dipisahkan berdasarkan tujuan serta kesiapan. Penggunaan teknologi lebih banyak bukan otomatis pembelajaran lebih baik.

- A: Pilihan itu dapat bekerja pada kondisi normal, tetapi tidak memenuhi kebutuhan ketika script gagal.
- B: Animasi tidak membuktikan informasi terbaca saat script gagal.
- C: Tahapan menjaga tujuan inti sambil menyesuaikan dukungan.
- D: Pesan itu menghindari kebutuhan menyediakan konten awal yang dapat dibaca.

### 24. p3-024 — B, D

Diskusi perlu standar bukti dan iklim yang aman. Konflik desain tidak selesai hanya dengan memilih orang yang dianggap paling mahir.

- A: Kecepatan tidak menjawab konflik gestur dengan sistem.
- B: Bukti bersama mengalihkan debat pribadi menjadi penilaian desain.
- C: Keputusan itu mengabaikan interaksi dengan navigasi sistem.
- D: Prosedur aman mendukung partisipasi serta eksperimen bermakna.

### 25. p3-025 — B

Tipe memeriksa bentuk nilai tertentu, bukan seluruh aturan bisnis antarkolom. Data tandingan membantu murid menemukan kebutuhan constraint tambahan.

- A: Format tidak memeriksa hubungan dua nilai.
- B: Contoh membedakan validitas tipe dan aturan domain.
- C: Dua nilai dapat sama-sama valid sebagai DATE tetapi melanggar hubungan mulai dan selesai.
- D: Nama kolom tidak menegakkan syarat hubungan nilai.

### 26. p3-026 — Tidak tepat / Tepat / Tepat

Pemahaman grafis memerlukan hubungan proporsi dan transformasi, bukan hanya tampilan atau ukuran file hasil.

- 1: Ukuran file tidak menjamin proporsi gambar sama.
- 2: Bentuk lingkaran memperlihatkan distorsi proporsi.
- 3: Penjelasan menautkan hasil visual dengan perhitungan ukuran.

### 27. p3-027 — D

Data tetap dengan nilai seri memerlukan pemecah seri agar urutan deterministik. Ini berbeda dari persoalan data baru masuk saat pagination berjalan.

- A: Jumlah baris dan kestabilan urutan pada skor seri merupakan dua hal berbeda.
- B: Ukuran tampilan tidak memengaruhi pengurutan query.
- C: Nama keluaran tidak menentukan urutan.
- D: Pembanding tambahan menetapkan urutan total yang stabil untuk data tetap.

### 28. p3-028 — A, C

Alat dipakai untuk menelaah batas masukan dan kewenangan. Kemampuan membuka aplikasi tidak otomatis memberi izin melakukan setiap aksi.

- A: Masukan tak dikenal menguji batas penafsiran tautan.
- B: Kemiripan teks tidak membuktikan validitas atau hak menjalankan aksi.
- C: Dua tahap membedakan navigasi dari otorisasi.
- D: Penerimaan bebas menghilangkan pemeriksaan yang diperlukan.

### 29. p3-029 — A

Rata-rata gabungan membobot menurut banyaknya respons. Contoh ini menghasilkan 66, bukan 75; perbedaannya memberi bukti akibat memperlakukan kelompok tidak seimbang sebagai setara.

- A: Jumlah anggota yang berbeda harus tercermin dalam kontribusi total.
- B: Bobot kelompok sama mengabaikan jumlah respons yang tidak sama.
- C: Pembulatan tidak memperbaiki bobot kelompok.
- D: Kebenaran rata-rata kelompok belum membenarkan bobot sama ketika jumlah respons berbeda.

### 30. p3-030 — Tepat / Tidak tepat / Tidak tepat

Karakter yang terlihat, code point, dan byte tidak selalu satu banding satu. Guru perlu menemukan asumsi representasi sebelum memilih bantuan pembacaan teks.

- 1: Perbandingan menargetkan asumsi representasi satu byte.
- 2: Kecepatan tidak menjelaskan representasi teks.
- 3: Ukuran file tidak menentukan kecocokan encoding.

### 31. p3-031 — C

Bantuan disesuaikan dengan batas kemampuan saat ini. Tugas baru yang setara dapat menunjukkan apakah dukungan mulai dapat dikurangi.

- A: Contoh lengkap membantu meniru tetapi belum memberi ruang untuk mengurangi bantuan berdasarkan kesiapan.
- B: Lompatan tuntutan belum didukung bukti kesiapan.
- C: Petunjuk terbatas menjaga tantangan dan membuka bukti kemandirian.
- D: Tugas itu memberi sebagian praktik, tetapi belum memperlihatkan transfer ketika bantuan dan contoh mulai diubah.

### 32. p3-032 — A, B, D

Pengembangan praktik menguji batas representasi emulator dan pemahaman murid terhadapnya. Pengalaman satu gambar tidak mewakili seluruh kondisi penggunaan.

- A: Dua keberhasilan tersebut memerlukan bukti berbeda.
- B: Variasi kondisi menelaah batas keberhasilan demonstrasi.
- C: Temuan terbatas tidak membenarkan penolakan seluruh manfaat emulator.
- D: Perubahan alasan menjadi bukti pembelajaran, bukan hanya angka keberhasilan alat.

### 33. p3-033 — B

NOT IN yang membandingkan terhadap NULL dapat menghasilkan UNKNOWN sehingga baris tidak lolos WHERE. Alternatif harus tetap sesuai makna kebutuhan, bukan penggantian sintaks secara membabi buta.

- A: Masalah logika tidak diselesaikan oleh waktu tunggu.
- B: Contoh menampakkan UNKNOWN dan alternatif penulisan kondisi.
- C: Tidak adanya nilai biasa belum menjelaskan hasil UNKNOWN yang dapat timbul dari NULL.
- D: Nama tabel tidak menjelaskan pengaruh NULL.

### 34. p3-034 — Tepat / Tidak tepat / Tidak tepat

Tujuan kurikuler ditentukan dari kemampuan yang ingin dibangun. Build menjadi bukti konsekuensi rancangan, bukan daftar pesan yang harus dihafalkan.

- 1: Tujuan menautkan masalah build dengan penalaran hubungan antarmodul.
- 2: Pesan error dapat membantu diagnosis, tetapi hafalan belum mengukur keputusan rancangan.
- 3: Warna dapat membantu pembacaan, tetapi tidak menggantikan penalaran dependensi.

### 35. p3-035 — B, C

Alat membantu menilai bukti format dan batas penerimaan. Pemeriksaan jenis file perlu berlapis; ekstensi atau informasi tipe dari klien saja tidak cukup.

- A: Panjang nama bukan bukti format isi.
- B: Ketidakcocokan menguji asumsi dari nama file saja.
- C: Pemeriksaan harus mengikuti kebutuhan dan batas format.
- D: Ikon dapat mengikuti asosiasi nama dan bukan validasi isi.

### 36. p3-036 — A

Kebutuhan sumber lokal menentukan resolusi waktu yang berguna. Penghematan tidak boleh menghilangkan perubahan yang memang perlu diketahui pengguna.

- A: Keputusan teknis diuji terhadap kebutuhan setempat.
- B: Kemampuan alat belum menjadi bukti bahwa rapatnya sampel diperlukan untuk perubahan yang dicari.
- C: Penghapusan tidak menelaah biaya pengambilan sampel.
- D: Praktik aplikasi lain dapat memberi ide, tetapi intervalnya belum tentu memenuhi kebutuhan pengukuran setempat.

### 37. p3-037 — C

Guru menggabungkan pengelolaan hubungan dan penyelidikan teknis. Perubahan data dapat berasal dari mekanisme basis data, bukan hanya kode yang sedang dilihat.

- A: Keahlian dapat membantu, tetapi proses ini belum memulihkan diskusi bersama dan pemeriksaan lintas lapisan yang dibutuhkan.
- B: Pemeriksaan kode berguna tetapi belum mencakup mekanisme trigger dan pemulihan diskusi saling menyalahkan.
- C: Iklim aman dan bukti lintas lapisan mendukung penyelidikan.
- D: Jumlah dugaan tidak menjamin pemeriksaan penyebab.

### 38. p3-038 — Tidak tepat / Tepat / Tepat

Penilaian desain perlu memeriksa janji perilaku, bukan hanya kesamaan bentuk deklarasi. Kontrak yang dinyatakan menjadi acuan bukti.

- 1: Kesamaan nama tidak menjamin perilaku memenuhi kontrak.
- 2: Pemanggil memperlihatkan apakah jaminan kontrak dipenuhi.
- 3: Kedua tindakan memberi konsekuensi berbeda bagi pemanggil.

### 39. p3-039 — B

Tujuan kejuruan mencakup kegunaan bagi pengguna beragam. Kualitas visual dan struktur baca harus dinilai sebagai dimensi yang berbeda.

- A: Screenshot menunjukkan urutan visual, bukan urutan baca DOM yang menjadi masalah.
- B: Bukti menghubungkan teknik dan kebutuhan penggunaan nyata.
- C: Efek tidak menjamin struktur informasi dapat dipahami.
- D: Kemiripan visual tidak membuktikan akses terhadap isi.

### 40. p3-040 — A, D

Durasi memerlukan acuan waktu berlalu yang tepat, dengan perilaku tidur perangkat diperiksa sesuai kebutuhan. Jam kalender dapat disesuaikan dan bukan selalu acuan durasi yang stabil.

- A: Perbandingan membedakan penanda tanggal dan ukuran durasi.
- B: Tampilan tidak menjelaskan sumber kesalahan pengukuran.
- C: Representasi teks tidak memperbaiki acuan perhitungan.
- D: Uji menilai dugaan perubahan acuan, bukan kebetulan satu hasil.

### 41. p3-041 — D

Asesmen mengikuti kebutuhan mempertahankan baris detail. Fungsi agregat berjendela dapat menambahkan ringkasan tanpa mereduksi setiap kelompok menjadi satu baris.

- A: Jumlah kelompok belum menunjukkan detail tetap tersedia.
- B: Rekap kelompok belum memenuhi kebutuhan mempertahankan setiap baris transaksi.
- C: Alias membantu keterbacaan tetapi tidak menjaga baris detail.
- D: Bukti memeriksa bentuk hasil serta alasan teknisnya.

### 42. p3-042 — Tepat / Tepat / Tidak tepat

Pengelolaan emosi mendukung penyelidikan, bukan menggantikannya. Acuan waktu yang disepakati membuat bukti offset dapat dibandingkan.

- 1: Pemisahan pengamatan dan tuduhan membantu pemulihan komunikasi.
- 2: Acuan bersama mengembalikan diskusi pada penyebab teknis.
- 3: Kekuatan suara tidak membuktikan ketepatan acuan sinkronisasi.

### 43. p3-043 — A

Murid perlu membedakan konfigurasi build dan runtime sesuai alat yang dipakai. Mengubah file setelah build tidak otomatis mengubah nilai yang sudah tertanam.

- A: Perbandingan menampakkan kapan nilai dimasukkan.
- B: Muat ulang saja tidak mengubah nilai yang telah dimasukkan ke bundle saat build.
- C: Urutan nama tidak menentukan apakah nilai sudah tertanam.
- D: Isi file penting, tetapi nilai yang telah tertanam saat build tidak otomatis mengikuti perubahan file tersebut.

### 44. p3-044 — B, C

Kebutuhan belajar terletak pada perbedaan koordinat terlapor dan kepastian posisi. Estimasi akurasi perlu ditafsirkan sesuai dokumentasi platform, bukan dianggap jaminan mutlak.

- A: Jumlah desimal tidak menjamin akurasi pengukuran.
- B: Representasi menargetkan asumsi posisi yang dianggap pasti.
- C: Kasus dekat batas menunjukkan pengaruh ketidakpastian terhadap keputusan.
- D: Penghapusan menghilangkan konsep yang perlu dipahami.

### 45. p3-045 — C

Bantuan menargetkan kesiapan pada aturan pertama-cocok. Setelah alasan dipahami, jumlah kondisi dapat ditambah dan bantuan dikurangi.

- A: Label dapat membantu membaca hasil tetapi belum menjelaskan pemilihan WHEN pertama yang cocok.
- B: Penambahan kompleksitas belum didukung bukti kesiapan.
- C: Contoh kecil menampakkan pengaruh urutan sebelum diperluas.
- D: Salinan hasil tidak menunjukkan pemahaman evaluasi.

### 46. p3-046 — Tepat / Tidak tepat / Tepat

Seed tetap membantu reproduksi, sedangkan variasi seed memperluas pengujian. Perbaikan praktik dinilai dari kemampuan membedakan kedua tujuan itu.

- 1: Reproduksi merupakan kemampuan yang ditargetkan.
- 2: Satu rangkaian acak tidak mencakup semua kemungkinan.
- 3: Variasi diperlukan untuk menilai jangkauan perilaku program.

### 47. p3-047 — B

Kurikulum perlu mengarahkan murid membedakan perubahan perilaku dan perubahan presentasi. Pemilihan selector tetap mempertimbangkan aksesibilitas serta tujuan tes, bukan aturan tunggal semua teks harus dihindari.

- A: Pembatasan itu menghindari kebutuhan merancang tes yang sesuai perubahan sah.
- B: Tujuan menuntut alasan pemilihan acuan, bukan hafalan selector.
- C: Jumlah selector tidak membuktikan tes menjamin perilaku yang tetap relevan saat teks berubah.
- D: Halaman dapat terbuka meski fungsi penting rusak; tes perlu tetap mengukur perilaku yang ingin dijamin.

### 48. p3-048 — A, C, D

Alat digunakan untuk membaca batas bukti sistem terhubung. Aplikasi perlu membedakan status sambungan dari hasil aksi.

- A: Tiga peristiwa itu memberi bukti berbeda.
- B: Koneksi tidak menjamin perintah telah diterima dan dijalankan.
- C: Kasus tandingan menguji dugaan koneksi sama dengan keberhasilan aksi.
- D: Tampilan perlu mengikuti kepastian yang benar-benar tersedia.

### 49. p3-049 — D

Adaptasi kurikulum memasukkan konsekuensi ringkasan tersimpan, bukan hanya teknik mempercepat query. Kriteria kesegaran perlu diturunkan dari kebutuhan pengguna.

- A: Waktu baca mengukur kinerja, tetapi belum menguji batas kesegaran data pengguna.
- B: Penghapusan menyembunyikan informasi kesegaran.
- C: Hafalan sumber belum menilai keputusan pembaruan ringkasan.
- D: Tugas menghubungkan kinerja dengan kebutuhan waktu data.

### 50. p3-050 — Tidak tepat / Tepat / Tepat

Tujuan kejuruan menuntut solusi yang dapat dipakai pada kondisi relevan dan batasnya diketahui. Pemrosesan streaming dapat mengurangi kebutuhan memori tanpa menganggap semua operasi selalu bisa dilakukan sekali lewat.

- 1: Bukti itu belum mencakup kondisi penggunaan mitra.
- 2: Penjelasan serta uji menghubungkan teknik dengan batas sumber daya.
- 3: Batas yang jelas membantu penyerahan hasil secara bertanggung jawab.

### 51. p3-051 — A

Perancangan mundur menghubungkan tujuan dengan bukti sebelum memutuskan pengalaman belajar. Kegiatan menarik tetap perlu mendukung konstruk yang ditargetkan.

- A: Bukti menentukan apakah kegiatan mencapai kemampuan yang diinginkan.
- B: Aturan giliran dapat membantu kegiatan, tetapi belum memastikan penilaian argumen benar-benar diukur.
- C: Daftar itu tetap mengukur ingatan istilah.
- D: Catatan aktivitas membantu evaluasi proses, tetapi tidak membuktikan kemampuan menilai kekuatan argumen.

### 52. p3-052 — B, D

Pemilihan model mengikuti tujuan dan kebutuhan murid. PBL dapat dipakai untuk penyelidikan masalah; produk PjBL bukan kewajiban untuk setiap tujuan.

- A: Bentuk produk tidak menjadi syarat semua pembelajaran aktif.
- B: Penyelidikan selaras dengan keputusan berbasis data.
- C: Keindahan tidak mengukur pertimbangan solusi.
- D: Perbandingan menargetkan kemampuan yang dinyatakan.

### 53. p3-053 — C

Penemuan perlu diikuti pemeriksaan dan generalisasi beralasan. Guru memberi penopang penyelidikan, bukan membiarkan setiap dugaan dianggap benar.

- A: Banyak contoh terbatas belum menjamin generalisasi.
- B: Contoh pendukung saja belum memeriksa batas atau kemungkinan contoh tandingan.
- C: Pembuktian menilai apakah pola bertahan di luar contoh awal.
- D: Ketepatan istilah membantu komunikasi, tetapi belum menguji dugaan atau batas generalisasinya.

### 54. p3-054 — Tepat / Tepat / Tidak tepat

UDL memberi keluwesan sejak perancangan, bukan menunggu hambatan muncul atau menurunkan sasaran bagi penerima dukungan.

- 1: Representasi alternatif membantu mengakses informasi yang sama.
- 2: Pilihan ekspresi mempertahankan sasaran penafsiran.
- 3: Dukungan akses tidak mengharuskan penghapusan tujuan.

### 55. p3-055 — B

TaRL memakai capaian aktual sebagai dasar bantuan dan pengelompokan fleksibel. Pengukuran ulang diperlukan agar bantuan tidak menjadi label tetap.

- A: Tambahan latihan belum menyesuaikan dukungan dengan perubahan capaian yang sudah diketahui.
- B: Kelompok fleksibel mengikuti capaian saat ini.
- C: Perpindahan seragam tidak mengikuti kebutuhan tiap murid.
- D: Usia tidak menggantikan bukti capaian pada keterampilan yang ditargetkan.

### 56. p3-056 — A, C

Kesadaran emosi dan pengendalian diri perlu diikuti tindakan yang menghormati orang lain. Ini latihan keterampilan, bukan hafalan label CASEL.

- A: Pengenalan emosi mendukung pengendalian respons sebelum bertindak.
- B: Persetujuan paksa belum membangun pengelolaan emosi.
- C: Pilihan tindakan melatih komunikasi dan tanggung jawab.
- D: Pengakuan emosi tidak menghapus tanggung jawab atas tindakan.

### 57. p3-057 — D

Komunikasi empatik memerlukan mendengar serta memeriksa makna, bukan hanya giliran menyatakan posisi. Kesepakatan dibangun setelah kedua pandangan dipahami.

- A: Jumlah pekerjaan dapat menjadi satu bukti kontribusi, tetapi belum menjernihkan pemaknaan yang menimbulkan tuduhan.
- B: Tulisan dapat memperjelas posisi sendiri, tetapi belum memperbaiki pemaknaan silang yang memicu konflik.
- C: Pergantian tidak memberi kesempatan belajar menyelesaikan perbedaan.
- D: Parafrasa membantu memeriksa pemahaman dan mengurangi tuduhan.

### 58. p3-058 — Tepat / Tidak tepat / Tepat

Keteladanan menuntut regulasi emosi guru, bukan menghilangkan aturan. Jeda membantu keputusan tidak didorong kemarahan sesaat.

- 1: Guru mengelola responsnya sambil menjaga batas kelas.
- 2: Keputusan impulsif belum menunjukkan pertimbangan yang adil.
- 3: Tindak lanjut memungkinkan pemahaman dan tanggung jawab.

### 59. p3-059 — A

Budaya bertumbuh menghubungkan usaha, strategi, dukungan, dan bukti kemajuan. Mengulang cara yang sama bukan satu-satunya makna bertekun.

- A: Usaha diarahkan oleh bukti dan perubahan cara belajar.
- B: Waktu tambahan belum menanggapi bukti bahwa cara yang diulang tidak membantu.
- C: Kesulitan saat ini bukan bukti batas kemampuan tetap.
- D: Target dapat disesuaikan bila ada dasar kebutuhan, tetapi perubahan ini belum menanggapi pola kesalahan strategi yang ditemukan.

### 60. p3-060 — B, C, D

Assessment as learning menempatkan murid sebagai pemantau dan pengarah belajarnya. Penggunaan hasil lebih penting daripada sekadar memberi skor pada diri sendiri.

- A: Angka tanpa tindak lanjut belum menunjukkan penggunaan penilaian diri.
- B: Keputusan revisi memakai bukti dari rubrik.
- C: Perbandingan menilai apakah strategi perbaikan membantu.
- D: Rencana transfer membuat penilaian diri mengarahkan belajar berikutnya.

### 61. p3-061 — C

Assessment for learning memakai bukti untuk mengubah pembelajaran. Jawaban tepat tidak selalu menunjukkan pemahaman jika alasannya keliru.

- A: Angka benar menutupi alasan keliru yang ditemukan.
- B: Pengenalan pilihan dapat meningkat sementara alasan yang keliru tetap bertahan.
- C: Tindak lanjut menargetkan kesenjangan penalaran yang terbukti.
- D: Waktu dan pilihan akhir saja belum menunjukkan alasan yang semula bertentangan dengan konsep sudah diperbaiki.

### 62. p3-062 — Tidak tepat / Tepat / Tepat

Asesmen sumatif merangkum capaian berdasarkan tujuan dan mutu bukti, bukan satu kesan performa. Kriteria komunikasi tetap dinilai tersendiri jika memang menjadi tujuan.

- 1: Kelancaran dapat mengukur hal lain dari sasaran materi.
- 2: Bukti beragam membantu memisahkan konstruk dari hambatan penyajian.
- 3: Informasi dukungan dan keputusan capaian dapat dibedakan.

### 63. p3-063 — B

Kesadaran membantu murid mengenali kondisi dan memilih respons yang relevan. Latihan pengelolaan perhatian tidak dimaksudkan menggantikan penguasaan materi.

- A: Tekanan kecepatan belum memberi keterampilan mengenali ketegangan dan tuntutan soal.
- B: Latihan menghubungkan kesadaran emosi dengan tindakan belajar.
- C: Jaminan itu tidak didukung bukti dan tidak mengembangkan keterampilan.
- D: Penghapusan menyeluruh belum menanggapi kebutuhan mengelola proses.

### 64. p3-064 — A, D

SAMR dapat membantu menelaah perubahan tugas, bukan mewajibkan semua kegiatan berada pada tingkat tertinggi. TPACK menuntut kecocokan konten, pedagogi, dan teknologi.

- A: Tingkat teknologi bukan tujuan pembelajaran itu sendiri.
- B: Posisi pada kerangka tidak membuktikan mutu pemahaman.
- C: Kesederhanaan alat bukan alasan menolaknya.
- D: Keputusan mengikuti tujuan, waktu, dan bukti yang tersedia.

### 65. p3-065 — D

CRT bukan menganggap setiap anggota kelompok budaya memiliki pengalaman sama. Guru menghubungkan variasi perspektif dengan tujuan dan pemeriksaan sumber.

- A: Jumlah pendukung tidak menjamin keseragaman pengalaman budaya.
- B: Buku dapat menjadi sumber, tetapi penggunaannya sebagai satu-satunya versi menutup telaah variasi budaya.
- C: Penyesuaian paksa menutup penelaahan perspektif.
- D: Perbandingan menghargai variasi sambil menjaga penelaahan bukti.

### 66. p3-066 — Tepat / Tidak tepat / Tepat

Pilihan murid penting, tetapi tidak menghapus tanggung jawab etis guru. Bimbingan dapat mempertahankan isu sambil melindungi martabat.

- 1: Pilihan menjaga substansi isu sambil mengurangi paparan pengalaman pribadi.
- 2: Persetujuan mayoritas tidak menggantikan perlindungan pihak yang terdampak.
- 3: Guru menghormati otonomi dengan alasan perlindungan yang terbuka.

### 67. p3-067 — A

Refleksi berbasis bukti dapat mengungkap bias ekspektasi. Perbaikannya memberi kesempatan yang sesuai, bukan meniadakan tantangan.

- A: Bukti menunjukkan keputusan guru perlu ditinjau, bukan kemampuan murid diasumsikan.
- B: Nilai sebanding tidak otomatis membuktikan kesempatan menalar sebanding; proses pemberian pertanyaan tetap perlu ditelaah.
- C: Keseragaman rendah menghilangkan kesempatan menalar bagi semua.
- D: Kelancaran bicara perlu dibedakan dari kesiapan menalar; bukti nilai yang sebanding menuntut pemeriksaan ekspektasi.

### 68. p3-068 — B, C

Kolaborasi memadukan bukti dan pengalaman pihak terkait. Dukungan perlu ditinjau dari dampak, bukan ditetapkan sebagai label tetap.

- A: Satu sudut pandang belum memeriksa perbedaan kondisi.
- B: Kesepakatan membuat dukungan dapat dinilai dampaknya.
- C: Suara murid membantu memahami hambatan yang dialami.
- D: Dua laporan dapat menggambarkan kondisi yang berbeda, bukan saling meniadakan.

### 69. p3-069 — C

Partisipasi komunitas berfokus pada pembelajaran murid dan perbaikan rancangan, bukan sekadar evaluasi penampilan rekan.

- A: Jumlah slide tidak menunjukkan hubungan konsep yang dibangun murid.
- B: Kejelasan guru dapat relevan tetapi fokus yang disepakati ialah hubungan konsep dalam respons murid.
- C: Catatan memberi dasar pembahasan profesi sesuai fokus.
- D: Penjelasan maksud membantu membaca rancangan, tetapi belum menunjukkan bagaimana murid menghubungkan konsep dalam pelaksanaan.

### 70. p3-070 — Tepat / Tepat / Tidak tepat

Tujuan pendidikan menuntun perkembangan otonomi melalui bimbingan, bukan kebebasan tanpa tanggung jawab atau seluruh keputusan selalu diambil guru.

- 1: Bimbingan mengembangkan keputusan sesuai tujuan pendidikan dasar.
- 2: Peninjauan memberi pengalaman bertanggung jawab atas keputusan.
- 3: Pelepasan dukungan tidak sama dengan pengembangan kemandirian.

### 71. p3-071 — B

Penolakan tugas dapat berkaitan dengan tuntutan prasyarat. Guru perlu membedakan dugaan motivasi dari kesulitan materi sebelum memilih bantuan.

- A: Insentif belum mengatasi prasyarat skala yang ditunjukkan bukti percakapan dan tugas.
- B: Bukti mengarahkan penafsiran kebutuhan materi.
- C: Satu kesulitan tidak membenarkan label minat menyeluruh.
- D: Penyederhanaan dapat mengurangi beban, tetapi penghilangan hubungan skala belum membantu mencapai kemampuan membaca grafik.

### 72. p3-072 — A, C

Pengembangan praktik perlu bukti sesuai klaim. Jika klaimnya penerapan mandiri setelah jeda, asesmen harus menghadirkan kondisi itu.

- A: Bukti menilai retensi dan transfer, bukan sekadar ingatan contoh.
- B: Kesukaan tidak menunjukkan penerapan mandiri setelah jeda.
- C: Perbandingan menilai apakah bantuan berubah menjadi pemahaman individu.
- D: Bukti segera tidak menjamin ketahanan pemahaman.

### 73. p3-073 — D

Disiplin positif bukan ketiadaan batas. Guru menuntun pemulihan dampak dan latihan perilaku yang diharapkan secara konsisten.

- A: Pembagian alat dapat mengubah logistik, tetapi belum membangun tanggung jawab atas dampak perilaku pada pengguna lain.
- B: Pengabaian membiarkan dampak pada pengguna lain.
- C: Pengulangan teguran belum memberi latihan perilaku dan pemulihan dampak yang diperlukan.
- D: Tindakan menghubungkan tanggung jawab dengan perilaku yang dapat dipelajari.

### 74. p3-074 — Tidak tepat / Tepat / Tepat

Empati tidak berarti menerima semua tuntutan tanpa pertimbangan. Guru memahami hambatan dahulu dan membangun komunikasi yang dapat digunakan bersama.

- 1: Pengulangan tidak membuktikan penerima memaknai penjelasan.
- 2: Klarifikasi dan parafrasa memeriksa pemahaman atas pengalaman murid.
- 3: Saluran komunikasi membantu menanggapi kebutuhan secara terarah.

### 75. p3-075 — A

PjBL memerlukan pengelolaan proyek dan evaluasi pengalaman. Kolaborasi menjaga tujuan belajar ketika kebutuhan produk pihak lain juga perlu dipertimbangkan.

- A: Kesepakatan menjaga kebutuhan produk dan tujuan belajar.
- B: Produk selesai belum menunjukkan pembelajaran murid.
- C: Pilihan murid penting, tetapi koordinasi kebutuhan produk dan bukti proses memerlukan kesepakatan lintas pihak.
- D: Produk penting, tetapi tidak cukup untuk menilai sasaran proses yang telah dinyatakan.

### 76. p3-076 — B, D

Refleksi bertumbuh bukan menyalahkan diri secara mutlak. Guru bertanggung jawab memperbaiki tindakan sambil menjaga kesempatan murid membangun kemandirian.

- A: Penghentian seragam mengabaikan kebutuhan yang nyata.
- B: Pemisahan membantu menilai kontribusi keputusan guru secara proporsional.
- C: Hasil juga dipengaruhi kebutuhan dan kondisi yang berbeda.
- D: Kriteria membantu perbaikan praktik yang dapat ditinjau.

### 77. p3-077 — C

Refleksi bermakna menghasilkan langkah yang dapat dicoba dan diperiksa. Pernyataan umum belum menunjukkan murid memahami perubahan proses yang diperlukan.

- A: Kelancaran istilah tidak menjamin refleksi menghasilkan langkah pemeriksaan bukti yang dapat dicoba.
- B: Pemetaan kesulitan membantu refleksi, tetapi belum mengubah langkah memeriksa bukti yang ditargetkan.
- C: Rencana spesifik menghubungkan pengalaman dan tindakan baru.
- D: Refleksi dapat berbeda tingkat keterkaitannya dengan proses belajar.

### 78. p3-078 — Tepat / Tidak tepat / Tepat

Kegiatan komunitas perlu mengembangkan pengetahuan penerapan, bukan sekadar mengedarkan prosedur. Adaptasi tetap harus dapat diperiksa terhadap tujuan.

- 1: Adaptasi berkonteks menjadi bahan belajar profesional bersama.
- 2: Keberhasilan satu konteks tidak membenarkan penerapan seragam.
- 3: Pembedaan membantu komunitas memahami batas adaptasi.

### 79. p3-079 — B

Etika AI dinilai sesuai aturan yang sudah diketahui. Guru menelaah kepengarangan, bukti klaim, dan pemahaman, bukan hanya mendeteksi gaya bahasa.

- A: Larangan menyeluruh tidak mengikuti aturan dan kebutuhan kasus.
- B: Bukti proses dan pemahaman menilai tanggung jawab kepengarangan.
- C: Kelancaran tulisan perlu dibedakan dari kepengarangan dan penguasaan klaim pada aturan bantuan AI yang diberikan.
- D: Perubahan redaksi tidak menunjukkan kepengarangan, ketepatan klaim, atau pemahaman terhadap isi yang dibantu AI.

### 80. p3-080 — A, B, D

Rubrik analitik sesuai kebutuhan informasi per dimensi. Rubrik holistik dapat berguna untuk tujuan lain, tetapi satu kesan umum tidak cukup untuk diagnosis yang dinyatakan.

- A: Pemisahan membantu diagnosis kebutuhan per dimensi.
- B: Umpan balik menghubungkan penilaian dengan bagian yang dapat diperbaiki.
- C: Kesan tunggal tidak cukup memberi informasi rinci yang diminta.
- D: Tindak lanjut memanfaatkan informasi analitik yang dikumpulkan.

