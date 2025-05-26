```markdown
# Proyek Medan Magnet - FISDAS

## Gambaran Umum

Proyek "FISDAS - Medan Magnet" ini adalah sebuah _tool_ berbasis web interaktif yang dibikin buat ngebantu kita-kita mahasiswa biar lebih paham konsep medan magnet. Jadi, belajarnya bisa lewat visualisasi, simulasi, sama ngitung-ngitung langsung. Harapannya sih, materi soal medan magnet di sekitar solenoida, gaya Lorentz, torsi, sama medan magnet dari kawat lurus berarus jadi lebih gampang dicerna.

## Fitur-Fitur Keren

* **Halaman Utama Interaktif:** Tampilan awalnya (`index.html`) dibuat cakep dengan animasi medan magnet dinamis pake `particles.js`.
* **Kalkulator Medan Magnet (`hitung.html`):**
    * **Medan Magnet Solenoida:** 
    * **Gaya Magnet pada Muatan Bergerak (Gaya Lorentz):** 
    * **Momen Gaya (Torsi):** 
    * Setiap kalkulator nampilin rumus, definisi variabelnya, terus kita bisa masukin nilainya buat liat hasilnya.
* **Halaman Simulasi dan Penjelasan (`simulation.html`):**
    * **Kalkulator Interaktif:** Buat ngitung medan magnet dari kawat lurus panjang 
    * **Penjelasan Detail:** Ada _pop-up modal_ yang ngasih info lengkap soal konsep-konsep kunci kayak:
        * Medan Magnet (B)
        * Arus Listrik (I)
        * Jarak (r)
    * Ada juga animasi partikel `particles.js` buat _background_.
* **Halaman Info Kelompok (`kelompok.html`):** Buat ngenalin anggota tim yang bikin proyek ini. Ada fitur _toggle_ mode terang/gelap juga.
* **Visualisasi:** Animasi partikel yang dinamis dan elemen visual lainnya biar belajarnya makin asik.

## Halaman / Bagian Proyek

1.  **`index.html` (Beranda):**
    * Ini halaman pertama yang bakal kebuka. Isinya ada judul gede "MEDAN MAGNET" sama tombol buat ke halaman simulasi.
    * _Background_-nya ada animasi medan magnet sama efek partikel.
    * Ada daftar fitur utama: Alat Hitung, Simulasi Medan, sama Informasi.

2.  **`hitung.html` (Kalkulator):**
    * Judulnya "Rumus Hambatan Medan Magnet", tapi isinya buat ngitung medan magnet, gaya, sama torsi, bukan hambatan magnet ya.
    * Kita bisa milih mau ngitung apa dari tiga opsi:
        * Medan Magnet di Sekitar Solenoid
        * Gaya Magnet pada Muatan Bergerak
        * Momen Gaya (Torsi)
    * Lengkap sama kolom input buat masukin parameter yang dibutuhin, plus nampilin hasil sama langkah-langkah ngitungnya.

3.  **`simulation.html` (Simulasi):**
    * Fokusnya ke konsep medan magnet, terutama buat kawat lurus berarus.
    * Ada kalkulator interaktif buat rumus $B = (\mu_0 \cdot I) / (2\pi \cdot r)$.
    * Ada tombol "Lihat Penjelasan Lengkap" yang bakal nampilin _modal_ penjelasan buat Medan Magnet (B), Arus Listrik (I), sama Jarak (r).
    * _Background_-nya juga ada animasi partikel.

4.  **`kelompok.html` (Tim Pengembang):**
    * Nampilin informasi soal tim yang ngerjain: RACHMAT TRI AJI, CELVIN SAPUTRA, AHMAD NAGATA AZIZ, sama RENOVO DWI DERMAWAN.
    * Ada foto-foto _placeholder_ buat anggota tim.
    * Ada tombol buat ganti mode tampilan jadi terang atau gelap.
    * Di bagian _footer_ ada tulisan "© 2025 Kelompok Pemburu Iblis".

## Teknologi yang Dipake

* **HTML5:** Buat struktur halaman web-nya.
* **CSS3:** Buat _styling_, ngatur _layout_ (pake Flexbox, Grid), animasi, sama desain responsif. _Style_-nya ada yang di file `style.css` umum, ada juga yang langsung ditempel di file HTML-nya (`hitung.html`, `kelompok.html`).
* **JavaScript:** Buat interaktivitas, ngitung-ngitung, manipulasi DOM, _event handling_, sama animasi. Skripnya ada yang di file `main.js` eksternal, ada juga yang ditempel di HTML (`hitung.html`, `kelompok.html`, `simulation.html`).
* **Particles.js:** _Library_ JavaScript ringan buat bikin animasi partikel. Dipake di `index.html`, `kelompok.html`, sama `simulation.html`.

## Konsep Kunci yang Dibahas

* **Medan Magnet (B):** Satuannya Tesla (T). Besaran vektor yang nunjukin kekuatan sama arah medan magnet.
* **Permeabilitas Ruang Hampa ($\mu_0$):** Nilai konstanta $4\pi \times 10^{-7} \, \text{T}\cdot\text{m/A}$ atau H/m.
* **Arus Listrik (I):** Aliran muatan listrik, satuannya Ampere (A). Jadi sumber medan magnet.
* **Jarak (r):** Jarak dari sumber arus ke titik pengukuran medan magnet, satuannya meter (m).
* **Solenoida:** Perhitungan medan magnet di dalem solenoida berdasarkan jumlah lilitan per satuan panjang (n) sama arusnya (I).
* **Gaya Magnet (F) / Gaya Lorentz:** Gaya yang dialami muatan (q) yang gerak dengan kecepatan (v) di dalem medan magnet (B). Dihitung pake rumus $F = q \cdot v \cdot B \cdot \sin(\theta)$. Satuannya Newton (N).
* **Momen Gaya / Torsi ($\tau$):** Gaya putar, dihitung pake $\tau = F \cdot r \cdot \sin(\theta)$. Satuannya Newton-meter (N·m).
* **Sudut ($\theta$):** Sudut antara vektor-vektor yang relevan (misalnya, antara kecepatan sama medan magnet, atau gaya sama lengan momen).
* **Hukum Biot-Savart:** Secara implisit dipake buat rumus medan magnet di sekitar kawat lurus.
* **Kaidah Tangan Kanan:** Disebutin buat nentuin arah medan magnet di sekitar kawat berarus.

## Cara Menjalankan Proyek

1.  _Clone_ atau unduh _repository_ proyeknya.
2.  Masuk ke direktori proyeknya.
3.  Buka file `index.html` pake _web browser_ modern (Chrome, Firefox, dll.).
    * Atau, bisa juga pake _local development server_. File `launch.json` udah disiapin buat _debugging_ di VS Code pake Chrome di `http://localhost:8080`.

## Tim Pengembang

Proyek ini dikerjain sama "Kelompok Pemburu Iblis" yang beranggotakan:
* RACHMAT TRI AJI
* CELVIN SAPUTRA
* AHMAD NAGATA AZIZ
* RENOVO DWI DERMAWAN

(Info lebih lengkapnya ada di halaman `kelompok.html` ya!)
```
