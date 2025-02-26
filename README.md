# Portofolio Ahmad Subhan Agung Pambudi

## Ringkasan Proyek
Proyek ini adalah website portofolio statis (single page) untuk Ahmad Subhan Agung Pambudi, seorang Android Software Developer dengan pengalaman lebih dari 4 tahun. Website ini dirancang untuk memberikan gambaran cepat dan komprehensif tentang keterampilan, pengalaman, dan proyek-proyek yang telah dikerjakan oleh Ahmad.

## Tujuan
- Membuat web portofolio responsif yang dapat diakses optimal di semua platform
- Memberikan informasi lengkap dalam format yang mudah dipahami oleh HRD/rekruter
- Menampilkan proyek-proyek Android yang telah dikembangkan
- Load time cepat (<3s) dengan kompatibilitas lintas browser

## Struktur Website

### 1. Hero Section (First Look)
- **Layout**: Split layout (foto di kanan, informasi di kiri)
- **Konten Kiri**:
  - Nama: Ahmad Subhan Agung Pambudi
  - Tagline: "Android Software Developer | 4+ Years of Building Impactful Apps"
  - Bahasa Pemrograman dengan ikon: Java, Kotlin, SQL, PHP
- **Konten Kanan**:
  - Foto profesional Ahmad

### 2. About Me (Elevator Pitch)
- Paragraf singkat tentang pengalaman, spesialisasi, dan prestasi utama

### 3. Projects Showcase
- Grid layout 3x2 (desktop) / 2x3 (mobile) untuk 6 aplikasi Android
- Setiap card berisi screenshot, judul, deskripsi singkat, dan link ke Google Play Store

### 4. Experience & Education
- **Pendidikan**:
  - Universitas Amikom Yogyakarta (2018-2020)
  - Sarjana Komputer dengan IPK 3,9
  - Penerima Beasiswa BPPA
- **Pengalaman Kerja**:
  - BBWS Bengawan Solo (2020)
  - Diskominfo Magelang (2021-2022)

### 5. Contact Section
- Email: developer.agung@gmail.com
- LinkedIn: linkedin.com/in/agung-pambudi
- WhatsApp: +62 821-3540-4303


## Skema Warna dan Desain

### Skema Warna (60:30:10)
- **Warna Dominan (60%)**: #11999E - Header, background section, teks utama
- **Warna Sekunder (30%)**: #30E3CA - Aksen, tombol, ikon, highlight
- **Warna Netral (10%)**: #F7F7F7 - Background body, card
- **Warna Pendukung**:
  - Gelap: #0A6B6F - Hover state, footer
  - Terang: #B2F7EF - Background section tertentu

### Tipografi
- **Font Utama**: Poppins/Montserrat
- **Font Sekunder**: Roboto
- **Hierarki Ukuran**:
  - Heading: 2.5rem (desktop) / 2rem (mobile)
  - Subheading: 1.5rem (desktop) / 1.25rem (mobile)
  - Body text: 1rem (16px)

## Teknologi
- HTML5, CSS3 (Flexbox/Grid), JavaScript ES6
- Bootstrap 5 untuk responsivitas
- Optimasi gambar dengan WebP format
- Deployment di Vercel

## Responsivitas
- Mobile-first approach dengan breakpoints:
  - Mobile: < 768px (1 kolom)
  - Tablet: 768px - 1024px (2 kolom)
  - Desktop: > 1024px (3 kolom untuk projects)

## Solusi untuk Download CV
- File PDF di-host langsung di folder project atau di Google Drive dengan link publik

## Struktur Folder
```
PORTOMASAP/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── bootstrap.min.css
│   ├── js/
│   │   ├── main.js
│   │   └── bootstrap.bundle.min.js
│   ├── images/
│   │   ├── foto_client.webp
│   │   ├── logo_client.webp
│   │   └── projects/
│   │       └── [6 screenshot aplikasi]
│   └── files/
│       └── cv-agung.pdf
├── index.html
└── README.md
```
