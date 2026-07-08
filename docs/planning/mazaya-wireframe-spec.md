# Mazaya Travel — Wireframe Spec

> Status: Planning  
> Project: Mazaya Travel Website Rebuild  
> Fidelity: Low-to-mid fidelity structural wireframe spec  
> Purpose: menyamakan arah layout, hierarchy, dan conversion flow sebelum desain visual final

---

## 1. Tujuan Dokumen

Wireframe spec ini mendefinisikan:
- urutan section per halaman
- hierarchy informasi
- letak CTA
- letak trust proof
- mobile-first behavior
- apa yang harus terlihat sebelum/selama scroll

Dokumen ini bukan visual mockup final. Ini spesifikasi struktur untuk designer/developer.

---

## 2. Global Wireframe Principles

1. homepage harus cepat jawab: **siapa Mazaya, kenapa dipercaya, apa yang harus diklik**
2. CTA utama selalu `Daftar Sekarang`
3. CTA sekunder selalu `WhatsApp Konsultasi`
4. trust proof muncul dini, bukan disimpan di bawah semua section
5. mobile jadi acuan utama
6. section jangan terlalu banyak ornamen; hierarchy harus kuat
7. setiap halaman penting punya minimal 1 CTA jelas
8. seluruh wireframe mengikuti design system `Mazaya Amanah Teal` sebagai baseline visual
9. warm ivory jadi background mayoritas halaman, white jadi surface cards/forms, deep teal jadi jangkar visual utama
10. turquoise logo diperlakukan sebagai accent, bukan warna dominan untuk blok teks panjang
11. kuning logo hanya untuk highlight kecil, bukan area besar
12. satu viewport besar maksimal satu CTA dominan secara visual

---

## 3. Layout Rules Global

### Visual baseline
- max container: 1200px
- desktop grid: 12 kolom
- spacing system: kelipatan 8px
- section padding: 96px desktop, 64px tablet, 48px mobile
- card radius: 20px
- button radius: 12px
- input radius: 12px

### Header
Desktop:
- logo kiri
- nav tengah/kanan
- CTA `Daftar Sekarang` kanan
- background warm ivory atau white sesuai scroll state

Mobile:
- logo kiri
- menu trigger kanan
- CTA utama tetap mudah dijangkau dari menu atau sticky action

### Footer
Wajib memuat:
- ringkasan brand
- alamat Bone
- nomor WA/telepon
- quick links
- legal/privacy links
- tone visual tetap tenang, tidak terlalu berat atau gelap total

### Sticky behavior
- header sticky setelah scroll tertentu
- di mobile bisa ada sticky bottom action bar untuk `Daftar Sekarang` + `WhatsApp`
- sticky CTA harus tetap menjaga satu aksi dominan secara visual

---

# 4. Wireframe per Halaman

## 4.1 Homepage

### Fold 1 — Hero area
Urutan:
1. Logo/header
2. Headline utama
3. Subheadline
4. CTA utama
5. CTA sekunder
6. Quick trust badges
7. Hero image / supporting visual

### Rules
- headline + CTA utama harus terlihat tanpa scroll di mobile umum
- quick trust badges singkat, 3–4 item
- jangan penuhi fold dengan teks panjang

### Fold 2 — Trust strip
Komponen:
- legalitas
- lokasi Bone
- travel resmi
- pendampingan

### Fold 3 — Why choose Mazaya
Komponen:
- section heading
- 4–6 cards benefit

Layout:
- mobile: 1 kolom stack
- desktop: 2–3 kolom

### Fold 4 — Featured packages
Komponen:
- heading + short intro
- 3–4 package cards
- CTA lihat semua paket

Package card hierarchy:
1. nama paket
2. tanggal/durasi
3. harga/status
4. seat/hotel/airline snippet
5. CTA detail/daftar

### Fold 5 — Cara daftar
Komponen:
- heading
- 4 step horizontal/vertical
- microcopy penenang

### Fold 6 — Dokumentasi preview
Komponen:
- heading
- 6 image grid
- CTA lihat dokumentasi

### Fold 7 — Legalitas preview
Komponen:
- heading
- 2–4 legal proof cards/list
- CTA lihat semua legalitas

### Fold 8 — Testimoni preview
Komponen:
- heading
- 3 testimonial cards

### Fold 9 — FAQ preview
Komponen:
- heading
- accordion 6–8 item
- CTA WhatsApp kecil

### Fold 10 — Closing CTA
Komponen:
- headline penutup
- subheadline singkat
- CTA daftar
- CTA WhatsApp

### Mobile notes
- section spacing padat tapi lega
- package cards tetap mudah dipindai
- CTA tidak terlalu jauh antarsection

---

## 4.2 Package Listing Page

### Structure
1. Header
2. Page title + intro
3. Optional category/filter hint
4. Package cards list/grid
5. Empty state fallback bila kosong
6. Closing CTA
7. Footer

### Package card wireframe
- package name
- departure date
- duration
- departure city
- hotel/airline snippets
- price or contact label
- seats/status
- CTA detail
- CTA WA optional kecil

### Mobile notes
- 1 kolom
- info yang paling penting harus di atas lipatan card

---

## 4.3 Package Detail Page

### Structure
1. Header
2. Package summary hero
3. Pricing/status box
4. Inclusions
5. Exclusions
6. Requirements
7. Itinerary summary
8. CTA block
9. Optional trust support
10. Footer

### Package summary hero layout
Kiri/atas:
- package name
- short summary
- departure date
- duration
- departure city

Kanan/bawah:
- price/status
- seat info
- CTA daftar
- CTA WhatsApp

### Mobile notes
- CTA block muncul cepat
- jangan paksa user scroll jauh untuk daftar

---

## 4.4 Registration Form Page

### Structure
1. Header ringan
2. Package context card
3. Intro text singkat
4. Form fields grouped
5. Upload section
6. Privacy consent
7. Submit button
8. Help text/next step
9. Footer ringan

### Grouping fields
#### Group A — Identitas
- nama lengkap
- NIK
- nama ayah
- jenis kelamin
- tanggal lahir

#### Group B — Kontak
- nomor WhatsApp
- kota domisili

#### Group C — Dokumen
- upload KTP

### UX rules
- label jelas
- field wajib ditandai
- helper text singkat
- submit area tetap menenangkan, tidak menakut-nakuti

---

## 4.5 About Page

### Structure
1. Header
2. Intro hero tentang Mazaya
3. Profil perusahaan
4. Value/keunggulan
5. Ringkasan legalitas
6. CTA ke paket/konsultasi
7. Footer

### Notes
- jangan terlalu panjang seperti company profile PDF
- harus tetap mengarah ke trust dan aksi

---

## 4.6 Legal Page

### Structure
1. Header
2. Intro legalitas
3. Verified legal document list/cards
4. Penjelasan singkat pentingnya legalitas
5. CTA daftar/konsultasi
6. Footer

### Legal card hierarchy
- title dokumen
- nomor dokumen
- otoritas / status verified
- ringkasan singkat

---

## 4.7 Contact Page

### Structure
1. Header
2. Contact hero
3. Contact methods block
4. Office address block
5. Maps block/link
6. CTA block
7. Footer

### Contact methods block
- WhatsApp
- telepon
- email
- jam operasional

---

## 4.8 Documentation Page

### Structure
1. Header
2. Intro
3. Gallery grid
4. CTA lihat paket/konsultasi
5. Footer

### Gallery layout
- mobile: 2 kolom jika tetap terbaca, kalau tidak 1 kolom besar
- desktop: 3 kolom fleksibel

---

## 4.9 Testimonials Page

### Structure
1. Header
2. Intro
3. Testimonial cards/list
4. CTA block
5. Footer

### Testimonial card hierarchy
- quote
- customer name
- origin city optional
- photo optional

---

## 4.10 FAQ Page

### Structure
1. Header
2. Intro
3. FAQ accordion
4. CTA consult/daftar
5. Footer

### UX notes
- kategori optional, tapi jangan bikin navigation terlalu berat di MVP

---

## 4.11 Article Listing Page

### Structure
1. Header
2. Intro
3. Article cards/grid
4. CTA ke paket/WA
5. Footer

### Article card hierarchy
- title
- excerpt
- category/date meta
- CTA baca

---

## 4.12 Article Detail Page

### Structure
1. Header
2. Article header
3. Article body
4. Related CTA block
5. Related links optional
6. Footer

### Article header hierarchy
- title
- meta date/category
- optional featured image
- short dek/excerpt

### Body rules
- paragraf tidak terlalu lebar
- heading jelas
- CTA inline secukupnya

---

## 4.13 Privacy Policy Page

### Structure
1. Header
2. Page title
3. Policy sections
4. Contact info
5. Footer

### Notes
- visual sederhana
- readability lebih penting daripada dekorasi

---

# 5. Reusable Components to Reflect in Wireframes

1. header
2. footer
3. section heading
4. CTA block
5. trust badge row
6. package card
7. testimonial card
8. FAQ accordion
9. legal proof card
10. contact info card

---

# 6. Mobile-First Critical Checks

## Homepage
- CTA utama terlihat cepat
- trust badges tidak bikin sesak
- featured packages tetap kebaca

## Package detail
- CTA daftar tidak tenggelam
- harga/status mudah terlihat

## Form
- keyboard flow nyaman
- upload field tidak membingungkan
- submit mudah dijangkau

## FAQ/article
- text width nyaman
- CTA tidak mengganggu baca

---

# 7. Wireframe Red Flags

1. homepage mulai seperti brosur panjang tanpa hierarchy
2. legalitas muncul terlalu telat
3. CTA utama kalah menonjol dari section lain
4. package card terlalu padat
5. form terasa berat dan menakutkan
6. halaman trust tidak punya jalur balik ke conversion

---

# 8. Definition of Done

Wireframe spec dianggap siap bila:
- semua halaman prioritas punya urutan section jelas
- CTA hierarchy jelas
- trust proof placement jelas
- mobile behavior dicatat
- reusable components sudah teridentifikasi
