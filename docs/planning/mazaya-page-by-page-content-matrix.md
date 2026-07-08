# Mazaya Travel — Page-by-Page Content Matrix

> Status: Planning  
> Project: Mazaya Travel Website Rebuild  
> Scope: Public website launch + CMS-driven content

---

## 1. Tujuan Dokumen

Dokumen ini memetakan kebutuhan konten per halaman supaya:
- design tahu section apa yang harus ada
- CMS spec tahu field mana dipakai di mana
- copywriting tahu apa yang harus disiapkan
- development tahu query data per route
- QA tahu apa yang harus dicek sebelum launch

Semua kebutuhan konten di dokumen ini sekarang diasumsikan mengikuti design system `Mazaya Amanah Teal` sebagai baseline visual. Artinya:
- background mayoritas halaman = warm ivory
- cards/forms = white surface
- CTA utama = deep teal
- turquoise = accent only
- yellow = micro highlight only

Format per halaman:
- tujuan halaman
- target audience
- primary CTA
- secondary CTA
- sections
- content requirements
- CMS sources
- asset requirements
- SEO needs
- QA notes

---

## 2. Halaman Prioritas Launch

### P0
- `/`
- `/paket-umrah`
- `/paket-haji`
- `/paket/[slug]`
- `/daftar/[slug]`
- `/tentang-kami`
- `/legalitas`
- `/kontak`
- `/kebijakan-privasi`

### P1
- `/dokumentasi`
- `/testimoni`
- `/faq`
- `/artikel`
- `/artikel/[slug]`

---

# 3. Page Matrix

## 3.1 `/` — Homepage

**Goal:** jadi mesin trust + mesin lead utama.

**Audience:** calon jamaah, keluarga, user dari Google/sosial media/WA referral.

**Primary CTA:** `Daftar Sekarang`

**Secondary CTA:** `WhatsApp Konsultasi`

### Required sections
1. Hero
2. Quick trust strip
3. Why choose Mazaya
4. Featured packages
5. Cara daftar
6. Dokumentasi preview
7. Legalitas preview
8. Testimoni preview
9. FAQ preview
10. Closing CTA

### Content requirements
#### Hero
- headline positioning utama
- subheadline meyakinkan
- CTA utama
- CTA sekunder
- hero visual

#### Trust strip
- travel resmi
- berbasis di Bone
- legalitas tersedia
- pendampingan jelas

#### Why choose Mazaya
- 4–6 value points
- copy singkat, mudah dipindai

#### Featured packages
- 3–4 paket aktif
- tanggal, durasi, keberangkatan, harga/status, seat, CTA

#### Cara daftar
- 4 langkah
- bahasa sederhana
- menenangkan user baru

#### Dokumentasi preview
- minimal 6 foto publish

#### Legalitas preview
- 2–4 poin legalitas utama yang sudah verified
- link ke halaman legalitas penuh

#### Testimoni preview
- minimal 3 testimoni featured

#### FAQ preview
- minimal 6–8 FAQ featured

#### Closing CTA
- headline penutup
- CTA daftar
- CTA WhatsApp

### CMS sources
- `homepageSettings`
- `companySettings`
- `packages`
- `legalDocuments`
- `testimonials`
- `galleryItems`
- `faqs`

### Assets needed
- hero image
- icon/value visuals secukupnya
- featured gallery assets

### SEO needs
- title homepage lokal Bone
- meta description trust + Bone + Umrah
- OG image default/hero

### QA notes
- CTA utama terlihat di mobile above fold
- identitas Bone muncul natural
- jangan terlalu ramai
- semua section punya hierarchy jelas
- jangan gunakan turquoise untuk body copy panjang di hero atau trust sections
- jangan gunakan kuning sebagai background utama hero atau section besar
- hero harus memakai deep teal sebagai anchor visual utama, dengan turquoise/kuning hanya sebagai aksen terbatas

---

## 3.2 `/paket-umrah` — Listing Paket Umrah

**Goal:** menampilkan semua paket Umrah yang layak dipertimbangkan.

**Audience:** user dengan intent transaksional.

**Primary CTA:** `Lihat Detail`

**Secondary CTA:** `WhatsApp Konsultasi`

### Required sections
1. Page hero ringan
2. Listing paket
3. Empty state / contact fallback
4. CTA penutup

### Content requirements
- judul halaman jelas
- deskripsi singkat
- daftar paket active/sold_out saja
- card package informatif

### CMS sources
- `packages`
- `companySettings`

### Assets needed
- optional page banner
- package brochures/images bila ada

### SEO needs
- title: Paket Umrah + Bone
- meta description listing paket aktif

### QA notes
- paket lampau tidak muncul sebagai active
- sorting by departure terdekat
- sold_out tidak punya CTA daftar aktif

---

## 3.3 `/paket-haji` — Listing Paket Haji

**Goal:** menampilkan paket Haji yang tersedia dengan struktur sama seperti Umrah.

**Audience:** user dengan intent informasi + transaksional.

**Primary CTA:** `Lihat Detail`

**Secondary CTA:** `WhatsApp Konsultasi`

### Required sections
- hero ringan
- listing paket haji
- fallback jika belum ada paket aktif
- CTA konsultasi

### CMS sources
- `packages`
- `companySettings`

### QA notes
- konsisten dengan halaman Umrah
- jika kosong, tetap berguna dan tidak terlihat broken

---

## 3.4 `/paket/[slug]` — Detail Paket

**Goal:** memberi informasi cukup untuk mendorong pendaftaran.

**Audience:** user yang sudah tertarik pada 1 paket.

**Primary CTA:** `Daftar Paket Ini`

**Secondary CTA:** `WhatsApp Konsultasi`

### Required sections
1. Paket summary hero
2. Harga / status / seat
3. Fasilitas termasuk
4. Yang tidak termasuk
5. Ringkasan itinerary
6. Syarat pendaftaran
7. CTA daftar dan WA
8. FAQ mini atau penguat trust

### Content requirements
- nama paket
- tanggal
- durasi
- kota keberangkatan
- hotel/maskapai jika ada
- harga atau `Hubungi Admin`
- inclusions/exclusions
- syarat dokumen awal

### CMS sources
- `packages`
- `companySettings`
- optional `testimonials`
- optional `galleryItems`

### Assets needed
- brochure/visual paket opsional

### SEO needs
- title unik per paket
- meta description unik per paket
- OG image khusus paket jika ada

### QA notes
- paket archived tidak bisa diakses publik sebagai detail aktif
- CTA daftar disable untuk sold_out bila diperlukan

---

## 3.5 `/daftar/[slug]` — Form Pendaftaran

**Goal:** mengubah intent jadi lead dengan data cukup lengkap.

**Audience:** user yang sudah memilih paket.

**Primary CTA:** `Kirim Pendaftaran`

**Secondary CTA:** `WhatsApp Admin`

### Required sections
1. Ringkasan paket terpilih
2. Penjelasan singkat proses
3. Form data calon jamaah
4. Upload KTP
5. Privacy consent
6. Success next-step info

### Content requirements
- package context jelas
- nama field mudah dipahami
- helper text pada data sensitif
- copy privacy yang menenangkan
- success message yang arahkan ke WA

### CMS/data sources
- `packages`
- `companySettings`
- `leads` (write target)

### Assets needed
- none required beyond layout

### SEO needs
- noindex optional dipertimbangkan jika halaman tidak ingin ranking sendiri

### QA notes
- validation aman
- upload aman
- error message tidak teknis
- consent wajib

---

## 3.6 `/tentang-kami` — Tentang Kami

**Goal:** memperkuat trust dan identitas brand.

**Audience:** keluarga/pengambil keputusan dan calon jamaah yang butuh validasi.

**Primary CTA:** `Lihat Paket`

**Secondary CTA:** `WhatsApp Konsultasi`

### Required sections
1. Profil perusahaan
2. Value/positioning
3. Keunggulan layanan
4. Ringkasan legalitas
5. CTA lanjutan

### Content requirements
- siapa Mazaya
- basis operasional Bone
- tone amanah/terpercaya
- ringkas tapi meyakinkan

### CMS sources
- `companySettings`
- `legalDocuments`
- optional `homepageSettings`

### SEO needs
- title brand/about page
- meta description trust-centric

### QA notes
- jangan jadi halaman corporate kering
- harus tetap dukung conversion

---

## 3.7 `/legalitas` — Halaman Legalitas

**Goal:** menyediakan bukti legal dalam satu tempat.

**Audience:** user skeptis, keluarga, calon jamaah yang ingin verifikasi.

**Primary CTA:** `Daftar Sekarang`

**Secondary CTA:** `WhatsApp Konsultasi`

### Required sections
1. Intro legalitas
2. Daftar legal documents verified
3. Penjelasan singkat arti legalitas bila perlu
4. CTA penutup

### Content requirements
- hanya legalitas verified
- nomor dokumen
- jenis legal
- ringkasan publik
- attachment atau representasi bila aman

### CMS sources
- `legalDocuments`
- `companySettings`

### SEO needs
- title legalitas travel resmi Bone
- meta trust-focused

### QA notes
- tidak ada dokumen unverified tampil
- istilah legal konsisten

---

## 3.8 `/kontak` — Kontak

**Goal:** memudahkan user menghubungi atau datang ke kantor.

**Audience:** semua user, khususnya lokal Bone.

**Primary CTA:** `WhatsApp Sekarang`

**Secondary CTA:** `Daftar Sekarang`

### Required sections
1. Kontak utama
2. Alamat kantor
3. Jam operasional
4. Maps link/embed optional
5. CTA cepat

### Content requirements
- nomor telepon
- WhatsApp
- email
- alamat
- kota Bone jelas

### CMS sources
- `companySettings`

### QA notes
- semua info harus konsisten dengan footer dan legal page

---

## 3.9 `/kebijakan-privasi` — Privacy Policy

**Goal:** memberi dasar trust dan kepatuhan dasar untuk pengumpulan data.

**Audience:** user yang submit data.

**Primary CTA:** none

**Secondary CTA:** optional kembali ke pendaftaran

### Required sections
1. Data yang dikumpulkan
2. Tujuan penggunaan
3. Penyimpanan / perlindungan dasar
4. Kontak privacy/basic support

### Content requirements
- bahasa Indonesia jelas
- mudah dipahami non-teknis
- relevan dengan form pendaftaran

### CMS sources
- bisa hardcoded page content dulu atau collection/static MD
- `companySettings` untuk contact reference

### QA notes
- link dari form dan footer harus jalan

---

## 3.10 `/dokumentasi` — Dokumentasi Jamaah

**Goal:** membangun trust lewat bukti visual nyata.

**Audience:** calon jamaah dan keluarga.

**Primary CTA:** `Lihat Paket`

**Secondary CTA:** `WhatsApp Konsultasi`

### Required sections
1. Intro ringan
2. Gallery grid
3. CTA lanjutan

### Content requirements
- image title
- alt text
- optional location/category
- hanya asset publish dan consent aman

### CMS sources
- `galleryItems`
- `companySettings`

### QA notes
- asset restricted tidak muncul
- kualitas foto cukup baik

---

## 3.11 `/testimoni` — Testimoni

**Goal:** menampilkan suara jamaah nyata.

**Audience:** user yang butuh bukti pengalaman orang lain.

**Primary CTA:** `Lihat Paket`

**Secondary CTA:** `WhatsApp Konsultasi`

### Required sections
1. Intro
2. Testimoni cards/list
3. CTA penutup

### Content requirements
- nama jamaah
- kutipan
- optional kota/foto
- verified + consent-safe

### CMS sources
- `testimonials`
- `companySettings`

### QA notes
- jangan pakai testimoni generik tanpa kualitas

---

## 3.12 `/faq` — FAQ

**Goal:** mengurangi keraguan sebelum user konsultasi/daftar.

**Audience:** calon jamaah baru.

**Primary CTA:** `Daftar Sekarang`

**Secondary CTA:** `WhatsApp Konsultasi`

### Required sections
1. Intro
2. FAQ accordion/list
3. CTA ringan

### Content requirements
Topik minimal:
- legalitas
- harga
- cara daftar
- dokumen
- kota keberangkatan
- seat
- pendampingan
- konsultasi

### CMS sources
- `faqs`
- `companySettings`

### QA notes
- FAQ featured homepage harus subset yang berkualitas

---

## 3.13 `/artikel` — Listing Artikel

**Goal:** mendukung SEO dan edukasi.

**Audience:** user discovery dari Google dan visitor existing.

**Primary CTA:** `Baca Artikel`

**Secondary CTA:** `Lihat Paket`

### Required sections
1. Intro listing
2. Article cards/grid
3. CTA ke paket/konsultasi

### Content requirements
- title
- excerpt
- category
- published date
- thumbnail optional

### CMS sources
- `articles`
- `companySettings`

### QA notes
- minimal 6 artikel launch
- excerpt jangan kosong

---

## 3.14 `/artikel/[slug]` — Detail Artikel

**Goal:** memberi nilai edukasi dan mengarahkan user ke conversion step berikutnya.

**Audience:** user dari pencarian atau internal link.

**Primary CTA:** context-based (`Lihat Paket` / `WhatsApp Konsultasi`)

**Secondary CTA:** CTA inline/closing

### Required sections
1. Article header
2. Content body
3. Related CTA
4. Optional related package/article links

### Content requirements
- title
- excerpt or dek
- body rich content
- CTA relevan
- internal linking ke paket/legalitas/kontak

### CMS sources
- `articles`
- optional `packages`

### SEO needs
- metadata unik per artikel
- OG image optional

### QA notes
- content mudah dibaca di mobile
- CTA tidak terlalu agresif tapi tetap ada

---

# 4. Common Reusable Content Blocks

## Trust snippets
Dipakai di:
- homepage
- about
- legal
- footer

Source:
- `companySettings`
- `legalDocuments`

## CTA blocks
Dipakai di:
- homepage
- package detail
- FAQ
- about
- legal
- article detail

Source:
- `companySettings`
- route-level content

## Featured package cards
Dipakai di:
- homepage
- maybe article CTA area

Source:
- `packages`

---

# 5. Launch Content Checklist by Page

## Homepage
- [ ] hero copy final
- [ ] trust badges final
- [ ] why-us items final
- [ ] featured packages ready
- [ ] 6 gallery items ready
- [ ] 3 testimonials ready
- [ ] 6–8 featured FAQs ready

## Package listing/detail
- [ ] semua paket active valid
- [ ] no expired active packages
- [ ] package summary lengkap
- [ ] pricing mode benar

## Registration
- [ ] field labels final
- [ ] helper texts final
- [ ] privacy copy final

## About/Legal/Contact
- [ ] alamat final
- [ ] nomor final
- [ ] email final
- [ ] legal docs verified

## Article
- [ ] 6 artikel launch published
- [ ] title/excerpt/meta siap

---

# 6. Biggest Content Risks

1. homepage terlalu banyak bicara, kurang hierarchy
2. legalitas ada tapi tidak dijelaskan dengan cukup jelas
3. package data tidak disiplin update
4. artikel launch telat sehingga SEO layer kosong
5. visual dokumentasi ada tapi consent/quality tidak aman

---

# 7. Next Use of This Matrix

Dokumen ini dipakai untuk:
- copywriting brief
- design wireframe
- CMS mapping validation
- launch QA content audit
