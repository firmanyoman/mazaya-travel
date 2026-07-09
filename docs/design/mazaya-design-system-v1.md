# Mazaya Travel Design System

**Version:** 1.0  
**Design Direction:** Amanah Teal  
**Brand:** Mazaya Travel / PT. Mazaya Hikmah Amanah  
**Primary Use:** Website Umrah & Haji, landing page kampanye, halaman paket, pendaftaran, dashboard konten sederhana  
**Font Utama:** Plus Jakarta Sans  
**Status:** Siap digunakan sebagai acuan desain dan frontend implementation

---

# 1. Tujuan Design System

Design system ini dirancang agar website Mazaya Travel terasa:

- Amanah dan terpercaya.
- Tenang serta nyaman dilihat.
- Modern tanpa kehilangan nuansa perjalanan ibadah.
- Profesional, tetapi tidak kaku.
- Konsisten dengan logo asli Mazaya.
- Memiliki kontras yang cukup untuk kebutuhan conversion.
- Mudah diterapkan pada website desktop dan mobile.

Arah visual utama menggunakan warna logo asli sebagai identitas, lalu menambahkan warna teal yang lebih dalam sebagai jangkar visual. Pendekatan ini mencegah tampilan website terlihat terlalu pucat tanpa membuat branding terasa asing.

---

# 2. Brand Foundation

## 2.1 Brand Personality

| Nilai | Makna | Implikasi Visual |
|---|---|---|
| Amanah | Dapat dipercaya, jujur, bertanggung jawab | Layout rapi, informasi harga jelas, CTA tidak manipulatif |
| Nyaman | Menenangkan dan mudah dipahami | Background hangat, whitespace luas, tipografi ringan dibaca |
| Profesional | Terstruktur dan konsisten | Grid yang ketat, komponen seragam, data paket lengkap |
| Berkah | Bernilai spiritual dan penuh makna | Visual lembut, copy penuh empati, aksen kuning secukupnya |
| Modern | Praktis dan relevan | Mobile-first, interaksi cepat, form sederhana, sticky CTA |

## 2.2 Brand Voice

Gunakan bahasa Indonesia yang:

- Hangat.
- Jelas.
- Tidak berlebihan.
- Tidak memakai jargon teknis.
- Tidak menggunakan klaim tanpa bukti.
- Mengutamakan rasa aman calon jemaah.
- Menghindari tekanan berlebihan seperti “harus daftar sekarang”.

### Contoh headline

**Baik**

> Perjalanan ibadah yang tenang, nyaman, dan penuh bimbingan.

> Bersama Mazaya Travel, setiap langkah menuju Tanah Suci terasa lebih terarah.

**Hindari**

> Paket termurah dan terbaik nomor satu se-Indonesia!

> Buruan daftar sekarang sebelum Anda menyesal!

---

# 3. Logo System

## 3.1 Logo Utama

Gunakan logo resmi Mazaya Travel dengan komposisi ikon dan logotype.

### Varian yang disarankan

1. **Logo utama**  
   Digunakan pada background putih atau warm ivory.

2. **Logo reversed**  
   Digunakan pada background deep teal atau dark teal. Logotype berwarna putih, ikon tetap mempertahankan warna utama selama kontras mencukupi.

3. **Logo icon-only**  
   Digunakan untuk favicon, avatar, watermark kecil, dan mobile navigation.

## 3.2 Safe Area

Gunakan ruang kosong minimum setara tinggi elemen kuning pada ikon logo di seluruh sisi.

```text
Safe area minimum = 1× tinggi aksen kuning logo
```

## 3.3 Ukuran Minimum

| Konteks | Ukuran Minimum |
|---|---:|
| Website desktop | 140 px lebar |
| Website mobile | 112 px lebar |
| Icon-only digital | 24 px |
| Print logo lengkap | 25 mm lebar |
| Print icon-only | 10 mm |

## 3.4 Larangan Penggunaan Logo

Jangan:

- Mengubah warna inti logo.
- Menambahkan gradient baru.
- Memutar logo.
- Meregangkan atau memipihkan logo.
- Menambahkan outline tebal.
- Menambahkan drop shadow kuat.
- Meletakkan logo pada background ramai tanpa lapisan kontras.
- Menempatkan logo terlalu dekat dengan elemen lain.
- Menggunakan logo dengan opacity rendah sebagai dekorasi utama.

---

# 4. Color System

## 4.1 Core Brand Colors

| Token | Hex | RGB | Fungsi |
|---|---|---|---|
| `brand.deepTeal` | `#0F5B5B` | 15, 91, 91 | Primary CTA, navbar aktif, heading tertentu |
| `brand.teal` | `#61C7C3` | 97, 199, 195 | Identitas logo, icon, badge, accent |
| `brand.yellow` | `#F0EB20` | 240, 235, 32 | Highlight, promo badge, indicator penting |
| `brand.ivory` | `#F7F3E8` | 247, 243, 232 | Background utama |
| `brand.white` | `#FFFFFF` | 255, 255, 255 | Surface card, modal, form |

## 4.2 Neutral Colors

| Token | Hex | Fungsi |
|---|---|---|
| `neutral.950` | `#123434` | Heading utama dan body gelap |
| `neutral.800` | `#294947` | Teks sekunder kuat |
| `neutral.600` | `#647A77` | Muted text |
| `neutral.400` | `#98ABA8` | Placeholder dan icon pasif |
| `neutral.300` | `#B8CCC8` | Border kuat |
| `neutral.200` | `#C9DED9` | Border normal |
| `neutral.100` | `#E8F0EE` | Background elemen pasif |
| `neutral.50` | `#F8FBFA` | Surface ringan |

## 4.3 Semantic Colors

| Token | Hex | Fungsi |
|---|---|---|
| `success.600` | `#168E62` | Status berhasil |
| `success.100` | `#DDF4E9` | Background success |
| `warning.600` | `#C69516` | Peringatan |
| `warning.100` | `#FFF1C9` | Background warning |
| `error.600` | `#C94B4B` | Error, gagal, validasi |
| `error.100` | `#FCE3E3` | Background error |
| `info.600` | `#2B7A78` | Informasi |
| `info.100` | `#DDF2F1` | Background info |

## 4.4 Color Usage Ratio

Gunakan rasio umum berikut:

```text
65% warm ivory
20% white
10% deep teal
4% brand teal
1% brand yellow
```

Kuning tidak digunakan sebagai warna section besar. Gunakan hanya untuk:

- Badge promo.
- Accent icon.
- Underline kecil.
- CTA khusus dengan teks sangat gelap.
- Indicator seat atau highlight.

## 4.5 Background Pairing

| Background | Teks Utama | CTA |
|---|---|---|
| `#F7F3E8` | `#123434` | Deep teal |
| `#FFFFFF` | `#123434` | Deep teal |
| `#0F5B5B` | `#FFFFFF` | Brand yellow atau white outline |
| `#61C7C3` | `#123434` | Deep teal |
| `#F0EB20` | `#123434` | Deep teal outline |

## 4.6 CSS Variables

```css
:root {
  --brand-deep-teal: #0F5B5B;
  --brand-teal: #61C7C3;
  --brand-yellow: #F0EB20;
  --brand-ivory: #F7F3E8;
  --brand-white: #FFFFFF;

  --text-primary: #123434;
  --text-secondary: #294947;
  --text-muted: #647A77;
  --icon-muted: #98ABA8;

  --border-strong: #B8CCC8;
  --border-default: #C9DED9;
  --surface-soft: #E8F0EE;
  --surface-subtle: #F8FBFA;

  --success: #168E62;
  --success-bg: #DDF4E9;
  --warning: #C69516;
  --warning-bg: #FFF1C9;
  --error: #C94B4B;
  --error-bg: #FCE3E3;
  --info: #2B7A78;
  --info-bg: #DDF2F1;
}
```

---

# 5. Typography

## 5.1 Primary Typeface

**Plus Jakarta Sans**

Fallback:

```css
font-family:
  "Plus Jakarta Sans",
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

## 5.2 Type Scale

| Style | Desktop | Mobile | Weight | Line Height | Penggunaan |
|---|---:|---:|---:|---:|---|
| Display | 56 px | 40 px | 700 | 1.14 | Hero utama |
| H1 | 40 px | 32 px | 700 | 1.2 | Judul halaman |
| H2 | 32 px | 28 px | 700 | 1.25 | Judul section |
| H3 | 24 px | 22 px | 600 | 1.33 | Judul card/section |
| H4 | 20 px | 18 px | 600 | 1.4 | Subheading |
| Body Large | 18 px | 17 px | 400 | 1.7 | Intro paragraph |
| Body | 16 px | 16 px | 400 | 1.75 | Teks umum |
| Small | 14 px | 14 px | 400 | 1.57 | Supporting text |
| Caption | 12 px | 12 px | 500 | 1.5 | Label kecil |
| Button | 15 px | 15 px | 600 | 1.33 | CTA |

## 5.3 Typography Rules

- Maksimal panjang baris body: 70 karakter.
- Gunakan sentence case.
- Hindari uppercase panjang.
- Gunakan weight 700 hanya untuk heading utama.
- Jangan gunakan lebih dari tiga weight pada satu halaman.
- Harga dapat menggunakan tabular numbers bila tersedia.
- Jangan menggunakan font dekoratif untuk body.

---

# 6. Spacing System

Gunakan basis 4 px.

| Token | Nilai |
|---|---:|
| `space.1` | 4 px |
| `space.2` | 8 px |
| `space.3` | 12 px |
| `space.4` | 16 px |
| `space.5` | 20 px |
| `space.6` | 24 px |
| `space.8` | 32 px |
| `space.10` | 40 px |
| `space.12` | 48 px |
| `space.16` | 64 px |
| `space.20` | 80 px |
| `space.24` | 96 px |
| `space.32` | 128 px |

## 6.1 Section Spacing

| Device | Padding Vertical |
|---|---:|
| Desktop | 96 px |
| Tablet | 72 px |
| Mobile | 48 px |

## 6.2 Container

```css
.container {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
}
```

Tablet:

```css
width: min(100% - 48px, 960px);
```

Mobile:

```css
width: min(100% - 32px, 100%);
```

---

# 7. Grid System

## 7.1 Desktop

- 12 columns.
- Maximum width 1200 px.
- Gutter 24 px.
- Outer margin minimum 32 px.

## 7.2 Tablet

- 8 columns.
- Gutter 20 px.
- Outer margin 24 px.

## 7.3 Mobile

- 4 columns.
- Gutter 16 px.
- Outer margin 16 px.

## 7.4 Breakpoints

| Token | Minimum Width |
|---|---:|
| `sm` | 480 px |
| `md` | 768 px |
| `lg` | 1024 px |
| `xl` | 1280 px |
| `2xl` | 1440 px |

---

# 8. Radius

| Token | Nilai | Penggunaan |
|---|---:|---|
| `radius.sm` | 8 px | Badge, small control |
| `radius.md` | 12 px | Input, button |
| `radius.lg` | 16 px | Card |
| `radius.xl` | 20 px | Package card |
| `radius.2xl` | 24 px | Hero visual, large card |
| `radius.full` | 999 px | Pills, avatar |

```css
:root {
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-full: 999px;
}
```

---

# 9. Elevation and Shadows

Gunakan shadow halus, bukan glossy atau floating berlebihan.

```css
--shadow-1: 0 2px 8px rgba(15, 91, 91, 0.08);
--shadow-2: 0 8px 24px rgba(15, 91, 91, 0.12);
--shadow-3: 0 16px 40px rgba(15, 91, 91, 0.16);
```

| Level | Penggunaan |
|---|---|
| Shadow 1 | Input hover, small card |
| Shadow 2 | Package card, testimonial |
| Shadow 3 | Modal, floating panel |

Jangan menggabungkan shadow kuat dengan border tebal.

---

# 10. Iconography

## 10.1 Style

- Outline rounded.
- Stroke 2 px.
- Sudut lembut.
- Tidak terlalu dekoratif.
- Konsisten pada ukuran dan bounding box.

## 10.2 Ukuran

| Token | Ukuran |
|---|---:|
| `icon.xs` | 16 px |
| `icon.sm` | 20 px |
| `icon.md` | 24 px |
| `icon.lg` | 32 px |
| `icon.xl` | 48 px |

## 10.3 Rekomendasi Library

- Lucide Icons.
- Phosphor Icons.
- Material Symbols Rounded.

Gunakan satu library utama. Jangan mencampur beberapa style icon pada satu halaman.

---

# 11. Photography and Imagery

## 11.1 Arah Visual

- Foto asli jemaah dan tim.
- Nuansa hangat dan natural.
- Hindari saturasi turquoise berlebihan.
- Prioritaskan ekspresi aman, tenang, dan bahagia.
- Hindari stok foto yang terlalu generik.
- Gunakan foto dengan ruang kosong untuk overlay teks.
- Pastikan izin penggunaan foto tersedia.

## 11.2 Color Treatment

- White balance hangat.
- Contrast sedang.
- Blacks tidak terlalu crushed.
- Hindari filter cyan.
- Gunakan overlay deep teal maksimum 35% hanya jika dibutuhkan.

## 11.3 Aspect Ratio

| Penggunaan | Rasio |
|---|---|
| Hero desktop | 16:10 atau 3:2 |
| Hero mobile | 4:5 |
| Package card | 4:3 |
| Gallery | 1:1 atau 4:5 |
| Testimonial portrait | 1:1 |
| Blog thumbnail | 16:9 |

---

# 12. Buttons

## 12.1 Primary Button

```text
Background: #0F5B5B
Text: #FFFFFF
Border: transparent
Radius: 12 px
Height: 48 px
Padding: 0 20 px
```

Hover:

```text
Background: #0C4A4A
Shadow: Shadow 1
```

Focus:

```text
Outline: 3 px solid rgba(97, 199, 195, 0.35)
```

## 12.2 Secondary Button

```text
Background: transparent
Text: #0F5B5B
Border: 1 px solid #0F5B5B
```

Hover:

```text
Background: #E8F0EE
```

## 12.3 Accent Button

Digunakan secara terbatas untuk promo atau CTA penting.

```text
Background: #F0EB20
Text: #123434
Border: transparent
```

Hover:

```text
Background: #DCD817
```

## 12.4 Ghost Button

```text
Background: transparent
Text: #294947
```

Hover:

```text
Background: #F8FBFA
```

## 12.5 Destructive Button

```text
Background: #C94B4B
Text: #FFFFFF
```

## 12.6 Button Sizes

| Size | Height | Padding | Font |
|---|---:|---:|---:|
| Small | 36 px | 14 px | 14 px |
| Medium | 44 px | 18 px | 15 px |
| Large | 52 px | 22 px | 16 px |

## 12.7 Button Rules

- Minimal target size 44×44 px.
- Maksimal dua CTA utama dalam satu hero.
- Gunakan icon hanya jika membantu pemahaman.
- Tombol loading harus menonaktifkan klik ganda.
- Jangan menggunakan kuning untuk semua CTA.

---

# 13. Links

Default:

```text
Color: #0F5B5B
Underline: optional
```

Hover:

```text
Color: #2B7A78
Text decoration: underline
```

Visited:

```text
Color: #475D5A
```

Gunakan underline pada link di dalam paragraf.

---

# 14. Form System

## 14.1 Input

```text
Height: 48 px
Background: #FFFFFF
Border: 1 px solid #C9DED9
Radius: 12 px
Padding: 0 14 px
Text: #123434
Placeholder: #98ABA8
```

Focus:

```text
Border: #0F5B5B
Ring: 0 0 0 3px rgba(97, 199, 195, 0.24)
```

Error:

```text
Border: #C94B4B
Helper text: #C94B4B
```

Disabled:

```text
Background: #E8F0EE
Text: #98ABA8
```

## 14.2 Form Labels

- Font size 14 px.
- Weight 600.
- Margin bottom 8 px.
- Required indicator menggunakan `*` merah.

## 14.3 Helper Text

- Font size 12–14 px.
- Warna muted.
- Selalu tampil di bawah field.

## 14.4 Textarea

- Minimum tinggi 120 px.
- Resize vertikal.
- Gunakan counter karakter bila diperlukan.

## 14.5 Select

- Tinggi sama dengan input.
- Gunakan icon chevron yang konsisten.
- Jangan mengganti native select tanpa kebutuhan yang jelas.

## 14.6 Checkbox and Radio

- Minimum interactive area 44 px.
- Checked color `#0F5B5B`.
- Label dapat diklik.

## 14.7 Upload KTP

Gunakan upload zone dengan:

- Tipe file yang didukung.
- Ukuran maksimum.
- Preview.
- Tombol hapus.
- Privacy notice.
- Indikator upload progress.

Contoh:

> File KTP digunakan hanya untuk proses verifikasi pendaftaran dan disimpan secara aman sesuai kebijakan privasi Mazaya Travel.

---

# 15. Navigation

## 15.1 Desktop Navbar

- Tinggi 80 px.
- Background putih.
- Logo kiri.
- Navigasi tengah atau kanan.
- CTA “Konsultasi Gratis” di kanan.
- Sticky setelah scroll.
- Border bottom halus.

### Active State

```text
Text: #0F5B5B
Underline: 2 px brand teal
```

## 15.2 Mobile Navbar

- Tinggi 64 px.
- Logo kiri.
- Hamburger kanan.
- Drawer full-height atau 80% width.
- CTA WhatsApp selalu terlihat.

## 15.3 Suggested Navigation

- Beranda.
- Paket Umrah.
- Haji.
- Layanan.
- Tentang Mazaya.
- Dokumentasi.
- Artikel.
- Kontak.

---

# 16. Hero Section

## 16.1 Layout

Desktop:

- 5 kolom teks.
- 7 kolom visual.
- Tinggi minimum 620 px.
- Background warm ivory.

Mobile:

- Teks di atas.
- Visual di bawah.
- CTA stacked bila lebar sempit.

## 16.2 Content Structure

1. Eyebrow.
2. Headline.
3. Supporting text.
4. Primary CTA.
5. Secondary CTA.
6. Trust indicators.
7. Hero image.

## 16.3 Example

**Eyebrow**

> Travel Umrah & Haji dari Kabupaten Bone

**Headline**

> Perjalanan ibadah yang tenang, nyaman, dan penuh bimbingan.

**Body**

> Mazaya Travel membantu setiap jemaah mempersiapkan perjalanan menuju Tanah Suci dengan pelayanan amanah, fasilitas nyaman, dan pendampingan profesional.

**CTA**

- Lihat Paket Umrah.
- Konsultasi Gratis.

---

# 17. Trust Bar

Gunakan setelah hero.

Isi yang direkomendasikan:

- Legalitas atau izin.
- Jumlah jemaah.
- Keberhasilan keberangkatan.
- Lokasi kantor.
- Tahun pengalaman.

## 17.1 Visual

- Card putih.
- Radius 20 px.
- Grid 4 kolom desktop.
- Icon 24–32 px.
- Angka besar.
- Caption ringkas.

Jangan menampilkan klaim yang belum diverifikasi.

---

# 18. Package Card

## 18.1 Required Information

Setiap card paket harus menampilkan:

- Nama paket.
- Tanggal keberangkatan.
- Durasi.
- Kota keberangkatan.
- Maskapai.
- Hotel Makkah.
- Hotel Madinah.
- Harga mulai.
- DP minimum.
- Sisa seat.
- Status paket.
- CTA detail.
- CTA WhatsApp.

## 18.2 Card Structure

```text
[Image]
[Badge status] [Badge kategori]
Package name
Departure date
Duration / Departure city
Hotel information
Price
Seat availability
[View detail] [Consultation]
```

## 18.3 Status Badge

| Status | Warna |
|---|---|
| Tersedia | Success |
| Hampir penuh | Warning |
| Penuh | Neutral |
| Promo | Brand yellow |
| Selesai | Neutral muted |
| Segera hadir | Info |

## 18.4 Seat Progress

```text
Sisa 7 dari 45 seat
[████████░░]
```

- Hijau bila >50%.
- Kuning bila 20–50%.
- Merah bila <20%.
- Jangan menggunakan urgency palsu.

---

# 19. Cards

## 19.1 Standard Card

```text
Background: #FFFFFF
Border: 1 px solid #C9DED9
Radius: 16 px
Padding: 24 px
Shadow: optional Shadow 1
```

## 19.2 Feature Card

- Icon 40 px.
- Heading 20 px.
- Body 14–16 px.
- Tidak lebih dari tiga baris deskripsi.

## 19.3 Testimonial Card

- Foto atau avatar.
- Nama.
- Paket/perjalanan.
- Kutipan.
- Tanggal atau status verifikasi.
- Jangan membuat testimoni fiktif.

## 19.4 Article Card

- Thumbnail 16:9.
- Category badge.
- Title maksimum dua baris.
- Excerpt maksimum tiga baris.
- Publish date.
- Read time optional.

---

# 20. Badges and Chips

## 20.1 Badge

Digunakan untuk status.

```text
Height: 28 px
Padding: 0 10 px
Radius: full
Font: 12 px / 600
```

## 20.2 Filter Chip

```text
Height: 36 px
Padding: 0 14 px
Border: 1 px solid #C9DED9
```

Selected:

```text
Background: #0F5B5B
Text: #FFFFFF
```

---

# 21. Alerts

## 21.1 Info

```text
Background: #DDF2F1
Icon/Text: #2B7A78
```

## 21.2 Success

```text
Background: #DDF4E9
Icon/Text: #168E62
```

## 21.3 Warning

```text
Background: #FFF1C9
Icon/Text: #8A6911
```

## 21.4 Error

```text
Background: #FCE3E3
Icon/Text: #C94B4B
```

Alert harus memiliki:

- Icon.
- Judul ringkas.
- Body.
- Dismiss action bila relevan.

---

# 22. Modal and Drawer

## 22.1 Modal

- Maximum width 560 px.
- Radius 20 px.
- Padding 24–32 px.
- Backdrop hitam 45%.
- Focus trap wajib.
- ESC menutup modal jika aman.

## 22.2 Drawer

- Mobile menu: 88% lebar.
- Desktop filter: 360–420 px.
- Sticky header dan footer.
- Scroll hanya pada body drawer.

---

# 23. Tabs and Accordion

## 23.1 Tabs

Gunakan untuk:

- Paket Umrah/Haji.
- Detail fasilitas.
- Itinerary.
- Harga kamar.

Active:

```text
Color: #0F5B5B
Border bottom: 2 px solid #61C7C3
```

## 23.2 Accordion

Gunakan untuk FAQ.

- Header tinggi minimum 52 px.
- Satu accordion dapat terbuka atau multi-open.
- Gunakan chevron yang berputar 180°.
- Konten memiliki padding 16–20 px.

---

# 24. Tables

Gunakan untuk:

- Perbandingan paket.
- Jadwal keberangkatan.
- Harga kamar.
- Data agen internal.

## 24.1 Table Style

- Header background `#E8F0EE`.
- Text header `#123434`.
- Row border `#C9DED9`.
- Zebra striping optional.
- Sticky first column pada mobile bila diperlukan.
- Sediakan card fallback untuk layar kecil.

---

# 25. Footer

## 25.1 Structure

Kolom:

1. Logo dan deskripsi.
2. Navigasi.
3. Layanan.
4. Kontak.
5. Legalitas.
6. Social media.

## 25.2 Visual

```text
Background: #0F5B5B
Text: #FFFFFF
Muted text: rgba(255,255,255,.72)
Links hover: #F0EB20
```

Tambahkan:

- Alamat.
- WhatsApp.
- Email.
- Jam operasional.
- Privacy Policy.
- Terms.
- Copyright.

---

# 26. WhatsApp Conversion Pattern

Gunakan CTA WhatsApp secara kontekstual.

Contoh pesan otomatis:

```text
Assalamu'alaikum, saya ingin berkonsultasi mengenai Paket Umrah Silver keberangkatan [tanggal]. Mohon informasi lengkapnya.
```

## 26.1 Placement

- Navbar desktop.
- Hero secondary CTA.
- Package card.
- Sticky mobile CTA.
- Final CTA section.

## 26.2 Sticky Mobile CTA

- Tinggi 64–72 px.
- Background putih.
- Border top.
- Satu primary button.
- Tidak menutupi konten penting.

---

# 27. Motion and Animation

## 27.1 Principles

- Halus.
- Singkat.
- Tidak mengganggu.
- Mendukung orientasi pengguna.
- Gunakan `prefers-reduced-motion`.

## 27.2 Duration

| Jenis | Durasi |
|---|---:|
| Hover | 120–180 ms |
| Dropdown | 180–220 ms |
| Modal | 220–280 ms |
| Page section reveal | 300–450 ms |

## 27.3 Easing

```css
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-emphasized: cubic-bezier(0.2, 0, 0, 1.2);
```

## 27.4 Allowed Motion

- Fade.
- Slight translate Y.
- Scale 0.98 → 1.
- Progress bar.
- Skeleton loading.

Hindari:

- Parallax berat.
- Continuous floating.
- Flashing animation.
- Marquee berulang.
- Auto-playing carousel tanpa kontrol.

---

# 28. Accessibility

## 28.1 Contrast

- Teks normal minimal 4.5:1.
- Teks besar minimal 3:1.
- Komponen UI minimal 3:1 terhadap background.
- Jangan mengandalkan warna sebagai satu-satunya indikator.

## 28.2 Keyboard

- Semua elemen interaktif dapat diakses dengan keyboard.
- Focus ring selalu terlihat.
- Urutan tab mengikuti urutan visual.
- Skip link tersedia.

## 28.3 Forms

- Label selalu terlihat.
- Error message spesifik.
- Gunakan `aria-describedby`.
- Jangan hanya menggunakan placeholder.

## 28.4 Images

- Semua gambar informatif memiliki alt text.
- Gambar dekoratif menggunakan alt kosong.
- Video memiliki caption.

## 28.5 Touch Target

Minimum:

```text
44 × 44 px
```

---

# 29. Responsive Rules

## 29.1 Desktop

- Full navbar.
- Multi-column layout.
- Package card 3 kolom.
- Sidebar filter optional.
- Hero split layout.

## 29.2 Tablet

- Navbar dapat disederhanakan.
- Package card 2 kolom.
- Trust bar 2×2.
- Hero visual lebih kecil.

## 29.3 Mobile

- Single column.
- Package card full width.
- Sticky WhatsApp CTA.
- Filter dalam drawer.
- Table berubah menjadi cards.
- Hero CTA stacked.
- Hapus dekorasi yang tidak penting.

---

# 30. Page Templates

## 30.1 Homepage

Urutan yang direkomendasikan:

1. Navbar.
2. Hero.
3. Trust bar.
4. Paket keberangkatan terdekat.
5. Keunggulan.
6. Fasilitas.
7. Timeline perjalanan.
8. Dokumentasi.
9. Testimoni.
10. Tim/pembimbing.
11. Artikel edukasi.
12. FAQ.
13. Final CTA.
14. Footer.

## 30.2 Package Listing

1. Page header.
2. Filter.
3. Featured package.
4. Grid packages.
5. Comparison block.
6. FAQ.
7. CTA konsultasi.

## 30.3 Package Detail

1. Package hero.
2. Sticky summary.
3. Date and price.
4. Hotels.
5. Airline and route.
6. Facilities.
7. Itinerary.
8. Inclusions.
9. Exclusions.
10. Terms.
11. Gallery.
12. FAQ.
13. Registration CTA.

## 30.4 About Page

1. Brand story.
2. Mission and values.
3. Company legality.
4. Founder/team.
5. Timeline.
6. Office.
7. Testimonials.
8. CTA.

## 30.5 Registration Page

1. Package summary.
2. Progress steps.
3. Personal data.
4. Document upload.
5. Review.
6. Consent.
7. Confirmation.

---

# 31. Content Guidelines

## 31.1 Package Naming

Format:

```text
Umrah Reguler — Silver
Umrah Akhir Tahun — Gold
Umrah Ramadan — Platinum
```

## 31.2 Price Formatting

Gunakan:

```text
Rp30.900.000
```

Hindari:

```text
Rp 30,900,000,-
```

## 31.3 Date Formatting

Gunakan:

```text
27 Oktober 2026
```

Hindari format campuran seperti:

```text
2026-10-27
Oct 27 2026
```

## 31.4 CTA Copy

Rekomendasi:

- Lihat Detail Paket.
- Konsultasi Gratis.
- Cek Ketersediaan Seat.
- Daftar Sekarang.
- Hubungi Tim Mazaya.
- Download Brosur.

## 31.5 Empty State

Contoh:

> Belum ada paket aktif untuk periode ini. Hubungi tim Mazaya untuk mendapatkan jadwal keberangkatan terbaru.

---

# 32. SEO and Metadata

## 32.1 Title Format

```text
Paket Umrah [Bulan Tahun] dari Makassar | Mazaya Travel
```

## 32.2 Meta Description

Panjang ideal 140–160 karakter.

Contoh:

> Temukan paket Umrah dari Makassar bersama Mazaya Travel dengan bimbingan ibadah, hotel nyaman, dan pendampingan profesional.

## 32.3 Structured Data

Gunakan jika sesuai:

- Organization.
- LocalBusiness.
- TravelAgency.
- Product.
- Offer.
- FAQPage.
- BreadcrumbList.
- Article.

---

# 33. Design Tokens — JSON

```json
{
  "color": {
    "brand": {
      "deepTeal": "#0F5B5B",
      "teal": "#61C7C3",
      "yellow": "#F0EB20",
      "ivory": "#F7F3E8",
      "white": "#FFFFFF"
    },
    "text": {
      "primary": "#123434",
      "secondary": "#294947",
      "muted": "#647A77"
    },
    "border": {
      "default": "#C9DED9",
      "strong": "#B8CCC8"
    },
    "semantic": {
      "success": "#168E62",
      "warning": "#C69516",
      "error": "#C94B4B",
      "info": "#2B7A78"
    }
  },
  "font": {
    "family": {
      "sans": "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    },
    "size": {
      "display": "56px",
      "h1": "40px",
      "h2": "32px",
      "h3": "24px",
      "bodyLarge": "18px",
      "body": "16px",
      "small": "14px",
      "caption": "12px"
    }
  },
  "radius": {
    "sm": "8px",
    "md": "12px",
    "lg": "16px",
    "xl": "20px",
    "2xl": "24px",
    "full": "999px"
  },
  "space": {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "6": "24px",
    "8": "32px",
    "12": "48px",
    "16": "64px",
    "24": "96px"
  },
  "shadow": {
    "1": "0 2px 8px rgba(15, 91, 91, 0.08)",
    "2": "0 8px 24px rgba(15, 91, 91, 0.12)",
    "3": "0 16px 40px rgba(15, 91, 91, 0.16)"
  }
}
```

---

# 34. Tailwind Theme Example

```js
export default {
  theme: {
    extend: {
      colors: {
        mazaya: {
          deep: "#0F5B5B",
          teal: "#61C7C3",
          yellow: "#F0EB20",
          ivory: "#F7F3E8",
          ink: "#123434",
          muted: "#647A77",
          border: "#C9DED9"
        }
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui"
        ]
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px"
      },
      boxShadow: {
        soft: "0 2px 8px rgba(15, 91, 91, 0.08)",
        card: "0 8px 24px rgba(15, 91, 91, 0.12)",
        modal: "0 16px 40px rgba(15, 91, 91, 0.16)"
      }
    }
  }
};
```

---

# 35. QA Checklist

## Visual

- [ ] Logo memakai varian yang benar.
- [ ] Kuning tidak digunakan berlebihan.
- [ ] CTA utama konsisten deep teal.
- [ ] Radius konsisten.
- [ ] Shadow lembut.
- [ ] Whitespace cukup.
- [ ] Foto memiliki tone natural.

## Content

- [ ] Harga menggunakan format Indonesia.
- [ ] Tanggal konsisten.
- [ ] Paket kedaluwarsa diarsipkan.
- [ ] Kontak tervalidasi.
- [ ] Legalitas tervalidasi.
- [ ] Testimoni memiliki izin.

## Accessibility

- [ ] Kontras lolos.
- [ ] Focus ring terlihat.
- [ ] Touch target minimal 44 px.
- [ ] Form memiliki label.
- [ ] Alt text tersedia.
- [ ] Motion dapat dikurangi.

## Conversion

- [ ] Hero memiliki satu CTA dominan.
- [ ] Paket memiliki CTA kontekstual.
- [ ] WhatsApp message sudah terisi otomatis.
- [ ] Sisa seat berasal dari data nyata.
- [ ] Form konsultasi tidak terlalu panjang.
- [ ] Trust signal terlihat sebelum scroll terlalu jauh.

## Responsive

- [ ] Navbar mobile bekerja.
- [ ] Package cards tidak overflow.
- [ ] Table memiliki mobile fallback.
- [ ] Sticky CTA tidak menutupi konten.
- [ ] Modal dan drawer dapat di-scroll.

---

# 36. Recommended MVP Component Set

Komponen minimum untuk fase awal rebuild:

1. Logo.
2. Navbar.
3. Mobile drawer.
4. Button.
5. Input.
6. Select.
7. Textarea.
8. Checkbox.
9. Upload field.
10. Badge.
11. Package card.
12. Feature card.
13. Testimonial card.
14. Trust bar.
15. Accordion.
16. Alert.
17. Modal.
18. WhatsApp sticky CTA.
19. Footer.
20. Loading skeleton.

---

# 37. Final Direction

**Amanah Teal** harus terasa ringan, hangat, dan terpercaya. Warna turquoise asli logo tetap menjadi identitas, sementara deep teal menjadi warna utama untuk struktur dan konversi. Brand yellow digunakan secara hemat sebagai tanda perhatian, bukan sebagai warna dominan.

Formula visual:

```text
Warm background
+ white surface
+ deep teal structure
+ turquoise identity
+ yellow micro-accent
+ natural photography
= modern, trustworthy, and on-brand
```

---

**Design System Owner:** Mazaya Travel  
**Recommended Review Cycle:** setiap 6 bulan atau setiap ada perubahan besar pada produk dan branding  
**Versioning Format:** Major.Minor, contoh `1.0`, `1.1`, `2.0`
