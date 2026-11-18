# Paket 2 — latihan UTBK UKPPPG PPLG/RPL

Versi: 2026-11-18.1. Dihasilkan oleh `python scripts/build.py` dari `paket_2.json`; jangan edit hasil build.

Latihan orisinal, bukan soal resmi/bocoran. Rujukan utama: Juknis yang disediakan, halaman 7 dan 47. Panduan pendamping hanya inspirasi mutu kasus.

80 soal = 50 PCK + 30 PU; 40 PG, 20 PGK Kategori, 20 MCMA. Distribusi bentuk dan kode merupakan keputusan latihan internal, bukan bobot resmi.

Skor latihan: 1 poin jika seluruh respons pada butir tepat; selain itu 0. Bukan rumus nilai atau ambang kelulusan resmi.

| Kode utama | Subkompetensi (Juknis hal. 47) | PCK | PU |
|---|---|---:|---:|
| P.1 | Merancang dan memfasilitasi pengalaman belajar Murid yang mendorong pemahaman konseptual, penerapan kontekstual, dan refleksi bermakna terhadap proses pembelajaran | 8 | 3 |
| P.2 | Melaksanakan pembelajaran yang responsif terhadap keragaman latar belakang, kebutuhan, dan potensi Murid melalui berbagai model pembelajaran | 4 | 2 |
| P.3 | Menciptakan proses pembelajaran yang berkesadaran, bermakna, dan menggembirakan | 2 | 2 |
| P.4 | Mengintegrasikan teknologi informasi dan komunikasi secara kritis dan kreatif dalam pembelajaran untuk memperluas akses, memperdalam pemahaman, dan mendukung literasi digital Murid | 4 | 2 |
| P.5 | Menerapkan strategi pembelajaran atau pembimbingan yang sesuai karakteristik Murid dengan memanfaatkan sumber belajar dan mempertimbangkan potensi lingkungan dan kearifan lokal | 4 | 1 |
| P.6 | Melaksanakan asesmen untuk mengetahui kebutuhan belajar, memberikan umpan balik, dan mengukur hasil belajar Murid secara berkesinambungan dan reflektif | 8 | 3 |
| K.1 | Menampilkan perilaku etis dan keteladanan yang mencerminkan kematangan spiritual, moral, dan emosional berdasarkan Ketuhanan Yang Maha Esa dan nilai-nilai keberagaman | 0 | 2 |
| K.2 | Melakukan refleksi diri secara berkesinambungan, mengembangkan pola pikir bertumbuh, serta belajar sepanjang hayat untuk peningkatan kualitas diri | 0 | 2 |
| K.3 | Mengambil keputusan dan bertindak secara konsisten dalam mengembangkan potensi dan budaya belajar Murid | 0 | 2 |
| S.1 | Berkomunikasi secara inklusif, empatik, dan efektif secara lisan, tulisan, dan/atau isyarat dengan memperhatikan keragaman dan kebutuhan Murid | 0 | 2 |
| S.2 | Berkolaborasi dengan Murid, sesama Pendidik, Tenaga Kependidikan selain Pendidik, orang tua/wali Murid, dan masyarakat untuk meningkatkan kualitas pembelajaran | 0 | 2 |
| S.3 | Berpartisipasi aktif dalam organisasi profesi dan komunitas pembelajaran untuk pengembangan keprofesian berkelanjutan | 0 | 2 |
| PF.1 | Menguasai tujuan pendidikan terutama pada Satuan Pendidikan yang diampu | 3 | 1 |
| PF.2 | Menguasai disiplin ilmu sesuai dengan materi/muatan pembelajaran atau pembimbingan | 6 | 0 |
| PF.3 | Memahami potensi dan kebutuhan belajar Murid berdasarkan karakteristik materi pembelajaran atau pembimbingan dan konteks lokal | 4 | 1 |
| PF.4 | Memahami, menerapkan, dan mengembangkan kurikulum secara adaptif dan kontekstual sesuai perkembangan zaman | 4 | 2 |
| PF.5 | Mengembangkan praktik profesional pendidikan secara konseptual, empiris, kreatif, dan inovatif | 3 | 1 |

## Soal

Kunci dan pembahasan berada setelah seluruh soal.

### 1. [p2-001 • PCK • P.1 • PG]

Dalam data pengukuran, 0 berarti hasil ukur nol dan NULL berarti belum diukur. Murid mengganti semua NULL menjadi 0 agar rata-rata mudah dihitung. Langkah guru paling tepat adalah ...

A. Meminta murid membulatkan rata-rata ke bilangan bulat.
B. Membandingkan rata-rata sebelum dan sesudah penggantian, lalu membahas makna penyebutnya.
C. Mengisi NULL dengan rata-rata sebelum memeriksa alasan data belum tersedia.
D. Mengajarkan penulisan alias kolom pada query.

### 2. [p2-002 • PCK • P.6 • Kategori]

Guru menilai pemahaman COUNT pada tabel berisi lima respons; dua nilai komentar adalah NULL. Nilai bukti berikut sebagai Tepat atau Tidak tepat.

1. Murid menjelaskan mengapa COUNT(*) bernilai 5 dan COUNT(komentar) bernilai 3.
2. Murid hanya menyebut kedua hasil harus sama karena tabelnya satu.
3. Murid memprediksi perubahan kedua hitungan saat satu NULL diisi teks.

### 3. [p2-003 • PCK • PF.2 • PG]

Murid ingin menampilkan kategori dengan total penjualan di atas satu juta, tetapi menaruh SUM pada WHERE. Guru akan memakai dua tahap penyaringan. Demonstrasi paling tepat adalah ...

A. Mengurutkan seluruh transaksi menurut harga satuan.
B. Menyaring transaksi dengan harga satuan di atas satu juta.
C. Memodelkan filter baris, pengelompokan, lalu HAVING.
D. Menambahkan DISTINCT pada nama kategori di hasil awal.

### 4. [p2-004 • PCK • PF.2 • MCMA]

Hasil penjumlahan pecahan uang dengan tipe floating point menyisakan selisih kecil. Guru ingin murid memilih representasi berdasarkan kebutuhan ketepatan. Pilih semua kegiatan yang relevan.

A. Membandingkan floating point dan DECIMAL untuk nilai uang yang sama.
B. Memperbanyak angka di belakang koma pada tampilan saja.
C. Menyimpulkan semua bilangan harus disimpan sebagai teks.
D. Menguji penyimpanan dalam satuan rupiah bulat bila aturan harga memungkinkan.

### 5. [p2-005 • PCK • PF.3 • PG]

Murid dapat mengurutkan angka, tetapi urutan tanggal berbentuk teks DD/MM/YYYY tidak kronologis. Guru ingin menemukan prasyarat yang belum dipahami. Pertanyaan awal terbaik adalah ...

A. Membandingkan urutan teks dan waktu pada dua tanggal.
B. Berapa banyak tanggal yang mampu kalian ketik per menit?
C. Meminta murid menyeragamkan tanda pemisah tanggal sebelum membandingkan urutannya.
D. Apakah warna kolom tanggal sudah berbeda dari kolom lain?

### 6. [p2-006 • PCK • P.6 • Kategori]

Kelompok menyerahkan file backup basis data. Tujuan asesmen ialah memastikan data dapat dipulihkan. Nilai bukti berikut sebagai Tepat atau Tidak tepat.

1. Ukuran file backup besar sehingga pemulihan dianggap terbukti.
2. Pemulihan dicoba pada basis data uji dan hasilnya dibandingkan dengan data asal.
3. Kelompok mencatat versi alat dan langkah pemulihan yang berhasil.

### 7. [p2-007 • PCK • P.4 • PG]

Guru memakai alat penampil rencana eksekusi untuk mengajarkan indeks. Murid menyimpulkan setiap query pasti lebih cepat setelah indeks ditambah. Pemanfaatan alat paling tepat adalah ...

A. Memilih tangkapan layar rencana dengan warna paling sedikit.
B. Mengukur query sebelum dan sesudah indeks pada dua ukuran data yang berbeda.
C. Meminta murid menghafalkan nama semua operator pada alat.
D. Membandingkan query terpilih pada data sama, lalu membaca rencana dan hasil waktunya.

### 8. [p2-008 • PCK • P.5 • MCMA]

Data curah hujan desa memakai kode kosong, 0, dan -999 dengan arti berbeda. Guru akan menggunakannya untuk latihan query. Pilih semua langkah pemanfaatan sumber lokal yang tepat.

A. Menganggap -999 sebagai pengukuran sah karena berupa angka.
B. Membaca kamus data bersama narasumber sebelum menentukan filter.
C. Menyediakan cuplikan data beserta definisi kode untuk tugas analisis.
D. Menghapus semua nilai 0 sebelum tujuan analisis ditetapkan.

### 9. [p2-009 • PCK • P.1 • PG]

Dua peserta berbeda memilih jawaban survei yang sama. Murid memakai DISTINCT pada seluruh jawaban lalu menyatakan jumlah responden berkurang. Tindakan guru terbaik adalah ...

A. Menghitung kembali jumlah baris setelah DISTINCT untuk menentukan jumlah peserta.
B. Membedakan hitungan peserta dan daftar jawaban unik.
C. Mengurutkan jawaban sebelum menghitung kembali hasil DISTINCT.
D. Mengganti seluruh jawaban sama dengan teks acak.

### 10. [p2-010 • PCK • PF.1 • Kategori]

Dalam proyek laporan kesehatan sekolah di SMK, murid belajar bertanggung jawab atas penggunaan data. Nilai rancangan kegiatan berikut sebagai Tepat atau Tidak tepat.

1. Menguji akun pembaca laporan yang hanya dapat melihat kolom agregat yang diperlukan.
2. Menilai kesiapan kerja dari banyaknya akun yang memperoleh akses penuh.
3. Menganggap view selalu mencegah akses tabel asal meski hak akun belum diperiksa.

### 11. [p2-011 • PCK • P.2 • PG]

Saat impor CSV, sebagian murid menemukan nama kolom bergeser karena koma di dalam alamat. Mereka sudah memahami tabel, tetapi belum aturan pemisah dan tanda kutip. Dukungan paling tepat adalah ...

A. Memberikan contoh CSV dengan lebih banyak kolom tetapi semua nilainya tanpa koma.
B. Mengganti semua alamat menjadi nomor urut.
C. Membandingkan satu baris CSV yang dikutip benar dan yang keliru.
D. Meminta murid menghafal semua nama format pertukaran data.

### 12. [p2-012 • PCK • PF.4 • MCMA]

Unit basis data sebelumnya hanya meminta murid menambah data. Guru menyusun unit lanjutan tentang pengelolaan data sepanjang penggunaannya. Pilih semua penyesuaian kurikulum yang selaras.

A. Menambahkan tujuan memilih masa simpan berdasarkan kebutuhan kasus.
B. Meminta rancangan prosedur arsip dan penghapusan beserta uji pada data tiruan.
C. Menambah daftar perintah administrasi sebagai satu-satunya ukuran capaian.
D. Menyelaraskan rubrik dengan alasan retensi dan kemampuan menjalankan prosedur.

### 13. [p2-013 • PCK • PF.5 • PG]

Guru menduga formulir survei dengan pilihan bertingkat mengurangi data tidak konsisten. Ia ingin memperbaiki praktik pembelajaran desain data. Langkah paling dapat dipertanggungjawabkan adalah ...

A. Membandingkan jenis kesalahan pada dua rancangan setara dan menelaah alasan murid.
B. Memilih rancangan yang paling cepat selesai dibuat.
C. Membandingkan jumlah pertanyaan pada dua formulir sebagai ukuran konsistensi.
D. Memakai kesukaan guru terhadap tampilan sebagai dasar keputusan.

### 14. [p2-014 • PCK • P.1 • Kategori]

Murid mengira method yang dipanggil dari referensi bertipe induk selalu menjalankan versi induk, meski object turunannya melakukan override. Nilai kegiatan pembelajaran berikut sebagai Tepat atau Tidak tepat.

1. Membandingkan keluaran dua object turunan melalui referensi induk.
2. Meminta prediksi keluaran sebelum eksekusi dan revisi alasannya.
3. Mengganti contoh override dengan dua nama method berbeda untuk membuktikan polimorfisme.

### 15. [p2-015 • PCK • P.6 • PG]

Tombol GUI menjalankan aksi dua kali. Murid menduga event handler terpasang dua kali. Bukti yang paling membantu guru menilai diagnosisnya adalah ...

A. Membandingkan label tombol sebelum dan sesudah layar dibuka ulang.
B. Ukuran file executable sebelum dan sesudah perubahan.
C. Tampilan tombol setelah warna diubah.
D. Merekam pendaftaran handler dan pemanggilannya per klik.

### 16. [p2-016 • PCK • PF.2 • MCMA]

Gambar pada canvas bergeser saat posisi klik dipakai langsung, karena koordinat layar berbeda dari koordinat canvas. Guru ingin murid menjelaskan perbaikannya. Pilih semua kegiatan yang tepat.

A. Menandai titik asal kedua koordinat lalu menghitung posisi relatif klik.
B. Menggeser gambar dengan angka tetap sampai satu contoh terlihat pas.
C. Memindahkan canvas dan meminta murid memprediksi posisi relatif yang sama.
D. Menaikkan resolusi gambar untuk mengubah titik asal klik.

### 17. [p2-017 • PCK • P.1 • PG]

Animasi bergerak lebih cepat pada komputer dengan frame rate tinggi. Murid menambah posisi sebesar 5 setiap frame. Langkah pembelajaran terbaik adalah ...

A. Menyamakan ukuran jendela kedua komputer.
B. Menguji perpindahan per detik dengan selang antarframe.
C. Membandingkan kelancaran visual animasi pada kedua komputer.
D. Membatasi tugas pada satu komputer agar hasilnya tetap.

### 18. [p2-018 • PCK • PF.4 • Kategori]

Guru merancang unit GUI agar murid dapat mengubah tampilan tanpa mengubah aturan perhitungan. Nilai keputusan kurikuler berikut sebagai Tepat atau Tidak tepat.

1. Menetapkan tujuan hanya dari jumlah jenis widget yang digunakan.
2. Meminta model perhitungan yang dapat diuji terpisah dari tampilan.
3. Menilai apakah dua tampilan memakai aturan perhitungan yang sama.

### 19. [p2-019 • PCK • PF.3 • PG]

Sebelum mengajar rekursi, guru menemukan murid dapat menelusuri pemanggilan fungsi tetapi menganggap semua pemanggilan berbagi variabel lokal yang sama. Langkah awal terbaik adalah ...

A. Memulai contoh pohon direktori yang sangat besar.
B. Mengulang definisi fungsi murni sebagai hafalan.
C. Memodelkan dua catatan pemanggilan dan variabel lokalnya.
D. Mengganti rekursi dengan materi pewarisan selama satu semester.

### 20. [p2-020 • PCK • P.2 • MCMA]

Dalam kerja berpasangan, satu murid memahami referensi object, temannya masih mengira penyalinan list selalu menyalin seluruh object di dalamnya. Pilih dukungan yang tepat.

A. Memberi pasangan tugas visual yang sama sekali tidak memakai list.
B. Memakai diagram referensi dan uji perubahan satu object pada dua list.
C. Meminta murid yang paham mengubah semua kode pasangannya.
D. Meminta tiap murid menjelaskan kapan perlu salinan dangkal atau mendalam.

### 21. [p2-021 • PCK • P.5 • PG]

Guru mengajak murid membuat papan informasi budaya setempat. Logo harus tampil di atas beberapa warna latar. Sumber belajar paling sesuai untuk membahas transparansi gambar adalah ...

A. Kumpulan foto dengan latar putih yang sama.
B. Foto logo yang sudah menempel pada papan berlatar putih.
C. Contoh logo yang sudah menyatu dengan poster akhir.
D. Menguji logo dengan dan tanpa alpha pada beberapa latar.

### 22. [p2-022 • PCK • P.4 • Kategori]

Guru menggunakan pengelola dependensi untuk proyek GUI. Murid mengira versi terbaru pustaka selalu cocok dengan proyek lama. Nilai kegiatan berikut sebagai Tepat atau Tidak tepat.

1. Membandingkan kebutuhan versi proyek dengan dokumentasi pustaka dan mencoba pada salinan proyek.
2. Menghapus catatan versi agar instalasi selalu memilih yang terbaru.
3. Menilai pemahaman dari jumlah pustaka yang berhasil diinstal.

### 23. [p2-023 • PCK • P.6 • PG]

Program pembaca file berhenti karena file tidak ditemukan. Murid mengusulkan menangkap semua exception lalu menampilkan hasil kosong. Umpan balik paling berguna adalah ...

A. Bedakan file tidak ditemukan dan file rusak; tunjukkan respons yang diperlukan pengguna untuk keduanya.
B. Tambahkan pesan sukses agar pengguna tidak khawatir.
C. Meminta daftar semua exception yang tersedia dalam bahasa tersebut.
D. Pindahkan seluruh kode ke satu fungsi agar singkat.

### 24. [p2-024 • PCK • PF.5 • MCMA]

Guru ingin memperbaiki cara mengajar optimasi setelah murid mengubah bagian program yang ternyata jarang berjalan. Pilih langkah pengembangan praktik yang beralasan.

A. Menggunakan profil eksekusi untuk memilih contoh bagian yang paling banyak memakai waktu.
B. Memilih contoh yang kodenya paling panjang sebagai satu-satunya prioritas.
C. Membandingkan alasan pemilihan optimasi sebelum dan sesudah penggunaan profil.
D. Mencatat jenis tugas dan perangkat saat menafsirkan hasilnya.

### 25. [p2-025 • PCK • P.3 • PG]

Saat memodelkan pemutar audio, kelas berdebat apakah tombol jeda boleh bekerja dari keadaan berhenti. Guru ingin diskusi fokus dan bermakna. Respons terbaik adalah ...

A. Memutuskan berdasarkan suara terbanyak sebelum membaca kebutuhan.
B. Mengganti diskusi dengan lomba menggambar diagram tercepat.
C. Menguji transisi diagram terhadap skenario pengguna.
D. Memilih diagram dengan jumlah keadaan paling sedikit agar mudah dibaca.

### 26. [p2-026 • PCK • PF.1 • Kategori]

Dalam proyek panduan audio museum sekolah, guru menargetkan kesiapan kerja murid SMK, bukan hanya audio berhasil diputar. Nilai rancangan penilaian berikut sebagai Tepat atau Tidak tepat.

1. Murid menjelaskan pemilihan aset audio dan batas izin penggunaannya.
2. Murid menyerahkan panduan menjalankan aplikasi beserta hasil uji suara.
3. Nilai akhir ditentukan dari volume suara paling keras.

### 27. [p2-027 • PCK • P.1 • PG]

Dua aturan CSS menargetkan elemen yang sama; murid mengira aturan terakhir selalu menang. Guru ingin memperbaiki model mentalnya. Contoh pembanding terbaik adalah ...

A. Dua aturan dengan selector dan nilai yang sama persis.
B. Menukar urutan dua selector yang specificity-nya berbeda.
C. Halaman dengan semua gaya ditulis inline.
D. Membandingkan dua aturan dengan selector sama yang diletakkan bergantian.

### 28. [p2-028 • PCK • PF.2 • MCMA]

Lebar kartu melampaui ruang setelah padding ditambah. Guru meminta murid memeriksa box model, dengan margin dianggap nol. Pilih kegiatan yang mendukung diagnosis.

A. Menghitung content, padding, dan border pada mode content-box.
B. Mengubah jenis font sampai kartu tampak lebih sempit.
C. Meminta screenshot ukuran layar saja.
D. Membandingkan hasil ukuran pada content-box dan border-box.

### 29. [p2-029 • PCK • P.2 • PG]

Murid terbiasa memakai div untuk semua elemen. Sebagian belum memahami perbedaan peran tombol dan tautan. Guru ingin semua dapat memilih elemen berdasarkan fungsi. Strategi paling tepat adalah ...

A. Memberi skenario navigasi dan aksi, lalu meminta pilihan elemen beserta uji perilakunya.
B. Membagi murid ke kelompok mahir tetap berdasarkan banyaknya tag yang hafal.
C. Memilih elemen berdasarkan kemudahan menyamakan tampilannya dengan rancangan.
D. Memulai dengan daftar panjang atribut ARIA untuk dihafalkan.

### 30. [p2-030 • PCK • P.6 • Kategori]

Klik tombol hapus di dalam kartu juga membuka detail karena handler kartu ikut menerima event. Guru menilai diagnosis murid. Nilai bukti berikut sebagai Tepat atau Tidak tepat.

1. Murid menyimpulkan masalah selesai karena ikon hapus diganti.
2. Murid menggambar jalur event dan menunjukkan handler yang dijalankan.
3. Murid menjelaskan perbedaan menghentikan propagasi dan mencegah aksi bawaan.

### 31. [p2-031 • PCK • P.4 • PG]

Setelah deployment, beberapa browser menampilkan CSS lama. Guru menggunakan panel Network agar murid memahami cache. Aktivitas paling tepat adalah ...

A. Menghapus seluruh riwayat setiap kali membuka halaman.
B. Membandingkan ukuran tampilan halaman lama dan baru setelah deployment.
C. Menambah ukuran file CSS agar dianggap versi baru.
D. Membaca URL, header cache, dan respons saat muat ulang.

### 32. [p2-032 • PCK • P.1 • MCMA]

Pencarian web mengirim request untuk kata pendek lalu kata panjang. Response lama tiba paling akhir dan menimpa hasil terbaru. Guru ingin murid menalar urutan asinkron. Pilih kegiatan yang tepat.

A. Menganggap response terakhir tiba pasti berasal dari input terakhir.
B. Menyusun garis waktu input, request, dan response dari log.
C. Menguji pemeriksaan identitas request sebelum memperbarui tampilan.
D. Menambah animasi tunggu dengan durasi tetap sebagai jaminan urutan.

### 33. [p2-033 • PCK • PF.3 • PG]

Murid dapat menyusun tautan pencarian untuk satu kata, tetapi nilai A&B terpecah menjadi dua parameter. Sebelum membahas pembentukan URL dinamis, dukungan awal terbaik adalah ...

A. Menambah jumlah tautan yang harus disalin.
B. Mengganti semua istilah pencarian menjadi angka.
C. Menguji pengodean nilai parameter URL.
D. Meminta murid menghafal seluruh status HTTP.

### 34. [p2-034 • PCK • P.6 • Kategori]

Sesi web habis saat murid mengisi formulir panjang. Tujuan belajar ialah merancang respons aplikasi yang menjaga pekerjaan pengguna dan menjelaskan status autentikasi. Nilai bukti berikut sebagai Tepat atau Tidak tepat.

1. Murid mendemonstrasikan penyimpanan draf yang sesuai dan alur login ulang pada data uji.
2. Murid hanya menunjukkan formulir berhasil dikirim saat sesi masih aktif.
3. Murid menjelaskan data yang boleh dipertahankan serta batas penyimpanannya.

### 35. [p2-035 • PCK • PF.2 • PG]

Teks komentar pengguna dirender sebagai HTML sehingga tag ikut dijalankan. Guru ingin murid memahami penyajian teks yang aman. Demonstrasi paling tepat adalah ...

A. Menghapus komentar yang panjangnya melebihi satu baris.
B. Menguji penyisipan contoh sebagai teks dan sebagai HTML.
C. Memvalidasi bahwa kolom komentar terisi sebelum data disimpan.
D. Membatasi warna huruf yang boleh dipilih pengguna.

### 36. [p2-036 • PCK • P.5 • MCMA]

Situs informasi wisata desa bekerja di komputer murid, tetapi aset gagal saat dipasang dalam subfolder server mitra. Guru ingin memakai lingkungan setempat sebagai sumber belajar deployment. Pilih kegiatan yang tepat.

A. Memetakan URL halaman dan aset pada struktur subfolder mitra.
B. Mengganti semua gambar dengan resolusi lebih rendah.
C. Menguji path relatif dan path dari root pada struktur tersebut.
D. Memindahkan proyek ke root lalu menganggap semua kebutuhan mitra terpenuhi.

### 37. [p2-037 • PCK • PF.4 • PG]

Guru menyusun unit API web agar hasil kerja kelompok dapat dipakai kelompok lain. Targetnya memahami kontrak endpoint, bukan menghafal alat dokumentasi. Asesmen paling selaras adalah ...

A. Kelompok lain mencoba endpoint dari dokumentasi lalu melaporkan ketidakcocokan request-response.
B. Menghitung jumlah halaman dokumentasi yang dibuat.
C. Memberi kuis nama menu aplikasi dokumentasi.
D. Menilai kelengkapan daftar endpoint dari jumlah alamat yang dicantumkan.

### 38. [p2-038 • PCK • PF.5 • Kategori]

Guru mencoba pendekatan audit keyboard pada pembelajaran web karena murid hanya menguji dengan mouse. Nilai tindakan pengembangan praktik berikut sebagai Tepat atau Tidak tepat.

1. Mengumpulkan rekaman urutan fokus sebelum dan sesudah kegiatan audit.
2. Menganalisis alasan murid memilih urutan dan label kontrol.
3. Menyimpulkan semua pengguna pasti terbantu setelah satu halaman berhasil diuji.

### 39. [p2-039 • PCK • P.1 • PG]

Setelah ponsel diputar, form mobile kembali kosong. Murid menyangka perubahan orientasi hanya mengubah ukuran gambar. Langkah guru terbaik adalah ...

A. Mengunci semua orientasi sebagai penjelasan utama lifecycle.
B. Menguji hanya perubahan lebar komponen setelah orientasi berganti.
C. Menambah delay sebelum menampilkan form.
D. Melacak lifecycle dan tempat state disimpan.

### 40. [p2-040 • PCK • P.2 • MCMA]

Murid merancang aplikasi peta jalur sekolah. Sebagian belum memahami bahwa izin lokasi dapat ditolak pengguna. Guru menyiapkan dukungan sesuai kesiapan. Pilih langkah yang tepat.

A. Memberi diagram alur izin diberikan atau ditolak sebelum implementasi.
B. Meminta murid yang siap merancang pemilihan lokasi manual sebagai alternatif.
C. Menyamakan penolakan izin dengan kerusakan perangkat.
D. Mengecek tiap murid dapat menjelaskan tampilan ketika izin ditolak.

### 41. [p2-041 • PCK • P.6 • PG]

Pemutar audio mobile berhenti ketika aplikasi masuk latar belakang. Tujuan asesmen ialah murid dapat menjelaskan perilaku yang sesuai kebutuhan pengguna dan batas platform. Bukti terbaik adalah ...

A. Video aplikasi dipakai terus dalam keadaan foreground.
B. Menguji perpindahan status dengan log dan alasan desain.
C. Membandingkan format audio pada dua file yang berhasil diputar saat layar aktif.
D. Tangkapan layar izin penyimpanan saja.

### 42. [p2-042 • PCK • PF.3 • Kategori]

Murid memahami pemanggilan fungsi berurutan, tetapi mengira mengambil data jaringan pada thread UI tidak memengaruhi sentuhan. Guru memetakan kebutuhan sebelum praktik mobile. Nilai tindakan berikut sebagai Tepat atau Tidak tepat.

1. Menganggap kelancaran pada jaringan cepat sudah membuktikan pemahaman responsivitas.
2. Meminta murid memprediksi respons tombol saat request sengaja diperlambat.
3. Memberi model antrean kerja UI sebelum meminta tugas asinkron.

### 43. [p2-043 • PCK • P.5 • PG]

Petugas posyandu setempat sering mencatat saat sinyal putus. Guru menjadikan kebutuhan itu konteks pembelajaran penyimpanan lokal mobile. Kegiatan paling sesuai adalah ...

A. Meminta semua petugas menunggu sinyal untuk mulai mencatat.
B. Menggunakan contoh aplikasi yang selalu terhubung sebagai satu-satunya bahan.
C. Mensimulasikan catatan luring, antrean kirim, dan status sinkronisasi.
D. Meminta murid memperkecil ukuran paket request pada koneksi yang masih tersedia.

### 44. [p2-044 • PCK • PF.2 • MCMA]

Dua perangkat mengubah catatan yang sama saat luring. Ketika tersambung, perubahan terakhir yang tiba menimpa perubahan lain. Guru ingin murid menilai strategi konflik. Pilih kegiatan yang tepat.

A. Menjadikan waktu tiba di server sebagai bukti tunggal bahwa isi paling benar.
B. Membandingkan nomor versi asal dan perubahan yang dikirim tiap perangkat.
C. Meminta murid menguji kebijakan penyelesaian konflik terhadap skenario pengguna.
D. Menghapus salinan lokal segera setelah tombol kirim ditekan.

### 45. [p2-045 • PCK • P.6 • PG]

Setelah beberapa kali membuka layar mobile, satu perubahan data memicu banyak pembaruan tampilan. Guru ingin menilai pemahaman pemasangan dan pelepasan listener. Bukti paling tepat adalah ...

A. Log jumlah listener aktif saat masuk dan keluar layar, beserta penjelasan pelepasannya.
B. Mengamati jumlah baris yang terlihat setelah layar dibuka berulang kali.
C. Warna indikator saat data berubah.
D. Ukuran ikon aplikasi yang terpasang.

### 46. [p2-046 • PCK • P.4 • Kategori]

Guru memakai emulator untuk membahas ukuran antarmuka mobile. Murid menyimpulkan tombol 48 piksel fisik selalu sama besar pada setiap layar. Nilai penggunaan alat berikut sebagai Tepat atau Tidak tepat.

1. Membandingkan ukuran tombol pada emulator dengan density berbeda.
2. Menganggap satu screenshot cukup membuktikan kenyamanan sentuh pada semua perangkat.
3. Menghubungkan hasil emulator dengan pengujian sentuh pada perangkat yang tersedia.

### 47. [p2-047 • PCK • P.1 • PG]

Checkbox pada daftar mobile tampak mencentang item lain setelah digulir. Komponen baris dipakai ulang dan state hanya disimpan pada tampilannya. Langkah pembelajaran terbaik adalah ...

A. Memperkecil font agar lebih banyak baris terlihat sekaligus.
B. Menghapus checkbox setiap kali daftar dibuka.
C. Mengurutkan daftar berdasarkan panjang label.
D. Melacak identitas item dan state saat baris didaur ulang.

### 48. [p2-048 • PCK • P.3 • MCMA]

Dalam tantangan mobile, kelompok berlomba menampilkan pesan dari API. Ada yang menganggap setiap response HTTP berarti permintaan berhasil. Guru ingin kegiatan tetap menantang dan bermakna. Pilih langkah yang tepat.

A. Memberi misi membedakan hasil 200, 404, dan kegagalan koneksi pada skenario uji.
B. Menetapkan pemenang hanya dari kecepatan memunculkan pesan apa pun.
C. Meminta kelompok menjelaskan keputusan tampilan sebelum bertukar skenario uji.
D. Menghentikan pembahasan ketika satu request berhasil.

### 49. [p2-049 • PCK • PF.4 • PG]

Guru menyusun unit mobile tentang pengingat kegiatan. Platform menyediakan mekanisme notifikasi, tetapi murid cenderung hanya menyalin kode jadwal. Tujuan pembelajaran yang paling tepat adalah ...

A. Menyebut nama semua kelas notifikasi dari dokumentasi.
B. Merancang pengingat, menangani izin, dan menguji jadwal.
C. Menghasilkan sebanyak mungkin notifikasi dalam satu menit.
D. Menyamakan rancangan ikon dan bunyi pengingat pada seluruh aplikasi kelas.

### 50. [p2-050 • PCK • PF.1 • Kategori]

Dalam penyerahan aplikasi mobile SMK kepada tim lain, guru menilai tanggung jawab profesional murid. Nilai praktik berikut sebagai Tepat atau Tidak tepat.

1. Menyerahkan file instalasi saja karena aplikasi pernah berjalan di ponsel pembuat.
2. Mengganti semua peringatan build dengan catatan bahwa perangkat penerima bermasalah.
3. Mencatat versi alat, konfigurasi yang dibutuhkan, dan langkah build yang dapat dicoba.

### 51. [p2-051 • PU • P.1 • PG]

Murid dapat menghitung rasio pada resep minuman, tetapi gagal saat satuan diubah dari liter ke mililiter. Guru ingin pemahaman dapat diterapkan pada situasi baru. Langkah terbaik adalah ...

A. Meminta murid membuat tabel rasio dari resep dengan satuan tetap.
B. Meminta murid menghafal jawaban contoh resep.
C. Membandingkan resep setara dalam dua satuan beserta alasannya.
D. Mengganti topik menjadi membaca nama satuan.

### 52. [p2-052 • PU • P.1 • MCMA]

Murid mengira semua bangun berempat sisi adalah persegi. Guru akan memakai contoh dan noncontoh. Pilih kegiatan yang tepat.

A. Membandingkan persegi dengan persegi panjang yang sisinya tidak sama.
B. Memutar gambar persegi dan meminta alasan apakah jenis bangunnya berubah.
C. Menampilkan hanya persegi dengan ukuran dan warna sama.
D. Meminta murid mengelompokkan bangun baru memakai ciri yang mereka rumuskan.

### 53. [p2-053 • PU • P.2 • PG]

Dalam pelajaran sejarah, seorang murid mampu menjelaskan hubungan sebab-akibat secara lisan tetapi kesulitan menulis panjang karena hambatan motorik. Tujuan asesmen ialah penalaran sejarah. Penyesuaian terbaik adalah ...

A. Menerima rekaman penjelasan dengan kriteria bukti dan alasan yang sama.
B. Mengganti seluruh tugasnya menjadi menyalin judul bab.
C. Memberi tambahan waktu untuk menyalin jawaban lisan menjadi tulisan panjang.
D. Meminta teman menyampaikan jawaban atas namanya.

### 54. [p2-054 • PU • P.2 • Kategori]

Murid yang baru belajar bahasa pengantar dapat mengurutkan gambar proses, tetapi belum lancar menjelaskan dengan kalimat lengkap. Tujuan kelas ialah menjelaskan urutan sebab-akibat. Nilai dukungan berikut sebagai Tepat atau Tidak tepat.

1. Memberi kerangka kalimat yang menghubungkan urutan gambar.
2. Mengizinkan penjelasan bertahap dengan gambar dan kata kunci.
3. Menyimpulkan kemampuan bernalarnya rendah dari kelancaran bahasa saja.

### 55. [p2-055 • PU • P.3 • PG]

Saat membaca teks panjang, murid cepat berpindah aktivitas dan tidak menyadari bagian yang belum dipahami. Guru ingin membangun kesadaran mengelola perhatian. Langkah terbaik adalah ...

A. Meminta seluruh teks selesai dengan waktu yang makin pendek.
B. Mengganti bacaan dengan permainan yang tidak terkait isinya.
C. Mencatat durasi duduk tenang sebagai satu-satunya bukti kesadaran membaca.
D. Menentukan jeda baca untuk memeriksa pemahaman.

### 56. [p2-056 • PU • P.3 • MCMA]

Dalam tantangan menyusun jembatan kertas, murid mulai memburu skor dan meninggalkan penjelasan mengapa desainnya kuat. Guru ingin kegiatan tetap menggembirakan dan bermakna. Pilih tindakan yang tepat.

A. Menambah hadiah untuk kelompok yang paling cepat selesai.
B. Menyisipkan kesempatan memprediksi dan menjelaskan perubahan desain.
C. Memberi waktu mencoba ulang setelah kelompok membandingkan hasil uji.
D. Mengumumkan pemenang sebelum kelompok sempat menjelaskan desain.

### 57. [p2-057 • PU • P.4 • PG]

Guru memakai simulasi digital pertumbuhan populasi. Murid menganggap gambar yang tampak realistis pasti memprediksi lingkungan sebenarnya. Tindakan paling tepat adalah ...

A. Memilih simulasi dengan warna paling menyerupai alam.
B. Menguji satu parameter lalu membahas asumsi model.
C. Meminta murid mengubah beberapa parameter sekaligus lalu memilih grafik paling menarik.
D. Memperbesar tampilan grafik sampai memenuhi layar.

### 58. [p2-058 • PU • P.4 • Kategori]

Guru merekam gerak percobaan agar kelas dapat menganalisis urutannya. Nilai penggunaan rekaman berikut sebagai Tepat atau Tidak tepat.

1. Memutar bagian tertentu lebih lambat lalu membandingkan pengamatan murid.
2. Menyimpulkan kecepatan gerak nyata dari video yang sudah diperlambat tanpa faktor skala waktu.
3. Memilih rekaman dari efek visualnya sebagai satu-satunya dasar.

### 59. [p2-059 • PU • P.5 • PG]

Guru mengundang perajin lokal untuk pelajaran pengukuran. Istilah ukuran yang dipakai perajin berbeda dari satuan pada buku. Kegiatan terbaik adalah ...

A. Meminta murid mencatat seluruh istilah ukuran lokal sebagai hasil akhir tugas.
B. Menerima semua ukuran lokal sebagai setara dengan satuan baku.
C. Membandingkan cara ukur perajin dengan alat baku.
D. Mengalihkan kunjungan menjadi sesi foto produk saja.

### 60. [p2-060 • PU • P.6 • MCMA]

Dua guru memberi nilai sangat berbeda pada jawaban esai yang sama. Mereka ingin memperbaiki konsistensi penilaian. Pilih langkah yang tepat.

A. Membandingkan alasan pemberian skor pada beberapa jawaban contoh.
B. Merata-ratakan skor lalu menganggap perbedaan penafsiran selesai.
C. Menyepakati contoh bukti tiap tingkat rubrik lalu mencoba menilai ulang.
D. Menghapus semua kriteria alasan agar skor cepat diberikan.

### 61. [p2-061 • PU • P.6 • PG]

Hampir semua murid salah pada soal yang memakai konteks olahraga asing, padahal jawaban pada konteks sehari-hari menunjukkan konsep yang sama dikuasai. Tindak lanjut penilaian paling tepat adalah ...

A. Menguji soal setara dengan konteks yang lebih dikenal.
B. Memberikan latihan tambahan dengan istilah olahraga yang sama sebelum menelaah soalnya.
C. Menghapus semua soal berkonteks dari asesmen berikutnya.
D. Menambah istilah olahraga agar konteks lebih rinci.

### 62. [p2-062 • PU • K.1 • Kategori]

Guru menyadari penjelasannya tentang suatu fakta belum didukung sumber yang cukup. Murid meminta kepastian untuk tugas. Nilai respons berikut sebagai Tepat atau Tidak tepat.

1. Mempertahankan klaim karena guru harus selalu tampak yakin.
2. Menyatakan bagian yang belum pasti dan menjadwalkan pemeriksaan sumber.
3. Kembali menjelaskan hasil pemeriksaan beserta koreksi bila diperlukan.

### 63. [p2-063 • PU • K.1 • PG]

Jadwal presentasi bertepatan dengan kegiatan keagamaan beberapa murid. Tujuan dan waktu pembelajaran masih dapat dipenuhi melalui dua jadwal setara. Keputusan guru yang paling etis adalah ...

A. Mengurangi skor murid yang memilih kegiatan keagamaannya.
B. Membatalkan presentasi untuk seluruh kelas secara permanen.
C. Meminta murid membuktikan bahwa keyakinannya lebih penting dari tugas.
D. Menawarkan dua jadwal setara dengan kriteria yang sama.

### 64. [p2-064 • PU • K.2 • MCMA]

Guru menduga ia terlalu cepat menjawab pertanyaannya sendiri sehingga murid jarang berpikir mandiri. Pilih langkah refleksi yang memberi bukti berguna.

A. Mencatat selang waktu antara pertanyaan dan respons guru pada beberapa pelajaran.
B. Mencoba waktu tunggu lebih panjang dan mengamati variasi alasan murid.
C. Memakai jumlah slide sebagai ukuran utama refleksi.
D. Meminta rekan mengamati pola pertanyaan dan tindak lanjutnya.

### 65. [p2-065 • PU • K.2 • PG]

Guru harus mengajar topik baru yang belum dikuasainya. Tersedia waktu persiapan dan rekan yang ahli. Langkah pengembangan diri terbaik adalah ...

A. Mengumpulkan beberapa presentasi siap pakai lalu memilih yang paling menarik.
B. Mempelajari konsep inti, menguji pemahamannya bersama rekan, lalu menyiapkan contoh.
C. Menyalin seluruh presentasi rekan sebagai pengganti memahami isi.
D. Membatasi seluruh kegiatan pada membaca buku oleh murid.

### 66. [p2-066 • PU • K.3 • Kategori]

Kelas menyepakati bahwa meminta bantuan harus disertai penjelasan usaha yang sudah dicoba. Guru ingin kebiasaan ini mendukung kemandirian. Nilai penerapannya sebagai Tepat atau Tidak tepat.

1. Guru memodelkan cara menyampaikan kebuntuan dan usaha yang telah dilakukan.
2. Guru menolak semua permintaan bantuan agar murid terbiasa mandiri.
3. Guru meninjau apakah syarat meminta bantuan dapat dipahami dan dipakai murid.

### 67. [p2-067 • PU • K.3 • PG]

Program membaca kelas awalnya dinilai dari jumlah halaman. Murid lalu memilih buku sangat mudah untuk mengejar angka. Guru ingin membangun budaya membaca yang berkembang. Keputusan terbaik adalah ...

A. Menaikkan target halaman sambil memperbarui daftar hadiah mingguan.
B. Membatasi semua murid pada satu buku dengan tingkat kesulitan sama.
C. Meninjau pemahaman dan pilihan bacaan secara berkala.
D. Menghapus seluruh kesempatan memilih buku.

### 68. [p2-068 • PU • S.1 • MCMA]

Instruksi guru berbunyi “bahas bagian penting”, tetapi tiap kelompok mengerjakan hal berbeda. Guru ingin memperbaiki komunikasi tugas. Pilih tindakan yang tepat.

A. Menjelaskan produk yang diminta dan memberi satu contoh batas cakupannya.
B. Mengulang kalimat yang sama dengan suara lebih keras.
C. Meminta wakil kelompok menyampaikan kembali rencana pengerjaan.
D. Menganggap perbedaan hasil pasti berarti murid enggan mendengar.

### 69. [p2-069 • PU • S.1 • PG]

Dalam rapat, keluarga menafsirkan istilah “belum berkembang” sebagai label tetap untuk anak. Guru bermaksud menjelaskan capaian sementara. Respons paling tepat adalah ...

A. Menjelaskan capaian sementara dengan bukti dan contoh.
B. Mengulang istilah administrasi hingga keluarga menghafalnya.
C. Memberi daftar istilah penilaian lengkap untuk dibaca keluarga di rumah.
D. Menganggap keluarga menolak semua bentuk penilaian.

### 70. [p2-070 • PU • S.2 • Kategori]

Proyek lintas mata pelajaran memberi tiga tenggat besar pada minggu yang sama. Murid kesulitan membagi waktu. Nilai keputusan kolaboratif berikut sebagai Tepat atau Tidak tepat.

1. Guru memetakan beban dan ketergantungan tugas bersama sebelum menyepakati tenggat.
2. Tim menyepakati bukti bersama yang dapat memenuhi tujuan beberapa mata pelajaran.
3. Setiap guru menganggap koordinasi selesai setelah mengirim jadwalnya sendiri.

### 71. [p2-071 • PU • S.2 • PG]

Museum daerah menawarkan kunjungan, tetapi kegiatan bakunya hanya tur bebas. Guru ingin murid membandingkan sumber sejarah. Langkah kerja sama terbaik adalah ...

A. Menerima tur baku lalu meminta murid menulis semua benda yang dilihat.
B. Meminta museum memberikan jawaban seluruh tugas murid.
C. Mengganti tujuan menjadi hafalan nama petugas museum.
D. Menyepakati sumber, pertanyaan pembanding, dan peran pemandu.

### 72. [p2-072 • PU • S.3 • MCMA]

Komunitas guru hendak menyusun bank contoh pertanyaan terbuka. Anggota memiliki pengalaman berbeda. Pilih kontribusi yang mendukung pengembangan profesi bersama.

A. Mengirim daftar soal sebanyak mungkin tanpa menjelaskan tujuan penggunaannya.
B. Menyertakan tujuan, contoh respons murid, dan alasan pertanyaan perlu diperbaiki.
C. Menelaah contoh rekan dengan kriteria yang disepakati dan memberi masukan spesifik.
D. Mengakhiri kegiatan setelah berkas terkumpul meski belum pernah ditelaah.

### 73. [p2-073 • PU • PF.1 • PG]

Sekolah dasar menilai proyek kebun kelas. Guru ingin hasilnya sesuai tujuan pendidikan dasar, termasuk kebiasaan bernalar dan bertanggung jawab. Bukti paling kuat adalah ...

A. Jumlah tanaman yang dibawa keluarga ke sekolah.
B. Catatan pengamatan murid, alasan keputusan perawatan, dan pelaksanaan tanggung jawabnya.
C. Menggunakan kerapian catatan sebagai pengganti penilaian alasan perawatan.
D. Harga alat kebun yang digunakan setiap kelompok.

### 74. [p2-074 • PU • PF.3 • Kategori]

Sebelum tugas interpretasi grafik, guru menemukan murid mampu membaca angka tetapi menyamakan tinggi batang dengan besar perubahan. Nilai pemetaan kebutuhan berikut sebagai Tepat atau Tidak tepat.

1. Guru menyimpulkan seluruh materi aritmetika harus diulang dari awal.
2. Guru memeriksa pemahaman nilai awal dan selisih melalui dua grafik sederhana.
3. Guru menyiapkan contoh yang membedakan nilai akhir besar dan kenaikan besar.

### 75. [p2-075 • PU • PF.4 • PG]

Sekolah mengubah urutan unit karena kegiatan lapangan musiman hanya dapat dilakukan bulan ini. Guru ingin adaptasi tetap menjaga perkembangan kompetensi. Langkah paling tepat adalah ...

A. Memindahkan tanggal kegiatan lapangan saja sementara urutan dan asesmen tetap.
B. Mengikuti kesempatan lapangan dengan menghapus tujuan yang sulit dicapai.
C. Memetakan prasyarat sebelum menyesuaikan urutan dan asesmen.
D. Menjalankan jadwal lama meskipun sumber lapangan tidak tersedia lagi.

### 76. [p2-076 • PU • PF.5 • MCMA]

Guru mencoba diskusi berpasangan sebelum jawaban kelas untuk memperbaiki alasan berbasis bukti. Hasil awal tampak lebih baik, tetapi tugas kedua lebih mudah. Pilih langkah pengembangan praktik yang tepat.

A. Mencatat perbedaan kesulitan tugas sebagai keterbatasan penafsiran.
B. Menyimpulkan metode pasti efektif untuk semua materi.
C. Menghitung hanya jumlah murid yang menyukai diskusi sebagai bukti pemahaman.
D. Menguji kembali dengan tugas sebanding dan kriteria alasan yang sama.

### 77. [p2-077 • PU • P.6 • PG]

Dalam penilaian teman sebaya, murid memberi skor tinggi kepada teman dekat meski alasan jawaban lemah. Guru ingin memperbaiki fungsi asesmen. Tindak lanjut terbaik adalah ...

A. Melatih penilaian jawaban anonim dengan alasan berbasis rubrik.
B. Memakai seluruh skor teman langsung sebagai nilai akhir.
C. Meminta penilai menambahkan komentar pujian pada setiap skor tinggi.
D. Menambah banyak penilai tanpa membahas dasar skornya.

### 78. [p2-078 • PU • P.1 • Kategori]

Murid menyimpulkan semua benda berat pasti tenggelam setelah mengamati sebuah batu. Guru ingin memperluas cara membangun penjelasan. Nilai kegiatan berikut sebagai Tepat atau Tidak tepat.

1. Membandingkan benda dengan massa dan volume berbeda lalu meminta revisi dugaan.
2. Menambah sepuluh batu sejenis sebagai satu-satunya bukti simpulan umum.
3. Mengganti dugaan murid dengan kalimat hafalan tanpa pengamatan pembanding.

### 79. [p2-079 • PU • S.3 • PG]

Seusai pelatihan komunitas, guru mencoba satu teknik bertanya dan menemukan beberapa kondisi yang tidak cocok. Tindak lanjut ke komunitas paling bermanfaat adalah ...

A. Menyimpan hasil karena hanya keberhasilan yang layak dibagikan.
B. Menganjurkan anggota berhenti memakai teknik itu di semua kelas.
C. Membagikan bahan pelatihan yang sama lagi sebagai satu-satunya tindak lanjut.
D. Membahas kondisi uji, respons murid, dan batas penerapan.

### 80. [p2-080 • PU • PF.4 • MCMA]

Tim kurikulum ingin menggabungkan dua tugas yang sama-sama meminta laporan pengamatan. Tujuan tiap mata pelajaran sebagian berbeda. Pilih keputusan yang menjaga keselarasan kurikulum.

A. Memetakan bukti yang dapat dipakai bersama dan bukti yang tetap perlu dibedakan.
B. Memberikan satu nilai identik untuk semua tujuan karena produknya satu.
C. Menyusun kriteria sesuai tujuan masing-masing meski artefaknya sama.
D. Menjelaskan kepada murid bagian laporan yang memenuhi tiap tujuan.

## Kunci dan pembahasan

### 1. p2-001 — B

Rata-rata atas nilai yang diketahui berbeda dari rata-rata yang memasukkan nol buatan. Murid perlu menafsirkan makna data sebelum memilih perlakuan NULL.

- A: Pembulatan tidak menyelesaikan perbedaan makna data.
- B: Perubahan penyebut memperlihatkan akibat menganggap belum diukur sebagai nol.
- C: Imputasi memerlukan alasan dan asumsi; mengisinya langsung belum memperbaiki pemahaman perbedaan NULL dan nol.
- D: Alias memperjelas nama, bukan makna nilai yang dihitung.

### 2. p2-002 — Tepat / Tidak tepat / Tepat

COUNT(*) menghitung baris; COUNT pada kolom menghitung nilai non-NULL. Prediksi perubahan lebih informatif daripada hafalan keluaran.

- 1: Penjelasan membedakan jumlah baris dan nilai non-NULL.
- 2: Tabel yang sama tidak menjamin ekspresi COUNT menghitung hal yang sama.
- 3: Prediksi menguji pemahaman pengaruh nilai terhadap agregasi.

### 3. p2-003 — C

Kesalahan terjadi pada tingkat data yang disaring. Model dua tahap menjelaskan perbedaan WHERE dan HAVING, bukan sekadar memperbaiki ejaan SQL.

- A: Pengurutan bukan penyaringan kelompok berdasarkan total.
- B: Harga satuan tidak setara dengan total per kategori.
- C: Urutan ini membedakan kondisi baris dan kondisi hasil agregasi.
- D: Penghilangan duplikasi tidak menerapkan syarat agregat.

### 4. p2-004 — A, D

Representasi dipilih menurut satuan dan operasi yang diperlukan. Memoles tampilan tidak memperbaiki ketepatan penyimpanan.

- A: Perbandingan menunjukkan konsekuensi representasi bilangan.
- B: Format tampilan tidak mengubah nilai yang tersimpan.
- C: Teks menyulitkan operasi numerik dan tidak mengikuti kebutuhan tiap data.
- D: Satuan bulat dapat menjaga ketepatan bila tidak memerlukan pecahan rupiah.

### 5. p2-005 — A

Guru memeriksa hubungan tipe data dengan operasi pembandingan, lalu dapat menyiapkan konversi ke tipe tanggal sesuai kebutuhan belajar.

- A: Pasangan itu mengungkap perbedaan pembandingan teks dan tanggal.
- B: Kecepatan mengetik tidak menjelaskan cara nilai dibandingkan.
- C: Pemisah yang seragam belum mengubah pembandingan teks menjadi pembandingan waktu.
- D: Warna kolom bukan prasyarat pengurutan kronologis.

### 6. p2-006 — Tidak tepat / Tepat / Tepat

Backup dinilai dari keterpulihan dan kecocokan hasil, bukan keberadaan file saja. Pengujian dilakukan pada lingkungan uji agar data kerja aman.

- 1: Ukuran tidak menjamin isi lengkap atau dapat dipulihkan.
- 2: Uji pemulihan memeriksa kemampuan yang ditargetkan.
- 3: Catatan membuat proses pemulihan dapat diperiksa ulang.

### 7. p2-007 — D

Alat memperlihatkan bukti penggunaan indeks dan batas manfaatnya. Ukuran data, pola pencarian, dan biaya pemeliharaan indeks tetap perlu dipertimbangkan.

- A: Tampilan grafis tidak menjadi ukuran biaya query.
- B: Perubahan ukuran data mengaburkan pengaruh indeks sehingga bukti perbandingan belum terkontrol.
- C: Nama operator belum menjelaskan hubungan indeks dengan pola akses.
- D: Kondisi yang sebanding membantu menilai kapan indeks digunakan.

### 8. p2-008 — B, C

Konteks lokal berguna bila makna datanya dipahami. Pemilihan filter harus mengikuti definisi sumber, bukan bentuk angka semata.

- A: Bentuk numerik tidak menjamin maknanya hasil pengukuran.
- B: Kamus data menjelaskan arti kode dalam konteks sumber.
- C: Definisi menjaga agar murid dapat menafsirkan hasil query.
- D: Nol dapat merupakan pengukuran sah yang penting.

### 9. p2-009 — B

DISTINCT menjawab pertanyaan tentang nilai unik. Jumlah peserta memerlukan unit hitung yang sesuai, meskipun jawaban mereka sama.

- A: Hitungan itu tetap menghitung nilai unik, bukan peserta yang jawabannya dapat sama.
- B: Dua tujuan tersebut menjelaskan mengapa hasil DISTINCT tidak mewakili jumlah responden.
- C: Urutan tidak mengembalikan baris yang disatukan.
- D: Perubahan isi merusak data, bukan memperbaiki penafsiran.

### 10. p2-010 — Tepat / Tidak tepat / Tidak tepat

Tujuan kejuruan mencakup penguasaan teknik sekaligus penggunaannya secara bertanggung jawab. Hak akun perlu diuji, bukan diasumsikan dari keberadaan view.

- 1: Pembatasan akses menghubungkan keterampilan teknis dan tanggung jawab pengguna.
- 2: Jumlah akses penuh bukan bukti tanggung jawab profesional.
- 3: View saja tidak menjamin pembatasan hak terhadap tabel asal.

### 11. p2-011 — C

Dukungan menanggapi bukti kebutuhan yang spesifik: koma dalam nilai harus dibedakan dari pemisah kolom sesuai aturan CSV yang digunakan.

- A: Contoh itu menambah kolom tetapi tidak menguji kasus koma di dalam nilai yang menjadi kesulitan.
- B: Perubahan itu menghindari kebutuhan membaca struktur CSV.
- C: Contoh kecil menargetkan prasyarat pemisah dan pengutipan.
- D: Daftar format tidak mengatasi kesulitan parsing yang ditemukan.

### 12. p2-012 — A, B, D

Adaptasi unit mempertahankan materi basis data sekaligus mengaitkan tujuan, kegiatan, dan asesmen dengan kebutuhan pengelolaan data nyata.

- A: Masa simpan memperluas pengelolaan data sesuai kebutuhan pengguna.
- B: Kegiatan dan bukti kerja mendukung tujuan pengelolaan siklus data.
- C: Hafalan perintah belum menilai keputusan pengelolaan data.
- D: Rubrik mengukur alasan dan penerapan yang ditargetkan.

### 13. p2-013 — A

Perbaikan praktik membutuhkan bukti yang terkait dugaan, dengan tugas sebanding dan keterbatasan perbandingan yang diakui.

- A: Bukti kesalahan dan alasan membantu menilai manfaat rancangan pada pembelajaran.
- B: Kecepatan pembuatan belum menunjukkan pengurangan kesalahan data.
- C: Banyak pertanyaan tidak langsung menunjukkan apakah makna isian dipahami dan diisi konsisten.
- D: Preferensi tampilan belum menguji dugaan tentang konsistensi.

### 14. p2-014 — Tepat / Tepat / Tidak tepat

Contoh harus benar-benar menggunakan override dengan pemanggilan yang mendukung dispatch dinamis pada bahasa yang dipakai. Dua nama method berbeda tidak menguji dugaan awal.

- 1: Perbandingan memperlihatkan pemilihan implementasi saat dijalankan.
- 2: Prediksi dan revisi mengungkap model mental dispatch.
- 3: Nama berbeda menghindari mekanisme override yang sedang dipelajari.

### 15. p2-015 — D

Asesmen diagnosis meminta bukti yang dapat membedakan penyebab, bukan hanya menunjukkan aplikasi tampak normal.

- A: Label tidak menunjukkan berapa kali handler didaftarkan atau dijalankan.
- B: Ukuran file bukan bukti jumlah pemanggilan event.
- C: Warna tidak menguji sumber aksi ganda.
- D: Log menautkan dugaan pendaftaran ganda dengan gejala.

### 16. p2-016 — A, C

Perbaikan harus menjelaskan transformasi dari satu sistem koordinat ke sistem lain. Penyesuaian angka kebetulan tidak menjamin hasil pada posisi baru.

- A: Hubungan titik asal menjelaskan transformasi koordinat.
- B: Koreksi satu contoh belum berlaku ketika posisi canvas berubah.
- C: Prediksi pada posisi baru menguji pemahaman transformasi.
- D: Resolusi aset tidak menyelesaikan perbedaan titik asal koordinat.

### 17. p2-017 — B

Gerak per detik dapat dimodelkan sebagai kecepatan dikali selang waktu. Murid perlu membedakannya dari pertambahan tetap per frame.

- A: Ukuran jendela tidak langsung menentukan waktu gerak.
- B: Perbandingan menghubungkan kecepatan dengan selang waktu.
- C: Gerak tampak halus belum menjamin jarak yang ditempuh per detik sama.
- D: Satu perangkat menyembunyikan ketergantungan terhadap frame rate.

### 18. p2-018 — Tidak tepat / Tepat / Tepat

Tujuan, tugas, dan asesmen perlu mengukur pemisahan aturan dari antarmuka. Daftar widget tidak cukup membuktikan kemampuan tersebut.

- 1: Banyak widget tidak menunjukkan pemisahan tanggung jawab.
- 2: Model terpisah mendukung tujuan perubahan antarmuka.
- 3: Dua tampilan memberi bukti penerapan pemisahan yang ditargetkan.

### 19. p2-019 — C

Kebutuhan belajar terletak pada model keadaan pemanggilan. Contoh dangkal dua tingkat cukup untuk membedakan variabel lokal sebelum rekursi bertingkat.

- A: Ukuran kasus menambah beban sebelum model pemanggilan terbentuk.
- B: Hafalan definisi belum menanggapi dugaan tentang variabel lokal.
- C: Representasi ini menargetkan prasyarat keadaan tiap pemanggilan.
- D: Penggantian materi tidak membantu membangun prasyarat rekursi.

### 20. p2-020 — B, D

Dukungan menghubungkan representasi referensi dengan perilaku perubahan, sambil tetap meminta bukti pemahaman dari setiap murid.

- A: Tugas itu tidak menargetkan kesenjangan pemahaman referensi.
- B: Diagram dan uji memperlihatkan object yang masih dibagi.
- C: Pengambilalihan pekerjaan tidak menunjukkan perubahan pemahaman teman.
- D: Penjelasan individu mempertahankan tantangan sesuai kesiapan.

### 21. p2-021 — D

Sumber lokal dipakai untuk menguji kebutuhan nyata penempatan logo, bukan sekadar menghias tugas. Perbandingan perlu mengisolasi ada-tidaknya transparansi.

- A: Latar seragam tidak memperlihatkan kebutuhan transparansi.
- B: Foto dapat memperlihatkan bentuk logo, tetapi tidak menyediakan aset terpisah untuk menguji transparansi.
- C: Aset menyatu tidak memperlihatkan perilaku pada latar baru.
- D: Perbandingan aset lokal menunjukkan fungsi transparansi.

### 22. p2-022 — Tepat / Tidak tepat / Tidak tepat

Penggunaan alat secara kritis mencakup kompatibilitas dan reproduksibilitas, bukan mengejar versi atau jumlah pustaka.

- 1: Kegiatan melatih pemilihan alat berdasarkan bukti kompatibilitas.
- 2: Hilangnya catatan mengurangi kemampuan mereproduksi lingkungan.
- 3: Jumlah instalasi tidak menunjukkan kecocokan pustaka dengan kebutuhan.

### 23. p2-023 — A

Umpan balik mengarahkan murid membedakan jenis kegagalan dan respons aplikasi, bukan sekadar membuat error menghilang.

- A: Dua kondisi menguji apakah penanganan mempertahankan informasi kegagalan.
- B: Pesan sukses menyembunyikan kegagalan yang perlu ditangani.
- C: Daftar luas belum menunjukkan respons yang tepat pada dua kegagalan pembacaan file.
- D: Pemindahan kode tidak menjamin penanganan tiap kegagalan tepat.

### 24. p2-024 — A, C, D

Pengembangan praktik berfokus pada kemampuan murid memakai bukti biaya, bukan sekadar menghasilkan program lebih cepat pada satu contoh.

- A: Profil membantu mengaitkan contoh ajar dengan sumber biaya nyata.
- B: Panjang kode tidak menunjukkan biaya eksekusi.
- C: Perubahan alasan memberi bukti dampak strategi pembelajaran.
- D: Konteks memengaruhi hasil pengukuran dan jangkauan temuan.

### 25. p2-025 — C

Diskusi bermakna memakai kebutuhan dan skenario sebagai acuan. Guru memberi ruang perbedaan sambil menjaga alasan teknis yang dapat diperiksa.

- A: Popularitas pendapat bukan dasar perilaku sistem yang diminta.
- B: Kecepatan gambar tidak menyelesaikan perbedaan aturan transisi.
- C: Skenario memberi dasar bersama untuk membandingkan gagasan.
- D: Kesederhanaan berguna, tetapi diagram harus tetap memuat perilaku yang diperlukan pengguna.

### 26. p2-026 — Tepat / Tepat / Tidak tepat

Kesiapan kerja mencakup keputusan aset, pengujian, dan penyerahan hasil yang dapat digunakan pihak lain.

- 1: Keputusan aset menghubungkan teknik dan tanggung jawab profesional.
- 2: Dokumentasi dan uji membantu orang lain menggunakan hasil kerja.
- 3: Volume tertinggi tidak mewakili mutu, kegunaan, atau tanggung jawab kerja.

### 27. p2-027 — B

Pada kondisi asal dan kepentingan aturan yang sama, specificity dapat mengalahkan urutan. Contoh perlu mengendalikan faktor lain agar dugaan terakhir-selalu-menang dapat diuji.

- A: Keluaran yang sama tidak membedakan dugaan murid.
- B: Pertukaran urutan menguji pengaruh specificity secara terpisah.
- C: Satu sumber gaya tidak memperlihatkan kompetisi aturan.
- D: Kasus specificity sama hanya menguatkan pengaruh urutan dan tidak menguji batas dugaan murid.

### 28. p2-028 — A, D

Penjelasan perlu menghubungkan ukuran yang dinyatakan dan ukuran luar elemen. Percobaan terkontrol lebih kuat daripada penyesuaian tampilan kebetulan.

- A: Perhitungan menunjukkan komponen yang menambah lebar luar.
- B: Perubahan font tidak langsung menjelaskan perhitungan box.
- C: Ukuran layar saja tidak menunjukkan komponen lebar elemen.
- D: Dua mode menguji apakah padding termasuk dalam lebar yang ditetapkan.

### 29. p2-029 — A

Dukungan dimulai dari perbedaan fungsi yang belum dipahami. Pengujian perilaku membantu murid melampaui pemilihan elemen berdasarkan tampilan.

- A: Skenario dan uji membantu murid mengaitkan semantik dengan fungsi.
- B: Jumlah tag tidak cukup menjadi dasar pengelompokan permanen.
- C: Kemudahan styling belum menjamin elemen memiliki peran dan perilaku yang sesuai.
- D: Daftar atribut menambah beban sebelum fungsi elemen dipahami.

### 30. p2-030 — Tidak tepat / Tepat / Tepat

Bukti pemahaman harus menjelaskan alur event dan pilihan penanganannya. preventDefault tidak identik dengan menghentikan propagasi.

- 1: Perubahan ikon tidak membuktikan alur event berubah.
- 2: Jalur event memperlihatkan hubungan klik dengan aksi ganda.
- 3: Dua mekanisme menangani persoalan berbeda sehingga perlu dibedakan.

### 31. p2-031 — D

Alat digunakan untuk menelusuri bukti pemuatan aset. Nama atau versi aset dan kebijakan cache perlu dikaitkan dengan perilaku browser.

- A: Kebiasaan ini menghindari penjelasan asal aset yang dipakai.
- B: Tampilan dapat memperlihatkan gejala, tetapi belum menelusuri sumber aset dan kebijakan cache.
- C: Ukuran file bukan mekanisme penamaan versi yang dapat diandalkan.
- D: Bukti permintaan membantu membedakan aset tersimpan dari aset baru.

### 32. p2-032 — B, C

Kasus menguji perbedaan urutan pengiriman dan penyelesaian. Tampilan perlu menerima hasil yang masih relevan dengan input saat ini.

- A: Urutan selesai tidak menjamin urutan request.
- B: Garis waktu memperlihatkan sumber hasil yang menimpa.
- C: Pemeriksaan dapat mencegah hasil usang mengganti hasil terbaru.
- D: Durasi tetap tidak menjamin urutan penyelesaian jaringan.

### 33. p2-033 — C

Kebutuhan belajar terletak pada pembedaan struktur URL dan nilai parameter. Pengodean nilai menjaga karakter khusus tetap menjadi bagian data, bukan pemisah parameter.

- A: Salinan tambahan tidak menjelaskan peran karakter khusus.
- B: Penggantian data menghindari kebutuhan merepresentasikan nilai asli.
- C: Perbandingan menargetkan prasyarat pemisahan struktur URL dan isi parameter.
- D: Status HTTP tidak menjelaskan pembentukan parameter URL.

### 34. p2-034 — Tepat / Tidak tepat / Tepat

Asesmen harus memunculkan kondisi yang menjadi tujuan desain. Keberhasilan saat sesi aktif tidak cukup membuktikan penanganan sesi habis.

- 1: Demonstrasi menguji pemulihan pekerjaan saat sesi habis.
- 2: Kondisi normal belum menguji skenario habis sesi.
- 3: Penjelasan menghubungkan pemulihan dengan pengelolaan data pengguna.

### 35. p2-035 — B

Guru perlu menunjukkan bagaimana konteks penyajian memengaruhi interpretasi data. Pengodean keluaran yang sesuai konteks berbeda dari sekadar membatasi panjang atau tampilan.

- A: Panjang teks bukan penentu apakah isi ditafsirkan sebagai markup.
- B: Perbandingan memperlihatkan perbedaan data teks dan markup yang dieksekusi.
- C: Keterisian tidak mengatur apakah data ditampilkan sebagai teks atau ditafsirkan sebagai markup.
- D: Pilihan warna tidak menangani interpretasi tag dari data.

### 36. p2-036 — A, C

Konteks deployment lokal memberi alasan mempelajari path. Solusi dinilai terhadap struktur tujuan, bukan hanya keberhasilan pada komputer sendiri.

- A: Struktur nyata membantu menelusuri perbedaan alamat.
- B: Resolusi tidak menyelesaikan alamat aset yang keliru.
- C: Perbandingan menjelaskan konsekuensi pemilihan path.
- D: Pemindahan menghindari kondisi pemasangan yang diminta mitra.

### 37. p2-037 — A

Kurikulum menghubungkan tujuan dokumentasi dengan kegiatan penggunaan dan bukti keterpakaian, bukan penguasaan merek alat.

- A: Pemakaian lintas kelompok menguji kelengkapan kontrak yang ditulis.
- B: Jumlah halaman tidak menjamin kontrak dapat digunakan.
- C: Nama menu tidak mengukur kemampuan menjelaskan endpoint.
- D: Alamat saja belum menjelaskan parameter, bentuk response, dan kondisi yang dibutuhkan pemakai.

### 38. p2-038 — Tepat / Tepat / Tidak tepat

Perbaikan praktik membutuhkan bukti proses dan hasil beserta batas cakupannya. Audit keyboard menambah bukti, bukan menjamin seluruh aksesibilitas.

- 1: Urutan fokus memberi bukti perubahan keterujian navigasi.
- 2: Alasan membantu menilai perubahan pemahaman aksesibilitas.
- 3: Satu halaman dan satu cara akses tidak mewakili semua kebutuhan pengguna.

### 39. p2-039 — D

Pada platform yang membuat ulang layar ketika konfigurasi berubah, state lokal dapat hilang. Murid perlu menguji lifecycle dan strategi pemulihannya, bukan menganggap rotasi sekadar perubahan gambar.

- A: Penguncian dapat menutupi gejala, bukan menjelaskan pembuatan ulang layar.
- B: Lebar menguji tata letak, tetapi belum menjelaskan hilangnya state akibat lifecycle.
- C: Penundaan tidak menjamin state disimpan dan dipulihkan.
- D: Log dan state menghubungkan perubahan orientasi dengan pembuatan ulang komponen.

### 40. p2-040 — A, B, D

Dukungan mempertimbangkan kesiapan dalam menalar cabang izin. Alternatif manual menjaga fungsi yang sesuai ketika akses lokasi tidak diberikan.

- A: Diagram membantu murid menyiapkan dua kondisi pengguna.
- B: Tantangan memperdalam solusi sambil menjaga fungsi inti.
- C: Penolakan merupakan pilihan pengguna yang sah, bukan bukti perangkat rusak.
- D: Penjelasan individu memastikan prasyarat kondisi pengguna dipahami.

### 41. p2-041 — B

Asesmen menilai keputusan desain berdasarkan skenario penggunaan. Tidak semua aplikasi harus terus memutar audio; keputusan harus dijelaskan terhadap kebutuhan dan kemampuan platform.

- A: Kondisi itu belum menguji perpindahan ke latar belakang.
- B: Bukti menautkan perilaku aktual, kebutuhan, dan lifecycle.
- C: Format dapat memengaruhi kompatibilitas, tetapi belum menguji perpindahan status aplikasi.
- D: Izin penyimpanan bukan keseluruhan bukti perilaku pemutaran.

### 42. p2-042 — Tidak tepat / Tepat / Tepat

Kebutuhan murid terletak pada model penjadwalan kerja dan respons UI. Penundaan terkontrol membantu menampakkan masalah yang tersembunyi pada koneksi cepat.

- 1: Jaringan cepat dapat menyembunyikan penundaan yang menghalangi UI.
- 2: Prediksi mengungkap hubungan tugas panjang dengan thread UI.
- 3: Model antrean menanggapi prasyarat penalaran yang belum terbentuk.

### 43. p2-043 — C

Sumber kebutuhan setempat dipakai untuk mempelajari penyimpanan lokal dan proses pengiriman yang dapat diperiksa. Data latihan harus tiruan, bukan rekam kesehatan asli.

- A: Kegiatan itu tidak menanggapi kebutuhan pencatatan saat luring.
- B: Contoh selalu daring menghindari kondisi sumber lokal.
- C: Skenario lokal memberi alasan mempelajari persistensi dan sinkronisasi.
- D: Paket kecil dapat membantu koneksi lambat, tetapi tidak menggantikan pencatatan saat sama sekali luring.

### 44. p2-044 — B, C

Konflik memerlukan deteksi dan kebijakan yang dijelaskan. Tidak ada aturan penimpaan tunggal yang otomatis benar untuk semua kebutuhan.

- A: Urutan tiba bukan jaminan ketepatan isi perubahan.
- B: Versi asal membantu mendeteksi perubahan bersamaan.
- C: Kebijakan perlu memenuhi kebutuhan, bukan sekadar menghilangkan pesan konflik.
- D: Pengiriman belum tentu berhasil sehingga data dapat hilang.

### 45. p2-045 — A

Penilaian memerlukan jejak lifecycle dan callback. Gejala berulang tidak cukup dijelaskan dengan jumlah komponen visual.

- A: Log langsung menguji dugaan listener menumpuk sepanjang lifecycle.
- B: Jumlah baris tidak menunjukkan apakah listener yang lama sudah dilepas.
- C: Warna tidak menjelaskan berapa callback yang dijalankan.
- D: Ukuran ikon tidak terkait pelepasan listener.

### 46. p2-046 — Tepat / Tidak tepat / Tepat

Alat digital dipakai untuk menguji asumsi ukuran, bukan menggantikan seluruh bukti penggunaan. Satuan logis membantu konsistensi ukuran antarmuka lintas density.

- 1: Perbandingan mengungkap beda piksel fisik dan satuan logis.
- 2: Screenshot tunggal tidak menunjukkan ukuran fisik dan interaksi beragam perangkat.
- 3: Perangkat nyata melengkapi bukti yang tidak diberikan emulator.

### 47. p2-047 — D

Model mental perlu memisahkan data item dan baris yang didaur ulang. Uji gulir bolak-balik memperlihatkan apakah state benar-benar mengikuti item.

- A: Perubahan font mengurangi guliran tetapi tidak memperbaiki kepemilikan state.
- B: Penghapusan menghindari kebutuhan mempertahankan pilihan pengguna.
- C: Urutan label tidak menjelaskan daur ulang komponen.
- D: Pelacakan membedakan state item dari komponen tampilan sementara.

### 48. p2-048 — A, C

Kegembiraan kegiatan berasal dari tantangan yang punya tujuan jelas. Response HTTP dapat berisi status gagal; kegagalan koneksi berbeda dari response server.

- A: Variasi kondisi mengarahkan tantangan pada penalaran status.
- B: Pesan yang muncul belum membuktikan penafsiran hasil benar.
- C: Penjelasan dan pertukaran menjaga tantangan sekaligus refleksi.
- D: Satu keberhasilan tidak menguji pemahaman kondisi lain.

### 49. p2-049 — B

Tujuan kurikuler diturunkan dari kemampuan aplikasi yang dibutuhkan. API merupakan sarana, bukan daftar sintaks yang menjadi tujuan akhir.

- A: Hafalan nama belum mengukur perancangan perilaku pengingat.
- B: Tujuan mencakup keputusan dan penerapan pada kondisi penggunaan.
- C: Jumlah notifikasi bukan ukuran ketercapaian kebutuhan.
- D: Keseragaman tampilan belum mengukur pengelolaan izin dan perubahan jadwal.

### 50. p2-050 — Tidak tepat / Tidak tepat / Tepat

Kesiapan kerja mencakup penyerahan hasil yang dapat diteruskan. Catatan lingkungan dan build membantu pihak lain bertanggung jawab atas pekerjaan berikutnya.

- 1: Pengalaman satu perangkat tidak cukup membantu tim lain membangun dan menguji.
- 2: Pernyataan itu belum menelusuri kebutuhan lingkungan proyek.
- 3: Dokumentasi memungkinkan penyerahan pekerjaan yang dapat direproduksi.

### 51. p2-051 — C

Transfer memerlukan pemahaman hubungan yang tetap meski penyajian berubah. Perbedaan satuan menjadi bukti untuk meninjau cara murid membandingkan besaran.

- A: Tabel dapat membantu rasio, tetapi belum menanggapi kesulitan ketika satuannya berubah.
- B: Jawaban contoh tidak menjelaskan hubungan besaran.
- C: Perbandingan menguji hubungan rasio, bukan rupa angka.
- D: Pengenalan nama belum mencapai penerapan rasio.

### 52. p2-052 — A, B, D

Contoh bervariasi dan noncontoh membantu murid menemukan ciri penentu, bukan menghafal gambar yang biasa terlihat.

- A: Pasangan memperlihatkan perlunya syarat tambahan selain empat sisi.
- B: Rotasi menguji apakah murid bergantung pada orientasi gambar.
- C: Keseragaman dapat mempertahankan pengenalan dari tampilan sempit.
- D: Pengelompokan baru menguji penerapan ciri konseptual.

### 53. p2-053 — A

Hambatan cara menyampaikan jawaban perlu dipisahkan dari kemampuan yang dinilai. Kriteria tetap, sedangkan moda respons dapat disesuaikan.

- A: Cara respons disesuaikan sambil mempertahankan sasaran penalaran.
- B: Tugas itu tidak mengukur penalaran sejarah.
- C: Tambahan waktu mungkin membantu sebagian tugas, tetapi tetap membebani hambatan motorik saat sasaran utamanya penalaran sejarah.
- D: Jawaban teman tidak memberi bukti penalaran individu.

### 54. p2-054 — Tepat / Tepat / Tidak tepat

Dukungan bahasa membantu menampilkan penalaran, bukan menggantinya. Guru perlu membedakan hambatan ekspresi dan pemahaman hubungan.

- 1: Kerangka membantu ekspresi hubungan yang sudah mulai dipahami.
- 2: Respons bertahap membuka akses pada tujuan yang sama.
- 3: Kelancaran bahasa tidak cukup mewakili penalaran proses.

### 55. p2-055 — D

Kesadaran belajar melibatkan pemantauan tujuan dan proses. Jeda dipakai memeriksa pemahaman, bukan sekadar menghentikan kegiatan.

- A: Tekanan kecepatan belum mengajarkan pemantauan pemahaman.
- B: Aktivitas itu menghindari tujuan pengelolaan perhatian saat membaca.
- C: Duduk tenang belum menunjukkan murid mengenali bagian yang dipahami dan yang belum.
- D: Perencanaan jeda membantu murid menyadari serta mengelola proses belajarnya.

### 56. p2-056 — B, C

Kegiatan menarik tetap perlu menghubungkan tindakan, bukti, dan refleksi. Tantangan tidak harus dihapus, tetapi diarahkan kembali pada tujuan.

- A: Hadiah kecepatan memperkuat fokus yang sedang menggeser tujuan.
- B: Prediksi mengembalikan tantangan pada penalaran.
- C: Percobaan ulang mendukung refleksi dan rasa mampu.
- D: Pengumuman dini menutup kesempatan mengaitkan hasil dan alasan.

### 57. p2-057 — B

Literasi penggunaan teknologi mencakup membaca model dan asumsi. Tampilan realistis tidak menggantikan pemeriksaan kesesuaian dengan fenomena.

- A: Kemiripan visual tidak menjamin ketepatan prediksi.
- B: Percobaan dan asumsi memperlihatkan bahwa simulasi merupakan representasi terbatas.
- C: Perubahan serentak menyulitkan penafsiran pengaruh parameter dan tidak membahas asumsi model.
- D: Ukuran grafik tidak menentukan validitas model.

### 58. p2-058 — Tepat / Tidak tepat / Tidak tepat

Rekaman memberi akses pengamatan, tetapi penafsiran perlu mempertimbangkan perubahan cara penyajian waktunya.

- 1: Kontrol waktu membantu melihat kejadian yang sukar diamati langsung.
- 2: Perubahan pemutaran harus diperhitungkan dalam penafsiran waktu.
- 3: Efek visual tidak menjamin rekaman membantu tujuan pengamatan.

### 59. p2-059 — C

Sumber lokal dipakai untuk menghubungkan cara pengukuran setempat dengan satuan baku, dengan tetap memeriksa makna dan ketepatan hasilnya.

- A: Pencatatan menghargai sumber lokal, tetapi belum menghubungkan dan membandingkan sistem pengukurannya.
- B: Kesetaraan perlu diperiksa, bukan diasumsikan.
- C: Perbandingan menghubungkan sumber lokal dan tujuan pengukuran.
- D: Dokumentasi produk tidak mencapai tujuan pengukuran.

### 60. p2-060 — A, C

Moderasi penilaian memerlukan pemeriksaan bukti dan kriteria. Kesepakatan angka saja belum menyamakan makna tingkat capaian.

- A: Perbandingan mengungkap perbedaan penerapan kriteria.
- B: Rata-rata tidak menyelesaikan sumber ketidakkonsistenan.
- C: Contoh acuan membantu menyamakan penerapan kriteria.
- D: Penghapusan alasan dapat menghilangkan sasaran kemampuan yang dinilai.

### 61. p2-061 — A

Guru perlu memeriksa apakah soal mengukur konsep atau pengalaman dengan konteks. Keputusan diambil setelah membandingkan bukti yang setara.

- A: Perbandingan membantu memisahkan pemahaman konsep dari hambatan konteks.
- B: Latihan bisa memperkenalkan konteks, tetapi belum memeriksa apakah asesmen semula mengukur pengalaman konteks alih-alih konsep.
- C: Penghapusan menyeluruh tidak didukung satu temuan.
- D: Rincian tambahan dapat menambah hambatan yang tidak ditargetkan.

### 62. p2-062 — Tidak tepat / Tepat / Tepat

Keteladanan mencakup kejujuran intelektual dan pemenuhan janji memeriksa, bukan sekadar mengakui belum tahu lalu membiarkannya.

- 1: Wibawa tidak membenarkan kepastian yang belum didukung.
- 2: Kejujuran tentang batas pengetahuan memberi teladan tanggung jawab.
- 3: Tindak lanjut menunjukkan tanggung jawab atas informasi yang diberikan.

### 63. p2-063 — D

Keadilan memberi kesempatan setara untuk mencapai tujuan. Penyesuaian jadwal bukan pemberian nilai tanpa bukti.

- A: Pengurangan itu tidak didasarkan pada bukti capaian presentasi.
- B: Pembatalan menghilangkan kesempatan menunjukkan capaian meski alternatif tersedia.
- C: Perbandingan itu tidak diperlukan untuk pengaturan belajar yang adil.
- D: Penyesuaian menghormati keberagaman sambil menjaga standar capaian.

### 64. p2-064 — A, B, D

Refleksi diarahkan pada perilaku yang dapat diamati dan diubah. Bukti alasan murid lebih informatif daripada kesan bahwa kelas terlihat aktif.

- A: Catatan waktu menguji dugaan perilaku guru sendiri.
- B: Percobaan menautkan perubahan praktik dengan bukti partisipasi berpikir.
- C: Jumlah slide tidak memeriksa perilaku menunggu jawaban.
- D: Observasi rekan dapat melengkapi catatan yang rentan bias diri.

### 65. p2-065 — B

Belajar berkelanjutan memerlukan usaha memperbaiki penguasaan dan menggunakan dukungan profesional, bukan hanya memperoleh bahan siap tayang.

- A: Bahan menarik belum memastikan guru menguasai konsep atau mampu menjawab pertanyaan murid.
- B: Persiapan dan pemeriksaan pemahaman menanggapi kebutuhan kompetensi.
- C: Salinan bahan belum membuktikan guru mampu menjelaskan konsep.
- D: Pengalihan kegiatan tidak menyelesaikan kebutuhan belajar guru.

### 66. p2-066 — Tepat / Tidak tepat / Tepat

Kemandirian mencakup kemampuan mengenali kebutuhan bantuan dan menggunakannya. Konsistensi aturan tetap perlu disertai pemantauan dampak pada murid.

- 1: Pemodelan memperjelas perilaku meminta bantuan yang diharapkan.
- 2: Penolakan menyeluruh menghambat dukungan saat usaha murid belum cukup.
- 3: Peninjauan menjaga kebiasaan tetap mendukung perkembangan, bukan sekadar aturan.

### 67. p2-067 — C

Keputusan konsisten perlu mendorong tujuan budaya belajar, bukan perilaku mengejar ukuran pengganti yang mudah dimanipulasi.

- A: Ukuran dan hadiah tetap mendorong pengejaran jumlah, bukan pilihan tantangan serta pemahaman.
- B: Keseragaman belum menanggapi kesiapan dan perkembangan yang berbeda.
- C: Bukti proses dan pemahaman mengarahkan kebiasaan pada pertumbuhan.
- D: Penghilangan pilihan belum membangun kemampuan memilih tantangan sesuai kebutuhan.

### 68. p2-068 — A, C

Komunikasi efektif memerlukan kejelasan dan pemeriksaan pemaknaan. Pengulangan bunyi saja tidak memperbaiki instruksi yang terlalu umum.

- A: Produk dan batas membantu murid menafsirkan maksud instruksi.
- B: Volume tidak menambah kejelasan maksud tugas.
- C: Penyampaian kembali memberi bukti apakah instruksi ditafsirkan sama.
- D: Kesimpulan itu mengabaikan kemungkinan instruksi ambigu.

### 69. p2-069 — A

Guru perlu menyesuaikan bahasa kepada penerima dan memeriksa pemahaman, sambil tetap menyampaikan informasi capaian secara akurat.

- A: Bukti dan contoh memperjelas makna sementara istilah penilaian.
- B: Hafalan istilah belum menyamakan pemaknaan.
- C: Daftar dapat menjadi pendamping, tetapi belum menjernihkan pemaknaan capaian anak dalam percakapan yang sedang berlangsung.
- D: Kesalahpahaman istilah tidak membuktikan penolakan penilaian.

### 70. p2-070 — Tepat / Tepat / Tidak tepat

Kolaborasi membutuhkan penyesuaian bersama berdasarkan tujuan dan beban, bukan sekadar saling memberi informasi jadwal.

- 1: Pemetaan memberi dasar koordinasi yang terkait pengalaman murid.
- 2: Bukti terintegrasi dapat mengurangi pengulangan bila tujuan tetap terpenuhi.
- 3: Pengiriman jadwal belum berarti konflik beban telah diselesaikan.

### 71. p2-071 — D

Kemitraan memberi akses pada sumber dan keahlian yang mendukung tujuan. Kegiatan perlu dirancang bersama agar kunjungan tidak sekadar perpindahan tempat.

- A: Daftar benda memberi dokumentasi kunjungan, tetapi belum menuntun perbandingan sumber sejarah.
- B: Jawaban jadi menghilangkan kesempatan menalar sumber.
- C: Tujuan berubah dan tidak memanfaatkan potensi sumber sejarah.
- D: Kesepakatan mengaitkan keahlian mitra dengan tujuan pembelajaran.

### 72. p2-072 — B, C

Partisipasi profesional mencakup kontribusi yang dapat ditelaah dan kesediaan memperbaiki bersama, bukan hanya menyumbang jumlah soal.

- A: Jumlah besar belum membantu rekan memilih pertanyaan yang sesuai.
- B: Konteks penggunaan membuat contoh dapat ditelaah rekan.
- C: Telaah terarah membangun pengetahuan bersama.
- D: Kumpulan berkas saja belum menunjukkan proses belajar komunitas.

### 73. p2-073 — B

Tujuan pendidikan dasar perlu diterjemahkan menjadi bukti perkembangan murid, bukan kualitas sumber daya keluarga atau keseragaman produk.

- A: Jumlah sumbangan tidak mewakili hasil belajar murid.
- B: Bukti mencakup penalaran dasar dan perilaku bertanggung jawab.
- C: Kerapian membantu komunikasi, tetapi bukan bukti penalaran dan pelaksanaan tanggung jawab.
- D: Harga alat mencerminkan sumber daya, bukan capaian belajar.

### 74. p2-074 — Tidak tepat / Tepat / Tepat

Kebutuhan belajar ditentukan dari hubungan kemampuan awal dan tuntutan interpretasi. Mengulang seluruh hitungan belum tentu menanggapi miskonsepsi grafik.

- 1: Bukti menunjukkan masalah interpretasi, bukan seluruh kemampuan hitung.
- 2: Pemeriksaan menargetkan prasyarat perubahan yang diperlukan.
- 3: Contoh menanggapi karakteristik materi serta kebutuhan yang ditemukan.

### 75. p2-075 — C

Kurikulum adaptif bukan sekadar memindahkan kegiatan. Prasyarat, tujuan, pengalaman, dan asesmen perlu tetap saling mendukung.

- A: Perubahan tanggal belum memeriksa apakah murid sudah memiliki prasyarat untuk kegiatan yang dimajukan.
- B: Penghapusan tujuan tidak dibenarkan hanya oleh perubahan jadwal.
- C: Adaptasi mempertimbangkan kesempatan lokal dan kesinambungan kompetensi.
- D: Kekakuan jadwal mengabaikan kesempatan kontekstual yang dapat direncanakan.

### 76. p2-076 — A, D

Pengembangan praktik memerlukan pemeriksaan penjelasan alternatif. Temuan awal layak ditindaklanjuti, bukan langsung dijadikan kesimpulan sebab-akibat.

- A: Kesulitan tugas merupakan penjelasan alternatif hasil.
- B: Bukti terbatas tidak mendukung generalisasi universal.
- C: Kesukaan tidak identik dengan kualitas alasan berbasis bukti.
- D: Perbandingan lebih setara membantu menilai dugaan perbaikan.

### 77. p2-077 — A

Penilaian teman sebaya perlu dukungan agar umpan balik dan skor mengacu pada bukti. Guru tetap bertanggung jawab memeriksa kualitas penilaian.

- A: Latihan memusatkan penilaian pada bukti, bukan kedekatan.
- B: Skor yang belum dapat dipercaya tidak layak langsung menentukan hasil akhir.
- C: Pujian tidak menjamin skor dan komentar mengacu pada kualitas bukti serta alasan.
- D: Jumlah penilai tidak otomatis memperbaiki bias kriteria.

### 78. p2-078 — Tepat / Tidak tepat / Tidak tepat

Murid perlu memeriksa batas generalisasi melalui contoh pembanding. Fokusnya cara menilai bukti, bukan jumlah contoh yang semuanya mendukung dugaan semula.

- 1: Variasi bukti dapat menantang generalisasi dari satu contoh.
- 2: Pengulangan contoh serupa tidak menguji batas dugaan.
- 3: Penggantian jawaban tidak memperlihatkan alasan perubahan konsep.

### 79. p2-079 — D

Partisipasi berkelanjutan membawa pengalaman penerapan kembali ke komunitas. Batas keberhasilan sama pentingnya dengan cerita keberhasilan untuk pengembangan profesi.

- A: Temuan ketidakcocokan juga dapat menjadi sumber belajar bersama.
- B: Satu pengalaman tidak mendukung penolakan di seluruh konteks.
- C: Bahan awal belum membawa pengalaman ketidakcocokan ke pembahasan profesional bersama.
- D: Bukti berkonteks membantu komunitas menyempurnakan pemahaman praktik.

### 80. p2-080 — A, C, D

Integrasi dapat mengurangi pengulangan kerja, tetapi tidak menyamakan seluruh konstruk penilaian. Tujuan dan bukti tetap perlu ditelusuri.

- A: Pemetaan menjaga agar penggabungan tidak menghilangkan tujuan khusus.
- B: Produk tunggal dapat menunjukkan capaian berbeda pada tujuan berbeda.
- C: Kriteria menjaga penafsiran capaian setiap mata pelajaran.
- D: Kejelasan hubungan tugas dan tujuan membantu pengerjaan serta refleksi.

