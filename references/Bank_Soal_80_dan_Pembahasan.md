# Paket 1 — latihan UTBK UKPPPG PPLG/RPL

Versi: 2026-11-18.4. Dihasilkan oleh `python scripts/build.py` dari `bank_soal_80.json`; jangan edit hasil build.

Latihan orisinal, bukan soal resmi/bocoran. Rujukan utama: Juknis yang disediakan, halaman 7 dan 47. Panduan pendamping hanya inspirasi mutu kasus.

80 soal = 50 PCK + 30 PU; 40 PG, 20 PGK Kategori, 20 MCMA. Distribusi bentuk dan kode merupakan keputusan latihan internal, bukan bobot resmi.

Skor latihan: 1 poin jika seluruh respons pada butir tepat; selain itu 0. Bukan rumus nilai atau ambang kelulusan resmi.

| Kode utama | Subkompetensi (Juknis hal. 47) | PCK | PU |
|---|---|---:|---:|
| P.1 | Merancang dan memfasilitasi pengalaman belajar Murid yang mendorong pemahaman konseptual, penerapan kontekstual, dan refleksi bermakna terhadap proses pembelajaran | 8 | 3 |
| P.2 | Melaksanakan pembelajaran yang responsif terhadap keragaman latar belakang, kebutuhan, dan potensi Murid melalui berbagai model pembelajaran | 5 | 4 |
| P.3 | Menciptakan proses pembelajaran yang berkesadaran, bermakna, dan menggembirakan | 4 | 2 |
| P.4 | Mengintegrasikan teknologi informasi dan komunikasi secara kritis dan kreatif dalam pembelajaran untuk memperluas akses, memperdalam pemahaman, dan mendukung literasi digital Murid | 5 | 2 |
| P.5 | Menerapkan strategi pembelajaran atau pembimbingan yang sesuai karakteristik Murid dengan memanfaatkan sumber belajar dan mempertimbangkan potensi lingkungan dan kearifan lokal | 4 | 2 |
| P.6 | Melaksanakan asesmen untuk mengetahui kebutuhan belajar, memberikan umpan balik, dan mengukur hasil belajar Murid secara berkesinambungan dan reflektif | 8 | 4 |
| K.1 | Menampilkan perilaku etis dan keteladanan yang mencerminkan kematangan spiritual, moral, dan emosional berdasarkan Ketuhanan Yang Maha Esa dan nilai-nilai keberagaman | 0 | 2 |
| K.2 | Melakukan refleksi diri secara berkesinambungan, mengembangkan pola pikir bertumbuh, serta belajar sepanjang hayat untuk peningkatan kualitas diri | 0 | 2 |
| K.3 | Mengambil keputusan dan bertindak secara konsisten dalam mengembangkan potensi dan budaya belajar Murid | 0 | 2 |
| S.1 | Berkomunikasi secara inklusif, empatik, dan efektif secara lisan, tulisan, dan/atau isyarat dengan memperhatikan keragaman dan kebutuhan Murid | 0 | 2 |
| S.2 | Berkolaborasi dengan Murid, sesama Pendidik, Tenaga Kependidikan selain Pendidik, orang tua/wali Murid, dan masyarakat untuk meningkatkan kualitas pembelajaran | 0 | 2 |
| S.3 | Berpartisipasi aktif dalam organisasi profesi dan komunitas pembelajaran untuk pengembangan keprofesian berkelanjutan | 0 | 1 |
| PF.1 | Menguasai tujuan pendidikan terutama pada Satuan Pendidikan yang diampu | 2 | 1 |
| PF.2 | Menguasai disiplin ilmu sesuai dengan materi/muatan pembelajaran atau pembimbingan | 6 | 0 |
| PF.3 | Memahami potensi dan kebutuhan belajar Murid berdasarkan karakteristik materi pembelajaran atau pembimbingan dan konteks lokal | 3 | 1 |
| PF.4 | Memahami, menerapkan, dan mengembangkan kurikulum secara adaptif dan kontekstual sesuai perkembangan zaman | 3 | 0 |
| PF.5 | Mengembangkan praktik profesional pendidikan secara konseptual, empiris, kreatif, dan inovatif | 2 | 0 |

## Soal

Kunci dan pembahasan berada setelah seluruh soal.

### 1. [p1-001 • PCK • P.1 • PG]

Dalam rancangan ERD perpustakaan kelas, beberapa murid menjadikan nama siswa sebagai primary key karena setiap murid punya nama. Guru menemukan dua murid bernama Nisa. Tindakan pembelajaran yang paling tepat adalah ...

A. Menjelaskan definisi PK, lalu meminta murid menerapkannya tanpa menguji dua nama yang sama.
B. Menguji dua rekaman bernama Nisa, lalu membimbing revisi ke ID unik yang tidak kosong.
C. Menambahkan indeks biasa pada nama_siswa agar pencarian cepat sekaligus dianggap menjamin keunikan.
D. Memakai gabungan nama dan kelas, lalu menyimpulkan keunikan tanpa menguji murid bernama sama di satu kelas.

### 2. [p1-002 • PCK • P.1 • MCMA]

Kelompok merancang basis data peminjaman alat lab. Guru ingin menghubungkan konsep relasi satu-ke-banyak dengan implementasi SQL. Aktivitas mana yang paling mendukung? Pilih semua jawaban yang tepat.

A. Mengabaikan tabel referensi agar latihan lebih singkat.
B. Menempatkan id_siswa pada tabel peminjaman dan menguji data yang terhubung.
C. Meminta murid menjelaskan dampak jika id_siswa pada peminjaman tidak merujuk siswa yang ada.
D. Meminta murid menyalin definisi foreign key berulang kali.
E. Membuat contoh satu siswa yang memiliki beberapa peminjaman.

### 3. [p1-003 • PCK • P.1 • PG]

Murid membuat formulir Laravel yang bisa dikirim walaupun kolom email kosong. Mereka menyimpulkan atribut required di HTML saja pasti cukup menjaga validitas data. Cara paling tepat meluruskan konsep adalah ...

A. Mengandalkan required browser untuk semua request.
B. Menambahkan pemeriksaan JavaScript yang menampilkan pesan sebelum submit tanpa pemeriksaan di server.
C. Menguji request yang melewati browser, lalu membimbing validasi required dan format email di server.
D. Memberi peringatan visual ketika email kosong sambil tetap menerima request yang dikirim ke server.

### 4. [p1-004 • PCK • P.1 • Kategori]

Guru memakai dua tabel kecil, siswa dan peminjaman, untuk membangun pemahaman JOIN. Nilai tiap tindakan sebagai Tepat atau Tidak tepat.

1. Murid menjelaskan mengapa baris tertentu muncul atau tidak muncul dalam hasil INNER JOIN.
2. Murid memprediksi hasil JOIN sebelum menjalankan query, lalu membandingkan prediksi dengan keluaran.
3. Guru langsung memberikan query jadi tanpa membahas relasi tabel.

### 5. [p1-005 • PCK • P.1 • PG]

Saat mengenalkan objek dalam pemrograman berorientasi objek, murid menyamakan class dan object. Representasi awal mana yang paling membantu?

A. Menelusuri dua instans dari satu class dan membandingkan perubahan atributnya.
B. Menghafalkan deklarasi class tanpa membuat instans.
C. Memakai satu variabel global sebagai dua object.
D. Mengenalkan hierarki pewarisan lebih dahulu sebelum menguji apakah murid membedakan rancangan dan instans.

### 6. [p1-006 • PCK • P.1 • MCMA]

Kelompok belajar kolaborasi Git pada proyek website kelas. Bukti pemahaman alur kerja yang layak diminta guru adalah ... Pilih semua yang tepat.

A. Memperlihatkan commit dengan pesan yang menjelaskan perubahan.
B. Menjelaskan kapan sebuah branch perlu digabung dan bagaimana menangani konflik.
C. Memastikan semua murid memakai satu akun agar mudah.
D. Menjelaskan perubahan lewat perbandingan diff pada dua versi kode.
E. Mengumpulkan satu file ZIP terakhir tanpa riwayat perubahan.

### 7. [p1-007 • PCK • P.1 • PG]

Pada kasus transaksi koperasi sekolah, setiap transaksi bisa berisi banyak jenis barang. Murid membuat satu kolom barang1, barang2, barang3 pada tabel transaksi. Pertanyaan pemantik terbaik adalah ...

A. Menambah kolom barang hingga jumlah terbesar saat ini.
B. Menyatukan daftar barang dan jumlah menjadi satu teks.
C. Menguji transaksi enam barang dengan jumlah berbeda, lalu membimbing rancangan tabel detail yang berelasi.
D. Membuat tabel transaksi terpisah untuk setiap barang.

### 8. [p1-008 • PCK • P.1 • Kategori]

Guru mengajar perulangan dengan tabel pelacakan nilai variabel. Nilai tindakan sebagai Tepat atau Tidak tepat.

1. Memulai tabel pelacakan dari iterasi kedua dan mengabaikan nilai awal karena tidak memengaruhi penelusuran.
2. Membandingkan pelacakan manual dengan keluaran program lalu membahas selisihnya.
3. Menilai jawaban benar dari keluaran akhir saja tanpa memeriksa alasan murid.

### 9. [p1-009 • PCK • P.2 • PG]

Asesmen awal menunjukkan sebagian murid sudah lancar SELECT-WHERE, sebagian belum mengenal kondisi WHERE. Strategi paling responsif adalah ...

A. Mengulang semua SELECT dengan kegiatan dan tempo identik agar semua murid memperoleh perlakuan yang sama.
B. Membedakan bantuan dan tantangan secara fleksibel, lalu mengecek tujuan inti yang sama.
C. Menetapkan kelompok mahir dan belum mampu untuk satu semester berdasarkan hasil asesmen awal tersebut.
D. Meminta murid mahir menyelesaikan query teman yang kesulitan agar keluaran setiap kelompok memenuhi target.

### 10. [p1-010 • PCK • P.2 • Kategori]

Di laboratorium, empat murid belum mendapat komputer. Nilai keputusan guru sebagai Tepat atau Tidak tepat.

1. Memberikan penilaian keterampilan komputer hanya kepada murid yang kebagian perangkat.
2. Menyiapkan tugas prediksi query atau rancangan ERD saat menunggu giliran praktik.
3. Menyusun giliran operator, penguji, dan pencatat sehingga semua berperan dan berganti peran.

### 11. [p1-011 • PCK • P.2 • MCMA]

Salah satu murid memiliki kendala penglihatan dan kesulitan membaca tangkapan layar kode yang kecil. Penyesuaian apa yang tepat? Pilih semua.

A. Mengurangi target menjadi hanya menonton teman tanpa kontribusi.
B. Memastikan kontras dan keterbacaan bahan praktik.
C. Mengizinkan alternatif cara menjelaskan logika program selama mengukur tujuan yang sama.
D. Mengecualikan murid dari asesmen agar tidak kesulitan.
E. Menyediakan teks kode yang dapat diperbesar atau dibaca pembaca layar.

### 12. [p1-012 • PCK • P.2 • PG]

Murid yang cepat selesai CRUD mulai tidak tertantang, sementara teman lain masih membuat tabel. Tindakan terbaik adalah ...

A. Memberi tantangan uji batas bagi yang siap dan contoh bertahap bagi yang masih membuat tabel.
B. Meminta murid cepat menyelesaikan kode kelompok lain.
C. Menghentikan semua kegiatan sampai rancangan tabel tiap murid selesai, termasuk bagi murid yang siap melanjutkan.
D. Memberi tambahan salinan CRUD yang sama kepada murid cepat tanpa menentukan tujuan atau tantangan baru.

### 13. [p1-013 • PCK • P.2 • PG]

Dalam diskusi ERD ada murid yang sulit mengikuti penjelasan lisan di ruang bising. Respons guru yang paling tepat adalah ...

A. Menegur kurang fokus sebelum memeriksa hambatan akses.
B. Memperkeras suara tanpa mengecek pemahaman.
C. Memberi instruksi tertulis/visual dan mengecek akses serta pemahaman secara pribadi.
D. Membebaskan murid dari penjelasan hubungan entitas dan hanya meminta salinan gambar agar tugasnya lebih ringan.

### 14. [p1-014 • PCK • P.3 • PG]

Saat latihan debugging banyak murid malu karena error. Guru ingin kelas aman untuk mencoba. Respons terbaik adalah ...

A. Memperbaiki seluruh error tanpa penelusuran oleh murid.
B. Memodelkan diagnosis, menyepakati komentar yang aman, lalu memberi kesempatan mencoba dan merevisi.
C. Mengganti debugging dengan menyalin kode jadi.
D. Melombakan jumlah error sebelum mengajarkan diagnosis.

### 15. [p1-015 • PCK • P.3 • Kategori]

Dalam proyek penjadwalan piket lab, murid dapat menyusun urutan tugas tetapi belum melihat manfaat algoritma bagi pengguna. Nilai rancangan pembelajaran sebagai Tepat atau Tidak tepat.

1. Menilai kebermaknaan proyek dari banyaknya animasi presentasi tanpa menguji apakah jadwal dapat dilaksanakan.
2. Membuka dengan kendala jadwal yang benar-benar dihadapi kelas dan mengajak murid menetapkan tujuan solusi.
3. Mengajak murid merefleksikan bagaimana aturan penjadwalan membantu pembagian tugas yang adil.

### 16. [p1-016 • PCK • P.3 • MCMA]

Guru ingin suasana diskusi kode menyenangkan tetapi tetap menantang. Pilih praktik yang tepat.

A. Menyebut kode murid tertentu “paling bodoh” sebagai humor.
B. Memberi kriteria keberhasilan yang jelas dan kesempatan memperbaiki produk.
C. Memuji proses pengujian dan argumentasi, bukan hanya jawaban tercepat.
D. Mewajibkan semua murid meniru satu cara tanpa berdiskusi.
E. Mengizinkan kelompok menjelaskan alternatif solusi tanpa diejek.

### 17. [p1-017 • PCK • P.3 • PG]

Menjelang akhir sesi array, beberapa murid mengatakan pencarian selalu berhenti di elemen pertama meski data belum ditemukan. Guru memiliki delapan menit untuk menjaga keterlibatan sekaligus menguji pemahaman. Kegiatan terbaik adalah ...

A. Menayangkan video motivasi agar murid kembali bersemangat tanpa menghubungkannya dengan kondisi berhenti pencarian.
B. Meminta murid menyalin istilah array sampai bel selesai agar semua tetap terlihat bekerja.
C. Meminta murid tercepat menyebut hasil pencarian sementara murid lain menyalin hasil tanpa menelusuri langkahnya.
D. Menguji target yang tidak ada lewat kartu array, lalu meminta revisi pemahaman kondisi berhenti.

### 18. [p1-018 • PCK • P.4 • PG]

Murid menggunakan AI untuk membuat kode autentikasi dan menganggap hasilnya pasti aman. Guru sebaiknya ...

A. Melarang pembahasan AI tanpa memeriksa kode murid.
B. Meminta uji dan penjelasan kode serta peninjauan sandi, input, dan batas keluaran AI.
C. Memberi nilai penuh setelah kode berjalan dan menunda pemeriksaan keamanan karena autentikasi sudah tampak berhasil.
D. Mengunggah kredensial server sekolah ke layanan AI agar perbaikan dapat disesuaikan langsung dengan sistem sebenarnya.

### 19. [p1-019 • PCK • P.4 • Kategori]

Guru memakai platform daring untuk penugasan RPL. Nilai keputusan berikut sebagai Tepat atau Tidak tepat.

1. Memilih alat terutama dari jumlah fitur lalu menyesuaikan tujuan agar semua fitur dipakai.
2. Mengunggah data identitas siswa asli ke layanan publik agar contoh terlihat realistis.
3. Menyiapkan alternatif akses saat jaringan atau perangkat murid terbatas.

### 20. [p1-020 • PCK • P.4 • MCMA]

Internet lab terputus. Guru ingin murid memahami alur request-response API, bukan sekadar menghafal istilah. Pilih semua adaptasi yang tepat.

A. Memakai kartu berisi method, path, dan respons untuk menelusuri pertukaran pesan sebelum uji lokal.
B. Mengganti tujuan menjadi menghafal nama layanan API publik karena layanan tidak dapat diakses.
C. Memakai server simulasi lokal yang sudah disiapkan agar murid mengamati request dan respons tanpa internet.
D. Meminta prediksi respons untuk beberapa request lalu membandingkannya dengan simulasi lokal.
E. Menampilkan tangkapan layar respons saja dan menganggap murid sudah membuktikan hubungan request-response.

### 21. [p1-021 • PCK • P.4 • PG]

Guru hendak memilih aplikasi gambar ERD daring. Murid mampu menggambar ERD di kertas. Prinsip pilihan paling tepat adalah ...

A. Memilih alat populer sebagai bukti manfaat belajar.
B. Mewajibkan semua tahap digital meski waktu tersita.
C. Memakai alat bila membantu uji, revisi, atau kolaborasi; tetap memakai kertas bila tujuan tercapai.
D. Mengutamakan hasil digital dalam nilai meskipun ERD kertas memiliki hubungan dan alasan yang lebih tepat.

### 22. [p1-022 • PCK • P.4 • PG]

Sebuah generator kode AI menghasilkan query yang menampilkan informasi pribadi siswa tanpa pembatasan. Tugas belajar yang paling tepat adalah ...

A. Membandingkan query dengan kebutuhan akses, membatasi data keluaran, dan menguji hasilnya.
B. Memercayai query karena dapat dijalankan.
C. Mempublikasikan hasil berisi data pribadi untuk dinilai.
D. Mengganti topik keamanan dengan hafalan sintaks.

### 23. [p1-023 • PCK • P.5 • PG]

Guru ingin memberi tugas rancangan basis data yang dekat dengan kehidupan murid. Masalah peminjaman alat olahraga sekolah tersedia dan datanya bisa disimulasikan. Kegiatan terbaik adalah ...

A. Memberikan skema industri lengkap sebelum murid mengamati proses setempat agar rancangan terlihat profesional.
B. Meminta salinan skema dari internet sebagai hasil akhir tanpa membandingkannya dengan kebutuhan peminjaman.
C. Menilai rancangan dari banyaknya tabel yang dibuat, dengan asumsi jumlah tabel menunjukkan kelengkapan kebutuhan.
D. Mengobservasi alur peminjaman, memodelkan relasi, lalu menguji dengan transaksi contoh.

### 24. [p1-024 • PCK • P.5 • Kategori]

Guru mengadaptasi studi kasus untuk SMK. Nilai keputusan berikut sebagai Tepat atau Tidak tepat.

1. Memakai contoh proses koperasi setempat tanpa menganggap semua murid memiliki pengalaman yang sama.
2. Memilih konteks hanya karena tren walaupun tidak mendukung kompetensi yang dinilai.
3. Meminta murid yang belum mengenal koperasi menunggu tanpa aktivitas sampai teman lain selesai.

### 25. [p1-025 • PCK • P.5 • MCMA]

Guru memilih kasus antrean layanan perpustakaan sekolah untuk mengajarkan algoritma FIFO. Komputer dipakai bergiliran. Pilih tindakan yang menjaga tujuan algoritma dan memanfaatkan sumber lokal.

A. Murid bergiliran menjadi pemohon, petugas antrean, dan penelusur perubahan queue dengan kartu sebelum menguji kode.
B. Menilai pemahaman FIFO terutama dari kecepatan mengetik program yang dicontohkan guru.
C. Memakai catatan kedatangan tiruan untuk memeriksa urutan masuk dan keluar antrean.
D. Murid menjelaskan hasil simulasi kartu, lalu membandingkan urutannya dengan program saat mendapat perangkat.
E. Menyamakan FIFO dengan selalu melayani permintaan yang paling singkat tanpa membahas urutan kedatangan.

### 26. [p1-026 • PCK • P.5 • PG]

Kelompok hendak memakai data asli pelanggan usaha keluarga siswa untuk praktik. Respons paling tepat adalah ...

A. Menghapus nama tetapi tetap membagikan nomor telepon.
B. Membuat dataset sintetis yang mempertahankan kebutuhan usaha lokal serta membahas perlindungan data.
C. Menaruh data asli di akun bersama agar seluruh kelompok dan guru dapat memeriksa hasil praktik dengan mudah.
D. Membuang konteks usaha dan memakai tabel tanpa kebutuhan pengguna meski data sintetis dapat mempertahankan konteksnya.

### 27. [p1-027 • PCK • P.6 • PG]

Sebelum mengajar PK dan FK, guru bertanya apakah dua orang boleh memiliki nama sama dan apakah dua peminjaman bisa dilakukan satu siswa. Fungsi utama pertanyaan itu ialah ...

A. Memetakan gagasan awal tentang identitas unik dan relasi untuk memilih dukungan belajar.
B. Menetapkan nilai akhir dari dua jawaban awal.
C. Menguji hafalan sintaks JOIN lanjutan.
D. Menyaring murid yang boleh memakai komputer berdasarkan benar-salahnya dua jawaban awal tersebut.

### 28. [p1-028 • PCK • P.6 • MCMA]

Murid menghasilkan query JOIN tetapi sebagian rekaman hilang. Bukti asesmen formatif apa yang membantu guru menemukan sumber masalah? Pilih semua.

A. Memeriksa apakah kondisi JOIN dan data kunci cocok.
B. Memberikan nilai nol sebelum mengetahui alasan kesalahan.
C. Meminta murid menjelaskan tabel mana yang menjadi asal setiap kolom.
D. Mencatat hanya waktu tercepat menjalankan query.
E. Meminta prediksi baris yang seharusnya muncul dan membandingkannya dengan hasil.

### 29. [p1-029 • PCK • P.6 • Kategori]

Guru membuat rubrik tugas ERD. Nilai pernyataan berikut sebagai Tepat atau Tidak tepat.

1. Guru menjelaskan rubrik sebelum bekerja sehingga murid dapat menggunakannya untuk revisi.
2. Kriteria mencakup kecocokan entitas, PK, kardinalitas, dan alasan hubungan dengan kasus.
3. Penilaian hanya berdasarkan warna dan kerapian gambar, tanpa memeriksa kebenaran model.

### 30. [p1-030 • PCK • P.6 • PG]

Murid menggambar relasi siswa–peminjaman sebagai 1:1 padahal satu siswa dapat meminjam berkali-kali. Umpan balik yang paling berguna adalah ...

A. Mengganti simbol 1:1 menjadi 1:N tanpa meminta alasan.
B. Merapikan gambar sambil menganggap relasinya benar.
C. Meminta uji satu siswa dengan tiga transaksi, lalu membimbing penjelasan revisi kardinalitas.
D. Menyalin gambar kunci tanpa menjelaskan kardinalitas.

### 31. [p1-031 • PCK • P.6 • PG]

Setelah kuis JOIN, 70% murid salah membedakan INNER dan LEFT JOIN. Langkah selanjutnya paling tepat adalah ...

A. Mengulang penjelasan sintaks yang sama tanpa membedakan apakah sumber salah terletak pada data atau jenis JOIN.
B. Menganalisis kesalahan, mengajar ulang memakai baris tanpa pasangan, lalu mengecek penalaran.
C. Mengulang kuis sampai nilai naik tanpa membahas alasan salah, dengan asumsi pengulangan otomatis membentuk konsep.
D. Mengajarkan rumus LEFT JOIN selalu sama banyak dengan tabel kiri tanpa memeriksa kemungkinan beberapa pasangan.

### 32. [p1-032 • PCK • P.6 • MCMA]

Tujuan praktik ialah merancang uji fungsi hitungDiskon(total) dengan batas diskon pada total >= 100000. Bukti asesmen apa yang relevan untuk mengetahui penalaran murid? Pilih semua.

A. Catatan perbandingan hasil aktual dan hasil yang diharapkan untuk menemukan kegagalan.
B. Penjelasan alasan memilih kasus batas dan dampaknya jika operator >= diganti >.
C. Jumlah baris kode uji tanpa memeriksa perilaku apa yang diuji.
D. Daftar input di bawah, tepat pada, dan di atas batas beserta hasil yang diharapkan.
E. Tangkapan layar editor tanpa input dan hasil eksekusi.

### 33. [p1-033 • PCK • P.6 • PG]

Tujuan belajar ialah murid mampu memecah program kasir menjadi fungsi dengan tanggung jawab jelas dan menjelaskan aliran datanya. Asesmen paling selaras adalah ...

A. Meminta definisi fungsi tanpa penerapan pada kasir.
B. Memberi skor semakin tinggi untuk semakin banyak fungsi tanpa memeriksa tanggung jawab serta aliran datanya.
C. Meminta murid menyalin hasil refaktor guru tanpa menjelaskan pemilihan parameter dan hasil setiap fungsi.
D. Meminta refaktor, penjelasan kontrak fungsi, dan uji kesetaraan perilaku program.

### 34. [p1-034 • PCK • P.6 • Kategori]

Nilai tindakan umpan balik berikut sebagai Tepat atau Tidak tepat.

1. Guru mempublikasikan peringkat murid paling banyak salah untuk mempermalukan mereka.
2. Guru meminta murid memperbaiki hasilnya lalu menjelaskan perubahan dan alasan revisi.
3. Guru menyebut bagian query yang sudah benar dan memberi petunjuk pada kondisi yang perlu diperiksa.

### 35. [p1-035 • PCK • PF.1 • PG]

Pembelajaran proyek aplikasi sekolah dianggap selesai jika website bisa dibuka. Agar tujuan pendidikan kejuruan tercapai lebih utuh, guru seharusnya juga ...

A. Menilai alasan desain, tanggung jawab kerja, keamanan, dan tanggapan pengguna.
B. Menilai kesiapan kerja terutama dari kerapian halaman.
C. Menilai dari kemiripan tampilan dengan contoh.
D. Mengurutkan kemampuan kerja dari kecepatan mengetik tanpa meninjau kualitas solusi atau kontribusi kelompok.

### 36. [p1-036 • PCK • PF.1 • Kategori]

Proyek pembuatan sistem kelas dilakukan dalam pembelajaran. Nilai pernyataan sebagai Tepat atau Tidak tepat.

1. Mengajarkan bahwa semua akun pengguna perlu hak admin agar akses lebih mudah.
2. Menganggap keberhasilan teknis membenarkan pengumpulan data pribadi berlebihan.
3. Mengaitkan kemampuan pemrograman dengan penyelesaian masalah nyata dan tanggung jawab sosial.

### 37. [p1-037 • PCK • PF.2 • PG]

Saat mengajar keamanan aplikasi, murid membangun query dengan menggabungkan input pengguna ke string SQL. Penjelasan dan perbaikan yang tepat adalah ...

A. Mengajarkan binding nilai dan membandingkan bagaimana data dipisahkan dari struktur SQL.
B. Menghapus petik lalu menganggap input lain pasti aman.
C. Memercayai validasi JavaScript untuk semua request.
D. Menyembunyikan error tanpa memperbaiki query.

### 38. [p1-038 • PCK • PF.2 • MCMA]

Dalam aplikasi koperasi, proses checkout menulis header transaksi dan detail barang. Simulasi kegagalan membuat header tersimpan tetapi detail tidak lengkap. Guru meminta murid menilai solusi yang menjaga atomisitas. Pilih semua yang tepat.

A. Menangkap exception lalu tetap mengirim pesan sukses tanpa memeriksa konsistensi.
B. Menyimpulkan constraint foreign key saja menjamin semua langkah checkout selalu selesai bersama.
C. Membungkus penulisan terkait dalam satu transaksi basis data yang mendukung transaksi.
D. Melakukan commit header lebih dahulu agar selalu ada bukti meski penulisan detail gagal.
E. Melakukan rollback seluruh penulisan terkait jika satu langkah gagal dan menguji skenario kegagalannya.

### 39. [p1-039 • PCK • PF.2 • PG]

Murid mengirim form Laravel dengan method POST, tetapi route hanya didaftarkan untuk GET. Strategi pembelajaran tepat adalah ...

A. Menambah token CSRF pada form saja dan menganggap permintaan POST kini pasti cocok dengan route GET.
B. Mengubah semua form penyimpanan menjadi GET agar sesuai route lama tanpa membahas maksud HTTP method.
C. Menelusuri method form dan route, lalu membetulkan route POST untuk operasi penyimpanan.
D. Menghapus validasi isian di controller dengan asumsi kegagalan mencapai route disebabkan aturan validasi data.

### 40. [p1-040 • PCK • PF.2 • Kategori]

Tabel siswa berisi S1 dan S2; tabel peminjaman hanya berisi pinjaman milik S1. Query memakai ON siswa.id = peminjaman.id_siswa tanpa filter WHERE tambahan. Nilai konsep berikut sebagai Tepat atau Tidak tepat.

1. Setiap LEFT JOIN selalu memiliki jumlah baris tepat sama dengan tabel kiri meski ada beberapa pasangan.
2. INNER JOIN pada kunci siswa hanya mengembalikan pasangan yang cocok dalam contoh ini.
3. LEFT JOIN dari tabel siswa ke peminjaman dapat tetap memunculkan S2 dengan kolom peminjaman bernilai NULL.

### 41. [p1-041 • PCK • PF.2 • PG]

Murid membuat kondisi “nilai >= 75” untuk menentukan tuntas. Saat nilai tepat 75, program menyatakan tuntas. Untuk menguji pemahaman kondisi batas, guru sebaiknya meminta ...

A. Mengulang input 80 dan 90 untuk menguji batas 75.
B. Menguji 74, 75, dan 76 serta meminta alasan hasil operator >= pada tiap input.
C. Menguji 75 saja tanpa melihat kedua sisinya, lalu menyatakan seluruh perilaku perbandingan telah teruji.
D. Mengganti >= dengan > karena keduanya menghasilkan tuntas untuk contoh 80 yang sudah pernah dijalankan.

### 42. [p1-042 • PCK • PF.2 • MCMA]

Murid membuat fungsi pencarian indeks dalam array. Tujuannya menguji bahwa hasil sesuai spesifikasi: kembalikan indeks pertama jika ada dan -1 jika tidak ada. Pilih semua rancangan uji yang benar.

A. Menguji array kosong dan target yang tidak ada pada array berisi, dengan hasil yang diharapkan -1.
B. Menganggap hasil -1 salah untuk semua input karena indeks harus selalu nonnegatif.
C. Mengubah hasil yang diharapkan agar selalu mengikuti keluaran program tanpa meninjau spesifikasi.
D. Menguji array dengan target di dua posisi dan memastikan indeks kemunculan pertama yang dikembalikan.
E. Menyatakan satu contoh target di posisi awal sudah membuktikan seluruh kemungkinan benar.

### 43. [p1-043 • PCK • PF.3 • PG]

Sebagian siswa memahami logika program tetapi kesulitan membaca instruksi teks panjang. Guru ingin mengukur logika seleksi kondisi. Penyesuaian terbaik adalah ...

A. Memakai diagram alir dan contoh input-output untuk menjelaskan atau menerapkan logika yang sama.
B. Mengganti asesmen logika dengan hafalan istilah.
C. Menurunkan target karena kesulitan membaca.
D. Menetapkan kerapian tulisan jawaban sebagai ukuran utama meskipun sasaran yang diminta ialah logika seleksi.

### 44. [p1-044 • PCK • PF.3 • MCMA]

Sebelum proyek antarmuka aplikasi inventaris lokal, guru menemukan murid terbiasa layar besar tetapi calon pengguna memakai ponsel kecil dan jaringan lambat. Tujuan inti tetap kemampuan merancang dan menguji antarmuka yang dapat digunakan. Pilih adaptasi yang tepat.

A. Menghilangkan tujuan pengujian antarmuka karena perangkat pengguna berbeda dari komputer lab.
B. Menyediakan prototipe lokal dan simulasi layar kecil untuk menguji akses ke fungsi inti.
C. Menganggap kebiasaan murid memakai media sosial otomatis membuktikan pemahaman desain antarmuka.
D. Membantu murid mengidentifikasi kebutuhan pengguna dan prasyarat tata letak sebelum membuat antarmuka.
E. Meminta murid membandingkan tugas pengguna pada dua ukuran layar dan menjelaskan hambatan yang ditemukan.

### 45. [p1-045 • PCK • PF.3 • Kategori]

Untuk menetapkan kesiapan kelas sebelum materi API, nilai tindakan berikut sebagai Tepat atau Tidak tepat.

1. Memeriksa apakah murid sudah memahami request, response, dan format data sederhana.
2. Langsung memberi proyek integrasi API besar sebelum memeriksa pemahaman request dan format data.
3. Menganggap semua murid otomatis memahami API karena sering memakai aplikasi.

### 46. [p1-046 • PCK • PF.4 • PG]

Sekolah perlu mengontekstualkan pembelajaran RPL dengan kebutuhan inventaris. Guru sedang menyusun alur tujuan pembelajaran. Pilihan terbaik adalah ...

A. Mengganti capaian dengan dekorasi yang disukai.
B. Menulis tujuan mengikuti aktivitas yang populer.
C. Menurunkan tujuan analisis, model data, dan pengujian dari capaian dengan konteks inventaris.
D. Menetapkan dukungan sama tanpa memeriksa prasyarat.

### 47. [p1-047 • PCK • PF.4 • MCMA]

Framework web berubah versi. Guru ingin materi tetap relevan secara kurikuler. Mana yang tepat? Pilih semua.

A. Memperbarui contoh sesuai dokumentasi tepercaya sambil menguji kompatibilitas.
B. Membandingkan perubahan sintaks dengan prinsip yang tetap berlaku.
C. Menghapus semua pelajaran dasar karena framework akan selalu berubah.
D. Mempertahankan prinsip request-response, validasi, dan pengelolaan data sebagai konsep lintas-versi.
E. Mewajibkan murid menghafal seluruh sintaks versi lama tanpa memahami konsep.

### 48. [p1-048 • PCK • PF.4 • Kategori]

Guru menyelaraskan unit analisis kebutuhan perangkat lunak dengan tujuan murid dapat menurunkan kriteria penerimaan dari kebutuhan pengguna. Nilai keputusan kurikuler sebagai Tepat atau Tidak tepat.

1. Menyediakan kasus kebutuhan lokal dan meminta murid menjelaskan hubungan kebutuhan dengan kriteria penerimaan yang dapat diuji.
2. Menjadikan hafalan nama alat manajemen proyek sebagai satu-satunya asesmen kriteria penerimaan.
3. Menyusun rubrik yang memeriksa keterlacakan kebutuhan, kejelasan kriteria, dan kelayakan pengujiannya.

### 49. [p1-049 • PCK • PF.5 • PG]

Guru mencatat bahwa murid berulang kali salah menentukan foreign key walau sudah diberi penjelasan. Tindakan pengembangan praktik paling ilmiah adalah ...

A. Mengulang penjelasan sama dan menafsirkan kesalahan sebagai kurang usaha sebelum meninjau bukti kerja murid.
B. Menguji intervensi data berelasi dan menelaah bukti sebelum-sesudah beserta keterbatasannya.
C. Mengadopsi strategi populer tanpa menentukan pola kesalahan atau bukti perubahan yang hendak diamati.
D. Memakai soal akhir yang sudah dihafal sebagai satu-satunya bukti bahwa intervensi menghasilkan pemahaman FK.

### 50. [p1-050 • PCK • PF.5 • MCMA]

Setelah proyek website, guru mengembangkan praktik melalui komunitas guru RPL. Tindakan yang etis dan bermanfaat adalah ... Pilih semua.

A. Membagikan contoh rubrik dan data hasil belajar yang telah dianonimkan untuk mendapat masukan.
B. Menyebarkan nilai beserta nomor telepon siswa kepada publik.
C. Menguji masukan rekan pada kelas dan mengamati dampaknya.
D. Mendokumentasikan keterbatasan uji coba agar tidak mengklaim pasti berhasil.
E. Mengklaim satu percobaan kecil membuktikan semua metode lain salah.

### 51. [p1-051 • PU • P.1 • PG]

Guru IPS ingin siswa memahami perubahan lingkungan, menerapkan konsep pada lingkungan sekitar, lalu merefleksikan pilihan tindakannya. Rancangan terbaik adalah ...

A. Meminta kutipan definisi sebagai satu-satunya bukti.
B. Mengadakan kuis istilah tentang lingkungan tanpa meminta hubungan hasilnya dengan pilihan tindakan murid.
C. Mengamati masalah, menganalisis konsep, mengusulkan tindakan, lalu merefleksikan pilihan.
D. Menilai banyaknya foto observasi sebagai bukti penerapan tanpa meminta penjelasan hubungan dengan konsep.

### 52. [p1-052 • PU • P.1 • Kategori]

Setelah proyek pengurangan sampah kelas, sebagian murid dapat menyalin poster tetapi belum menghubungkan kegiatan dengan konsep yang dipelajari. Nilai tindak lanjut sebagai Tepat atau Tidak tepat.

1. Menautkan kegiatan dengan tujuan yang jelas dan tantangan di kehidupan nyata.
2. Membuka ruang bagi siswa menjelaskan apa yang berubah dari pemahaman awalnya.
3. Membatasi keberhasilan pada selesai menyalin jawaban guru.

### 53. [p1-053 • PU • P.1 • MCMA]

Guru menemukan miskonsepsi pada konsep yang menjadi prasyarat pelajaran berikutnya. Strategi yang tepat adalah ... Pilih semua.

A. Meminta siswa membandingkan gagasan awal dan hasil setelah eksplorasi.
B. Memberi nilai akhir hanya dari kecepatan menjawab.
C. Mengumpulkan jawaban awal untuk mengetahui penalaran siswa.
D. Memberi contoh pembanding yang menguji gagasan keliru.
E. Menolak pertanyaan karena mengganggu jadwal.

### 54. [p1-054 • PU • P.2 • PG]

Dalam satu kelas ada siswa dengan kemampuan membaca berbeda. Guru ingin semua memahami gagasan utama bacaan. Pilihan terbaik adalah ...

A. Menambah waktu tanpa memeriksa hambatan membaca.
B. Memakai teks inti dan dukungan akses beragam sambil mengecek gagasan utama dengan sasaran sama.
C. Mengganti analisis gagasan utama dengan salinan judul.
D. Membagikan ringkasan berisi jawaban lalu menganggap salinan ringkasan sebagai bukti pemahaman mandiri murid.

### 55. [p1-055 • PU • P.2 • Kategori]

Kelas terdiri atas siswa dari beragam latar bahasa. Nilai tindakan berikut sebagai Tepat atau Tidak tepat.

1. Menyamakan aksen semua murid sebagai syarat sebelum gagasan mereka boleh didiskusikan.
2. Guru menganggap aksen berbeda sebagai tanda kemampuan berpikir rendah.
3. Guru memastikan istilah penting dipahami melalui contoh tanpa merendahkan bahasa rumah siswa.

### 56. [p1-056 • PU • P.2 • MCMA]

Guru mengatur kerja kelompok dengan siswa yang berbeda kesiapan dan kebutuhan. Pilih keputusan yang tepat.

A. Menyerahkan semua pekerjaan ke satu siswa yang dianggap pintar.
B. Mengecek secara berkala siapa yang belum mendapat kesempatan bicara.
C. Menyediakan kriteria tugas dan bantuan berjenjang.
D. Memberi label permanen kelompok pintar dan lemah.
E. Membagikan peran jelas dan kesempatan rotasi peran.

### 57. [p1-057 • PU • P.2 • PG]

Siswa pindahan belum mengenal istilah teknis yang telah dipelajari kelas. Langkah awal paling tepat adalah ...

A. Menyamakan tugas tanpa memeriksa prasyarat.
B. Mensyaratkan hafalan seluruh istilah sebelum diskusi.
C. Meminta teman menyelesaikan semua tugasnya.
D. Mengecek prasyarat, memberi glosarium/contoh, dan meninjau dukungan dari kemajuannya.

### 58. [p1-058 • PU • P.3 • PG]

Seorang siswa memberi jawaban salah dan beberapa teman tertawa. Guru sebaiknya ...

A. Menghentikan ejekan, menghargai usaha, lalu meninjau alasan dan bukti secara aman.
B. Memindahkan pertanyaan ke murid tercepat tanpa membahas ejekan dan alasan jawaban yang semula keliru.
C. Menyatakan semua jawaban sama benarnya agar siswa merasa diterima tanpa meninjau ketepatan bukti.
D. Mengoreksi konsep dengan cepat tetapi menunda pembahasan ejekan sampai akhir semester agar jadwal tidak terganggu.

### 59. [p1-059 • PU • P.3 • Kategori]

Murid mengeluhkan permainan kuis sangat seru tetapi tidak mengetahui tujuan belajarnya. Guru akan merancang ulang kegiatan berkesadaran, bermakna, dan menggembirakan. Nilai gagasan berikut sebagai Tepat atau Tidak tepat.

1. Pembelajaran menggembirakan selalu berarti tanpa tantangan akademik.
2. Aktivitas boleh menantang apabila ada dukungan, relevansi, dan suasana aman.
3. Siswa memahami tujuan belajar dan diberi ruang merefleksikan prosesnya.

### 60. [p1-060 • PU • P.4 • PG]

Guru ingin siswa memakai AI untuk membuat rangkuman materi. Risiko utamanya ialah jawaban AI bisa keliru dan data siswa dapat terbuka. Langkah tepat adalah ...

A. Memilih rangkuman dari kelancaran bahasa saja.
B. Memeriksa sumber, membatasi data pribadi, dan meminta penjelasan dengan bahasa sendiri.
C. Menghapus nama saja lalu mengizinkan unggahan cerita keluarga yang masih dapat dikenali dari rincian kejadiannya.
D. Meminta dua layanan AI menghasilkan jawaban serupa dan menganggap kesepakatan itu telah cukup memverifikasi isi.

### 61. [p1-061 • PU • P.4 • MCMA]

Guru memilih media pembelajaran digital untuk kelas dengan akses beragam. Pertimbangan yang tepat adalah ... Pilih semua.

A. Tampilan dan petunjuk mudah diakses dengan kebutuhan murid yang beragam.
B. Selalu mewajibkan gawai spesifikasi tinggi walau banyak murid tidak memiliki.
C. Data murid yang diperlukan dibatasi sesuai tujuan.
D. Memilih media hanya karena sedang populer.
E. Tersedia versi berukuran ringan atau alternatif luring.

### 62. [p1-062 • PU • P.5 • PG]

Guru akan mengajar perbandingan dengan contoh kehidupan sekitar. Sebagian siswa belum familiar dengan konteks pasar tradisional. Pilihan terbaik adalah ...

A. Menambah soal pasar tanpa menjelaskan istilah.
B. Menghapus seluruh konteks nyata dari pembelajaran.
C. Memakai beberapa konteks setara yang familier untuk menjelaskan perbandingan yang sama.
D. Mengelompokkan kemampuan secara tetap berdasarkan pengalaman pasar tanpa memeriksa penalaran perbandingan murid.

### 63. [p1-063 • PU • P.5 • Kategori]

Guru memilih bahan cerita lokal untuk latihan menyimpulkan bacaan. Sebagian murid belum mengenal tradisi dalam cerita tersebut. Nilai pertimbangan berikut sebagai Tepat atau Tidak tepat.

1. Contoh lokal harus selalu dipakai meskipun menimbulkan stereotip kelompok tertentu.
2. Sumber lokal dipilih karena membantu mencapai tujuan dan dapat diakses murid.
3. Memilih cerita paling panjang tanpa mengecek istilah dan pengetahuan awal murid.

### 64. [p1-064 • PU • P.6 • PG]

Di awal topik pecahan, guru memberi dua soal singkat untuk melihat apakah siswa memahami bagian dari keseluruhan. Informasi ini paling tepat dipakai untuk ...

A. Memilih contoh dan dukungan dari diagnosis, lalu meninjau kelompok sesuai kemajuan.
B. Menetapkan kelompok tetap dari dua jawaban awal.
C. Memakai diagnosis sebagai nilai akhir pecahan.
D. Mencatat skor tanpa menyesuaikan pembelajaran.

### 65. [p1-065 • PU • P.6 • MCMA]

Setelah exit ticket, guru mengetahui separuh kelas masih bingung menentukan alasan jawaban. Langkah tepat adalah ... Pilih semua.

A. Mengelompokkan jawaban untuk mengidentifikasi pola kesalahan.
B. Memberi penjelasan/model tambahan yang menanggapi pola tersebut.
C. Mengajak siswa mengerjakan soal cek singkat untuk memastikan perbaikan.
D. Mengabaikan hasil karena materi sudah selesai diajarkan.
E. Mempermalukan siswa yang jawabannya belum tepat.

### 66. [p1-066 • PU • P.6 • Kategori]

Murid telah menyusun simpulan bacaan, tetapi satu bukti yang dipakai bertentangan dengan simpulannya. Guru ingin murid memperbaiki alasan secara mandiri. Nilai umpan balik berikut sebagai Tepat atau Tidak tepat.

1. “Bandingkan jawabanmu dengan rubrik, revisi satu bagian, lalu jelaskan mengapa diubah.”
2. “Kamu memang tidak berbakat; jangan mencoba soal ini lagi.”
3. “Alasanmu sudah menyebut dua bukti; cek lagi apakah bukti ketiga mendukung simpulanmu.”

### 67. [p1-067 • PU • P.6 • PG]

Hasil penilaian akhir memperlihatkan banyak siswa belum mencapai satu indikator. Tindakan guru berikutnya yang paling bertanggung jawab adalah ...

A. Menutup tindak lanjut setelah nilai terbit dan memakai materi berikutnya tanpa memeriksa indikator yang lemah.
B. Mengurangi tuntutan soal berikutnya tanpa pembelajaran tambahan agar jumlah murid mencapai nilai target meningkat.
C. Menyimpan rincian hasil hanya untuk guru sehingga murid tidak mengetahui indikator yang perlu diperbaiki.
D. Menganalisis indikator lemah dan menyiapkan dukungan serta kesempatan perbaikan.

### 68. [p1-068 • PU • K.1 • PG]

Seorang murid menceritakan sedang mengalami masalah keluarga dan meminta tidak diumumkan. Respons guru yang paling etis adalah ...

A. Mengumumkan identitas agar teman memberi dukungan.
B. Mendengar secara empatik, menjaga privasi, dan merujuk proporsional bila ada risiko keselamatan.
C. Membagikan seluruh rincian ke grup guru tanpa menentukan siapa yang perlu terlibat dalam perlindungan murid.
D. Menjanjikan kerahasiaan mutlak dan mengabaikan tanda bahaya karena murid meminta cerita tidak diumumkan.

### 69. [p1-069 • PU • K.1 • Kategori]

Guru mendapati penilaiannya keliru dan mendapat permintaan menaikkan nilai kerabat tanpa bukti tugas tambahan. Nilai respons berikut sebagai Tepat atau Tidak tepat.

1. Guru menyampaikan kriteria penilaian sebelum tugas dan menerapkannya konsisten.
2. Guru mengakui kekeliruan penjelasannya lalu memperbaiki di depan kelas secara profesional.
3. Guru menaikkan nilai murid tertentu karena kedekatan pribadi tanpa bukti belajar.

### 70. [p1-070 • PU • K.2 • PG]

Setelah proyek kelompok gagal mencapai target, guru merasa metode yang dipilih tidak efektif. Refleksi profesional paling tepat adalah ...

A. Menyimpulkan murid tidak cocok bekerja kelompok.
B. Mengganti anggota saja tanpa meninjau proses.
C. Menelaah bukti dan umpan balik murid, lalu menguji satu perbaikan yang beralasan.
D. Mengganti semua kegiatan dengan metode populer sebelum menemukan bagian proses yang menghambat ketercapaian target.

### 71. [p1-071 • PU • K.2 • MCMA]

Guru ingin mengembangkan kompetensi secara berkelanjutan. Mana yang mencerminkan growth mindset profesional? Pilih semua.

A. Mencoba strategi baru secara terukur dan membandingkan buktinya.
B. Menganggap kritik berarti dirinya bukan guru yang baik sehingga menolak masukan.
C. Berdiskusi dengan rekan dan menyesuaikan praktik dari temuan.
D. Mengklaim dirinya sudah tidak perlu belajar karena telah lulus pendidikan guru.
E. Mencatat satu aspek pembelajaran yang perlu diperbaiki dari umpan balik.

### 72. [p1-072 • PU • K.3 • PG]

Dalam diskusi kelas, hanya beberapa siswa berani berbicara. Guru ingin membangun budaya belajar saling mendukung. Langkah terbaik adalah ...

A. Memberi label tidak aktif dari frekuensi bicara.
B. Menegur murid acak yang belum siap menjawab.
C. Membiarkan dominasi agar diskusi cepat selesai.
D. Menyepakati aturan diskusi, waktu berpikir, dan giliran berbagi yang aman.

### 73. [p1-073 • PU • K.3 • Kategori]

Dalam satu semester, beberapa murid berhenti mencoba setelah mendapat peringkat rendah. Guru ingin membangun kebiasaan perbaikan yang konsisten. Nilai keputusan berikut sebagai Tepat atau Tidak tepat.

1. Menetapkan kelompok ranking rendah tetap selama setahun agar dukungan tidak perlu ditinjau lagi.
2. Guru menjadikan ranking publik sebagai identitas kemampuan yang tidak dapat berubah.
3. Guru memberi kesempatan revisi tugas berdasarkan kriteria yang jelas.

### 74. [p1-074 • PU • S.1 • PG]

Orang tua menghubungi guru karena anaknya merasa tidak dipahami di kelas. Respons komunikasi paling tepat adalah ...

A. Menjelaskan aturan kelas lebih dahulu lalu menutup percakapan tanpa meminta kejadian yang dialami anak.
B. Mendengarkan, mengklarifikasi kejadian dan bukti, lalu menyepakati tindak lanjut.
C. Memindahkan pembahasan masalah anak ke grup kelas agar seluruh wali dapat menilai siapa yang benar.
D. Menjanjikan perubahan nilai anak untuk meredakan keberatan sebelum memeriksa pengalaman dan bukti belajarnya.

### 75. [p1-075 • PU • S.1 • MCMA]

Guru memberi umpan balik kepada siswa yang berbeda latar bahasa dan gaya komunikasi. Cara yang tepat adalah ... Pilih semua.

A. Menggunakan kalimat jelas dan contoh spesifik.
B. Memastikan siswa memahami tindak lanjut dengan kesempatan bertanya.
C. Mengejek pengucapan bahasa siswa.
D. Menyediakan saluran tertulis/visual bila membantu komunikasi.
E. Memotong penjelasan siswa karena lambat menyampaikan ide.

### 76. [p1-076 • PU • S.2 • PG]

Seorang siswa sering absen sehingga tertinggal tugas. Guru mata pelajaran belum memahami penyebabnya. Langkah kolaboratif paling tepat adalah ...

A. Meminta tugas selesai sebelum mencari sebab absen.
B. Mengirim rincian masalah ke seluruh wali murid agar memperoleh dukungan luas meskipun kebutuhannya belum dipetakan.
C. Berkoordinasi dengan wali/BK secara proporsional, mendengar murid dan keluarga, lalu menyusun dukungan.
D. Menetapkan nilai nol untuk seluruh tugas tertinggal dan menutup kesempatan perbaikan sebelum alasan absen diketahui.

### 77. [p1-077 • PU • S.2 • Kategori]

Sekolah dan wali murid merancang dukungan untuk seorang murid yang sering tertinggal tugas. Nilai praktik kolaborasi berikut sebagai Tepat atau Tidak tepat.

1. Mengalihkan seluruh tanggung jawab bantuan kepada keluarga tanpa menyepakati peran sekolah.
2. Guru berbagi perkembangan belajar yang relevan melalui jalur komunikasi yang tepat.
3. Guru menyebarkan data pribadi murid kepada semua orang tua agar transparan.

### 78. [p1-078 • PU • S.3 • PG]

Komunitas guru membahas cara meningkatkan keterlibatan siswa dalam diskusi. Kontribusi paling bermanfaat adalah ...

A. Membagikan praktik dan bukti, menerima masukan, lalu menguji perbaikan sesuai konteks.
B. Membagikan materi rekan tanpa atribusi.
C. Menganjurkan satu strategi untuk semua sekolah.
D. Mengirim daftar kegiatan tanpa bukti hasil dan menolak peninjauan masukan karena metode tersebut pernah dipakai.

### 79. [p1-079 • PU • PF.1 • PG]

Guru menilai proyek lintas mata pelajaran. Hasil belajar paling menggambarkan tujuan pendidikan yang luas adalah ...

A. Meniru produk tanpa dapat menjelaskan keputusan.
B. Mencapai angka tinggi tanpa bukti penerapan.
C. Menyelesaikan cepat tanpa alasan dan tanggung jawab.
D. Murid menalar, bekerja sama secara etis, dan menerapkan pengetahuan pada masalah bermakna.

### 80. [p1-080 • PU • PF.3 • MCMA]

Dalam proyek sains lingkungan, sekolah memiliki keterbatasan alat dan kondisi lingkungan yang berbeda. Adaptasi yang tetap menjaga kompetensi adalah ... Pilih semua.

A. Menggunakan pengamatan lingkungan setempat dengan prosedur aman dan data yang dapat dicatat.
B. Menyediakan format pencatatan sederhana dan contoh analisis data.
C. Menghapus kompetensi analisis karena alat laboratorium terbatas.
D. Membandingkan hasil dengan konsep ilmiah dan membahas keterbatasan pengamatan.
E. Memaksakan alat yang tidak aman demi meniru sekolah lain.

## Kunci dan pembahasan

### 1. p1-001 — B

Pertentangan data nyata mengungkap miskonsepsi: nama tidak menjamin keunikan, sedangkan ID siswa dapat menjadi PK. Guru membantu murid menemukan alasan sebelum memperbaiki ERD.

- A: Definisi tanpa uji nama kembar belum membongkar alasan murid memilih nama.
- B: ID unik dan tidak kosong memenuhi identitas baris; uji dua Nisa membuat kebutuhan itu terlihat.
- C: Indeks biasa mempercepat pencarian tetapi tidak mewajibkan keunikan.
- D: Nama dan kelas juga dapat sama; gabungan atribut harus dibuktikan memenuhi keunikan.

### 2. p1-002 — B, C, E

Contoh kardinalitas, implementasi FK, dan pengujian referensi menghubungkan model relasi dengan perilaku basis data.

- A: Tanpa tabel yang dirujuk, integritas FK tidak dapat dipelajari dengan benar.
- B: FK di sisi banyak menghubungkan setiap pinjaman dengan siswa yang sesuai.
- C: Kasus ID tak dikenal menguji fungsi constraint untuk mencegah referensi yatim.
- D: Menyalin definisi tidak menunjukkan hubungan antara satu siswa dan banyak pinjaman.
- E: Contoh beberapa pinjaman satu siswa memperlihatkan kardinalitas 1:N.

### 3. p1-003 — C

Validasi browser membantu pengalaman pengguna, tetapi pemeriksaan data tetap diperlukan di server. Demonstrasi request memperlihatkan alasan teknisnya.

- A: Validasi browser dapat dilewati sehingga tidak menjamin penerimaan di server.
- B: JavaScript juga berjalan di klien dan tidak melindungi request yang dikirim langsung.
- C: Request langsung menunjukkan batas validasi klien; pemeriksaan server menolak data kosong atau format salah.
- D: Warna peringatan membantu antarmuka tetapi tidak menolak data tidak valid di server.

### 4. p1-004 — Tepat / Tepat / Tidak tepat

Prediksi, uji, dan penjelasan hasil membangun model mental. Query yang hanya disalin dapat menghasilkan keluaran tanpa pemahaman relasi.

- 1: Alasan kemunculan baris menunjukkan pemahaman pasangan yang cocok pada INNER JOIN.
- 2: Prediksi sebelum eksekusi mengungkap model mental murid tentang hasil JOIN.
- 3: Query jadi tanpa relasi dapat disalin tanpa memahami kondisi penggabungan.

### 5. p1-005 — A

Contoh dua objek dari satu class membedakan cetak biru dan instans sambil mempertahankan keterkaitan konsep dengan kode.

- A: Dua instans memperlihatkan rancangan bersama dan keadaan objek yang berbeda.
- B: Hafalan deklarasi belum membedakan class dari hasil instansiasinya.
- C: Keadaan global tunggal justru menyesatkan tentang keadaan tiap objek.
- D: Pewarisan menambah konsep baru sebelum miskonsepsi dasar diselesaikan.

### 6. p1-006 — A, B, D

Commit, branch/merge, dan diff merupakan bukti proses version control; satu file ZIP atau satu akun bersama menghilangkan jejak kontribusi.

- A: Commit bermakna memperlihatkan unit perubahan dan alasan pengerjaannya.
- B: Penjelasan merge dan konflik menunjukkan pemahaman penggabungan pekerjaan.
- C: Akun bersama mengaburkan identitas kontribusi dan tanggung jawab.
- D: Diff memperlihatkan perubahan konkret antarversi yang dapat dijelaskan murid.
- E: ZIP akhir tidak menunjukkan urutan perubahan atau keputusan integrasi.

### 7. p1-007 — C

Kasus enam barang menonjolkan keterbatasan kolom berulang dan kebutuhan tabel detail yang terhubung dengan transaksi serta barang.

- A: Penambahan kolom tetap membatasi jumlah barang dan mengulang struktur.
- B: Teks gabungan menyulitkan pengujian jumlah, pencarian, dan relasi tiap barang.
- C: Baris detail dapat menampung jumlah barang bervariasi dan kuantitas masing-masing.
- D: Tabel per jenis barang memecah proses transaksi yang sama dan menyulitkan query lintas barang.

### 8. p1-008 — Tidak tepat / Tepat / Tidak tepat

Trace table membantu menjelaskan keadaan program, bukan hanya hasil akhir. Membandingkan hasil merupakan kesempatan refleksi.

- 1: Nilai awal memengaruhi hasil iterasi pertama dan seluruh keadaan berikutnya; mengabaikannya membuat pelacakan tidak sah.
- 2: Selisih pelacakan dan eksekusi menjadi bukti untuk meninjau langkah yang salah.
- 3: Keluaran saja dapat kebetulan benar dan menyembunyikan penalaran yang keliru.

### 9. p1-009 — B

Diferensiasi menyesuaikan jalan menuju tujuan yang sama berdasarkan kebutuhan nyata; bukan pelabelan kelompok tetap.

- A: Pengulangan seragam mengabaikan kebutuhan dukungan dan pengayaan yang terungkap.
- B: Dukungan fleksibel mengikuti bukti kesiapan dan dapat diubah setelah cek ulang.
- C: Satu asesmen tidak membenarkan pelabelan kemampuan yang permanen.
- D: Produk yang dikerjakan teman tidak membuktikan pemahaman murid yang dibantu.

### 10. p1-010 — Tidak tepat / Tepat / Tepat

Rotasi dan tugas tanpa perangkat menjaga partisipasi serta kesempatan menunjukkan capaian. Penilaian harus adil terhadap akses.

- 1: Murid tanpa perangkat belum memperoleh kesempatan yang setara untuk menunjukkan keterampilan.
- 2: Prediksi query dan ERD menjaga aktivitas berpikir saat menunggu praktik.
- 3: Rotasi memastikan akses ke praktik dan tanggung jawab dibagi.

### 11. p1-011 — B, C, E

Penyesuaian akses dan cara respons dapat menjaga target kompetensi. Menghapus kesempatan praktik atau asesmen bukan pilihan inklusif.

- A: Menonton saja mengurangi kesempatan mencapai keterampilan yang ditargetkan.
- B: Kontras dan keterbacaan mengurangi hambatan visual pada bahan.
- C: Cara menjelaskan boleh disesuaikan bila tujuan kompetensi tetap terukur.
- D: Pengecualian asesmen menghilangkan bukti capaian alih-alih memperbaiki aksesnya.
- E: Kode berbentuk teks memungkinkan pembesaran dan teknologi bantu.

### 12. p1-012 — A

Tantangan pengayaan dan scaffolding disesuaikan kesiapan. Tutor sebaya boleh membantu, tetapi tidak menggantikan tanggung jawab guru.

- A: Pengayaan dan bantuan bertahap memberi tantangan sesuai kesiapan masing-masing.
- B: Mengerjakan kode teman mengambil kesempatan belajar dan mengaburkan bukti individu.
- C: Menunggu produk identik tidak memberi kegiatan yang sesuai kebutuhan berbeda.
- D: Salinan tambahan menambah beban tanpa memperluas pemahaman.

### 13. p1-013 — C

Akses multimodal dan pengecekan pemahaman membuat murid dapat ikut tanpa distigma.

- A: Teguran publik menstigma tanpa mengurangi kebisingan atau hambatan komunikasi.
- B: Volume saja tidak menjamin instruksi terbaca atau dipahami.
- C: Instruksi visual dan cek pribadi menanggapi hambatan spesifik tanpa menurunkan tujuan.
- D: Pembebasan tujuan menghilangkan kesempatan belajar padahal akses dapat diperbaiki.

### 14. p1-014 — B

Menormalisasi kesalahan sebagai bukti proses belajar dan mengajarkan strategi diagnosis mendukung keberanian bereksperimen.

- A: Perbaikan oleh guru saja tidak membangun keberanian dan strategi diagnosis murid.
- B: Pemodelan dan kesepakatan komentar aman membuat error dapat dipakai sebagai bukti belajar.
- C: Menyalin kode menghilangkan kesempatan berlatih diagnosis.
- D: Lomba tanpa dukungan dapat memperkuat ketakutan membuat kesalahan.

### 15. p1-015 — Tidak tepat / Tepat / Tepat

Masalah penjadwalan nyata, tujuan yang disadari, dan refleksi dampak menghubungkan algoritma dengan pengalaman kelas.

- 1: Animasi presentasi tidak membuktikan jadwal memenuhi kendala pengguna.
- 2: Kendala nyata dan tujuan bersama membantu murid menyadari manfaat algoritma.
- 3: Refleksi dampak pembagian tugas menghubungkan konsep dengan pengalaman kelas.

### 16. p1-016 — B, C, E

Keamanan psikologis, kesempatan revisi, dan penghargaan atas alasan membangun keterlibatan tanpa menurunkan standar.

- A: Penghinaan merusak rasa aman meskipun disebut humor.
- B: Kriteria dan kesempatan revisi menjaga tantangan sekaligus memberi arah perbaikan.
- C: Pengujian dan argumentasi merupakan proses belajar yang layak dihargai.
- D: Satu cara wajib tanpa diskusi menutup kesempatan menalar alternatif yang sah.
- E: Alternatif dapat dibahas jika suasana melindungi murid dari ejekan.

### 17. p1-017 — D

Tantangan singkat yang relevan, terdukung, dan diakhiri refleksi menjaga keterlibatan sambil mengungkap miskonsepsi kondisi berhenti.

- A: Motivasi umum tidak menguji miskonsepsi berhenti di elemen pertama.
- B: Menyalin istilah tidak menguji langkah pencarian.
- C: Jawaban satu murid tidak memberi bukti atau keterlibatan murid lain.
- D: Target yang tidak ada mengharuskan menelusuri array dan merefleksikan kondisi berhenti.

### 18. p1-018 — B

Literasi AI mencakup verifikasi fungsi, keamanan, sumber data, dan tanggung jawab penggunaan.

- A: Larangan pembicaraan tidak mengajarkan verifikasi keluaran AI.
- B: Uji dan penjelasan keamanan melatih penggunaan AI secara kritis.
- C: Program berjalan belum membuktikan keamanan autentikasi.
- D: Kredensial asli tidak diperlukan untuk belajar dan membukanya menambah risiko akses.

### 19. p1-019 — Tidak tepat / Tidak tepat / Tepat

Penggunaan TIK perlu mempertimbangkan akses, privasi, dan kesesuaian tujuan, bukan semata fitur.

- 1: Tujuan belajar harus mengarahkan pilihan alat; banyak fitur belum membuktikan manfaat.
- 2: Identitas asli di layanan publik tidak diperlukan dan melanggar prinsip privasi.
- 3: Alternatif akses menjaga kesempatan belajar saat sarana berbeda.

### 20. p1-020 — A, C, D

Representasi pesan, simulasi lokal, dan prediksi-uji mempertahankan tujuan API ketika internet terputus; sekadar istilah atau gambar hasil tidak cukup.

- A: Kartu pesan mengonkretkan alur sebelum murid menguji pertukaran data.
- B: Nama layanan tidak menggantikan pemahaman alur pesan.
- C: Server lokal memungkinkan pengamatan teknis tanpa koneksi luar.
- D: Perbandingan prediksi dan respons lokal menguji model mental murid.
- E: Gambar respons tanpa hubungan dengan request belum membuktikan pemahaman alur.

### 21. p1-021 — C

Teknologi alat, bukan tujuan. Pilihan didasarkan pada nilai tambah pedagogis dan kondisi akses.

- A: Popularitas tidak membuktikan manfaat atau akses yang sesuai kelas.
- B: Registrasi yang menyita waktu tanpa manfaat dapat menghambat tujuan.
- C: Pengujian relasi dan revisi adalah nilai tambah; media dipilih sesuai manfaatnya.
- D: Format digital saja tidak membuktikan kualitas ERD lebih baik dari kertas.

### 22. p1-022 — A

Kritik terhadap keluaran otomatis menuntut pemahaman kebutuhan, minimisasi data, dan pengujian hasil.

- A: Membandingkan kebutuhan dan keluaran melatih minimisasi serta pemeriksaan akses data.
- B: Query yang dapat dijalankan belum tentu sesuai kebutuhan atau aman.
- C: Publikasi memperluas paparan data yang justru perlu dibatasi.
- D: Menghapus topik membuat murid kehilangan kesempatan belajar mengatasi masalahnya.

### 23. p1-023 — D

Kebutuhan lokal yang konkret dapat menghubungkan konsep ERD, relasi, dan validasi rancangan.

- A: Skema industri tanpa hubungan dengan konteks dapat menambah beban sebelum konsep terbentuk.
- B: Salinan skema tidak menunjukkan pemahaman kebutuhan pengguna.
- C: Jumlah tabel bukan ukuran kecocokan rancangan.
- D: Observasi dan transaksi uji menghubungkan kebutuhan lokal dengan keputusan model data.

### 24. p1-024 — Tepat / Tidak tepat / Tidak tepat

Konteks lokal membantu jika relevan dan membuka beragam pengalaman; guru tidak boleh berasumsi semua murid sama.

- 1: Konteks koperasi dapat membantu jika guru tidak menyeragamkan pengalaman murid.
- 2: Tren tanpa hubungan dengan kompetensi tidak memberi alasan pedagogis pemilihan kasus.
- 3: Perbedaan pengalaman perlu dukungan atau konteks setara, bukan penghentian kesempatan belajar.

### 25. p1-025 — A, C, D

Simulasi antrean lokal, data kedatangan, dan pembandingan dengan program menjaga konsep FIFO meskipun perangkat terbatas.

- A: Peran kartu dan penelusuran queue memberi pengalaman konsep meskipun belum memakai komputer.
- B: Kecepatan mengetik tidak menunjukkan urutan pengeluaran data.
- C: Catatan kedatangan memungkinkan murid menguji aturan masuk lebih dahulu keluar lebih dahulu.
- D: Pembandingan kartu dan program menghubungkan representasi lokal dengan implementasi.
- E: Permintaan tersingkat adalah aturan lain; bukan definisi FIFO.

### 26. p1-026 — B

Kasus lokal tetap dapat dipakai tanpa membuka data pribadi; tujuan pembelajaran terletak pada model dan logika data.

- A: Nomor telepon tetap dapat mengidentifikasi pelanggan; menghapus nama saja belum menghilangkan paparan.
- B: Dataset sintetis mempertahankan proses usaha sebagai sumber belajar tanpa mengekspos pelanggan.
- C: Akun bersama memperluas akses ke data yang tidak diperlukan untuk tujuan model basis data.
- D: Konteks lokal yang relevan tidak perlu dibuang jika dapat digunakan dengan data sintetis.

### 27. p1-027 — A

Pertanyaan sebelum pembelajaran memunculkan konsepsi awal dan membantu memilih dukungan belajar.

- A: Pertanyaan memunculkan gagasan awal identitas unik dan relasi untuk merencanakan dukungan.
- B: Sebelum pembelajaran, jawaban awal tidak cukup menjadi penilaian akhir capaian.
- C: Pertanyaan tidak meminta sintaks SQL lanjutan.
- D: Diagnosis bertujuan memberi dukungan, bukan melarang murid praktik.

### 28. p1-028 — A, C, E

Penelusuran asal kolom, prediksi data, dan pemeriksaan kondisi JOIN menunjukkan miskonsepsi secara spesifik.

- A: Kondisi dan nilai kunci membantu membedakan kesalahan query dari data tanpa pasangan.
- B: Nilai nol tanpa diagnosis tidak memberi informasi sumber masalah.
- C: Asal kolom membantu menemukan kekeliruan memahami relasi dan alias.
- D: Kecepatan tidak menerangkan mengapa rekaman hilang.
- E: Prediksi baris mengungkap hasil yang dipahami murid dan letak selisihnya.

### 29. p1-029 — Tepat / Tepat / Tidak tepat

Rubrik selaras dengan tujuan belajar dan transparan sejak awal. Tampilan boleh dipertimbangkan, tetapi bukan inti kompetensi ERD.

- 1: Rubrik di awal memberi standar yang dapat dipakai murid meninjau rancangan.
- 2: Entitas, PK, kardinalitas, dan alasan mengukur substansi ERD.
- 3: Warna dapat membantu komunikasi tetapi tidak menggantikan ketepatan model.

### 30. p1-030 — C

Umpan balik spesifik memicu pengujian model terhadap kasus sehingga siswa memahami alasan perbaikan.

- A: Perubahan simbol tanpa alasan tidak membantu murid menguji modelnya.
- B: Kerapian tidak menyelesaikan ketidaksesuaian kardinalitas dengan transaksi.
- C: Kasus tiga transaksi memberi bukti langsung untuk memperbaiki kardinalitas.
- D: Menyalin gambar kunci tidak menjelaskan hubungan model dengan kebutuhan.

### 31. p1-031 — B

Hasil asesmen harus dipakai untuk mengubah pengajaran. Data tanpa pasangan memberi bukti konkret perbedaan jenis JOIN.

- A: Ceramah sama tanpa analisis kesalahan belum menanggapi bukti asesmen.
- B: Baris tanpa pasangan memperlihatkan perbedaan INNER dan LEFT JOIN secara konkret.
- C: Kuis berulang tanpa umpan balik tidak menargetkan penyebab salah.
- D: LEFT JOIN dapat menghasilkan lebih banyak baris kiri jika ada banyak pasangan; rumus itu keliru.

### 32. p1-032 — A, B, D

Input batas, perbandingan expected-actual, dan alasan pemilihan kasus menunjukkan penalaran pengujian; penampilan atau jumlah kode tidak cukup.

- A: Expected-actual memperlihatkan perilaku yang menyimpang dari aturan.
- B: Perubahan operator tepat di batas menunjukkan alasan pemilihan kasus.
- C: Jumlah kode tidak menjamin kasus penting atau hasilnya diperiksa.
- D: Input sekitar batas memperlihatkan transisi aturan diskon.
- E: Editor tanpa eksekusi tidak menunjukkan fungsi diuji.

### 33. p1-033 — D

Refaktor beralasan disertai pengujian mengukur pembagian tanggung jawab dan aliran data, bukan jumlah fungsi atau hafalan definisi.

- A: Definisi saja tidak mengukur kemampuan membagi program kasir.
- B: Banyak fungsi belum menjamin tanggung jawab jelas atau data mengalir benar.
- C: Menyalin hasil refaktor tidak mengungkap alasan pemisahan.
- D: Refaktor, penjelasan kontrak fungsi, dan uji perilaku menilai tujuan secara langsung.

### 34. p1-034 — Tidak tepat / Tepat / Tepat

Umpan balik harus spesifik, aman, dan dapat ditindaklanjuti; revisi menunjukkan belajar dari asesmen.

- 1: Peringkat untuk mempermalukan merusak rasa aman dan bukan petunjuk teknis.
- 2: Penjelasan revisi membantu memastikan murid memahami perubahannya.
- 3: Petunjuk lokasi dan bagian yang benar membuat revisi dapat dilakukan.

### 35. p1-035 — A

Kompetensi SMK mengaitkan penguasaan teknis, penalaran, kerja sama, etika, dan kemampuan beradaptasi.

- A: Keputusan teknis, tanggung jawab, dan evaluasi pengguna menilai kecakapan kejuruan secara utuh.
- B: Estetika saja tidak mengukur fungsi, penalaran, atau tanggung jawab.
- C: Peniruan tampilan tidak menunjukkan kemampuan memenuhi kebutuhan.
- D: Kecepatan mengetik bukan pengganti kualitas solusi dan etika kerja.

### 36. p1-036 — Tidak tepat / Tidak tepat / Tepat

Tujuan pendidikan menuntut kompetensi dan karakter; etika digital tidak boleh dikorbankan demi fitur.

- 1: Hak admin untuk semua akun tidak sesuai kebutuhan dan mengabaikan tanggung jawab pengelolaan akses.
- 2: Keberhasilan fitur tidak membenarkan pengumpulan data berlebihan.
- 3: Penyelesaian masalah dan tanggung jawab sosial mengaitkan teknik dengan tujuan pendidikan.

### 37. p1-037 — A

Parameter binding memisahkan data input dari struktur perintah SQL, sehingga efektif menjadi contoh konsep keamanan aplikasi.

- A: Binding nilai memisahkan data dari struktur perintah; nama tabel dinamis tetap perlu mekanisme aman lain.
- B: Menghapus petik bukan pengganti pemisahan data dan perintah.
- C: Validasi klien dapat dilewati oleh request langsung.
- D: Menyembunyikan error tidak memperbaiki kerentanan penggabungan input.

### 38. p1-038 — C, E

Atomisitas berarti seluruh perubahan terkait berhasil bersama atau dibatalkan bersama. Constraint relasi tidak menggantikan transaksi multi-langkah.

- A: Pesan sukses setelah kegagalan menyembunyikan ketidakkonsistenan.
- B: FK menjaga referensi, bukan menjamin beberapa operasi berhasil sebagai satu kesatuan.
- C: Satu transaksi memungkinkan semua perubahan terkait di-commit bersama.
- D: Commit header lebih awal menyisakan data parsial bila detail gagal.
- E: Rollback dan simulasi gagal menunjukkan seluruh perubahan terkait dapat dibatalkan.

### 39. p1-039 — C

Kesalahan method menjadi kesempatan memeriksa hubungan form, HTTP method, route, dan controller.

- A: CSRF dan HTTP method menangani persoalan berbeda; token tidak membuat route GET menerima POST.
- B: Mengubah penyimpanan ke GET menghindari diagnosis dan tidak sesuai maksud operasi.
- C: Penelusuran request mengungkap ketidakcocokan dan mempertahankan method sesuai operasi.
- D: Validasi isian tidak menyebabkan ketidakcocokan method route.

### 40. p1-040 — Tidak tepat / Tepat / Tepat

INNER JOIN memerlukan pasangan; LEFT JOIN mempertahankan baris kiri, tetapi bisa menghasilkan lebih banyak baris jika satu baris kiri memiliki banyak pasangan.

- 1: Beberapa pinjaman S1 dapat menggandakan baris hasil sehingga jumlahnya tidak selalu sama dengan tabel kiri.
- 2: Tanpa filter tambahan, INNER JOIN mengembalikan baris yang cocok pada kondisi ON.
- 3: LEFT JOIN tetap memunculkan S2 tanpa pasangan dengan nilai kanan NULL.

### 41. p1-041 — B

Kasus batas 74, 75, 76 secara langsung menampakkan efek operator perbandingan.

- A: Input jauh dari batas tidak membedakan >= dan > pada nilai 75.
- B: Tiga input menguji kedua sisi dan titik batas sehingga makna operator terlihat.
- C: Titik batas saja belum memeriksa perilaku sebelum dan sesudahnya.
- D: Operator > tidak memasukkan 75 sehingga tidak setara dengan >=.

### 42. p1-042 — A, D

Spesifikasi menentukan oracle uji: kemunculan pertama serta kondisi tidak ditemukan termasuk array kosong perlu dibedakan; hasil aktual bukan definisi hasil benar.

- A: Kedua input harus menghasilkan -1 sesuai kontrak tidak ditemukan.
- B: Nilai -1 sengaja menjadi penanda tidak ditemukan dan bukan indeks elemen.
- C: Expected harus berasal dari spesifikasi agar tes dapat mendeteksi kesalahan program.
- D: Target berulang menguji syarat indeks pertama dalam spesifikasi.
- E: Satu contoh awal tidak mencakup data berulang, kosong, atau target tidak ada.

### 43. p1-043 — A

Representasi visual dan contoh mengurangi hambatan bahasa tanpa menghilangkan tuntutan logika seleksi.

- A: Diagram dan contoh menurunkan hambatan membaca sambil tetap mengukur logika.
- B: Hafalan istilah mengganti kompetensi seleksi kondisi.
- C: Hambatan bahasa tidak membuktikan ketidakmampuan logika.
- D: Tulisan tangan bukan sasaran pemrograman yang diukur.

### 44. p1-044 — B, D, E

Kebutuhan pengguna lokal dan karakteristik materi antarmuka menuntut pengujian ukuran layar serta dukungan prasyarat; kebiasaan memakai aplikasi belum membuktikan kemampuan merancang.

- A: Perbedaan perangkat perlu diadaptasi, bukan menghapus kemampuan pengujian.
- B: Prototipe lokal dan layar kecil menanggapi karakteristik penggunaan yang nyata.
- C: Pemakai aplikasi belum tentu memahami prinsip perancangan antarmuka.
- D: Identifikasi kebutuhan dan prasyarat membantu murid memasuki materi yang sesuai.
- E: Perbandingan tugas pengguna menghasilkan bukti hambatan antarmuka.

### 45. p1-045 — Tepat / Tidak tepat / Tidak tepat

Membaca kebutuhan berdasarkan prasyarat nyata, bukan asumsi kebiasaan memakai teknologi.

- 1: Prasyarat request-response memberi dasar menilai kesiapan API.
- 2: Proyek besar tanpa pemeriksaan prasyarat tidak menanggapi kebutuhan kesiapan murid.
- 3: Sering memakai aplikasi tidak menjamin memahami pertukaran data.

### 46. p1-046 — C

Adaptasi kurikulum tetap menurunkan tujuan dari capaian dan memilih konteks untuk mencapainya.

- A: Dekorasi saja mengganti kompetensi yang seharusnya diturunkan dari capaian.
- B: Aktivitas populer tanpa tujuan tidak membentuk alur kompetensi.
- C: Tujuan teknis menjadi dasar; inventaris merupakan konteks penerapannya.
- D: Menyamakan murid tanpa bukti awal mengabaikan kebutuhan pengembangan alur.

### 47. p1-047 — A, B, D

Kurikulum adaptif memperbarui contoh tanpa mengorbankan konsep fundamental serta tujuan kompetensi.

- A: Dokumentasi dan uji kompatibilitas menjaga ketepatan contoh baru.
- B: Perbandingan perubahan membantu murid mengaitkan sintaks dengan prinsip.
- C: Perubahan framework tidak menghapus relevansi dasar request dan data.
- D: Konsep lintas-versi menjaga tujuan ketika sintaks alat berubah.
- E: Hafalan versi lama tanpa konsep tidak mempersiapkan adaptasi.

### 48. p1-048 — Tepat / Tidak tepat / Tepat

Kriteria penerimaan diturunkan dari kebutuhan pengguna dan harus dapat diuji; tujuan, kegiatan, dan rubrik perlu mengukur kemampuan yang sama.

- 1: Kriteria yang diturunkan dari kebutuhan memungkinkan pembuktian ketercapaian tujuan.
- 2: Nama alat tidak menunjukkan kemampuan menyusun kriteria penerimaan.
- 3: Rubrik keterlacakan dan keterujian selaras dengan kompetensi analisis kebutuhan.

### 49. p1-049 — B

Perbaikan profesional bertumpu pada identifikasi masalah, tindakan beralasan, bukti hasil, dan refleksi.

- A: Menyimpulkan kurang usaha tanpa bukti menghambat evaluasi pendekatan guru.
- B: Intervensi beralasan dan bukti sebelum-sesudah mendukung perbaikan tanpa klaim sebab-akibat yang berlebihan.
- C: Popularitas tidak memberi bukti efektivitas pada kelas ini.
- D: Hafalan contoh dapat menaikkan nilai tanpa transfer pemahaman FK.

### 50. p1-050 — A, C, D

Pengembangan praktik harus reflektif, terbuka pada bukti, dan melindungi identitas murid.

- A: Data anonim dan rubrik memungkinkan masukan profesional sambil menjaga identitas.
- B: Nilai dan kontak publik melampaui kebutuhan telaah praktik.
- C: Masukan yang diuji menghasilkan bukti relevansi pada kelas sendiri.
- D: Keterbatasan membantu menilai jangkauan temuan secara proporsional.
- E: Satu percobaan kecil tidak membandingkan seluruh metode atau konteks.

### 51. p1-051 — C

Rancangan ini menyatukan pemahaman konsep, penerapan kontekstual, dan refleksi bermakna sebagaimana P.1.

- A: Kutipan definisi belum menunjukkan penerapan dan refleksi yang menjadi tujuan.
- B: Kuis istilah belum menuntun keputusan dalam konteks sekitar.
- C: Observasi, analisis, usulan, dan refleksi mencakup seluruh rangkaian tujuan.
- D: Observasi dekat kehidupan perlu dihubungkan dengan konsep; banyak foto bukan bukti analisis.

### 52. p1-052 — Tepat / Tepat / Tidak tepat

Refleksi dan transfer menunjukkan pemahaman; reproduksi jawaban saja belum cukup.

- 1: Tujuan dan masalah nyata membantu transfer dari kegiatan ke konsep.
- 2: Perubahan penjelasan memperlihatkan refleksi atas pemahaman awal.
- 3: Selesai menyalin belum menunjukkan konsep diterapkan dalam keputusan.

### 53. p1-053 — A, C, D

Perubahan konsep dibantu diagnosis, bukti pembanding, dan refleksi pemahaman.

- A: Perbandingan gagasan awal dan akhir membantu perubahan konseptual.
- B: Kecepatan saja tidak mengukur alasan dan perubahan pemahaman.
- C: Jawaban awal mengungkap alasan di balik miskonsepsi.
- D: Contoh pembanding memberi bukti untuk menguji gagasan keliru.
- E: Menolak pertanyaan menutup sumber informasi kebutuhan belajar.

### 54. p1-054 — B

Kesetaraan tujuan dapat disertai variasi dukungan agar hambatan akses tidak menghalangi pencapaian.

- A: Tambahan waktu saja belum menanggapi hambatan kosakata atau representasi yang perlu diperiksa.
- B: Dukungan berbeda tetap menuntut murid memahami gagasan utama tanpa mengganti sasaran.
- C: Menyalin judul menurunkan tuntutan pemahaman bagi sebagian murid.
- D: Salinan jawaban tidak menunjukkan murid dapat menemukan gagasan utama sendiri.

### 55. p1-055 — Tidak tepat / Tidak tepat / Tepat

Pembelajaran responsif menghargai identitas bahasa sekaligus menjaga target akademik.

- 1: Keseragaman aksen bukan prasyarat bernalar; syarat ini menghalangi partisipasi.
- 2: Aksen tidak menunjukkan tingkat kemampuan berpikir.
- 3: Contoh istilah membantu akses tanpa merendahkan bahasa rumah.

### 56. p1-056 — B, C, E

Peran, pemantauan partisipasi, dan scaffolding mendukung keterlibatan seluruh siswa.

- A: Satu pelaksana menghilangkan kontribusi serta bukti anggota lain.
- B: Pemantauan bicara membantu memperbaiki ketimpangan partisipasi.
- C: Kriteria dan bantuan berjenjang memberi kejelasan dan dukungan.
- D: Label tetap mengabaikan perkembangan dan menguatkan stigma.
- E: Peran dan rotasi membagi kesempatan menunjukkan kemampuan.

### 57. p1-057 — D

Dukungan spesifik berdasarkan prasyarat lebih efektif daripada stigma atau tuntutan tanpa bantuan.

- A: Kesetaraan kesempatan memerlukan dukungan terhadap prasyarat yang belum dikenal.
- B: Hafalan menyeluruh sebagai syarat partisipasi menghambat bantuan bertahap yang diperlukan.
- C: Pengambilalihan tugas tidak memberi kesempatan atau bukti pemahaman murid pindahan.
- D: Diagnosis dan dukungan ringkas menanggapi kebutuhan awal dan dapat disesuaikan dari kemajuan.

### 58. p1-058 — A

Keamanan psikologis dan pembahasan alasan menciptakan ruang belajar yang berkesadaran dan menggembirakan.

- A: Respons ini memulihkan rasa aman sekaligus menjaga tuntutan penalaran dan ketepatan.
- B: Pengalihan saja membiarkan ejekan serta miskonsepsi tidak ditanggapi.
- C: Menghargai upaya tidak berarti menyamakan jawaban yang bertentangan dengan bukti.
- D: Koreksi konsep saja belum memulihkan norma interaksi aman saat kejadian.

### 59. p1-059 — Tidak tepat / Tepat / Tepat

Kegembiraan belajar bukan hiburan semata; fokus, relevansi, tantangan yang terdukung, dan rasa aman bisa berjalan bersama.

- 1: Kegembiraan tidak mengharuskan hilangnya tantangan akademik.
- 2: Tantangan dapat menyenangkan bila relevan, aman, dan didukung.
- 3: Tujuan dan refleksi membantu kesadaran atas proses belajar.

### 60. p1-060 — B

Literasi digital meliputi verifikasi dan privasi, bukan hanya kemampuan menjalankan alat.

- A: Kelancaran bahasa tidak menjamin ketepatan isi rangkuman.
- B: Pemeriksaan sumber, minimisasi data, dan penjelasan sendiri menanggapi dua risiko pada stimulus.
- C: Cerita yang dapat dikenali tetap membuka informasi pribadi meskipun nama dihapus.
- D: Kesepakatan keluaran AI dapat mengulang kekeliruan yang sama; sumber independen tetap dibutuhkan.

### 61. p1-061 — A, C, E

Akses, inklusi, dan keamanan data menjadi dasar pemilihan TIK yang kritis.

- A: Petunjuk yang aksesibel menjaga partisipasi beragam kebutuhan.
- B: Perangkat tinggi wajib menghalangi murid yang tidak memilikinya.
- C: Pembatasan data mengurangi paparan yang tidak diperlukan.
- D: Popularitas tidak membuktikan akses atau kesesuaian tujuan.
- E: Versi ringan atau luring membantu murid dengan keterbatasan akses.

### 62. p1-062 — C

Konteks beragam membantu transfer konsep tanpa mengasumsikan pengalaman semua siswa identik.

- A: Satu konteks yang tidak dipahami sebagian murid menghambat akses konsep.
- B: Konteks nyata tetap berguna jika diberi dukungan atau alternatif.
- C: Konteks setara memberi jalan berbeda menuju perbandingan yang sama.
- D: Latar budaya tidak menentukan kemampuan yang tetap.

### 63. p1-063 — Tidak tepat / Tepat / Tidak tepat

Kontekstual bukan otomatis baik; guru perlu menjaga relevansi, akurasi, dan penghargaan pada keragaman.

- 1: Stereotip tidak dibenarkan hanya karena suatu contoh bersifat lokal.
- 2: Sumber lokal bernilai bila relevan dengan tujuan dan terjangkau.
- 3: Panjang bahan tidak menjamin kesesuaian; istilah dan kesiapan perlu diperiksa.

### 64. p1-064 — A

Asesmen awal dipakai untuk mengidentifikasi kebutuhan belajar, bukan memberi label atau hukuman.

- A: Diagnosis menuntun dukungan dan perlu ditinjau kembali dari perkembangan murid.
- B: Bukti awal terbatas tidak membenarkan label kemampuan permanen.
- C: Nilai awal tidak mewakili hasil setelah kesempatan pembelajaran.
- D: Pencatatan saja belum memakai informasi untuk memenuhi kebutuhan belajar.

### 65. p1-065 — A, B, C

Asesmen formatif bermakna jika hasilnya ditafsirkan dan digunakan untuk memperbaiki proses serta mengecek dampaknya.

- A: Pola kesalahan menuntun jenis bantuan yang diperlukan.
- B: Model yang menanggapi pola memberi dukungan spesifik.
- C: Cek ulang memberi bukti apakah tindak lanjut membantu.
- D: Mengabaikan data membuat exit ticket tidak dipakai untuk pembelajaran.
- E: Mempermalukan tidak memberi penjelasan atau bantuan yang dibutuhkan.

### 66. p1-066 — Tepat / Tidak tepat / Tepat

Umpan balik yang baik spesifik, menjaga martabat, dan menyebut langkah perbaikan yang dapat dilakukan.

- 1: Rubrik, revisi, dan alasan perubahan memberi tindak lanjut yang dapat diamati.
- 2: Label tidak berbakat bersifat menghakimi dan tidak memberi langkah perbaikan.
- 3: Komentar menunjukkan kemajuan serta lokasi bukti yang perlu ditinjau.

### 67. p1-067 — D

Hasil asesmen digunakan untuk keputusan pembelajaran dan tindak lanjut, bukan sekadar angka akhir.

- A: Nilai terbit tidak mengakhiri tanggung jawab mendukung capaian.
- B: Soal lebih mudah tanpa pembelajaran dapat menyamarkan kesulitan.
- C: Menyembunyikan hasil menghambat murid memahami kebutuhan perbaikan.
- D: Analisis indikator dan dukungan lanjutan menghubungkan hasil dengan kesempatan belajar.

### 68. p1-068 — B

Etika menuntut empati dan privasi; jika terdapat risiko keselamatan, guru mengikuti prosedur perlindungan dan rujukan yang tepat.

- A: Nama dan cerita publik melanggar kepercayaan serta privasi.
- B: Kerahasiaan dijaga dengan pengecualian proporsional untuk perlindungan sesuai prosedur.
- C: Grup luas tanpa kebutuhan bukan rujukan yang proporsional.
- D: Tanda bahaya perlu ditindaklanjuti, bukan diabaikan atas nama privasi.

### 69. p1-069 — Tepat / Tepat / Tidak tepat

Keteladanan ditunjukkan oleh keadilan, integritas, dan tanggung jawab memperbaiki kesalahan.

- 1: Kriteria yang diketahui dan konsisten menunjukkan keadilan penilaian.
- 2: Mengakui dan memperbaiki kekeliruan mencontohkan integritas serta tanggung jawab.
- 3: Kedekatan pribadi tidak menjadi bukti capaian belajar.

### 70. p1-070 — C

Refleksi diri berbasis bukti mendukung pola pikir bertumbuh dan peningkatan praktik.

- A: Satu kegagalan belum membuktikan karakter murid menjadi penyebab.
- B: Komposisi baru belum menanggapi kemungkinan hambatan instruksi, peran, atau kriteria.
- C: Bukti dan umpan balik mengarahkan perubahan yang dapat dievaluasi dampaknya.
- D: Pergantian metode tanpa diagnosis belum merupakan refleksi berbasis bukti.

### 71. p1-071 — A, C, E

Pola pikir bertumbuh tampak dalam penerimaan masukan, eksperimen terukur, dan tindak lanjut hasil refleksi.

- A: Percobaan terukur memungkinkan guru belajar dari hasil.
- B: Kritik terhadap praktik tidak sama dengan vonis identitas guru.
- C: Diskusi dan adaptasi menghubungkan masukan dengan perbaikan.
- D: Kelulusan tidak mengakhiri kebutuhan belajar profesional.
- E: Umpan balik yang ditindaklanjuti menjadi dasar perkembangan diri.

### 72. p1-072 — D

Keputusan guru perlu konsisten membangun partisipasi dan rasa aman untuk mengembangkan potensi semua murid.

- A: Label pendiam menghakimi tanpa membuka ruang kontribusi.
- B: Pemanggilan dengan ancaman malu mengurangi rasa aman.
- C: Dominasi tetap tidak memberi kesempatan berkembang bagi yang lain.
- D: Waktu berpikir dan giliran aman membangun partisipasi yang konsisten.

### 73. p1-073 — Tidak tepat / Tidak tepat / Tepat

Budaya belajar positif menekankan perkembangan, standar yang jelas, dan peluang belajar dari kesalahan.

- 1: Kelompok tetap dari ranking mengabaikan kemajuan dan kebutuhan yang berubah.
- 2: Ranking sebagai identitas tetap menutup pandangan tentang kemajuan.
- 3: Revisi dengan kriteria memberi jalur nyata untuk memperbaiki capaian.

### 74. p1-074 — B

Komunikasi inklusif dan empatik mencari pemahaman bersama dan tindakan yang berbasis informasi.

- A: Penjelasan sepihak tidak cukup memahami pengalaman yang memicu kekhawatiran.
- B: Mendengar dan mengklarifikasi bukti memungkinkan komunikasi empatik dengan tindakan yang beralasan.
- C: Pembahasan ke grup memperluas paparan masalah pribadi tanpa kebutuhan.
- D: Janji nilai sebelum pemeriksaan tidak menjawab persoalan pemahaman dan mengabaikan bukti penilaian.

### 75. p1-075 — A, B, D

Umpan balik inklusif menyesuaikan cara komunikasi sambil menghargai martabat dan kebutuhan murid.

- A: Kalimat dan contoh spesifik memperjelas pesan perbaikan.
- B: Kesempatan bertanya mengecek apakah pesan dapat ditindaklanjuti.
- C: Ejekan pengucapan menstigma latar bahasa.
- D: Saluran visual atau tertulis membantu kebutuhan komunikasi tertentu.
- E: Memotong penjelasan menghilangkan informasi dan partisipasi murid.

### 76. p1-076 — C

Kolaborasi dengan pihak terkait memetakan hambatan dan merancang dukungan, tetap menjaga privasi.

- A: Tuntutan tugas sebelum memetakan penyebab belum memberi dasar dukungan yang sesuai.
- B: Penyebaran ke semua wali tidak proporsional dan membuka informasi pribadi yang tidak diperlukan.
- C: Pihak terkait memetakan hambatan bersama dan menyepakati dukungan dengan tetap menjaga privasi.
- D: Keputusan permanen sebelum memahami penyebab menutup kesempatan tindak lanjut belajar.

### 77. p1-077 — Tidak tepat / Tepat / Tidak tepat

Kolaborasi memerlukan komunikasi terarah dan perlindungan kerahasiaan data murid.

- 1: Kolaborasi perlu peran bersama; pengalihan sepihak menghilangkan tanggung jawab sekolah.
- 2: Informasi perkembangan yang relevan membantu pihak terkait merencanakan dukungan.
- 3: Transparansi tidak berarti semua orang tua berhak atas data murid lain.

### 78. p1-078 — A

Komunitas pembelajaran berguna ketika praktik, bukti, dan refleksi dibagikan secara bertanggung jawab.

- A: Kontribusi bukti dan tindak lanjut menjadikan komunitas tempat belajar profesional bersama.
- B: Kecepatan diskusi tidak membenarkan penghilangan atribusi karya rekan.
- C: Satu konteks tidak cukup mendukung penerapan universal.
- D: Daftar aktivitas tanpa bukti dan refleksi sulit dipakai untuk menilai atau memperbaiki praktik.

### 79. p1-079 — D

Tujuan pendidikan mencakup penguasaan pengetahuan, karakter, kolaborasi, dan penerapan yang bertanggung jawab.

- A: Kemiripan produk tanpa alasan belum menunjukkan penguasaan atau kemandirian berpikir.
- B: Angka saja belum memberi bukti penerapan pengetahuan, karakter, dan kolaborasi.
- C: Kecepatan tanpa penalaran dan tanggung jawab belum menunjukkan tujuan pendidikan secara utuh.
- D: Penalaran, etika, kolaborasi, dan penerapan memberi bukti hasil pendidikan yang lebih lengkap.

### 80. p1-080 — A, B, D

Konteks lokal dapat menggantikan media mahal jika tujuan dan penalaran tetap dipertahankan secara aman.

- A: Pengamatan aman dengan prosedur jelas memberi data lokal yang dapat dianalisis.
- B: Format sederhana dan contoh membantu mengatasi kebutuhan prasyarat analisis.
- C: Keterbatasan alat tidak otomatis mengharuskan penghapusan tujuan analisis.
- D: Konsep dan batas data membantu murid menarik simpulan yang proporsional.
- E: Meniru alat berisiko mengorbankan keselamatan tanpa keharusan pedagogis.

