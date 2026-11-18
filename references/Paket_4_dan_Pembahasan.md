# Paket 4 — latihan UTBK UKPPPG PPLG/RPL

Versi: 2026-11-18.1. Dihasilkan oleh `python scripts/build.py` dari `paket_4.json`; jangan edit hasil build.

Latihan orisinal, bukan soal resmi/bocoran. Rujukan utama: Juknis yang disediakan, halaman 7 dan 47. Panduan pendamping hanya inspirasi mutu kasus.

80 soal = 50 PCK + 30 PU; 40 PG, 20 PGK Kategori, 20 MCMA. Distribusi bentuk dan kode merupakan keputusan latihan internal, bukan bobot resmi.

Skor latihan: 1 poin jika seluruh respons pada butir tepat; selain itu 0. Bukan rumus nilai atau ambang kelulusan resmi.

| Kode utama | Subkompetensi (Juknis hal. 47) | PCK | PU |
|---|---|---:|---:|
| P.1 | Merancang dan memfasilitasi pengalaman belajar Murid yang mendorong pemahaman konseptual, penerapan kontekstual, dan refleksi bermakna terhadap proses pembelajaran | 8 | 2 |
| P.2 | Melaksanakan pembelajaran yang responsif terhadap keragaman latar belakang, kebutuhan, dan potensi Murid melalui berbagai model pembelajaran | 6 | 2 |
| P.3 | Menciptakan proses pembelajaran yang berkesadaran, bermakna, dan menggembirakan | 2 | 2 |
| P.4 | Mengintegrasikan teknologi informasi dan komunikasi secara kritis dan kreatif dalam pembelajaran untuk memperluas akses, memperdalam pemahaman, dan mendukung literasi digital Murid | 4 | 2 |
| P.5 | Menerapkan strategi pembelajaran atau pembimbingan yang sesuai karakteristik Murid dengan memanfaatkan sumber belajar dan mempertimbangkan potensi lingkungan dan kearifan lokal | 3 | 2 |
| P.6 | Melaksanakan asesmen untuk mengetahui kebutuhan belajar, memberikan umpan balik, dan mengukur hasil belajar Murid secara berkesinambungan dan reflektif | 7 | 3 |
| K.1 | Menampilkan perilaku etis dan keteladanan yang mencerminkan kematangan spiritual, moral, dan emosional berdasarkan Ketuhanan Yang Maha Esa dan nilai-nilai keberagaman | 0 | 2 |
| K.2 | Melakukan refleksi diri secara berkesinambungan, mengembangkan pola pikir bertumbuh, serta belajar sepanjang hayat untuk peningkatan kualitas diri | 0 | 2 |
| K.3 | Mengambil keputusan dan bertindak secara konsisten dalam mengembangkan potensi dan budaya belajar Murid | 0 | 2 |
| S.1 | Berkomunikasi secara inklusif, empatik, dan efektif secara lisan, tulisan, dan/atau isyarat dengan memperhatikan keragaman dan kebutuhan Murid | 0 | 2 |
| S.2 | Berkolaborasi dengan Murid, sesama Pendidik, Tenaga Kependidikan selain Pendidik, orang tua/wali Murid, dan masyarakat untuk meningkatkan kualitas pembelajaran | 0 | 2 |
| S.3 | Berpartisipasi aktif dalam organisasi profesi dan komunitas pembelajaran untuk pengembangan keprofesian berkelanjutan | 0 | 2 |
| PF.1 | Menguasai tujuan pendidikan terutama pada Satuan Pendidikan yang diampu | 3 | 2 |
| PF.2 | Menguasai disiplin ilmu sesuai dengan materi/muatan pembelajaran atau pembimbingan | 6 | 0 |
| PF.3 | Memahami potensi dan kebutuhan belajar Murid berdasarkan karakteristik materi pembelajaran atau pembimbingan dan konteks lokal | 4 | 1 |
| PF.4 | Memahami, menerapkan, dan mengembangkan kurikulum secara adaptif dan kontekstual sesuai perkembangan zaman | 4 | 1 |
| PF.5 | Mengembangkan praktik profesional pendidikan secara konseptual, empiris, kreatif, dan inovatif | 3 | 1 |

## Soal

Kunci dan pembahasan berada setelah seluruh soal.

### 1. [p4-001 • PCK • P.1 • PG]

Query untuk menampilkan peserta aktif dari kelas A atau B juga menampilkan peserta tidak aktif di kelas B. Murid memakai aktif AND kelas_A OR kelas_B. Langkah guru paling tepat adalah ...

A. Mengurutkan hasil menurut status untuk memeriksa peserta aktif.
B. Menguji query dengan peserta aktif dari kedua kelas.
C. Menelusuri logika pada peserta tidak aktif di B.
D. Memisahkan kondisi tiap kelas lalu membandingkan jumlah hasil saja.

### 2. [p4-002 • PCK • P.6 • Kategori]

Laporan menggabungkan tabel peserta dengan dua catatan prestasi dan tiga catatan kehadiran miliknya. Total prestasi terhitung berulang. Guru menilai diagnosis murid. Nilai bukti berikut sebagai Tepat atau Tidak tepat.

1. Murid menggambar enam pasangan baris sebelum menghitung total.
2. Murid mengganti SUM dengan COUNT dan menyatakan masalah selesai.
3. Murid menjelaskan alasan merangkum masing-masing sumber sebelum menggabungkan.

### 3. [p4-003 • PCK • PF.3 • PG]

Sebelum membuat laporan persentase, guru menemukan murid dapat membagi di kalkulator tetapi heran hasil pembagian integer pada alat SQL latihan adalah 0 untuk 1/2. Pertanyaan awal terbaik adalah ...

A. Tipe apa yang dipakai operasi pembagiannya?
B. Apakah formatnya sudah persen?
C. Berapa digit desimal yang ditampilkan?
D. Apakah penyebut pada laporan sudah berisi jumlah seluruh peserta?

### 4. [p4-004 • PCK • PF.2 • MCMA]

Subquery yang seharusnya menghitung catatan per peserta justru memberi total sama untuk semua peserta karena tidak terhubung ke baris luar. Pilih kegiatan guru yang membantu murid memahami scope.

A. Memakai data kecil yang total tiap pesertanya berbeda untuk menguji hasil.
B. Menelusuri dua baris luar dan parameter yang dibaca subquery.
C. Menambahkan alias keluaran yang lebih rinci sebagai perbaikan utama.
D. Membandingkan subquery berkorelasi dan tak berkorelasi pada data kecil.

### 5. [p4-005 • PCK • P.2 • PG]

Dalam tugas hierarki kategori, sebagian murid dapat mengikuti hubungan induk-anak tetapi belum mengenali siklus. Guru ingin memberi bantuan sebelum query penelusuran bertingkat. Pilihan terbaik adalah ...

A. Memberi bagan besar dan menandai seluruh cabang yang memiliki banyak anak.
B. Meminta murid mengisi bagian kosong pada query rekursif yang disediakan.
C. Menguji hierarki tanpa siklus dahulu lalu langsung menulis query lengkap.
D. Menelusuri diagram kecil yang memiliki siklus.

### 6. [p4-006 • PCK • PF.4 • Kategori]

Guru merancang unit laporan waktu layanan. Ada beberapa waktu sangat tinggi; pengguna ingin melihat nilai tengah sekaligus sebaran. Nilai keputusan kurikuler berikut sebagai Tepat atau Tidak tepat.

1. Memakai data berpencilan dan tanpa pencilan untuk menguji alasan pilihan ringkasan.
2. Meminta murid membandingkan median, rata-rata, dan data asal.
3. Memakai rubrik yang memeriksa alasan pemilihan ringkasan.

### 7. [p4-007 • PCK • P.6 • PG]

Pada simulasi penyimpanan, aplikasi mengaku selesai sebelum data di buffer ditulis ke penyimpanan persisten. Setelah simulasi listrik putus, data hilang. Bukti pemahaman murid paling kuat adalah ...

A. Bukti data muncul sesaat setelah disimpan.
B. Murid menjelaskan hasil uji simpan dan pemulihan setelah gangguan.
C. Bukti pesan simpan berhasil.
D. Murid membandingkan isi buffer sebelum dan sesudah tombol Simpan ditekan.

### 8. [p4-008 • PCK • P.5 • MCMA]

Arsip motif lokal memakai tanda % sebagai bagian kode. Murid memakai LIKE dan memperoleh banyak kode lain. Guru ingin mempertahankan makna sumber lokal. Pilih kegiatan yang tepat.

A. Membandingkan pencarian tanda literal dan wildcard pada contoh kode arsip.
B. Menghapus tanda dari semua kode agar query lebih mudah.
C. Membaca aturan escape sistem SQL yang dipakai lalu mengujinya.
D. Menganggap setiap hasil yang lebih banyak pasti lebih lengkap.

### 9. [p4-009 • PCK • PF.2 • PG]

Dua SELECT akan digabungkan dengan UNION. Kolomnya bertipe kompatibel tetapi posisi kota dan kategori tertukar. Guru ingin murid menjelaskan mengapa hasilnya tampak sah namun salah makna. Kegiatan terbaik adalah ...

A. Menyamakan alias kolom lalu memeriksa keberhasilan eksekusi.
B. Menguji bahwa query berhasil dijalankan tanpa pesan error.
C. Melacak arti tiap posisi kolom pada kedua SELECT.
D. Mengurutkan seluruh hasil menurut kolom pertama.

### 10. [p4-010 • PCK • P.2 • Kategori]

Kode wilayah seperti 0012 kehilangan nol awal ketika diimpor sebagai angka. Sebagian murid masih menganggap semua deretan digit adalah bilangan untuk dihitung. Nilai dukungan berikut sebagai Tepat atau Tidak tepat.

1. Membandingkan fungsi kode wilayah dan jumlah penduduk sebelum memilih tipe.
2. Mengajarkan semua deretan digit harus bertipe numerik.
3. Membatasi asesmen pada kecepatan memasukkan kode.

### 11. [p4-011 • PCK • P.1 • PG]

Murid mengira satu tabel pegawai hanya boleh muncul sekali dalam query. Guru ingin membangun konsep dua peran pada self join untuk pegawai dan atasannya. Representasi terbaik adalah ...

A. Dua kartu peran untuk menelusuri pasangan baris.
B. Dua salinan tabel pegawai.
C. Daftar pegawai beserta nama atasannya.
D. Contoh query jadi dengan latihan mengganti nama alias secara bergantian.

### 12. [p4-012 • PCK • P.4 • MCMA]

Waktu aplikasi menampilkan laporan 5 detik, tetapi log basis data mencatat query selesai dalam 0,1 detik. Guru memakai alat ukur untuk menilai dugaan murid bahwa SQL pasti lambat. Pilih langkah yang tepat.

A. Menambah indeks segera sebagai satu-satunya diagnosis.
B. Memisahkan waktu query, pengiriman data, dan render hasil.
C. Menyamakan rentang pengukuran sebelum membandingkan angka.
D. Menguji dugaan dengan data dan kondisi jaringan terkontrol.

### 13. [p4-013 • PCK • PF.5 • PG]

Guru ingin memperbaiki tugas analisis log. Murid menyimpulkan layanan sangat andal, tetapi log latihan hanya berisi permintaan yang berhasil. Langkah pengembangan praktik paling tepat adalah ...

A. Menambah variasi waktu respons pada log berhasil agar datanya lebih kaya.
B. Meminta murid membandingkan dua grafik dari log berhasil yang sama.
C. Menaikkan jumlah data lalu mengulang tugas dan membandingkan skor.
D. Menguji tugas baru dengan log sukses dan gagal.

### 14. [p4-014 • PCK • P.1 • Kategori]

Pada contoh Python, list sebagai argumen default dipakai kembali pada pemanggilan berikutnya. Murid mengira list baru selalu dibuat setiap fungsi dipanggil. Nilai kegiatan berikut sebagai Tepat atau Tidak tepat.

1. Mencatat isi list pada dua pemanggilan berturut-turut.
2. Membandingkan default mutable dengan pembuatan list baru di dalam fungsi.
3. Mengajarkan semua argumen default selalu dibuat ulang saat pemanggilan.

### 15. [p4-015 • PCK • P.6 • PG]

Murid melakukan dua tahap sorting dan ingin mempertahankan urutan tahap pertama ketika kunci tahap kedua seri. Bukti pemahaman sorting stabil paling kuat adalah ...

A. Urutan benar pada data yang semua kuncinya berbeda.
B. Prediksi item seri pada dua tahap sorting.
C. Perbandingan waktu dua implementasi.
D. Penjelasan arah naik dan turun untuk setiap kolom yang dipakai.

### 16. [p4-016 • PCK • PF.2 • MCMA]

Program membuka file, lalu gagal saat memproses isinya. Murid menutup file hanya pada akhir alur sukses. Guru ingin murid memahami pengelolaan resource. Pilih kegiatan yang tepat.

A. Menguji jalur sukses dan jalur gagal sambil memantau penutupan resource.
B. Menyembunyikan pesan gagal supaya pengguna melihat layar normal.
C. Membandingkan penutupan di akhir biasa dengan mekanisme cleanup yang dijamin bahasa.
D. Menambah jumlah file uji tanpa memeriksa status resource.

### 17. [p4-017 • PCK • PF.4 • PG]

Guru merancang unit penyimpanan object ke JSON. Murid harus mampu menjelaskan data yang bertahan dan perilaku yang perlu dibangun kembali. Tujuan asesmen paling tepat adalah ...

A. Penjelasan struktur JSON bersarang.
B. Perbandingan ukuran file hasil ekspor.
C. Perbandingan object sebelum dan sesudah dimuat.
D. Murid berhasil membaca ulang seluruh field yang ditulis ke JSON.

### 18. [p4-018 • PCK • PF.3 • Kategori]

Sebelum unit koleksi object, murid dapat membandingkan atribut tetapi menyamakan dua object dengan isi sama sebagai satu object yang identik. Nilai pemetaan prasyarat berikut sebagai Tepat atau Tidak tepat.

1. Menganggap kesamaan isi selalu membuktikan satu identitas object.
2. Memakai kesamaan seluruh atribut sebagai satu-satunya bukti kesamaan identitas.
3. Menetapkan aturan pembandingan yang digunakan bahasa atau class pada contoh.

### 19. [p4-019 • PCK • P.3 • PG]

Dalam proyek penghitung pekerjaan, dua tugas paralel membaca nilai counter yang sama lalu masing-masing menulis tambah satu. Hasil kurang dari dugaan membuat murid saling menyalahkan. Respons guru terbaik adalah ...

A. Menelusuri jejak baca-tulis bersama secara netral.
B. Membandingkan hasil akhir anggota lalu memakai versi yang paling sering benar.
C. Mengulang eksekusi sambil mencatat jumlah akhir dari beberapa percobaan.
D. Membagi kepemilikan counter per anggota sebelum mengubah rancangan program.

### 20. [p4-020 • PCK • P.1 • MCMA]

Murid menganggap hash yang sama berarti dua nilai pasti sama. Guru mengajarkan struktur pencarian berbasis hash. Pilih kegiatan yang membangun konsep tepat.

A. Meminta murid mengurutkan nilai menurut warna label.
B. Memakai contoh dua nilai berbeda dengan hash buatan yang sama.
C. Mengajarkan bahwa collision selalu berarti program rusak.
D. Menelusuri pemeriksaan kesamaan nilai setelah kelompok hash ditemukan.

### 21. [p4-021 • PCK • P.5 • PG]

Murid membuat permainan dari atlas gambar motif daerah dengan izin pemiliknya. Saat satu tile ditampilkan, tepinya mengambil warna tile tetangga. Guru ingin pengalaman lokal itu tetap menjadi bahan belajar pengolahan gambar. Langkah paling tepat adalah ...

A. Menguji atlas contoh buatan guru.
B. Menguji batas potongan dan jarak antartile.
C. Memperkecil seluruh atlas agar lebih ringan saat permainan dijalankan.
D. Menilai kemiripan motif dari tangkapan layar akhir saja.

### 22. [p4-022 • PCK • PF.2 • Kategori]

Pada latihan ekspor gambar lossy, murid melihat artefak setelah beberapa kali membuka dan menyimpan ulang hasil ekspor. Guru menyiapkan gambar sumber yang sama. Nilai arahan berikut sebagai Tepat atau Tidak tepat.

1. Membandingkan ekspor sekali dari sumber dengan rangkaian ekspor ulang pada pengaturan terkontrol.
2. Menyimpulkan bahwa membuka hasil ekspor memulihkan detail sumber.
3. Menjelaskan bahwa hasil tergantung algoritma dan pengaturan, sambil menelaah artefak contoh.

### 23. [p4-023 • PCK • P.4 • PG]

Latihan Python yang semula berjalan gagal setelah murid membuat file random.py. Pesan menyebut atribut modul tidak ditemukan, padahal pustaka standar tersedia. Guru hendak memakai alat diagnosis yang memberi bukti langsung. Pilihan terbaik adalah ...

A. Membandingkan versi Python semua komputer terlebih dahulu.
B. Memasang ulang pustaka yang namanya sama melalui pengelola paket.
C. Memindahkan latihan ke editor yang memberi pelengkapan otomatis.
D. Menampilkan lokasi modul yang benar-benar diimpor.

### 24. [p4-024 • PCK • P.2 • MCMA]

Form latihan menghasilkan string "2" dan "3". Saat digabung, layar menampilkan "23", bukan jumlah 5. Sebagian murid sudah memahami penjumlahan, tetapi belum membedakan teks dan angka. Pilih dukungan yang sesuai kebutuhan ini.

A. Menampilkan nilai beserta tipenya sebelum dan sesudah konversi.
B. Mengulang seluruh unit penjumlahan bilangan bulat.
C. Membandingkan penggabungan teks dengan penjumlahan hasil konversi yang valid.
D. Mengganti semua input menjadi pilihan angka tanpa membahas konversi.

### 25. [p4-025 • PCK • PF.5 • PG]

Setelah demonstrasi generator, banyak murid masih mengira seluruh nilainya dihitung saat generator dibuat. Guru ingin memperbaiki cara mengajarnya dan memeriksa dampaknya. Rencana terbaik adalah ...

A. Menguji jejak evaluasi lalu tugas prediksi baru.
B. Demonstrasi ulang dengan angka berbeda.
C. Mendahulukan demonstrasi list lengkap dan menunda generator sampai unit berikutnya.
D. Menggunakan kuis pendapat murid tentang kejelasan penjelasan guru.

### 26. [p4-026 • PCK • PF.1 • Kategori]

SMK menyiapkan unit desain logo yang dipakai pada kartu kecil dan spanduk besar. Tujuannya lulusan mampu memilih format sesuai kebutuhan pengguna, bukan hanya memakai aplikasi tertentu. Nilai keputusan berikut sebagai Tepat atau Tidak tepat.

1. Menguji hasil pembesaran dari logo vektor dan raster dengan bentuk awal sebanding.
2. Memakai hasil ukuran kartu saja sebagai bukti kecocokan format untuk spanduk.
3. Menetapkan file terkecil sebagai hasil terbaik untuk semua penggunaan.

### 27. [p4-027 • PCK • P.1 • PG]

Dalam latihan web berbasis session cookie, server menerima perubahan profil dari halaman lain karena browser mengirim cookie pengguna yang sedang login. Murid menyimpulkan permintaan itu pasti dikehendaki pengguna. Kegiatan guru paling tepat adalah ...

A. Mengganti request perubahan menjadi POST.
B. Menunjukkan bahwa cookie tidak dapat dibaca JavaScript bila diberi HttpOnly.
C. Membedakan bukti login dan bukti kehendak tindakan.
D. Meminta murid menghapus cookie setiap selesai mengubah profil.

### 28. [p4-028 • PCK • P.2 • MCMA]

Pada latihan flex, kartu melebar ketika berisi satu kata sangat panjang. Murid sudah memahami width, tetapi belum memahami batas ukuran minimum item. Guru memilih scaffolding sebelum murid memperbaiki halaman sendiri. Pilih langkah yang tepat.

A. Mengganti halaman dengan template responsif lengkap untuk ditiru.
B. Menyederhanakan contoh menjadi dua item lalu membandingkan isi pendek dan panjang.
C. Menghapus kata panjang dari semua data latihan.
D. Menguji batas ukuran minimum dan aturan pemenggalan satu per satu.

### 29. [p4-029 • PCK • PF.3 • PG]

Murid dapat menghitung desimal dan membuat input web, tetapi konversi bawaan menghasilkan nilai tidak valid untuk masukan "1,5". Aplikasi ditujukan bagi pengguna yang biasa memakai koma desimal. Prasyarat yang paling perlu diperiksa sebelum unit validasi adalah ...

A. Penjumlahan desimal bersusun.
B. Format lokal, parsing, dan nilai numerik program.
C. Kelengkapan pesan kesalahan ketika sebuah input tidak berhasil dikonversi.
D. Pemahaman cara menghitung luas dengan pembulatan dua digit.

### 30. [p4-030 • PCK • P.6 • Kategori]

Target latihan: setelah menulis kata pencarian, tombol Back membawa pengguna ke halaman sebelumnya. Prototipe justru menambah satu entri history setiap huruf sehingga Back menghapus huruf satu per satu. Nilai bukti asesmen berikut sebagai Tepat atau Tidak tepat.

1. Screenshot hasil pencarian sudah cukup membuktikan target tercapai.
2. Rekaman urutan navigasi dan perubahan entri history dapat menguji target.
3. Murid perlu menjelaskan kapan mengganti entri saat ini dan kapan menambah entri baru.

### 31. [p4-031 • PCK • P.1 • PG]

Dua pertanyaan PG berada dalam satu form web. Memilih jawaban nomor 2 menghapus pilihan nomor 1. Semua id unik, tetapi seluruh radio memakai name yang sama. Respons guru yang paling membangun konsep adalah ...

A. Meminta murid mengacak id agar setiap input lebih mudah dibedakan.
B. Mengubah semua radio menjadi checkbox lalu membatasi pilihan melalui instruksi.
C. Memisahkan pertanyaan ke dua halaman sebelum membahas penyebabnya.
D. Menguji kelompok name per pertanyaan dan menjelaskan hasilnya.

### 32. [p4-032 • PCK • PF.4 • MCMA]

Unit web menargetkan kemampuan memilih mekanisme pembaruan data. Untuk papan status, perubahan jarang terjadi, keterlambatan sampai satu menit dapat diterima, dan server latihan hanya mendukung HTTP biasa. Pilih keputusan kurikulum yang tepat.

A. Membandingkan polling berkala dengan kebutuhan latensi dan beban pada kasus ini.
B. Mewajibkan server push agar unit selalu memakai teknologi paling baru.
C. Menilai alasan pilihan, kemudian memberi kasus pembanding dengan tuntutan berbeda.
D. Mengganti tujuan menjadi hafalan singkatan protokol agar fasilitas cukup.

### 33. [p4-033 • PCK • PF.2 • PG]

Komponen grafik muat pada halaman penuh, tetapi meluap saat ditempatkan di panel sempit pada layar desktop yang sama. Murid hanya memeriksa lebar viewport. Representasi guru paling tepat adalah ...

A. Diagram lebar viewport, panel, dan komponen.
B. Daftar resolusi perangkat.
C. Perbandingan ukuran font grafik pada panel sempit dan halaman penuh.
D. Daftar ukuran minimum layar yang didukung seluruh halaman aplikasi.

### 34. [p4-034 • PCK • P.6 • Kategori]

Router latihan memilih aturan pertama yang cocok. Aturan /produk/:id ditempatkan sebelum /produk/baru, sehingga kata baru dibaca sebagai id. Nilai kesimpulan asesmen berikut sebagai Tepat atau Tidak tepat.

1. Menelusuri aturan yang cocok secara berurutan menguji pemahaman penyebab.
2. Keberhasilan membuka /produk/12 membuktikan kedua aturan sudah tepat.
3. Meminta alasan urutan aturan dan pemeriksaan id memberi bukti lebih lengkap.

### 35. [p4-035 • PCK • P.2 • PG]

Murid telah lancar memakai map untuk nilai sinkron. Pada fungsi async, mereka mencoba membaca properti hasil padahal map menghasilkan array Promise. Semua Promise pada contoh berhasil. Bantuan awal paling tepat adalah ...

A. Mengulang latihan array dari deklarasi sampai perulangan dasar.
B. Mengganti seluruh proses menjadi request sinkron agar hasil mudah dilihat.
C. Membandingkan isi array sebelum dan setelah Promise.all ditunggu.
D. Menambah jeda tetap sebelum array dibaca kembali.

### 36. [p4-036 • PCK • PF.1 • MCMA]

Dalam proyek kelas SMK, tim membuat dialog konfirmasi web berdasarkan tugas pengguna dan meninjau hasilnya pada tiap tahap. Tampilan rapi, tetapi pengguna keyboard tetap berpindah ke tombol di belakang dialog. Tujuan proyek mencakup produk yang dapat digunakan secara bertanggung jawab. Pilih bukti kelulusan yang sesuai.

A. Kesamaan warna dialog dengan rancangan awal.
B. Uji penyelesaian tugas dengan keyboard saat dialog terbuka.
C. Jumlah baris CSS untuk membuat latar redup.
D. Penjelasan dan uji pengembalian fokus setelah dialog ditutup.

### 37. [p4-037 • PCK • P.4 • PG]

Dalam demo web, server cache mengembalikan halaman akun A kepada B. Backend telah memeriksa session, tetapi cache memakai URL saja sebagai kunci untuk halaman personal. Guru perlu memilih cara pemeriksaan teknologinya. Langkah terbaik adalah ...

A. Mengubah warna halaman untuk membedakan pengguna saat pengujian.
B. Uji dua session beserta kebijakan cache response.
C. Mengurangi masa aktif session lalu mengulang tes satu akun.
D. Memindahkan URL halaman tanpa memeriksa konfigurasi penyimpanan.

### 38. [p4-038 • PCK • PF.5 • Kategori]

Guru menduga demonstrasi pembatalan request menimbulkan miskonsepsi: tombol Batal dianggap pasti membatalkan transaksi di server. Dalam log latihan, server sudah menyimpan transaksi sebelum browser membatalkan penantian. Nilai rencana perbaikan praktik berikut.

1. Menyandingkan garis waktu browser dan server lalu meminta murid menjelaskan status transaksi.
2. Memakai kasus baru dengan waktu pembatalan berbeda untuk memeriksa hasil perbaikan.
3. Menilai keberhasilan perbaikan dari hilangnya indikator loading saja.

### 39. [p4-039 • PCK • PF.1 • PG]

Proyek aplikasi SMK hanya perlu foto yang dipilih pengguna. Platform menyediakan photo picker dengan akses terbatas ke pilihan itu. Tim meminta akses seluruh galeri agar fitur cepat selesai. Umpan balik guru paling tepat adalah ...

A. Menilai kecocokan foto yang tampil dahulu.
B. Rubrik foto berhasil tampil.
C. Menambahkan halaman persetujuan sebelum mengakses seluruh foto pengguna.
D. Menguji kecukupan akses picker dalam rubrik produk.

### 40. [p4-040 • PCK • P.2 • MCMA]

Beberapa murid menggunakan ukuran font sistem besar. Pada aplikasi latihan, label terpotong karena tinggi baris tetap. Tujuannya semua murid dapat menguji dan menjelaskan alur aplikasi, bukan membaca huruf kecil. Pilih tindak lanjut yang tepat.

A. Menguji pembesaran font dengan tata letak yang menyesuaikan isi.
B. Meminta murid mengembalikan font sistem sebelum pembelajaran.
C. Memeriksa keterbacaan label dan keterjangkauan tombol setelah perubahan.
D. Mengganti label dengan ikon baru yang belum dikenali murid.

### 41. [p4-041 • PCK • P.6 • PG]

Murid menyatakan aplikasi siap diperbarui karena application ID sama. Uji instalasi pembaruan gagal; platform dalam latihan mensyaratkan identitas penandatangan yang sesuai, sedangkan build baru memakai kunci berbeda. Bukti asesmen terbaik adalah ...

A. Penjelasan kecocokan ID dan penandatangan pada dua build.
B. Kesamaan ikon dan nama dua build.
C. Murid berhasil menjalankan build baru setelah menghapus versi lama.
D. Murid menyebutkan langkah ekspor file instalasi sesuai urutan.

### 42. [p4-042 • PCK • P.1 • Kategori]

Foto kamera tampak tegak pada satu penampil, tetapi miring pada komponen aplikasi murid. File menyimpan orientasi dalam metadata; kedua penampil membaca metadata secara berbeda. Guru ingin membangun konsep representasi gambar. Nilai kegiatan berikut.

1. Meminta prediksi tampilan pada dua penampil sebelum memeriksa metadata.
2. Membandingkan urutan piksel dan metadata orientasi pada file yang sama.
3. Menguji salinan dengan orientasi dinormalisasi sambil mencatat perubahan metadata.

### 43. [p4-043 • PCK • PF.3 • PG]

Pada latihan multitouch, dua jari memiliki ID tetap, tetapi posisi mereka dalam daftar event dapat berubah ketika satu jari diangkat. Murid lancar membaca koordinat namun sering melacak jari yang salah. Prasyarat yang perlu dipetakan adalah ...

A. Penanganan event sentuhan awal.
B. Cara menghitung jarak antara dua titik koordinat.
C. Perbedaan ID penunjuk dan indeks daftar event.
D. Kemampuan menggambar bentuk dengan dua ukuran layar.

### 44. [p4-044 • PCK • P.6 • MCMA]

Pada unit unduhan offline, murid melanjutkan unduhan setelah koneksi putus. Guru menyediakan salinan acuan dan manifest tepercaya. Target asesmen: murid membuktikan file akhir sesuai versi acuan. Pilih bukti yang memadai untuk mendukung kesimpulan itu.

A. Ikon file muncul dan nama sesuai dengan judul materi.
B. Checksum file akhir cocok dengan checksum manifest menggunakan algoritma yang ditetapkan.
C. Panjang file sama dengan panjang yang tercantum di manifest.
D. Isi file akhir sama pada pembandingan byte dengan salinan acuan tepercaya.

### 45. [p4-045 • PCK • P.1 • PG]

Setelah login berhasil, menekan Back justru menampilkan formulir login lagi. Aplikasi latihan menyimpan setiap perpindahan sebagai penambahan layar ke stack. Guru ingin murid memahami penyebab sebelum mengubah kode. Langkah terbaik adalah ...

A. Menyembunyikan tombol Back pada semua layar setelah login.
B. Menelusuri isi stack sebelum dan sesudah transisi login.
C. Menambah pemeriksaan warna halaman untuk membedakan status login.
D. Mengulang login beberapa kali sampai urutan layar berubah.

### 46. [p4-046 • PCK • P.5 • Kategori]

Aplikasi informasi acara kampung akan memakai dua bahasa setempat. Narasumber menunjukkan urutan kata pada pesan jumlah peserta berbeda antarkeduanya. Guru ingin sumber lokal benar-benar memengaruhi rancangan belajar. Nilai tindakan berikut.

1. Mengajak murid memeriksa contoh pesan bersama penutur lalu menyusun template per bahasa.
2. Menerjemahkan kata satu per satu dengan susunan bahasa pertama.
3. Meminta murid menjelaskan perubahan rancangan berdasarkan masukan penutur.

### 47. [p4-047 • PCK • PF.4 • PG]

Kurikulum unit mobile menargetkan pemilihan mekanisme kerja latar. Platform latihan dapat menunda pekerjaan berkala untuk menghemat daya. Rencana tugas semula menuntut pengiriman tepat tiap menit walau aplikasi tidak aktif. Adaptasi guru terbaik adalah ...

A. Asesmen kode pendaftaran pekerjaan dan hasil satu percobaan tepat waktu.
B. Tambahan percobaan dengan interval lebih pendek agar data terkumpul cepat.
C. Mengganti tujuan unit menjadi hafalan nama layanan latar.
D. Kasus sinkronisasi toleran tunda dengan penilaian alasan pilihan.

### 48. [p4-048 • PCK • P.4 • MCMA]

Aplikasi latihan dapat terhubung ke server uji setelah verifikasi sertifikat dimatikan. Guru ingin penggunaan alat pengembangan tetap mendidik murid menilai keamanan koneksi. Pilih tindak lanjut yang tepat.

A. Menelusuri identitas server yang seharusnya dipercaya dan konfigurasi sertifikatnya.
B. Menganggap koneksi terenkripsi cukup meskipun identitas server tidak diverifikasi.
C. Membedakan konfigurasi kepercayaan khusus pengujian dari rilis yang akan digunakan.
D. Mencatat alasan dan batas konfigurasi kepercayaan yang dipilih murid.

### 49. [p4-049 • PCK • PF.2 • PG]

API accelerometer yang dipakai latihan melaporkan komponen gravitasi. Ponsel diam tetap menampilkan nilai bukan nol. Murid menyimpulkan sensornya rusak karena tidak bergerak. Penjelasan guru paling tepat adalah ...

A. Membedakan keluaran API dan dugaan bahwa diam harus bernilai nol.
B. Menyarankan pengurangan bacaan awal sebagai kalibrasi sebelum menguji kembali.
C. Menggunakan perpindahan ikon sebagai pengganti angka agar hasil lebih mudah dilihat.
D. Perbandingan bacaan dua ponsel.

### 50. [p4-050 • PCK • P.3 • Kategori]

Kelas membuat permainan gerak. Fitur sensor tambahan hanya tersedia pada sebagian perangkat. Tujuan belajar ialah merancang aturan interaksi dan menjelaskan respons, bukan membandingkan mahalnya ponsel. Nilai rancangan pembelajaran berikut.

1. Menyediakan input sentuh setara untuk menguji aturan interaksi yang sama.
2. Mengelompokkan nilai tantangan menurut banyaknya fitur perangkat yang tersedia.
3. Menampilkan peringkat keberhasilan menurut kelengkapan sensor perangkat.

### 51. [p4-051 • PU • P.1 • PG]

Murid membaca grafik: kelas yang sering memakai perpustakaan memiliki nilai membaca lebih tinggi. Mereka menyimpulkan menambah kunjungan pasti menaikkan nilai. Guru hendak membangun penalaran sebab-akibat. Kegiatan paling tepat adalah ...

A. Daftar manfaat membaca dari pengalaman.
B. Menghitung kembali rata-rata nilai tiap kelas sampai hasilnya sama.
C. Menimbang penjelasan alternatif dan bukti pembedanya.
D. Menambah contoh kelas yang sesuai dengan kesimpulan awal.

### 52. [p4-052 • PU • P.2 • MCMA]

Dua kelompok mendapat skor awal sama. Kelompok A memilih strategi sesuai soal tetapi sering salah hitung; B menghitung lancar namun kerap memilih strategi keliru. Pilih tindak lanjut yang sesuai bukti.

A. Memisahkan bukti pemilihan strategi dan ketelitian hitung dalam catatan diagnosis.
B. Memberi A dukungan pemeriksaan hasil, B perbandingan alasan memilih strategi.
C. Menetapkan kelompok tetap sampai akhir semester berdasarkan skor awal.
D. Memeriksa ulang kebutuhan setelah tugas singkat yang menuntut strategi dan perhitungan.

### 53. [p4-053 • PU • P.3 • PG]

Guru ingin memulai diskusi isu sensitif dengan check-in emosi. Seorang murid tidak ingin mengungkap perasaannya di depan kelas, tetapi bersedia menuliskannya untuk diri sendiri. Tujuan kegiatan adalah kesadaran diri dan kesiapan belajar. Respons terbaik adalah ...

A. Daftar emosi untuk dibacakan satu per satu.
B. Pilihan refleksi pribadi dan penentuan dukungan belajar.
C. Pengecualian murid dari diskusi.
D. Menunda diskusi sampai seluruh murid siap membagikan perasaan di depan kelas.

### 54. [p4-054 • PU • P.4 • Kategori]

Alat pencarian menempatkan hasil berbayar paling atas. Murid menganggap urutan itu menunjukkan kualitas bukti terbaik. Guru ingin mengembangkan penggunaan teknologi secara kritis. Nilai tindakan berikut.

1. Mengganti alat pencarian tanpa membahas bagaimana hasil diperingkat.
2. Membandingkan label sponsor, penulis, dan bukti pada beberapa hasil.
3. Meminta murid menjelaskan alasan memilih sumber setelah memeriksa isinya.

### 55. [p4-055 • PU • P.5 • PG]

Pada unit perencanaan rute, peta lingkungan sekolah belum memuat jalur pejalan kaki yang baru. Warga juga menyampaikan bahwa beberapa ruas padat saat pasar berlangsung. Tujuan unit ialah memberi alasan pemilihan rute yang dapat digunakan. Pemanfaatan sumber setempat terbaik adalah ...

A. Mengumpulkan observasi jalur lalu menguji alasan pilihan rute.
B. Memakai peta lama karena sumber tercetak lebih mudah disamakan antar kelompok.
C. Mengikuti rute yang paling sering dipilih warga tanpa menanyakan kondisinya.
D. Pemilihan garis terpendek pada peta.

### 56. [p4-056 • PU • P.6 • MCMA]

Rata-rata kelas pada tujuan membuat inferensi sudah melewati batas capaian. Namun lembar jawaban menunjukkan delapan murid menyalin kalimat tanpa menghubungkan bukti. Pilih tindak lanjut yang tepat.

A. Memeriksa alasan delapan murid dengan tugas singkat yang setara.
B. Memulai materi lanjutan untuk semua karena rata-rata kelas sudah cukup.
C. Memberi dukungan menghubungkan bukti dan inferensi, lalu menilai ulang.
D. Mengganti batas capaian agar lebih banyak murid masuk kategori tuntas.

### 57. [p4-057 • PU • K.1 • PG]

Sekolah meminta contoh karya untuk pameran publik. Satu karya murid memuat kisah keluarga yang sensitif dan awalnya hanya dibuat untuk dibaca guru. Sikap guru paling tepat adalah ...

A. Membicarakan izin dan bagian yang nyaman dibagikan bersama murid.
B. Mengunggah karya setelah menghapus nama murid saja.
C. Meminta ketua kelas memutuskan karena pameran mewakili kelas.
D. Menampilkan karya utuh karena tugas sekolah menjadi milik sekolah.

### 58. [p4-058 • PU • K.2 • Kategori]

Guru merasa umpan baliknya sudah jelas karena semua jawaban salah diberi tanda. Murid mengatakan belum tahu bagian penalaran yang perlu diubah. Pada sampel pekerjaan, tanda memang tidak disertai penjelasan. Nilai respons refleksi guru berikut.

1. Menelaah sampel bersama kriteria sebelum menilai kejelasan umpan baliknya.
2. Menganggap keberadaan tanda koreksi cukup membuktikan murid tahu cara memperbaiki.
3. Mencoba komentar terarah lalu memeriksa cara murid merevisi alasannya.

### 59. [p4-059 • PU • K.3 • PG]

Murid terlambat menyerahkan tugas karena hambatan yang telah dibicarakan dengan guru. Ia sudah punya rencana pengerjaan, tetapi teman mempertanyakan kelonggaran tenggat. Guru ingin membangun kebiasaan belajar sekaligus tanggung jawab. Respons terbaik adalah ...

A. Pengungkapan hambatan murid kepada kelas.
B. Membebaskan murid dari tugas agar tidak muncul persoalan tenggat.
C. Tenggat penyesuaian disertai titik cek kemajuan.
D. Penerapan tenggat seragam.

### 60. [p4-060 • PU • S.1 • MCMA]

Saat guru menawarkan kesempatan bertanya, beberapa murid diam. Dalam percakapan pribadi mereka mengatakan masih bingung, tetapi takut pertanyaannya dianggap sudah dijelaskan. Pilih respons komunikasi yang sesuai.

A. Menyimpulkan diam berarti setuju lalu mengakhiri pembahasan.
B. Mengakui bahwa instruksi mungkin perlu diperjelas dan memberi kanal bertanya tanpa nama.
C. Meminta murid yang diam mewakili kelas menjawab pertanyaan sulit.
D. Mengecek pemaknaan melalui contoh singkat dan menanggapi kebingungan dengan netral.

### 61. [p4-061 • PU • S.2 • PG]

Dua guru akan mengajar bersama dalam unit argumentasi. Pada pertemuan pertama keduanya memberi arahan bersamaan, sedangkan bukti diskusi murid tidak tercatat. Langkah kolaborasi terbaik sebelum pertemuan berikutnya adalah ...

A. Membagi kelas menjadi dua dengan tujuan dan penilaian masing-masing.
B. Menyepakati pembagian fasilitasi, pengamatan, dan waktu menelaah bukti.
C. Meminta guru yang lebih senior memimpin seluruh kegiatan sampai unit berakhir.
D. Menggilir penyampaian materi per sepuluh menit agar waktu setara.

### 62. [p4-062 • PU • S.3 • Kategori]

Komunitas guru membahas praktik asesmen. Anggota baru membawa catatan kasus, tetapi diskusi selalu diisi tiga pembicara lama. Ia ingin ikut belajar dan memberi kontribusi tanpa menunggu menjadi ahli. Nilai pilihan berikut.

1. Mengajukan satu pertanyaan dari catatan kasus dan meminta tanggapan anggota.
2. Mengusulkan giliran berbagi singkat agar lebih banyak bukti praktik terdengar.
3. Menunggu sampai seluruh praktiknya berhasil sebelum ikut berdiskusi.

### 63. [p4-063 • PU • PF.1 • PG]

Sekolah mengganti platform pembelajaran. Sebagian guru ingin mempertahankan latihan menghafal letak tombol. Tujuan sekolah adalah murid dapat mencari informasi, memeriksa sumber, dan bekerja mandiri. Prioritas guru paling tepat adalah ...

A. Panduan tombol diikuti tes praktik langkah demi langkah sebagai hasil utama.
B. Menunda semua kegiatan sampai tampilan platform stabil sepanjang tahun.
C. Menyamakan kecepatan klik sebagai ukuran kemandirian belajar.
D. Penilaian pencarian dan pemeriksaan sumber, dibantu pengenalan alat.

### 64. [p4-064 • PU • PF.3 • MCMA]

Sebelum unit membaca inferensial, guru menemukan murid mampu membaca kata dengan lancar, tetapi tidak menghubungkan dua petunjuk terpisah untuk menyimpulkan maksud tokoh. Pilih diagnosis prasyarat yang tepat.

A. Meminta murid menunjukkan petunjuk yang dipakai dan hubungan di antaranya.
B. Menguji kecepatan membaca nyaring sebagai satu-satunya dasar dukungan.
C. Memeriksa pemahaman kata penghubung pada pasangan petunjuk yang digunakan.
D. Menentukan kemampuan dari jumlah buku yang dibawa ke kelas.

### 65. [p4-065 • PU • PF.4 • PG]

Saat menyusun kurikulum unit, guru mengetahui kelas telah mahir menjalankan prosedur eksperimen tetapi belum mampu membandingkan dua penjelasan berdasarkan bukti. Tujuan akhir tetap menuntut evaluasi penjelasan. Adaptasi terbaik adalah ...

A. Mengurangi pengulangan prosedur dan menilai perbandingan penjelasan.
B. Mempertahankan seluruh latihan prosedur karena urutan buku harus sama.
C. Mengganti tujuan akhir menjadi kelancaran mengikuti prosedur.
D. Menambah eksperimen yang lebih banyak tanpa mengubah pertanyaan analisis.

### 66. [p4-066 • PU • PF.5 • Kategori]

Guru menguji rancangan diskusi yang mewajibkan setiap murid menulis alasan sebelum berbagi. Hasil belum meningkat. Catatan pelaksanaan menunjukkan beberapa pertemuan langsung masuk diskusi tanpa tahap menulis. Nilai keputusan penelitian praktik berikut.

1. Menyimpulkan tahap menulis tidak berguna karena nilai belum naik.
2. Mencatat keterlaksanaan tiap tahap bersama bukti hasil murid.
3. Memperbaiki keterlaksanaan lalu menguji kembali dengan tugas yang sebanding.

### 67. [p4-067 • PU • P.1 • PG]

Murid dapat mengulang aturan memisahkan dua jenis sampah, tetapi salah saat menghadapi kemasan gabungan yang belum dicontohkan. Tujuan guru ialah transfer prinsip pemilahan. Kegiatan terbaik adalah ...

A. Meminta murid menyalin aturan dengan tulisan lebih rapi.
B. Mengulang contoh yang sudah dijawab benar dengan urutan berbeda.
C. Membandingkan kemasan baru dan menjelaskan alasan pemilahan berdasarkan cirinya.
D. Menghitung kecepatan menyebutkan nama dua tempat sampah.

### 68. [p4-068 • PU • P.2 • MCMA]

Dalam kerja kelompok, tiga murid memiliki hambatan berbeda: sulit memulai tugas yang terbuka, belum memahami teks sumber, dan sudah siap menguji gagasan lebih lanjut. Pilih respons yang sesuai kebutuhan.

A. Memberi contoh langkah awal yang dapat dilepas setelah murid mampu memulai.
B. Memberi pemantik langkah awal dan bantuan memahami sumber kepada yang memerlukannya.
C. Menetapkan murid yang siap sebagai penjelas tetap bagi semua kelompok.
D. Memberi tugas menguji batas gagasan kepada murid yang sudah siap.

### 69. [p4-069 • PU • P.3 • PG]

Pada tantangan kelas, leaderboard membuat murid memilih soal termudah demi poin. Tujuan guru adalah keberanian mencoba strategi dan merefleksikan hasil. Perubahan paling tepat adalah ...

A. Menaikkan poin soal mudah agar lebih banyak murid mendapat penghargaan.
B. Pilihan tantangan disertai telaah strategi.
C. Menghapus kesempatan memilih sehingga semua mengerjakan soal tersulit.
D. Memberi hadiah hanya bagi murid yang paling cepat mengganti strategi.

### 70. [p4-070 • PU • P.4 • Kategori]

Guru memakai papan anotasi digital untuk membahas teks. Banyak komentar muncul, tetapi mayoritas hanya "setuju" tanpa alasan. Tujuannya argumentasi berbukti. Nilai evaluasi penggunaan teknologi berikut.

1. Menilai kualitas hubungan klaim, kutipan, dan tanggapan, bukan jumlah komentar.
2. Menyebut penggunaan teknologi berhasil karena kegiatan telah berpindah ke layar.
3. Meminta murid menautkan alasan ke kutipan lalu menanggapi alasan teman.

### 71. [p4-071 • PU • P.5 • PG]

Kelas meneliti cara iklan memengaruhi pilihan warga. Toko sekitar bersedia memberikan brosur lama, daftar perubahan promosi, dan kesempatan bertanya tentang sasaran pembeli. Penggunaan sumber lokal terbaik adalah ...

A. Menjadikan nama toko sebagai pengganti nama pada soal buku.
B. Meminta murid meniru brosur yang paling berwarna.
C. Menilai pilihan warga hanya dari promosi yang disukai pemilik toko.
D. Menganalisis perubahan pesan dan memeriksa tanggapan warga dengan pertanyaan terarah.

### 72. [p4-072 • PU • P.6 • MCMA]

Dua penilai memberi skor sangat konsisten pada tugas presentasi. Namun rubrik hanya menilai volume suara dan kerapian, sedangkan tujuan unit ialah kekuatan argumen. Pilih kesimpulan yang tepat.

A. Konsistensi skor belum membuktikan kesesuaian asesmen dengan tujuan.
B. Nilai yang konsisten menunjukkan argumen pasti sudah diukur dengan baik.
C. Rubrik perlu memuat alasan, bukti, dan hubungan keduanya sesuai tujuan.
D. Menambah jumlah penilai saja akan menyelesaikan ketidakselarasan tujuan.

### 73. [p4-073 • PU • K.1 • PG]

Dua tugas sangat mirip, sehingga guru menduga ada penyalinan. Belum ada bukti tentang proses kerja atau komunikasi kedua murid. Sikap paling tepat adalah ...

A. Klarifikasi proses secara pribadi.
B. Menyatakan pelanggaran kepada kelas agar aturan segera dipahami.
C. Memberi nilai rata-rata kedua tugas sebagai jalan tengah.
D. Menganggap kemiripan wajar karena tujuan tugas sama.

### 74. [p4-074 • PU • K.2 • Kategori]

Nilai kelas tinggi setelah guru memakai contoh yang hampir sama dengan latihan. Dalam refleksi ia ingin mengetahui apakah murid mampu menggunakan prinsip di situasi lain. Nilai langkah berikut.

1. Memeriksa tugas transfer dengan informasi baru tetapi prinsip yang sama.
2. Mencatat batas kesimpulan dari nilai tinggi sebagai bahan belajar guru.
3. Menganggap mempertanyakan nilai tinggi berarti meremehkan usaha murid.

### 75. [p4-075 • PU • K.3 • PG]

Guru berjanji memberi waktu konsultasi mingguan agar murid terbiasa menyusun rencana belajar. Dua kali jadwal batal tanpa kabar dan murid mulai enggan menyiapkan pertanyaan. Tindakan terbaik adalah ...

A. Meminta murid lebih mandiri sehingga konsultasi tidak diperlukan.
B. Memperpanjang konsultasi berikutnya tanpa membicarakan jadwal yang batal.
C. Mengakui pembatalan dan memulihkan kepastian jadwal.
D. Memberi tugas tambahan untuk memastikan murid tetap menyiapkan pertanyaan.

### 76. [p4-076 • PU • S.1 • MCMA]

Orang tua meminta melalui grup kelas penjelasan rinci tentang murid lain yang mendapat penyesuaian tugas. Guru perlu menjelaskan prinsip keadilan tanpa membuka informasi pribadi. Pilih respons yang tepat.

A. Menyampaikan diagnosis murid tanpa nama agar konteksnya jelas.
B. Menjelaskan bahwa dukungan disesuaikan dengan kebutuhan dan tujuan tetap diperiksa.
C. Mengakhiri percakapan dengan pernyataan bahwa keputusan tidak dapat ditanyakan.
D. Mengundang percakapan pribadi tentang kebutuhan anak penanya bila diperlukan.

### 77. [p4-077 • PU • S.2 • PG]

Seorang murid beberapa kali terlambat karena rute transportasi berubah. Guru kelas, wali kelas, dan petugas layanan sekolah masing-masing sudah menghubungi keluarga dengan permintaan berbeda. Koordinasi terbaik adalah ...

A. Meminta setiap pihak melanjutkan cara masing-masing agar pilihan dukungan banyak.
B. Menyepakati satu penghubung, pembagian peran, dan peninjauan dukungan bersama keluarga.
C. Menyerahkan seluruh masalah kepada keluarga sebelum menyusun dukungan.
D. Memusatkan semua keputusan pada guru kelas tanpa masukan pihak lain.

### 78. [p4-078 • PU • S.3 • Kategori]

Komunitas guru merencanakan kunjungan observasi kelas. Tujuannya belajar bagaimana pertanyaan guru membuka penalaran murid, bukan menilai pribadi pengajar. Nilai kesepakatan berikut.

1. Menyusun peringkat guru dari jumlah pertanyaan yang diajukan.
2. Mencatat contoh pertanyaan dan respons murid untuk dibahas bersama.
3. Meminta persetujuan penggunaan catatan dan menyepakati batas penyebarannya.

### 79. [p4-079 • PU • PF.1 • PG]

Pada jenjang dasar, guru ingin membangun tanggung jawab. Selama ini murid merapikan alat hanya ketika guru membawa daftar hadiah. Bukti hasil pendidikan yang lebih sesuai tujuan adalah ...

A. Murid mampu menyebutkan seluruh hadiah yang tersedia.
B. Murid cepat merapikan saat namanya akan diumumkan.
C. Murid selalu meminta guru memilih siapa yang harus merapikan.
D. Murid menjelaskan dampak tindakannya dan mengambil peran tanpa menunggu hadiah.

### 80. [p4-080 • PU • P.6 • MCMA]

Dalam refleksi asesmen, murid menandai tingkat keyakinan sebelum melihat umpan balik. Sebagian sangat yakin tetapi alasannya keliru; sebagian benar namun ragu. Pilih penggunaan data yang tepat.

A. Membahas selisih keyakinan dan bukti alasan untuk merencanakan belajar.
B. Menambahkan nilai hanya karena murid menyatakan sangat yakin.
C. Meminta murid menguji ulang alasan setelah revisi dan menilai keyakinannya kembali.
D. Membedakan ketepatan jawaban dari ketepatan penilaian diri saat memberi umpan balik.

## Kunci dan pembahasan

### 1. p4-001 — C

Pada SQL, AND didahulukan daripada OR. Murid perlu menghubungkan pengelompokan logika dengan kebutuhan, bukan sekadar menambah tanda kurung secara acak.

- A: Urutan membantu melihat hasil tetapi tidak menjelaskan pengelompokan kondisi.
- B: Data itu tidak membedakan dua pengelompokan kondisi.
- C: Kasus ini membedakan makna aktif AND (A OR B).
- D: Jumlah dapat menyamarkan baris yang salah lolos dan belum menjelaskan pengelompokan.

### 2. p4-002 — Tepat / Tidak tepat / Tepat

Kunci diagnosis ialah unit baris hasil gabungan. Dua sumber banyak dapat saling menggandakan, meskipun tiap kondisi JOIN benar.

- 1: Pasangan memperlihatkan perkalian dua relasi banyak.
- 2: Pergantian agregat tidak otomatis memperbaiki unit hitung.
- 3: Ringkasan dapat mencegah penggandaan fakta yang independen.

### 3. p4-003 — A

Perilaku pembagian bergantung pada tipe dan sistem yang dipakai. Stimulus telah menyatakan alat melakukan pembagian integer; diagnosis perlu memisahkan operasi dari format persen.

- A: Pertanyaan menargetkan prasyarat representasi operasi.
- B: Pertanyaan format masuk akal tetapi belum memeriksa operasi yang menghasilkan nol.
- C: Format dapat diuji kemudian, tetapi tipe operasi adalah prasyarat yang lebih langsung.
- D: Penyebut relevan pada laporan tetapi kasus 1/2 sudah menunjukkan persoalan tipe.

### 4. p4-004 — A, B, D

Murid perlu memahami nilai mana yang berubah saat baris luar berubah. Perbaikan sintaks dinilai dari hubungannya dengan kebutuhan per peserta.

- A: Data pembeda memperlihatkan apakah hasil benar-benar mengikuti peserta.
- B: Penelusuran menunjukkan apakah perhitungan bergantung pada peserta.
- C: Nama keluaran tidak membuat korelasi antarquery.
- D: Perbandingan memperlihatkan perubahan unit perhitungan.

### 5. p4-005 — D

Dukungan menargetkan kesiapan menalar struktur. Menambah kompleksitas query sebelum siklus dipahami tidak membantu kebutuhan yang ditemukan.

- A: Banyak anak berbeda dari siklus dan menambah beban representasi.
- B: Dukungan kode belum menargetkan pengenalan siklus pada struktur.
- C: Keberhasilan pada hierarki aman belum mengatasi kebutuhan yang ditemukan.
- D: Jejak mengungkap pengulangan dan kebutuhan menghentikannya.

### 6. p4-006 — Tepat / Tepat / Tepat

Tujuan unit bukan menghafal fungsi agregat. Bukti akhir harus menunjukkan murid memilih informasi yang tepat ketika pencilan memengaruhi laporan.

- 1: Data pembanding membantu menilai hubungan ciri data dan tujuan laporan.
- 2: Perbandingan menilai pilihan ringkasan terhadap kebutuhan.
- 3: Alasan menghubungkan teknik laporan dan tujuan pengguna.

### 7. p4-007 — B

Asesmen durabilitas memerlukan bukti setelah pemulihan. Kasus merujuk alat simulasi, bukan klaim bahwa setiap basis data selalu kehilangan commit pada listrik padam.

- A: Bukti ini belum menguji ketahanan setelah pemulihan.
- B: Penjelasan membedakan data sementara dan data yang bertahan.
- C: Pesan dan waktu belum membuktikan data bertahan melewati gangguan.
- D: Perbandingan buffer belum menguji ketahanan penyimpanan persisten.

### 8. p4-008 — A, C

Sumber lokal dipahami bersama aturan teknis pencarian. Simbol dalam kode tidak boleh diam-diam ditafsirkan sebagai pola lalu dianggap data lain cocok.

- A: Perbandingan menampakkan perbedaan makna simbol dalam data dan pola.
- B: Penghapusan mengubah sistem kode sumber tanpa kebutuhan.
- C: Aturan alat diperlukan untuk mempertahankan simbol literal.
- D: Banyak hasil dapat berasal dari pola yang tidak sesuai kebutuhan.

### 9. p4-009 — C

UNION menyelaraskan kolom menurut posisi. Tipe yang kompatibel tidak cukup membuktikan dua keluaran mempunyai arti yang selaras.

- A: Alias keluaran tidak menyelaraskan arti posisi kolom pada SELECT yang berbeda.
- B: Keberhasilan sintaks belum menjamin makna kolom sesuai.
- C: Pelacakan menghubungkan kompatibilitas tipe dan kesesuaian makna.
- D: Urutan tidak menukar kembali isi yang salah posisi.

### 10. p4-010 — Tepat / Tidak tepat / Tidak tepat

Dukungan menghubungkan makna data dengan operasi yang dibutuhkan. Nol awal adalah bagian kode ketika kode dipakai sebagai pengenal, bukan nilai hitung.

- 1: Kebutuhan operasi membedakan identitas teks dan kuantitas.
- 2: Bentuk digit tidak selalu menunjukkan kuantitas.
- 3: Kecepatan tidak menunjukkan alasan pemilihan representasi.

### 11. p4-011 — A

Alias dapat mewakili dua peran logis dari sumber yang sama. Representasi perlu menjelaskan pasangan baris, bukan membuat duplikasi penyimpanan.

- A: Peran membantu membedakan baris yang dibandingkan.
- B: Duplikasi penyimpanan dapat memperkuat anggapan bahwa satu tabel tidak boleh dipakai dua peran.
- C: Daftar memudahkan pembacaan tetapi belum menjelaskan dua peran dari sumber yang sama.
- D: Penggantian alias saja belum memberi makna pasangan baris.

### 12. p4-012 — B, C, D

Alat harus ditafsirkan menurut bagian proses yang diukur. Waktu respons akhir tidak identik dengan waktu mesin basis data.

- A: Bukti awal belum menunjukkan waktu habis pada eksekusi query.
- B: Pemisahan mengungkap lokasi biaya yang mungkin berbeda.
- C: Dua angka harus mengukur tahap yang sebanding.
- D: Kontrol membantu membedakan penyebab keterlambatan.

### 13. p4-013 — D

Perbaikan praktik perlu mengajarkan bahwa simpulan dibatasi sumber datanya. Catatan sukses saja tidak mewakili seluruh permintaan.

- A: Variasi belum memperbaiki cakupan permintaan yang tidak tercatat.
- B: Bentuk grafik tidak memperbaiki cakupan bukti keandalan.
- C: Skor dapat naik tanpa pemahaman batas populasi log.
- D: Perubahan memungkinkan pemeriksaan alasan batas simpulan murid.

### 14. p4-014 — Tepat / Tepat / Tidak tepat

Murid perlu memahami waktu evaluasi default dan keadaan object. Contoh ini tidak digeneralisasi sebagai perilaku semua bahasa.

- 1: Jejak memperlihatkan keadaan yang bertahan antar-pemanggilan.
- 2: Perbandingan menampakkan waktu pembuatan object.
- 3: Pernyataan itu bertentangan dengan kasus Python yang diberikan.

### 15. p4-015 — B

Asesmen perlu menghadirkan beberapa item dengan kunci sama. Stabil berarti mempertahankan urutan relatif item yang setara menurut pembanding.

- A: Kasus tanpa nilai seri tidak membedakan sifat stabil.
- B: Item seri menjadi kasus pembeda sifat stabil.
- C: Kecepatan bukan bukti pemertahanan urutan relatif item seri.
- D: Arah urutan relevan tetapi belum membuktikan perlakuan terhadap nilai seri.

### 16. p4-016 — A, C

Pengelolaan resource perlu mencakup alur gagal. Mekanisme seperti context manager atau finally dipilih sesuai bahasa dan jenis resource.

- A: Dua jalur menguji jaminan pelepasan, bukan hasil normal saja.
- B: Pesan yang hilang tidak menutup resource.
- C: Perbandingan menunjukkan kebutuhan cleanup saat alur terputus.
- D: Banyak file tidak otomatis menunjukkan resource dilepas.

### 17. p4-017 — C

Serialisasi data tidak otomatis menyimpan method atau seluruh identitas runtime. Bukti akhir harus menilai penjelasan batas representasi tersebut.

- A: Struktur JSON penting tetapi belum menunjukkan batas serialisasi object.
- B: Ukuran file bukan bukti langsung data dan perilaku yang bertahan.
- C: Perbandingan terhadap tujuan harus menjelaskan data dan perilaku yang perlu dibangun kembali.
- D: Keberhasilan field belum menguji pemahaman perilaku atau identitas runtime.

### 18. p4-018 — Tidak tepat / Tidak tepat / Tepat

Guru perlu memisahkan konsep identitas dari kesetaraan nilai sebelum koleksi memakai pembanding. Perilaku operator tidak boleh diasumsikan sama pada semua bahasa.

- 1: Dua object berbeda dapat memiliki isi setara.
- 2: Atribut setara masih dapat dimiliki dua object yang berbeda.
- 3: Aturan perlu jelas agar hasil perbandingan dapat ditafsirkan.

### 19. p4-019 — A

Diskusi bermakna menelusuri bukti sebelum menyalahkan orang. Operasi tambah yang terdiri dari baca dan tulis dapat saling menimpa jika tidak dikoordinasikan.

- A: Jejak bersama menargetkan penyebab teknis dan memulihkan diskusi.
- B: Frekuensi keberhasilan belum menjelaskan pembaruan yang saling menimpa.
- C: Catatan hasil berguna tetapi belum menjelaskan urutan operasi atau memulihkan diskusi yang saling menyalahkan.
- D: Pembagian peran belum menjelaskan risiko operasi pada counter bersama.

### 20. p4-020 — B, D

Hash membantu mempersempit pencarian, tetapi kesamaan hash saja bukan bukti kesamaan nilai. Fungsi hash buatan dipakai agar collision mudah diperiksa.

- A: Warna tidak menjelaskan peran hash.
- B: Contoh sederhana menunjukkan kemungkinan collision.
- C: Collision dapat ditangani oleh struktur yang dirancang benar.
- D: Penelusuran membedakan penyaringan kandidat dan penentuan kesamaan.

### 21. p4-021 — B

Atlas lokal tetap dipakai sebagai sumber belajar. Pemeriksaan area potong dan jarak pemisah membantu murid menjelaskan masuknya warna tetangga, bukan sekadar menghilangkan gejalanya.

- A: Contoh pembanding berguna, tetapi belum menelusuri batas potongan pada atlas sumber.
- B: Uji pada atlas lokal menghubungkan artefak dengan representasi sumber yang digunakan.
- C: Ukuran lebih kecil tidak memastikan area potong dan batas sampling benar.
- D: Tangkapan layar tidak cukup menjelaskan asal warna tetangga.

### 22. p4-022 — Tepat / Tidak tepat / Tepat

Kompresi lossy dapat membuang informasi. Ekspor ulang dapat menambah artefak, tetapi besar perubahan tidak dapat digeneralisasi tanpa memperhatikan encoder dan pengaturannya.

- 1: Perbandingan membantu mengisolasi pengaruh ekspor berulang.
- 2: Informasi yang telah dibuang tidak pulih hanya dengan decoding.
- 3: Kesimpulan terikat bukti dan tidak menganggap semua encoder berperilaku identik.

### 23. p4-023 — D

Diagnosis memeriksa resolusi impor terlebih dahulu. File lokal yang bernama sama dapat membuat impor menunjuk file tersebut; mengganti nama perlu diikuti pengecekan ulang hasil impor.

- A: Versi bisa relevan, tetapi petunjuk perubahan nama file lebih langsung.
- B: Pustaka standar belum terbukti hilang dan instalasi tidak mengatasi penamaan lokal.
- C: Pelengkapan tidak memastikan modul yang dimuat saat eksekusi.
- D: Lokasi impor menguji dugaan file lokal menutupi modul yang dimaksud.

### 24. p4-024 — A, C

Diferensiasi menargetkan kebutuhan yang teramati: representasi nilai dan operasi. Contoh konversi memakai input valid; penanganan input tidak valid dapat menyusul setelah konsep dasarnya jelas.

- A: Dukungan menghubungkan representasi input dengan operasi.
- B: Bukti belum menunjukkan masalah pada konsep penjumlahan.
- C: Contoh berpasangan menargetkan perbedaan operasi yang belum dipahami.
- D: Antarmuka baru dapat menutupi kesenjangan konsep tipe.

### 25. p4-025 — A

Perbaikan bertolak dari dugaan bahwa waktu evaluasi belum terlihat. Jejak harus sesuai perilaku generator yang dipakai, lalu prediksi pada contoh baru menguji apakah murid membedakan pembuatan dan konsumsi.

- A: Model waktu menargetkan konsep dan tugas setara memeriksa transfer.
- B: Hasil dapat berubah karena ingatan contoh tanpa pemahaman waktu evaluasi.
- C: Urutan baru belum menguji apakah bantuan memperbaiki konsep yang bermasalah.
- D: Pendapat bermanfaat untuk refleksi tetapi belum membuktikan pemahaman waktu evaluasi.

### 26. p4-026 — Tepat / Tidak tepat / Tidak tepat

Tujuan pendidikan kejuruan mencakup keputusan yang dapat dipertanggungjawabkan. Representasi vektor sesuai untuk banyak logo berskala, tetapi pilihan akhir tetap mempertimbangkan bentuk karya dan kebutuhan pengguna.

- 1: Uji menunjukkan konsekuensi representasi bagi penggunaan nyata.
- 2: Bukti ukuran kecil belum menunjukkan kualitas pada skala besar.
- 3: Ukuran file saja tidak menunjukkan kecocokan kualitas dan kebutuhan pengguna.

### 27. p4-027 — C

Cookie yang terkirim membuktikan konteks session, bukan otomatis persetujuan terhadap tindakan. Guru dapat menelusuri validasi anti-CSRF yang sesuai rancangan server, tanpa menganggap POST atau HttpOnly saja cukup.

- A: POST saja tidak membuktikan asal dan kehendak pengguna.
- B: Perlindungan pembacaan cookie belum mencegah browser mengirimkannya.
- C: Perbandingan membongkar penyamaan identitas session dan maksud pengguna.
- D: Langkah ini menghindari session aktif tanpa menjelaskan kelemahan proses.

### 28. p4-028 — B, D

Dukungan memisahkan pengaruh ukuran minimum dan pemenggalan teks. Setelah mampu menjelaskan hasil uji kecil, murid menerapkan keputusan ke halaman semula tanpa bergantung pada template.

- A: Template menyembunyikan hubungan antara isi dan batas ukuran.
- B: Contoh terkontrol memperlihatkan pengaruh isi pada ukuran item.
- C: Data yang dipermudah menutupi kebutuhan menangani isi nyata.
- D: Perubahan bertahap membantu membedakan dua penyebab overflow.

### 29. p4-029 — B

Diagnosis terikat tuntutan materi: parsing dan validasi perlu aturan format yang jelas. Koma tidak otomatis dipahami semua fungsi konversi; guru perlu memeriksa representasi sebelum memperluas aturan input.

- A: Kemampuan menghitung sudah ditunjukkan dan bukan petunjuk utama masalah.
- B: Perbedaan ini diperlukan agar masukan ditafsirkan sesuai konteks.
- C: Pesan berguna pada tahap berikut, tetapi belum memetakan pemahaman representasi.
- D: Keterampilan itu tidak menjelaskan kegagalan penafsiran masukan.

### 30. p4-030 — Tidak tepat / Tepat / Tepat

Target perilaku dinilai dengan menjalankan urutan navigasi. Mengganti entri saat ini dapat sesuai untuk perubahan ketikan pada rancangan ini; menambah entri tetap berguna pada perpindahan yang memang perlu ditelusuri kembali.

- 1: Screenshot tidak menunjukkan urutan history saat Back digunakan.
- 2: Bukti sesuai perilaku yang diminta, bukan hanya tampilan.
- 3: Penjelasan menunjukkan hubungan keputusan history dengan tujuan navigasi.

### 31. p4-031 — D

Dalam konteks form yang sama, name mengelompokkan radio. Guru menggunakan prediksi dan uji kelompok, sehingga murid memahami mengapa id yang unik belum menjadikan kedua pertanyaan independen.

- A: Keunikan id sudah terpenuhi dan tidak menentukan kelompok radio.
- B: Pergantian menghindari pemahaman pengelompokan radio.
- C: Pemisahan dapat menghilangkan gejala tanpa menjelaskan mekanisme.
- D: Eksperimen menghubungkan atribut kelompok dengan perilaku pilihan tunggal.

### 32. p4-032 — A, C

Kurikulum dapat memakai batas fasilitas sebagai masalah desain. Polling bisa memadai dalam kasus ini; kasus dengan tuntutan lain dipakai untuk menguji penalaran, tanpa menyatakan satu teknik selalu unggul.

- A: Perbandingan menilai kesesuaian solusi dengan batas kebutuhan.
- B: Kebaruan tidak otomatis memenuhi sumber daya dan tujuan unit.
- C: Transfer alasan lebih sesuai tujuan daripada satu teknik wajib.
- D: Tujuan pengambilan keputusan hilang padahal masih dapat dipelajari.

### 33. p4-033 — A

Ruang komponen ditentukan pula oleh induknya. Diagram ukuran membantu murid menentukan aturan tata letak yang sesuai tanpa menyamakan viewport dengan lebar panel.

- A: Representasi membedakan ruang layar dengan ruang yang tersedia bagi komponen.
- B: Perbedaan resolusi belum memperlihatkan perubahan ruang induk dalam layar yang sama.
- C: Uji font belum menjelaskan bahwa ruang induk dapat berubah pada viewport tetap.
- D: Daftar layar tidak menjelaskan relasi ukuran induk dan komponen.

### 34. p4-034 — Tepat / Tidak tepat / Tepat

Pada router dalam soal, urutan pencocokan menentukan hasil. Asesmen perlu jalur yang membedakan aturan, bukan hanya jalur yang memang cocok dengan parameter id.

- 1: Jejak mengaitkan hasil dengan kebijakan router yang dinyatakan.
- 2: Satu jalur yang berhasil tidak menguji benturan dengan jalur statis.
- 3: Keduanya menguji pemilihan rute serta validitas nilai yang diteruskan.

### 35. p4-035 — C

Scaffolding bertolak dari pengetahuan map yang sudah ada. Menunggu Promise.all pada contoh yang semuanya berhasil menghasilkan array nilai; kegagalan Promise menjadi bahasan lanjutan, bukan asumsi tersembunyi untuk soal ini.

- A: Bukti menunjukkan prasyarat array sudah dikuasai.
- B: Penggantian menghindari konsep yang justru perlu dipelajari.
- C: Perbandingan menargetkan peralihan dari Promise ke nilai hasil.
- D: Jeda tidak mengubah array Promise menjadi array nilai hasil.

### 36. p4-036 — B, D

Tanggung jawab hasil kerja mencakup akses interaksi. Bukti perlu menunjukkan alur fokus ketika dialog aktif dan setelah ditutup, bukan hanya kemiripan tampilan.

- A: Warna saja tidak menunjukkan akses interaksi keyboard.
- B: Uji menilai tanggung jawab kegunaan produk bagi pengguna.
- C: Jumlah kode tidak menunjukkan apakah fokus dikelola.
- D: Pemulihan fokus membantu pengguna melanjutkan tugas semula.

### 37. p4-037 — B

Teknologi cache harus dinilai menurut sifat data. Uji dua session beserta kebijakan cache mengungkap bahwa autentikasi backend saja tidak cukup jika response personal dibagikan oleh lapisan cache.

- A: Warna membantu melihat gejala tetapi belum menguji kebijakan cache.
- B: Uji menghubungkan kebocoran dengan penyimpanan response personal.
- C: Satu akun tidak menguji pemisahan response antar pengguna.
- D: URL baru tidak menyelesaikan kebijakan cache personal yang keliru.

### 38. p4-038 — Tepat / Tepat / Tidak tepat

Perbaikan berbasis bukti membedakan berhenti menunggu di klien dan pembatalan operasi bisnis. Efek pembatalan bergantung rancangan server; pada log yang diberikan, transaksi sudah tersimpan.

- 1: Jejak dua sisi menargetkan miskonsepsi yang teramati.
- 2: Kasus pembanding menguji penalaran terhadap bukti baru.
- 3: Tampilan klien tidak membuktikan perubahan pemahaman atau pembatalan transaksi.

### 39. p4-039 — D

Guru SMK menilai keputusan teknis beserta dampaknya. Akses dipilih sesuai kebutuhan nyata; picker yang tersedia harus diuji terhadap tugas memilih foto sebelum meminta akses lebih luas.

- A: Keberhasilan menampilkan foto belum menilai proporsionalitas akses pengguna.
- B: Keberhasilan fungsi saja belum menilai proporsionalitas akses.
- C: Persetujuan luas belum memberi alasan kebutuhan teknis akses seluruh galeri.
- D: Kriteria menghubungkan kemampuan teknis dengan tanggung jawab kerja.

### 40. p4-040 — A, C

UDL mengarahkan pengurangan hambatan yang dapat diperkirakan. Tata letak harus mengakomodasi isi dan skala font sambil menjaga makna serta akses kontrol.

- A: Uji menargetkan hambatan akses tanpa menurunkan tujuan.
- B: Penyesuaian dipindahkan kepada murid meskipun antarmuka dapat diperbaiki.
- C: Akses perlu diuji pada keseluruhan tugas, bukan ukuran huruf saja.
- D: Ikon belum tentu mengatasi hambatan pemahaman tanpa dukungan makna.

### 41. p4-041 — A

Asesmen memisahkan instalasi bersih dari pembaruan. Kecocokan ID saja belum cukup pada kebijakan platform dalam soal; penjelasan perlu memakai bukti identitas penandatangan tanpa membagikan kunci privat.

- A: Bukti menilai pemahaman syarat pembaruan yang dinyatakan.
- B: Tampilan identitas tidak membuktikan kecocokan penandatangan.
- C: Instalasi bersih belum membuktikan pembaruan atas versi lama.
- D: Urutan ekspor belum menjelaskan penyebab pembaruan ditolak.

### 42. p4-042 — Tepat / Tepat / Tepat

Orientasi dapat ditentukan melalui metadata tanpa mengubah urutan piksel asli. Perbandingan terkontrol membantu murid menjelaskan perbedaan penampil, bukan menganggap file berubah sendiri.

- 1: Prediksi lalu pemeriksaan menghubungkan dugaan dengan bukti representasi.
- 2: Perbandingan membedakan data gambar dari petunjuk penampilannya.
- 3: Uji membantu menghubungkan transformasi data dengan hasil tampilan.

### 43. p4-043 — C

Diagnosis mengikuti tuntutan materi. Murid perlu membedakan identitas yang stabil dari posisi yang dapat berubah; koordinat yang benar tetap dapat milik jari yang berbeda.

- A: Menangkap event awal belum menunjukkan pemahaman identitas ketika daftar berubah.
- B: Perhitungan jarak belum diperlukan untuk membedakan identitas jari.
- C: Konsep ini menentukan kesinambungan pelacakan ketika daftar berubah.
- D: Ukuran layar tidak menunjukkan pemahaman identitas event.

### 44. p4-044 — B, D

Checksum mendukung pemeriksaan integritas terhadap manifest tepercaya; perbandingan byte dengan salinan acuan merupakan bukti langsung kesamaan isi. Keberadaan file atau panjangnya saja tidak cukup. Integritas isi juga tidak menjamin materi aman atau layak secara pedagogis.

- A: Keberadaan dan nama tidak menguji isi byte file.
- B: Kecocokan mendukung integritas isi terhadap manifest tepercaya.
- C: Panjang sama masih mungkin memuat isi yang berbeda.
- D: Pembandingan isi secara langsung mendukung kesesuaian dengan acuan.

### 45. p4-045 — B

Jejak stack membantu murid menjelaskan perlunya mengakhiri atau mengganti layar tertentu sesuai rancangan alur. Guru tidak perlu menetapkan satu API untuk semua platform.

- A: Penyembunyian menghindari gejala tanpa menjelaskan susunan stack.
- B: Model memperlihatkan layar yang masih tersimpan untuk dikunjungi kembali.
- C: Warna tidak menentukan layar yang tersisa pada stack.
- D: Pengulangan tidak memberi model penyebab transisi.

### 46. p4-046 — Tepat / Tidak tepat / Tepat

Sumber lokal membantu memahami makna dan susunan pesan. Template dirancang menurut bahasa yang digunakan dan diverifikasi bersama penutur, bukan dipaksa mengikuti urutan satu bahasa.

- 1: Sumber lokal menjadi bukti untuk keputusan format pesan.
- 2: Urutan yang sama justru bertentangan dengan bukti narasumber.
- 3: Penjelasan menunjukkan pemanfaatan pengetahuan lokal, bukan tempelan nama daerah.

### 47. p4-047 — D

Adaptasi kurikulum menjaga tujuan dan memperbaiki tuntutan yang tidak cocok dengan mekanisme yang tersedia. Pekerjaan latar berkala tidak diperlakukan sebagai timer presisi pada platform yang dinyatakan.

- A: Satu keberhasilan tidak menunjukkan kecocokan mekanisme dengan kebutuhan jaminan waktu.
- B: Interval lebih pendek belum menyelesaikan ketidakcocokan jaminan jadwal.
- C: Tujuan pemilihan mekanisme hilang meskipun masih relevan.
- D: Kasus sesuai batas platform sambil mempertahankan penalaran rancangan.

### 48. p4-048 — A, C, D

Alat pengembangan dinilai menurut tujuan dan risikonya. Guru memeriksa rantai kepercayaan yang sesuai lingkungan; mematikan verifikasi bukan bukti bahwa masalah sudah terselesaikan dengan aman.

- A: Pemeriksaan menargetkan penyebab kegagalan kepercayaan.
- B: Enkripsi tanpa verifikasi identitas masih dapat terhubung ke pihak yang keliru.
- C: Batas lingkungan mencegah jalan pintas uji terbawa ke produk.
- D: Catatan membantu menilai pemahaman risiko dan tujuan penggunaan alat.

### 49. p4-049 — A

Penguasaan materi menuntut pembacaan definisi keluaran sensor. Pada API dalam soal, gravitasi termasuk dalam bacaan; keadaan diam tidak berarti setiap komponen bernilai nol.

- A: Penjelasan sesuai definisi API dan menargetkan kesimpulan murid.
- B: Kalibrasi dapat menjadi teknik tersendiri, tetapi tidak menjelaskan bahwa gravitasi memang termasuk keluaran.
- C: Pergantian tampilan tidak memperbaiki penafsiran besaran sensor.
- D: Perbandingan antargawai belum menjelaskan definisi bacaan API yang digunakan.

### 50. p4-050 — Tepat / Tidak tepat / Tidak tepat

Pembelajaran menggembirakan bertumpu pada tantangan yang relevan dan dapat diakses. Pilihan input tetap harus menghasilkan bukti penjelasan aturan interaksi yang menjadi tujuan.

- 1: Alternatif menjaga tujuan dan mengurangi hambatan perangkat.
- 2: Ketersediaan fitur tidak menunjukkan perkembangan penjelasan aturan interaksi.
- 3: Peringkat itu mengukur kepemilikan fitur, bukan tujuan pembelajaran.

### 51. p4-051 — C

Grafik menunjukkan keterkaitan, belum memastikan sebab. Guru membantu murid mempertimbangkan penjelasan alternatif dan merancang bukti pembeda tanpa menolak manfaat perpustakaan.

- A: Manfaat membaca tidak menguji hubungan sebab-akibat pada data grafik.
- B: Perhitungan dapat benar tanpa memperbaiki kesimpulan sebab-akibat.
- C: Kegiatan membangun batas inferensi dari data hubungan.
- D: Contoh pendukung saja belum membedakan hubungan dan penyebab.

### 52. p4-052 — A, B, D

Diferensiasi dan TaRL menggunakan informasi kemampuan yang relevan, bukan angka total semata. Pengelompokan serta dukungan bersifat sementara dan diperiksa ulang.

- A: Pemisahan memberi dasar yang lebih tepat untuk memilih dukungan.
- B: Dukungan menargetkan jenis kesulitan masing-masing.
- C: Data awal tidak cukup untuk mengunci dukungan dan perkembangan murid.
- D: Asesmen lanjutan memungkinkan penyesuaian dukungan berdasarkan perkembangan.

### 53. p4-053 — B

Pembelajaran berkesadaran membutuhkan rasa aman. Tujuan mengenali kondisi diri dapat dicapai melalui refleksi pribadi; dukungan diberikan tanpa memaksa murid membagikan pengalaman sensitif.

- A: Daftar membantu penamaan, tetapi tetap mewajibkan pengungkapan publik yang menjadi hambatan.
- B: Pilihan menjaga tujuan kesadaran diri tanpa memaksa pengungkapan publik.
- C: Keengganan berbagi emosi tidak membuktikan ketidaksiapan berdiskusi.
- D: Kesiapan belajar tidak harus dibuktikan lewat pengungkapan emosi kepada kelas.

### 54. p4-054 — Tidak tepat / Tepat / Tepat

Urutan hasil tidak otomatis menjadi penilaian mutu bukti. Guru mengajarkan pemeriksaan tujuan publikasi, kepengarangan, dan dukungan isi, bukan sekadar memilih alat lain.

- 1: Penggantian belum mengatasi cara murid menafsirkan urutan.
- 2: Perbandingan membantu memisahkan posisi tampilan dan mutu informasi.
- 3: Alasan berbasis isi menjadi bukti literasi digital.

### 55. p4-055 — A

Sumber lingkungan dipakai karena memberi informasi yang diperlukan untuk tujuan belajar. Observasi terarah dan keterangan kondisi jalur melengkapi peta; murid tetap harus menjelaskan alasan keputusan, bukan sekadar mengikuti rute populer.

- A: Lingkungan menjadi sumber bukti untuk menilai keterpakaian rute.
- B: Kemudahan menyamakan bahan tidak mengatasi ketidaklengkapan informasi yang relevan.
- C: Kebiasaan warga perlu dipahami bersama waktu dan kebutuhan penggunaan.
- D: Panjang saja tidak menilai kepadatan dan akses jalur yang menjadi bukti kasus.

### 56. p4-056 — A, C

Keputusan asesmen harus menelusuri bukti terhadap tujuan. Rata-rata kelas dapat menyembunyikan kebutuhan kelompok; tindak lanjut memerlukan dukungan spesifik dan bukti baru.

- A: Bukti individu diperlukan untuk menegaskan kebutuhan tindak lanjut.
- B: Rata-rata tidak memastikan capaian setiap murid pada tujuan.
- C: Tindak lanjut sesuai kesulitan yang teramati.
- D: Perubahan batas tidak memperbaiki pemahaman yang belum tampak.

### 57. p4-057 — A

Integritas dan penghormatan kepada murid mencakup penggunaan karya sesuai tujuan dan persetujuan. Menghapus nama saja belum selalu melindungi identitas atau kenyamanan pemilik kisah.

- A: Langkah menghormati kepemilikan karya dan batas informasi pribadi.
- B: Isi kisah masih dapat mengungkap identitas atau hal sensitif.
- C: Perwakilan kelas tidak menggantikan persetujuan pemilik karya.
- D: Pemberian tugas tidak otomatis memberi izin publikasi pengalaman pribadi.

### 58. p4-058 — Tepat / Tidak tepat / Tepat

Refleksi guru menguji keyakinan pribadi terhadap bukti. Masukan murid dan sampel koreksi menunjukkan kebutuhan menghubungkan umpan balik dengan langkah perbaikan; hasil revisi menjadi dasar penilaian berikutnya.

- 1: Guru menguji penilaian diri memakai bukti yang relevan.
- 2: Penandaan lokasi salah belum menunjukkan penjelasan penalaran.
- 3: Percobaan memberi dasar belajar dari dampak perubahan praktik.

### 59. p4-059 — C

Komitmen pada kebiasaan belajar diwujudkan melalui dukungan dan tanggung jawab yang konsisten. Penyesuaian memiliki rencana serta pemantauan; prinsipnya dapat dijelaskan tanpa membocorkan keadaan pribadi murid.

- A: Rincian pribadi tidak diperlukan untuk menjelaskan prinsip dukungan.
- B: Pembebasan menghilangkan kesempatan membangun tanggung jawab belajar.
- C: Dukungan tetap menuntut komitmen dan memantau pembentukan kebiasaan.
- D: Kesamaan tenggat mengabaikan hambatan yang sudah diketahui.

### 60. p4-060 — B, D

Komunikasi empatik tidak menafsirkan diam secara sepihak. Guru menyediakan cara bertanya yang aman dan mengecek makna melalui respons nyata, bukan menuntut keberanian tampil terlebih dahulu.

- A: Bukti percakapan menunjukkan makna diam tidak sama dengan paham.
- B: Bahasa dan kanal mengurangi hambatan menyampaikan kebingungan.
- C: Tekanan publik tidak menargetkan rasa takut yang diungkapkan.
- D: Cek makna memberi bukti sekaligus membangun komunikasi aman.

### 61. p4-061 — B

Kolaborasi berorientasi pembelajaran membutuhkan peran yang jelas dan penelaahan bukti bersama. Kesepakatan dapat diubah setelah melihat kebutuhan murid, bukan sekadar membagi jatah berbicara.

- A: Pemisahan belum menyelesaikan koordinasi untuk tujuan bersama.
- B: Peran saling melengkapi dan terhubung pada keputusan pembelajaran.
- C: Cara itu belum memanfaatkan kontribusi dua guru secara terencana.
- D: Kesetaraan waktu bicara tidak memastikan fungsi dan bukti terkoordinasi.

### 62. p4-062 — Tepat / Tepat / Tidak tepat

Keaktifan komunitas tidak mensyaratkan praktik sempurna. Guru dapat membawa pertanyaan berbukti dan membantu memperbaiki ruang partisipasi, sambil tetap mendengar kontribusi anggota lain.

- 1: Kontribusi konkret membuka percakapan yang berorientasi praktik.
- 2: Usulan memperluas partisipasi dan pembelajaran komunitas.
- 3: Komunitas juga menjadi tempat belajar dari kesulitan yang terurai.

### 63. p4-063 — D

Pemahaman tujuan pendidikan memandu pilihan isi dan bukti hasil. Keterampilan alat menjadi sarana menuju kemandirian serta penilaian informasi, sehingga perpindahan platform tidak mengganti tujuan utama.

- A: Panduan membantu akses tetapi prosedur alat belum mewakili tujuan pendidikan.
- B: Penundaan menghilangkan kesempatan mencapai tujuan yang dapat berjalan lintas alat.
- C: Kecepatan operasi belum menunjukkan pertimbangan sumber dan pengelolaan belajar.
- D: Prioritas menjaga tujuan pendidikan sambil menyediakan dukungan operasional.

### 64. p4-064 — A, C

Pemetaan kebutuhan perlu mengikuti tuntutan isi: inferensi menghubungkan petunjuk, bukan hanya melafalkan kata. Guru memeriksa cara murid membangun hubungan tanpa langsung memberi label kemampuan umum.

- A: Respons mengungkap kesiapan mengintegrasikan bukti.
- B: Kelancaran sudah tampak dan tidak cukup menjelaskan kesulitan inferensi.
- C: Makna penghubung bisa menjadi prasyarat hubungan yang perlu dipetakan.
- D: Jumlah buku tidak menunjukkan prasyarat inferensi murid.

### 65. p4-065 — A

Adaptasi kurikulum menggunakan kebutuhan murid untuk mengatur kedalaman, waktu, dan bukti. Tujuan evaluasi tetap dijaga; kegiatan prosedural tidak harus diulang dengan porsi sama jika prasyaratnya sudah kuat.

- A: Adaptasi memakai capaian awal untuk menjaga tuntutan tujuan akhir.
- B: Urutan buku belum mempertimbangkan kebutuhan yang teramati.
- C: Pergantian menurunkan tuntutan yang justru belum tercapai.
- D: Jumlah kegiatan tidak memastikan latihan membandingkan penjelasan.

### 66. p4-066 — Tidak tepat / Tepat / Tepat

Perbaikan praktik perlu data keterlaksanaan, bukan hasil akhir saja. Rancangan yang tidak dijalankan sesuai rencana belum dapat dinilai dampaknya dengan tegas; uji berikut tetap perlu bukti hasil dan keterbandingan tugas.

- 1: Rancangan belum terlaksana konsisten sehingga kesimpulan itu terlalu jauh.
- 2: Data proses membantu menafsirkan hasil intervensi.
- 3: Langkah memisahkan kelemahan pelaksanaan dari dugaan kelemahan rancangan.

### 67. p4-067 — C

Transfer memerlukan pengenalan ciri yang relevan, bukan hanya ingatan contoh. Guru dapat menyediakan informasi bahan yang diperlukan agar kesulitan berasal dari penalaran, bukan menebak isi kemasan.

- A: Kerapian tidak mengungkap cara menerapkan prinsip pada kasus baru.
- B: Pengulangan terbatas belum memberi kesempatan menguji batas prinsip.
- C: Kegiatan menguji penggunaan prinsip pada variasi yang relevan.
- D: Kecepatan label bukan bukti transfer pemilahan.

### 68. p4-068 — A, B, D

Diferensiasi menyediakan dukungan dan tantangan berdasarkan bukti. Scaffolding dikurangi saat murid mampu melanjutkan; tugas lanjutan tetap terkait tujuan, bukan sekadar tambahan jumlah pekerjaan.

- A: Dukungan sementara membantu kemandirian sesuai kesiapan.
- B: Scaffolding menargetkan hambatan tanpa mengubah tujuan bersama.
- C: Peran tetap dapat mengabaikan tantangan belajarnya sendiri.
- D: Tantangan lanjutan menjaga perkembangan murid dengan kesiapan lebih tinggi.

### 69. p4-069 — B

Menggembirakan tidak harus berarti kompetisi poin. Pilihan tantangan dan refleksi memberi ruang mencoba secara aman, sedangkan keberhasilan dibaca sebagai perkembangan strategi terhadap tujuan.

- A: Perubahan tetap mengarahkan perhatian pada perolehan poin.
- B: Rancangan menghubungkan rasa mampu dengan proses dan tujuan belajar.
- C: Tuntutan seragam dapat menghilangkan tantangan yang terdukung.
- D: Kecepatan pergantian belum menunjukkan pertimbangan strategi yang tepat.

### 70. p4-070 — Tepat / Tidak tepat / Tepat

TPACK menghubungkan pilihan fitur dengan materi dan pedagogi. Penilaian manfaat teknologi memerlukan bukti kualitas argumentasi; label tingkat SAMR atau banyaknya aktivitas digital saja tidak cukup.

- 1: Kriteria ini sesuai tujuan penalaran yang ingin didukung alat.
- 2: Perpindahan media tidak otomatis memperbaiki kualitas belajar.
- 3: Fitur anotasi diarahkan untuk mendukung proses argumentasi.

### 71. p4-071 — D

Sumber lingkungan dipilih karena memberi bukti yang relevan, bukan sekadar dekorasi konteks. Perspektif pembuat iklan dan penerima pesan perlu dibedakan saat menafsirkan pengaruhnya.

- A: Pergantian nama belum memanfaatkan bukti dari lingkungan.
- B: Peniruan tampilan tidak menjawab tujuan analisis pengaruh.
- C: Pandangan pemilik saja belum mewakili penerimaan warga.
- D: Bukti lokal dipakai untuk menguji hubungan pesan dan penerimaan.

### 72. p4-072 — A, C

Asesmen memerlukan konsistensi sekaligus kesesuaian konstruk. Rubrik dapat reliabel untuk aspek tampilan tetapi lemah untuk argumentasi; perubahan perlu menyasar kriteria, lalu menyamakan pemaknaannya.

- A: Reliabilitas tidak menggantikan bukti validitas terhadap tujuan.
- B: Skor dapat konsisten mengukur aspek yang kurang relevan.
- C: Kriteria tersebut lebih mewakili kualitas argumentasi yang dituju.
- D: Jumlah penilai tidak memperbaiki isi kriteria yang keliru.

### 73. p4-073 — A

Etika menuntut penilaian berbukti dan komunikasi yang menjaga martabat. Kemiripan memicu pemeriksaan yang adil, bukan vonis ataupun pengabaian; keputusan mengikuti bukti dan aturan yang berlaku.

- A: Klarifikasi menjaga keadilan dan mengumpulkan bukti yang belum tersedia.
- B: Dugaan belum cukup untuk pengumuman yang dapat merugikan murid.
- C: Rata-rata tidak menyelesaikan kejelasan proses dan keadilan keputusan.
- D: Kemungkinan wajar perlu diperiksa, bukan langsung dipastikan.

### 74. p4-074 — Tepat / Tepat / Tidak tepat

Growth mindset guru mencakup kemauan menguji penjelasan keberhasilan. Capaian tetap dihargai, sementara tugas transfer memberi informasi untuk memperbaiki praktik berikutnya.

- 1: Tugas baru membantu menafsirkan kedalaman keberhasilan awal.
- 2: Refleksi terbuka mengakui hal yang belum dibuktikan.
- 3: Menelaah bukti untuk perbaikan tidak meniadakan penghargaan pada usaha.

### 75. p4-075 — C

Komitmen membangun kebiasaan belajar tampak pada tindakan yang konsisten. Guru memperbaiki janji yang belum terpenuhi dan memberi kepastian agar persiapan murid memiliki tindak lanjut.

- A: Kemandirian belum dibangun melalui dukungan yang dijanjikan.
- B: Tambahan waktu belum memulihkan kepastian kebiasaan.
- C: Keteladanan konsisten memulihkan dasar kebiasaan belajar.
- D: Tambahan tugas tidak menyelesaikan ketidakpastian dukungan guru.

### 76. p4-076 — B, D

Komunikasi inklusif menjelaskan prinsip dan mengecek pemahaman. Guru menjaga batas data murid lain, sambil tetap membuka ruang dialog tentang kebutuhan anak masing-masing.

- A: Dalam grup kecil identitas tetap dapat mudah dikenali.
- B: Penjelasan prinsip menjawab kekhawatiran tanpa membuka data pribadi.
- C: Respons menutup komunikasi dan tidak membantu pemahaman.
- D: Percakapan diarahkan ke informasi yang menjadi kewenangan orang tua tersebut.

### 77. p4-077 — B

Kolaborasi efektif mengurangi komunikasi yang tumpang tindih. Keluarga dilibatkan untuk memeriksa kebutuhan, sedangkan peran dan evaluasi dukungan disepakati bersama.

- A: Permintaan yang berbeda dapat membebani keluarga dan saling bertentangan.
- B: Koordinasi memperjelas komunikasi serta tindak lanjut yang dapat dipantau.
- C: Sekolah mengabaikan peluang kolaborasi yang relevan.
- D: Pemutusan tunggal belum memanfaatkan informasi dan peran yang tersedia.

### 78. p4-078 — Tidak tepat / Tepat / Tepat

Komunitas belajar memerlukan fokus bukti dan kepercayaan. Observasi menjadi sarana memahami praktik, dengan penggunaan catatan yang disepakati dan pembahasan yang berorientasi perbaikan.

- 1: Jumlah pertanyaan tidak mewakili kualitas penalaran dan tujuan komunitas.
- 2: Catatan memberi bahan belajar yang terkait fokus observasi.
- 3: Kesepakatan membangun kepercayaan bagi pembelajaran profesi.

### 79. p4-079 — D

Tujuan pendidikan dasar mencakup perkembangan nilai dan kemandirian bertindak. Bukti tidak berhenti pada kepatuhan sesaat; guru melihat alasan, tindakan, dan konsistensinya secara bertahap.

- A: Ingatan hadiah bukan bukti tanggung jawab.
- B: Kecepatan dalam situasi berhadiah belum menunjukkan pemahaman nilai.
- C: Ketergantungan keputusan belum menunjukkan tanggung jawab yang berkembang.
- D: Alasan dan tindakan menunjukkan perkembangan tanggung jawab.

### 80. p4-080 — A, C, D

Assessment as learning membantu murid mengkalibrasi penilaian diri. Guru menghubungkan keyakinan dengan bukti alasan serta rencana uji ulang, tanpa menjadikan keyakinan sebagai skor capaian.

- A: Murid memakai data diri sebagai dasar tindakan belajar.
- B: Keyakinan tidak menggantikan bukti ketepatan pemahaman.
- C: Siklus ini melatih pemantauan belajar berdasarkan bukti baru.
- D: Kedua informasi memberi kebutuhan belajar yang berbeda.

