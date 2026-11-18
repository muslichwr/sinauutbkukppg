# Paket 3 — penguatan akhir

18 November 2026, versi **2026-11-18.1**. Paket lengkap tersedia di pemilih paket: **80 soal baru, 50 PCK + 30 PU**, 40 PG/20 Kategori/20 MCMA, seluruh 17 kode. Bank sumber: `data/paket_3.json`; naskah bacaan: `references/Paket_3_dan_Pembahasan.md`.

## Sumber yang benar-benar tersedia

Tidak ada sumber yang hilang dari lingkungan proyek:

- Juknis di `references/`, hal. 7 dan Lampiran 4 hal. 47: teks dibaca kembali untuk format dan subkompetensi.
- Panduan Definitif dosen di `references/`: strategi dan contoh hal. 11–19 dibaca kembali, dengan pembedahan kompetensi dan catatan pendamping yang sudah ditelaah sebagai acuan pola, bukan aturan tambahan.
- CP RPL 046/H/KR/2025: tersedia sebagai salinan kerja `.tools/CP_046_2025.pdf` dan teksnya, berasal dari [PDF resmi Kemendikdasmen](https://kurikulum.kemendikdasmen.go.id/file/1753929861_manage_file.pdf). Bagian RPL Fase F, tujuan, karakteristik, dan empat elemennya digunakan; PDF ini bukan berkas baru di `references/`.
- `references/Rangkuman Seluruh Materi MK PPG.pdf`: ekstraksi teks terbaca; bagian ZPD/scaffolding, CASEL, UbD, UDL, TaRL, CRT, refleksi dan nilai menjadi pendamping konsep.
- `references/Rangkuman Materi dan Latihan Soal UBTK UKPPPG.pdf`: teks terbaca; bagian peta kompetensi, pengajaran/asesmen, pemilihan model, TPACK/SAMR, sosial emosional dan etika dipakai. PCK Bahasa Indonesia tidak disalin menjadi PCK RPL.
- Paket 1, Paket 2, dan `PENYELARASAN_PPG_UKPPPG.md` digunakan untuk memeriksa variasi dan celah. Ini bukan audit ulang atau revisi bank lama.

Bagian relevan dibaca; tidak diklaim setiap halaman kedua rangkuman ditelaah penuh. Kedua PDF LPTK tetap pendamping, bukan dokumen kisi-kisi resmi. Heuristik seperti selalu memulai diagnosis atau mengejar tingkat teknologi tertinggi tidak dijadikan aturan kunci: keputusan mengikuti bukti dan tujuan pada stimulus.

## Cakupan dan penguatan

| PCK | Jumlah | Contoh kasus baru |
|---|---:|---|
| Basis Data | 13 | Anomali pembaruan, snapshot konsisten, zona waktu, CHECK, pagination seri, rerata tertimbang, NOT IN/NULL, trigger, agregat jendela, kesegaran ringkasan |
| Teks/Grafis/Multimedia | 13 | Short circuit, komposisi, closure, rasio aspek, Unicode, siklus dependensi, kontrak interface, sinkronisasi audio-video, seed pengujian, streaming file |
| Web | 12 | Otorisasi object, CORS, request berulang, state URL, konten dasar tahan gagal script, unggah file, urutan DOM, konfigurasi build, ketahanan tes |
| Mobile | 12 | Rahasia dalam paket, umur data lokasi, pengujian sensor, gestur sistem, deep link, sampling, waktu durasi, akurasi lokasi, Bluetooth |

Pembagian 13/13/12/12 dan 40/20/20 adalah keputusan latihan internal, bukan bobot resmi. Pemetaan sebelum penulisan ada di `PEMETAAN_PAKET_3.md`. Saat penyuntingan, 35 ditetapkan MCMA dan 36 PG sesuai tugas respons; 34 tetap Kategori dengan tiga pernyataan tujuan.

PU memperkuat UbD, pemilihan PBL/PjBL dan discovery, UDL, TaRL, regulasi emosi, disiplin positif, komunikasi empatik, perubahan strategi, refleksi menjadi rencana, kolaborasi dan komunitas. PCK juga memakai prinsip itu untuk keputusan yang memerlukan pemahaman materi RPL. Nama konsep disimpan sebagai metadata `ppg_concept`, bukan dijadikan tuntutan hafalan. Setiap butir memiliki UID, paket, kode utama, bentuk, kesulitan, stimulus, opsi, kunci, ringkasan dan alasan setiap opsi; PCK mempunyai `cp_element`.

| Kode | Jumlah | Kode | Jumlah |
|---|---:|---|---:|
| P.1 | 9 | K.1 | 2 |
| P.2 | 9 | K.2 | 2 |
| P.3 | 5 | K.3 | 2 |
| P.4 | 6 | S.1 | 2 |
| P.5 | 4 | S.2 | 2 |
| P.6 | 11 | S.3 | 2 |
| PF.1 | 5 | PF.2 | 4 |
| PF.3 | 5 | PF.4 | 6 |
| PF.5 | 4 | | |

Kesulitan: 62 sedang dan 18 menantang, sebagai perkiraan editorial, bukan hasil uji psikometrik.

## Temuan mutu dan penyelesaian

- Pemetaan dimulai dari keputusan dan bukti; kasus tidak dijadikan hafalan nama model. Pada 22, tes membalik dua kali sengaja belum dianggap membuktikan implementasi benar; pada 62, kelancaran presentasi dibedakan dari konstruk penguasaan materi; pada 66, suara mayoritas tidak menggantikan perlindungan martabat.
- Draf memiliki banyak kunci PG terpanjang. Redaksi dipersingkat dan pengecoh kosmetik diganti dengan tindakan yang relevan tetapi belum cukup mencapai tujuan. Versi akhir: memilih opsi terpanjang memperoleh 7/40, terpendek 15/40. Pemeriksaan ini deskriptif, bukan bukti validitas atau alasan menyamakan panjang secara mekanis.
- Beberapa butir tetap memberi dasar penguatan yang jelas; tidak semua harus dibuat sebagai dilema rumit. Pengecoh dan alasan ditelaah bersama agar penjelasan tidak mengada-adakan tindakan atau motif di luar opsi.
- Perbandingan terhadap dua paket lama menelaah fokus keputusan, bukan sekadar teks identik. Contohnya, kontrak interface berbeda dari pengenalan class/object, pembacaan snapshot berbeda dari rollback atomik, dan fungsi agregat jendela berbeda dari rekap GROUP BY. Konsep umum pedagogi tetap beririsan karena kompetensinya sama; tidak diklaim terbukti bebas seluruh kemungkinan keserupaan secara otomatis.

## Validasi dan integritas

- `python scripts/build.py` dan `python scripts/build.py --check`: lulus untuk ketiga paket, termasuk 80/50/30, 17 kode, ketiga bentuk, kunci, UID, duplikasi teks, alasan per opsi, dan konsistensi keluaran.
- Satu smoke test Chrome desktop headless, profil terisolasi, file:// offline: memilih Paket 3, membuka 80 nomor, menjawab butir pertama, mengakhiri ujian, dan menampilkan hasil serta 17 kode. Jawaban, ID paket, status selesai, dan tidak adanya pageerror diperiksa.
- SHA-256 sebelum/sesudah menunjukkan **12 berkas terlindungi identik**: sumber serta Markdown Paket 1–2, kode UI/mesin/CSS/HTML, arsip prototipe dan rilis terdahulu. Bundle dan katalog ditambah melalui mekanisme yang tersedia; snapshot browser pengguna tidak diakses.
- Tidak mengubah aplikasi, menambah dependency atau test suite permanen, mengambil screenshot, menguji mobile/lintas browser, atau mengulang stress test.

**Status: siap dikerjakan sebagai Paket 3 utuh.** Telaah dilakukan oleh agent dan belum merupakan penelaahan independen pakar atau validasi psikometrik. Tidak ada klaim kesetaraan soal resmi atau jaminan kelulusan.
