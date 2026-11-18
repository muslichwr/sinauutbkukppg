# Audit Paket 1 — 18 November 2026

Versi hasil audit: **2026-11-18.4**. Seluruh 80 stimulus, opsi, kunci, pembahasan, dan pemetaan kode dibaca. Ini telaah agent, belum penelaahan independen pakar bidang atau validasi psikometrik.

## Rujukan dan bukti awal

- Juknis lokal **hal. 7 dan 47** dibaca melalui ekstraksi teks asli: 50 PCK + 30 PU; PG, PGK Kategori, PGK MCMA; 17 subkompetensi. Hal. 35 juga diperiksa untuk keterangan 150 menit dan perbedaan rentang jadwal. Tidak mengklaim durasi latihan sama dengan seluruh sesi TUK.
- Panduan pendamping **hal. 8–19 dan 22–23** diperiksa: halaman yang berupa gambar dirender dan dilihat, termasuk pembedaan P/PF dan K/S, analisis contoh, serta jebakan strategi. Isinya menjadi inspirasi pola bukti → tujuan → keputusan dan pembeda pengecoh. Bukan sumber proporsi atau peraturan tambahan; contoh IPA tidak disalin sebagai PCK RPL. Esai hal. 20–21 tidak diimplementasikan.
- Sebelum perubahan, JSON sama persis dengan bank tersemat HTML. Seluruh 80 stimulus/opsi dan 80 catatan kunci/pembahasan Markdown cocok dengan JSON. Tidak ditemukan konflik antarfile awal. Ketiganya disimpan utuh dalam `references/archive/`.
- Distribusi awal benar: 80, 50/30, 17 kode, 40 PG/20 Kategori/20 MCMA. Distribusi ini dipertahankan sebagai rancangan internal, bukan bobot resmi.

## Temuan dan keputusan

Tidak ditemukan kunci asli yang dapat dibuktikan salah pada penelaahan ini. Perubahan kunci berasal dari revisi isi yang dicatat dan permutasi opsi tetap saat kurasi awal. Tidak ada pengacakan soal/opsi saat penggunaan. ID numerik 1–80 dipertahankan; nomor paket dan UID stabil ditambahkan.

1. Banyak pengecoh semula berupa penghinaan, penghapusan tujuan, atau dekorasi yang jelas tidak menjawab kasus. Seluruh 40 PG disunting agar lebih sering membandingkan tindakan yang tampak membantu tetapi kehilangan diagnosis, bukti, tujuan, atau batas teknis. Semua 80 butir memperoleh alasan untuk setiap opsi/pernyataan, bukan hanya ringkasan kunci.
2. Kasus ERD, FK, dan peminjaman terlalu berulang. Butir 15, 17, 20, 25, 32, 33, 38, 42, 44, dan 48 mendapat variasi materi/tujuan substantif: penjadwalan, array, API, FIFO, uji batas, refaktor, transaksi atomik, spesifikasi uji, antarmuka, dan kriteria penerimaan. Pemetaan kode utama tidak berubah karena tujuan penilaian tiap butir dipertahankan sesuai deskripsi Lampiran 4.
3. **19 dari 20** Kategori awal berpola T/F/T. Sembilan pernyataan direvisi menjadi kekeliruan yang spesifik dan urutan pernyataan ditetapkan ulang bersama kunci/alasan. Kini ada enam pola: TTF 4, FTF 3, FTT 5, FFT 4, TFF 2, TFT 2. Urutan tetap setelah terbit.
4. MCMA semula sangat sering A/C/D dan selalu tiga pilihan benar. Posisi opsi ditetapkan ulang bersama kunci/alasan; butir 38 dan 42 kini memiliki dua jawaban benar. Terdapat delapan kombinasi posisi, dengan 18 butir berkunci tiga dan 2 butir berkunci dua. Tidak ada klaim proporsi ini resmi.
5. Review menemukan petunjuk panjang opsi: revisi antara menghasilkan 36/40 PG benar hanya dengan memilih opsi terpanjang. Penyuntingan berikutnya menyeimbangkan panjang melalui rumusan ringkas/panjang yang tetap beralasan. Pada versi akhir heuristik terpanjang mendapat **10/40**, terpendek **9/40** (tie-break memilih opsi pertama); peringkat panjang kunci tersebar 9/10/11/10 pada peringkat 1/2/3/4. Ini pemeriksaan petunjuk permukaan, bukan bukti tingkat kesulitan atau validitas statistik.
6. Beberapa PU yang semula berupa pernyataan prinsip diberi konteks (52, 59, 63, 66, 69, 73, 77). Contoh PU lintas bidang tetap mengukur keputusan pedagogis umum; tidak diubah menjadi tes materi sains/IPS.

## Peninjauan semantik

Tidak ditemukan dua stimulus identik setelah normalisasi teks. Telaah manual membedakan tujuan dari kasus yang memakai materi sama: butir 1 (membangun konsep PK), 2 (menghubungkan model dengan FK), 27 (diagnosis), 30 (umpan balik kardinalitas), dan 49 (pengembangan praktik) tetap berada dalam klaster basis data tetapi menuntut keputusan berbeda. Demikian pula 4/28/31/40 memisahkan representasi, bukti diagnosis, tindak lanjut, dan ketepatan JOIN. Klaster ini sengaja dipertahankan sebagai kesinambungan latihan, bukan diklaim memiliki keragaman konteks maksimal.

Bank masih cenderung mudah dan beberapa pengecoh etis tetap jelas kurang tepat. Belum ada pengukuran daya beda, reliabilitas, tingkat kesulitan empiris, atau kesetaraan terhadap UTBK resmi. Perbaikan paket berikutnya sebaiknya menambah variasi arsitektur perangkat lunak, debugging berbasis bukti kode, kebutuhan pengguna, serta dilema pedagogis dengan beberapa pilihan yang sama-sama masuk akal. Jangan menyimpulkan kesiapan ujian hanya dari skor Paket 1.

## Catatan seluruh butir

Setiap baris menandai fokus konsep/keputusan yang ditelaah; rincian alasan per opsi tersedia dalam bank dan pembahasan hasil build.

| No./UID | Bagian • kode • bentuk | Fokus penelaahan | Alasan revisi khusus |
|---|---|---|---|
| 1 / p1-001 | PCK • P.1 • PG | PK: unik dan tidak kosong, uji dua nama sama | Pengecoh dan alasan per opsi diperjelas. |
| 2 / p1-002 | PCK • P.1 • MCMA | Kardinalitas 1:N, FK di sisi banyak, integritas referensi | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 3 / p1-003 | PCK • P.1 • PG | Validasi browser dapat dilewati; server tetap memeriksa | Pengecoh dan alasan per opsi diperjelas. |
| 4 / p1-004 | PCK • P.1 • Kategori | Prediksi dan penjelasan hasil INNER JOIN | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 5 / p1-005 | PCK • P.1 • PG | Class sebagai rancangan, keadaan tiap instans | Pengecoh dan alasan per opsi diperjelas. |
| 6 / p1-006 | PCK • P.1 • MCMA | Commit, merge, diff sebagai bukti proses Git | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 7 / p1-007 | PCK • P.1 • PG | Kolom barang berulang dan kebutuhan tabel detail | Pengecoh dan alasan per opsi diperjelas. |
| 8 / p1-008 | PCK • P.1 • Kategori | Nilai awal dan keadaan iterasi pada trace table | Satu tindakan benar diganti tindakan keliru yang spesifik; kunci dan alasan disesuaikan. |
| 9 / p1-009 | PCK • P.2 • PG | Dukungan fleksibel sesuai diagnosis SELECT-WHERE | Pengecoh dan alasan per opsi diperjelas. |
| 10 / p1-010 | PCK • P.2 • Kategori | Kesempatan praktik melalui rotasi perangkat | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 11 / p1-011 | PCK • P.2 • MCMA | Akses kode bagi murid dengan hambatan visual | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 12 / p1-012 | PCK • P.2 • PG | Pengayaan dan scaffolding tanpa pengambilalihan tugas | Pengecoh dan alasan per opsi diperjelas. |
| 13 / p1-013 | PCK • P.2 • PG | Instruksi visual dan komunikasi di ruang bising | Pengecoh dan alasan per opsi diperjelas. |
| 14 / p1-014 | PCK • P.3 • PG | Rasa aman dan strategi diagnosis error | Pengecoh dan alasan per opsi diperjelas. |
| 15 / p1-015 | PCK • P.3 • Kategori | Makna algoritma penjadwalan dan refleksi dampak | Kasus diganti ke penjadwalan; mengurangi pengulangan peminjaman/ERD. |
| 16 / p1-016 | PCK • P.3 • MCMA | Diskusi aman, standar jelas, penghargaan proses | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 17 / p1-017 | PCK • P.3 • PG | Kondisi berhenti pencarian array dan keterlibatan | Kasus array dengan miskonsepsi kondisi berhenti; tujuan keterlibatan tetap. |
| 18 / p1-018 | PCK • P.4 • PG | Verifikasi fungsi serta keamanan keluaran AI | Pengecoh dan alasan per opsi diperjelas. |
| 19 / p1-019 | PCK • P.4 • Kategori | Akses, privasi, tujuan pemilihan platform | Satu tindakan benar diganti tindakan keliru yang spesifik; kunci dan alasan disesuaikan. |
| 20 / p1-020 | PCK • P.4 • MCMA | Request-response melalui simulasi lokal tanpa internet | API lokal mengganti relasi tabel luring; variasi teknologi dan materi. |
| 21 / p1-021 | PCK • P.4 • PG | Nilai tambah alat ERD dibanding kebutuhan kelas | Pengecoh dan alasan per opsi diperjelas. |
| 22 / p1-022 | PCK • P.4 • PG | Minimisasi hasil query terhadap kebutuhan akses | Pengecoh dan alasan per opsi diperjelas. |
| 23 / p1-023 | PCK • P.5 • PG | Observasi proses lokal menjadi model dan transaksi uji | Pengecoh dan alasan per opsi diperjelas. |
| 24 / p1-024 | PCK • P.5 • Kategori | Konteks koperasi dan keragaman pengalaman awal | Satu tindakan benar diganti tindakan keliru yang spesifik; kunci dan alasan disesuaikan. |
| 25 / p1-025 | PCK • P.5 • MCMA | FIFO melalui antrean lokal dan representasi kartu | FIFO antrean lokal mengganti inventaris; berbeda dari rotasi perangkat butir 10. |
| 26 / p1-026 | PCK • P.5 • PG | Dataset sintetis untuk sumber belajar usaha lokal | Data sintetis dipertegas; menghapus nama saja belum melindungi identitas. |
| 27 / p1-027 | PCK • P.6 • PG | Fungsi diagnosis identitas unik dan relasi | Pengecoh dan alasan per opsi diperjelas. |
| 28 / p1-028 | PCK • P.6 • MCMA | Asal kolom, prediksi baris, kondisi JOIN | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 29 / p1-029 | PCK • P.6 • Kategori | Rubrik menilai model ERD dan alasan | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 30 / p1-030 | PCK • P.6 • PG | Umpan balik kardinalitas melalui kasus tandingan | Pengecoh dan alasan per opsi diperjelas. |
| 31 / p1-031 | PCK • P.6 • PG | Tindak lanjut asesmen INNER dan LEFT JOIN | Pengecoh dan alasan per opsi diperjelas. |
| 32 / p1-032 | PCK • P.6 • MCMA | Bukti pengujian batas fungsi hitungDiskon | Asesmen uji batas mengganti bukti relasi DB; variasi asesmen RPL. |
| 33 / p1-033 | PCK • P.6 • PG | Asesmen refaktor dan kontrak fungsi | Refaktor fungsi mengganti pemilihan PK; mengurangi pengulangan butir 1/27. |
| 34 / p1-034 | PCK • P.6 • Kategori | Umpan balik query spesifik dan revisi beralasan | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 35 / p1-035 | PCK • PF.1 • PG | Tujuan kejuruan: teknik, etika, pengguna | Pengecoh dan alasan per opsi diperjelas. |
| 36 / p1-036 | PCK • PF.1 • Kategori | Hak akses dan tanggung jawab aplikasi | Satu tindakan benar diganti tindakan keliru yang spesifik; kunci dan alasan disesuaikan. |
| 37 / p1-037 | PCK • PF.2 • PG | Binding nilai SQL; bukan sekadar menghapus petik | Batas binding nilai dijelaskan; bukan jaminan untuk nama tabel dinamis. |
| 38 / p1-038 | PCK • PF.2 • MCMA | Atomisitas transaksi dan pengujian rollback | Atomisitas mengganti 1:N yang berulang dengan butir 2; dua jawaban tepat. |
| 39 / p1-039 | PCK • PF.2 • PG | Ketidakcocokan HTTP method form dan route | POST untuk penyimpanan dipertegas; CSRF bukan persoalan method. |
| 40 / p1-040 | PCK • PF.2 • Kategori | LEFT JOIN tanpa filter dan kemungkinan banyak pasangan | ON dan tanpa WHERE dinyatakan agar LEFT JOIN tidak ambigu. |
| 41 / p1-041 | PCK • PF.2 • PG | Uji tepat pada dan kedua sisi batas >= | Pengecoh dan alasan per opsi diperjelas. |
| 42 / p1-042 | PCK • PF.2 • MCMA | Oracle pengujian pencarian indeks pertama dan -1 | Uji pencarian mengganti Git yang berulang dengan butir 6; dua jawaban tepat. |
| 43 / p1-043 | PCK • PF.3 • PG | Hambatan membaca dipisahkan dari tuntutan logika | Pengecoh dan alasan per opsi diperjelas. |
| 44 / p1-044 | PCK • PF.3 • MCMA | Kebutuhan pengguna ponsel dan prasyarat antarmuka | Kebutuhan antarmuka lokal mengganti katalog UMKM; PF.3 tetap utama. |
| 45 / p1-045 | PCK • PF.3 • Kategori | Prasyarat request-response sebelum API | Satu tindakan benar diganti tindakan keliru yang spesifik; kunci dan alasan disesuaikan. |
| 46 / p1-046 | PCK • PF.4 • PG | Tujuan dari capaian; inventaris sebagai konteks | Pengecoh dan alasan per opsi diperjelas. |
| 47 / p1-047 | PCK • PF.4 • MCMA | Konsep lintas-versi dan dokumentasi framework | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 48 / p1-048 | PCK • PF.4 • Kategori | Keselarasan kebutuhan dan kriteria penerimaan | Kriteria penerimaan mengganti rubrik ERD; berbeda dari butir 29. |
| 49 / p1-049 | PCK • PF.5 • PG | Intervensi FK dengan bukti serta batas inferensi | Bukti sebelum-sesudah bukan klaim sebab-akibat universal. |
| 50 / p1-050 | PCK • PF.5 • MCMA | Pengembangan praktik RPL dengan data anonim | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 51 / p1-051 | PU • P.1 • PG | Konsep, penerapan lingkungan, dan refleksi | Pengecoh dan alasan per opsi diperjelas. |
| 52 / p1-052 | PU • P.1 • Kategori | Refleksi konsep pada proyek pengurangan sampah | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. Stimulus diberi kasus konkret. |
| 53 / p1-053 | PU • P.1 • MCMA | Diagnosis miskonsepsi, pembanding, refleksi | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 54 / p1-054 | PU • P.2 • PG | Dukungan akses bacaan dengan tujuan sama | Pengecoh dan alasan per opsi diperjelas. |
| 55 / p1-055 | PU • P.2 • Kategori | Keragaman bahasa dan hak menyampaikan gagasan | Satu tindakan benar diganti tindakan keliru yang spesifik; kunci dan alasan disesuaikan. |
| 56 / p1-056 | PU • P.2 • MCMA | Rotasi peran serta pemantauan partisipasi | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 57 / p1-057 | PU • P.2 • PG | Diagnosis prasyarat murid pindahan | Pengecoh dan alasan per opsi diperjelas. |
| 58 / p1-058 | PU • P.3 • PG | Norma aman setelah ejekan dan pemeriksaan bukti | Pengecoh dan alasan per opsi diperjelas. |
| 59 / p1-059 | PU • P.3 • Kategori | Kesadaran tujuan kuis, tantangan yang terdukung | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. Stimulus diberi kasus konkret. |
| 60 / p1-060 | PU • P.4 • PG | Verifikasi rangkuman AI dan minimisasi data | Pengecoh dan alasan per opsi diperjelas. |
| 61 / p1-061 | PU • P.4 • MCMA | Akses dan privasi media digital | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 62 / p1-062 | PU • P.5 • PG | Konteks setara untuk konsep perbandingan | Pengecoh dan alasan per opsi diperjelas. |
| 63 / p1-063 | PU • P.5 • Kategori | Sumber lokal sesuai kesiapan tanpa stereotip | Satu tindakan benar diganti tindakan keliru yang spesifik; kunci dan alasan disesuaikan. Stimulus diberi kasus konkret. |
| 64 / p1-064 | PU • P.6 • PG | Diagnosis pecahan untuk menentukan dukungan | Pengecoh dan alasan per opsi diperjelas. |
| 65 / p1-065 | PU • P.6 • MCMA | Exit ticket, pola kesalahan, cek perbaikan | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 66 / p1-066 | PU • P.6 • Kategori | Umpan balik bukti yang bertentangan dengan simpulan | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. Stimulus diberi kasus konkret. |
| 67 / p1-067 | PU • P.6 • PG | Tindak lanjut indikator yang belum tercapai | Pengecoh dan alasan per opsi diperjelas. |
| 68 / p1-068 | PU • K.1 • PG | Privasi dengan pengecualian perlindungan proporsional | Privasi tidak dimaknai sebagai rahasia mutlak bila keselamatan terancam. |
| 69 / p1-069 | PU • K.1 • Kategori | Integritas penilaian dan pengakuan kekeliruan | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. Stimulus diberi kasus konkret. |
| 70 / p1-070 | PU • K.2 • PG | Refleksi guru dari bukti kegagalan proyek | Pengecoh dan alasan per opsi diperjelas. |
| 71 / p1-071 | PU • K.2 • MCMA | Growth mindset dan pengembangan berkelanjutan | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 72 / p1-072 | PU • K.3 • PG | Keputusan konsisten membangun budaya partisipasi | Pengecoh dan alasan per opsi diperjelas. |
| 73 / p1-073 | PU • K.3 • Kategori | Kelompok fleksibel dan kesempatan revisi | Satu tindakan benar diganti tindakan keliru yang spesifik; kunci dan alasan disesuaikan. Stimulus diberi kasus konkret. |
| 74 / p1-074 | PU • S.1 • PG | Komunikasi empatik berbasis klarifikasi kejadian | Pengecoh dan alasan per opsi diperjelas. |
| 75 / p1-075 | PU • S.1 • MCMA | Saluran umpan balik inklusif | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |
| 76 / p1-076 | PU • S.2 • PG | Kolaborasi proporsional untuk hambatan kehadiran | Pengecoh dan alasan per opsi diperjelas. |
| 77 / p1-077 | PU • S.2 • Kategori | Pembagian peran sekolah-keluarga dan privasi | Satu tindakan benar diganti tindakan keliru yang spesifik; kunci dan alasan disesuaikan. Stimulus diberi kasus konkret. |
| 78 / p1-078 | PU • S.3 • PG | Kontribusi pada komunitas profesi berbasis bukti | Pengecoh dan alasan per opsi diperjelas. |
| 79 / p1-079 | PU • PF.1 • PG | Tujuan pendidikan mencakup penerapan serta karakter | Pengecoh dan alasan per opsi diperjelas. |
| 80 / p1-080 | PU • PF.3 • MCMA | Kondisi lokal, keselamatan, analisis data | Kunci dan alasan tiap respons diperinci; posisi ditetapkan ulang. |

## Perlindungan percobaan lama

Arsip prototipe menggunakan bank asli tanpa menerjemahkan jawaban ke opsi hasil kurasi. Progres awal yang ada di browser dipertahankan sebagai arsip baca-saja, dengan label bahwa sesi tersebut dapat parsial dan pernah membuka pembahasan. Percobaan baru menyimpan snapshot versi bank sehingga revisi mendatang tidak mengubah makna jawaban lama. Lihat README dan QA untuk keterbatasan storage lokal.
