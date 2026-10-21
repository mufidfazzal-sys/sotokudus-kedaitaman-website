# Website Resmi & Portal Admin Soto Kudus Kedai Taman (SODUS) Surabaya

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmufidfazzal-sys%2Fsotokudus-kedaitaman-website)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Website-success?style=for-the-badge&logo=github)](https://mufidfazzal-sys.github.io/sotokudus-kedaitaman-website/)

Website resmi, katalog digital, dan portal pengelola konten (Admin Dashboard) untuk warung kuliner **SODUS "Soto Kudus" Kedai Taman**, berlokasi di Jl. Gayungsari Timur No. 7, Surabaya.

* **Live Demo (GitHub Pages):** [https://mufidfazzal-sys.github.io/sotokudus-kedaitaman-website/](https://mufidfazzal-sys.github.io/sotokudus-kedaitaman-website/)
* **Repositori GitHub:** [https://github.com/mufidfazzal-sys/sotokudus-kedaitaman-website](https://github.com/mufidfazzal-sys/sotokudus-kedaitaman-website)
* **1-Click Deploy ke Vercel:** [Klik di sini untuk langsung deploy ke Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmufidfazzal-sys%2Fsotokudus-kedaitaman-website)

---

## 🎨 Identitas Visual & Desain
Website ini didesain mengacu pada referensi akun resmi Instagram [@sotokudus_kedaitaman](https://www.instagram.com/sotokudus_kedaitaman/?hl=en) dan logo otentik:

- **Warna Utama:** 
  - Forest & Leaf Green (`#15803D`, `#0F3D1F`, `#22C55E`, `#16A34A`)
  - Warm Golden Turmeric (`#D97706`, `#F59E0B`, `#FEF3C7`)
  - Natural Rice Cream / Ivory (`#FDFBF7`, `#F0FDF4`)
- **Tipografi:** 
  - Font Judul: `Playfair Display` (elegan, bernuansa kuliner nusantara klasik).
  - Font Aksen Script: `Caveat` (sesuai tulisan cursive "Kedai Taman" pada logo).
  - Font Konten: `Plus Jakarta Sans` (modern, bersih, dan nyaman dibaca).

---

## 📁 Struktur Folder & File Proyek

```text
sotokudus-kedaitaman-website/
├── api/
│   └── data.js                    <-- Serverless API persistence (Vercel)
├── images/
│   ├── branding/
│   │   └── logo.jpg               (Logo resmi SODUS Kedai Taman)
│   ├── menu/                      (Foto 18 menu makanan & minuman)
│   ├── galeri/                    (Foto 6 galeri suasana & hidangan)
│   └── PETUNJUK_MENGGANTI_GAMBAR.txt
├── admin.html                     <-- Portal Pengelola Admin (7 Tab Lengkap)
├── admin.js                       <-- Logika controller dashboard admin
├── data.json                      <-- Database tunggal (Menu, Hero, Galeri, Lokasi, Kontak, Promo)
├── index.html                     <-- Halaman utama website pengunjung
├── package.json                   <-- Manifest proyek Node.js
├── README.md                      <-- Dokumentasi proyek
├── script.js                      <-- Engine interaktif website & keranjang WA
├── server.js                      <-- Web server lokal (Node.js Port 3001)
├── styles.css                     <-- Stylesheet responsif
└── vercel.json                    <-- Konfigurasi deployment Vercel
```

---

## 👑 Portal Pengelola & Admin (7 Tab Lengkap)

Website telah dilengkapi dengan sistem **Panel Admin Lengkap** yang memungkinkan pengelolaan seluruh isi website tanpa perlu coding:

### 🔐 Cara Masuk ke Panel Admin
Panel admin dibuat terpisah dan dapat diakses melalui:
1. Buka URL: **`http://localhost:3001/admin`** atau file **`admin.html`** di browser.
2. Masukkan akun admin bawaan:
   - **Username:** `admin`
   - **Password:** `sodus123`
   *(Password dapat diubah kapan saja di dalam tab Akun & Cadangan)*.

---

### 📋 Fitur-Fitur 7 Tab Panel Admin

#### 1. 🥣 Kelola Menu
- **Tambah & Edit Menu:** Nama, Kategori, Harga (Rp), Status Tersedia / Habis, Tag Promo/Badge (misal: *Bintang Utama*, *Wajib Coba*, *Paling Populer*), Deskripsi, dan Foto Menu.
- **Upload Gambar:** Bisa menggunakan path lokal (`images/menu/...`), URL eksternal, atau upload file gambar langsung dari komputer.
- **Ketersediaan Menu:** Saklar instan **Tersedia** atau **Habis**. Jika diubah menjadi habis, kartu menu di website otomatis diberi stempel *HABIS* dan tombol pesan dinonaktifkan.
- **Pencarian & Hapus Menu:** Cari menu berdasarkan nama atau kategori, serta tombol hapus dengan konfirmasi.

#### 2. 🖼️ Edit Cover (Hero Section)
- **Visual Branding:** Ganti logo utama (path atau upload gambar).
- **Badge Keunggulan:** Ubah teks badge 1 (*Suasana Kedai Taman Asri*) dan badge 2 (*Resep Warisan Asli Kudus*).
- **Script Tag & Headline:** Edit tulisan aksen script dan judul besar utama.
- **Deskripsi Tagline:** Perbarui narasi penjelasan konsep soto kudus otentik.
- **3 Kartu Keunggulan (Highlights):** Ubah ikon, judul, dan keterangan untuk 3 kartu keunggulan di hero cover.
- **Stiker Melayang (Floating Pills):** Perbarui stiker melayang di hero section.

#### 3. 📸 Kelola Galeri Suasana & Hidangan
- **Tabel Foto Galeri:** Lihat daftar foto yang aktif ditampilkan di website.
- **Tambah / Edit Foto Galeri:** Masukkan judul foto, badge kategori, keterangan foto, dan upload foto langsung dari komputer.
- **Hapus Foto:** Hapus foto galeri lama yang sudah tidak ingin ditampilkan.
- **Integrasi Lightbox:** Foto yang ditambahkan otomatis mendukung popup zoom resolusi penuh saat diklik pengunjung.

#### 4. 📍 Alamat & Jam Operasional
- **Identitas Cabang:** Nama cabang dan alamat lengkap di Jl. Gayungsari Timur No. 7, Surabaya.
- **Jam Operasional & Status Live:** Penentuan jam buka/tutup format 24 jam (misal 06.00 s/d 22.00 WIB) yang mengontrol status *BUKA SEKARANG / TUTUP* secara live.
- **Fasilitas & Pembayaran:** Keterangan fasilitas kedai dan metode pembayaran yang diterima (Cash, QRIS, Transfer).
- **Peta Google Maps:** Tautan buka rute Google Maps dan kode iframe Embed peta interaktif.

#### 5. 📱 Kontak & Medsos
- **Bilah Pengumuman (Top Bar):** Ubah teks pengumuman berjalan di bagian paling atas website.
- **WhatsApp Hotline:** Nomor WhatsApp format internasional (`628...`) dan format tampilan (`0851-5851-5332`).
- **Telepon Kedai:** Nomor telepon resmi `(031) 8298832`.
- **Instagram:** Akun & link profil Instagram `@sotokudus_kedaitaman`.
- **Mitra Pesan Online (Delivery):** Tautan pemesanan online untuk GoFood, GrabFood, dan ShopeeFood.

#### 6. 🎁 Promo Spesial (Pop-up & Voucher)
- **Saklar Status Promo:** Aktifkan / nonaktifkan seluruh tampilan promo & kupon di website.
- **Saklar Auto Pop-up:** Mengatur apakah modal promo muncul otomatis di awal sesi kunjungan.
- **Pita Banner Atas (Strip Banner):** Pita promosi gradien bergerak di bawah header dengan kode voucher dan tombol klaim.
- **Tombol Floating Promo:** Tombol mengambang dengan efek denyut emas (*pulsing ripple*) di pojok bawah layar.
- **Modal Pop-up Interaktif:** Banner gambar promo, diskon badge melayang, judul promo, deskripsi, masa berlaku, syarat minimal belanja, serta kotak kode kupon dengan tombol **"Salin Kode" (One-Click Copy)**.
- **Integrasi Keranjang & WhatsApp:** Kolom input voucher di keranjang pesanan, perhitungan diskon otomatis, dan detail kode voucher + potongan harga tertera rapi pada format pesan WhatsApp!

#### 7. ⚙️ Akun & Cadangan
- **Ganti Password Admin:** Perbarui password login demi keamanan.
- **Unduh Cadangan JSON (Backup):** Mengunduh seluruh data (Menu, Cover, Galeri, Lokasi, Kontak, Promo, Pengaturan) ke dalam 1 file `sodus-data-backup-*.json`.
- **Pulihkan Data JSON (Restore):** Memulihkan data website secara menyeluruh dari file JSON cadangan.
- **Reset ke Data Pabrik:** Mengembalikan seluruh menu, galeri, cover, lokasi, kontak, dan promo ke setelan default awal kapan pun dibutuhkan.

---

## 🚀 Cara Menjalankan Website

### Opsi 1: Buka Langsung (Tanpa Server / Offline)
Cukup klik ganda (double-click) file [`index.html`](file:///C:/Users/Abie/sotokudus-kedaitaman-website/index.html) pada File Explorer.
*(Seluruh perubahan data admin akan tersimpan otomatis di `localStorage` browser).*

### Opsi 2: Jalankan via Local Web Server (Node.js) - Disarankan
Buka terminal / PowerShell di folder proyek ini:
```powershell
cd C:\Users\Abie\sotokudus-kedaitaman-website
node server.js
```
Lalu buka browser di:
- **Website Utama:** `http://localhost:3001`
- **Portal Admin:** `http://localhost:3001/admin`

*(Data yang disimpan di admin akan otomatis tersinkronisasi ke file `data.json` di server sekaligus `localStorage` browser).*
