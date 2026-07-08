# Mazaya Travel — Design System Foundation

> Status: Active planning foundation  
> Scope: Frontend public website first  
> Role: source of truth visual system sebelum implementasi UI

---

## 1. Tujuan

Design system ini jadi dasar untuk:
- semua keputusan visual frontend
- konsistensi komponen dan layout
- menjaga brand Mazaya tetap terasa asli, tapi tidak pucat
- memastikan trust, conversion, dan readability lebih kuat dari situs lama

Dokumen ini mengunci arah:
- color strategy
- typography
- spacing/layout
- shape/radius
- elevation
- CTA hierarchy
- component behavior
- do/don't rules

---

## 2. Brand Problem yang Diselesaikan

Warna asli logo Mazaya kuat sebagai identitas, tapi lemah jika dipakai mentah sebagai sistem UI penuh.

### Real issue
- `#61C7C3` terlalu terang untuk jadi warna utama halaman dan teks panjang
- `#F0EB20` terlalu neon untuk dipakai sebagai background dominan
- jika dua warna logo dipaksa jadi mayoritas tampilan, hasilnya pucat, murah, dan kurang trust-heavy

### Design decision
Jangan ubah identitas logo. Tambah **warna jangkar gelap** dan **netral hangat**.

Artinya:
- warna logo tetap dipertahankan sebagai brand signal
- deep teal jadi tulang punggung UI
- warm ivory jadi bidang utama
- putih jadi surface/card/form
- kuning hanya aksen kecil

---

## 3. Brand Personality

### Brand traits
- resmi
- terpercaya
- hangat
- lokal Bone
- tenang
- ramah keluarga
- syar’i tanpa terasa kuno

### Visual tone
- bersih
- teduh
- modern secukupnya
- tidak mewah dingin
- tidak ramai promosi murahan

### Conversion tone
- tenang dulu, baru ajak klik
- trust proof tampil lebih awal daripada dekorasi
- satu CTA dominan per layar/section

---

## 4. Color System

## Core palette

| Token | Hex | Fungsi |
|---|---|---|
| Primary / Deep Teal | `#0F5B5B` | CTA utama, header emphasis, heading penting |
| Brand Teal | `#61C7C3` | accent, icon, trust badge, hover ringan |
| Brand Yellow | `#F0EB20` | highlight kecil, promo chip, emphasis terbatas |
| Background / Warm Ivory | `#F7F3E8` | background utama halaman |
| Surface / White | `#FFFFFF` | card, form, modal, elevated blocks |
| Text / Deep Ink Teal | `#123434` | heading dan body utama |
| Muted Text | `#647A77` | deskripsi sekunder |
| Border / Soft Teal Border | `#C9DED9` | border input, card, divider |

## Supporting palette

| Token | Hex | Fungsi |
|---|---|---|
| Primary Hover | `#0C4C4C` | hover CTA utama |
| Primary Soft | `#DCEFED` | bg trust chip / subtle panel |
| Success Soft | `#E7F6EC` | status aman / success info |
| Success Text | `#1E6B43` | teks success |
| Warning Soft | `#FFF8CC` | info perhatian ringan |
| Warning Text | `#6B5A00` | teks warning ringan |
| Danger Soft | `#FDECEC` | error bg |
| Danger Text | `#8A2E2E` | error text |

## Usage ratio
- 65% warm ivory
- 20% white
- 10% deep teal
- 4% brand teal
- 1% brand yellow

## Color rules
1. `#0F5B5B` jadi warna aksi utama.
2. `#61C7C3` jangan dipakai untuk paragraf panjang.
3. `#F0EB20` jangan dipakai untuk section background besar.
4. kuning dipakai hanya sebagai penanda kecil, promo chip, atau micro highlight.
5. body text utama tetap dark ink teal, bukan turquoise.

---

## 5. Accessibility Rules

### Contrast baseline
- teks normal minimum WCAG AA 4.5:1
- teks besar minimum 3:1
- tombol utama wajib kontras tinggi dan terbaca di outdoor/mobile use

### Approved pairings
- `#FFFFFF` text on `#0F5B5B`
- `#123434` text on `#F7F3E8`
- `#123434` text on `#FFFFFF`
- `#123434` text on `#F0EB20` hanya untuk chip/label kecil, bukan body panjang

### Avoid
- `#61C7C3` text on white untuk body
- white text on yellow
- yellow text on ivory

---

## 6. Typography System

## Primary font
- **Plus Jakarta Sans**

Reason:
- modern tapi hangat
- rapi untuk headline trust-heavy
- cukup ramah untuk audience keluarga/non-teknis
- cocok untuk UI dan marketing pages sekaligus

## Type scale

| Role | Size/Line | Weight | Use |
|---|---|---:|---|
| Hero Display | `56/64` | 700 | hero homepage desktop |
| Hero Tablet | `44/52` | 700 | tablet hero |
| Hero Mobile | `34/42` | 700 | mobile hero |
| H1 Page | `40/48` | 700 | page hero selain homepage |
| H2 Section | `36/44` | 700 | judul section utama |
| H3 Subsection | `28/36` | 700 | subsection heading |
| Card Title | `20/28` | 650 | package/testimonial/article cards |
| Body Large | `18/30` | 400 | intro penting |
| Body Base | `16/28` | 400 | body utama |
| Body Small | `14/24` | 400 | meta, helper text |
| Label / Button | `15/20` | 650 | button, badges, inputs |
| Caption | `12/18` | 500 | legal/helper minim |

## Typography behavior
- heading rapat tapi tidak terlalu padat
- body pakai line-height lega untuk audience umum
- hindari teks semua kapital untuk heading besar
- maksimal 2 level emphasis per block

---

## 7. Layout System

## Container
- max width: `1200px`
- content reading width article: `720–760px`
- section inner width untuk trust/legal blocks bisa lebih sempit bila perlu

## Grid
- desktop: 12 kolom
- tablet: 8 kolom
- mobile: 4 kolom logis / single-column stacking

## Spacing scale
Kelipatan 8px.

| Token | Value |
|---|---|
| 1 | 8px |
| 2 | 16px |
| 3 | 24px |
| 4 | 32px |
| 5 | 40px |
| 6 | 48px |
| 8 | 64px |
| 10 | 80px |
| 12 | 96px |

## Section padding
- desktop: `96px`
- tablet: `64px`
- mobile: `48px`

## Gap defaults
- card stack gap: `16–24px`
- section internal gap: `24–32px`
- hero content gap: `20–24px`

---

## 8. Shape System

| Element | Radius |
|---|---|
| Card | `20px` |
| Button | `12px` |
| Input | `12px` |
| Badge / Chip | `999px` |
| Modal / Large panel | `24px` |

## Shape behavior
- jangan campur banyak radius aneh
- rounded besar untuk card utama menjaga feel hangat
- tetap hindari gaya bubble berlebihan

---

## 9. Elevation & Depth

### Principle
Depth dipakai tipis. Website travel trust-first tidak butuh shadow agresif.

### Elevation tokens
- `shadow-sm`: border-first, hampir flat
- `shadow-md`: card hover ringan
- `shadow-lg`: modal / elevated CTA panel secukupnya

### Rule
Utamakan **border + contrast surface** daripada shadow tebal.

---

## 10. CTA Hierarchy

## Primary CTA
- label utama: `Daftar Sekarang`
- background: `#0F5B5B`
- text: white
- hover: `#0C4C4C`
- emphasis tertinggi

## Secondary CTA
- label utama: `WhatsApp Konsultasi`
- style: outline atau soft-fill berbasis teal
- tidak boleh mengalahkan primary CTA dalam satu section utama

## Promo CTA / Highlight CTA
- background: `#F0EB20`
- text: `#123434`
- hanya untuk chip/promo block kecil
- bukan pengganti primary CTA global

## Rule penting
Satu viewport/section besar maksimal satu CTA dominan. CTA kedua harus jelas tapi tidak rebut perhatian.

---

## 11. Core Components

## Button
### Primary
- bg deep teal
- text putih
- radius 12px
- height comfortable touch target

### Secondary Outline
- border deep teal / border soft teal
- text deep teal
- bg putih/transparent

### Secondary Soft
- bg primary soft
- text deep teal

### Button rules
- tinggi minimum tap area 44px
- icon optional di kiri/kanan
- jangan pakai kuning sebagai button mayoritas situs

## Package Card
Harus memprioritaskan:
1. nama paket
2. tanggal/durasi
3. harga atau hubungi admin
4. seat/status
5. CTA

Visual:
- white surface
- border soft teal
- radius 20px
- informasi mudah discan

## Trust Badge
- bentuk capsule
- bg primary soft / white
- icon kecil
- teks pendek saja

## Legal Proof Card
- white atau soft panel
- title dokumen
- nomor dokumen
- verified marker jika perlu
- link detail/halaman legalitas

## Testimonial Card
- quote pendek dulu
- nama jamaah
- kota/foto optional
- jangan terlalu dekoratif

## FAQ Accordion
- surface putih
- border halus
- icon expand sederhana
- state open harus jelas

## Input Field
- bg putih
- border soft teal
- focus ring deep teal/teal soft
- helper text muted
- error text merah gelap lembut

---

## 12. Imagery Direction

### Photo direction
- natural warm
- manusia nyata, dokumenter, tidak terlalu stock-heavy
- hindari overlay cyan kuat
- hindari filter dingin/korporat berlebihan

### Composition preference
- jamaah nyata
- momen pendampingan
- keberangkatan/kebersamaan
- bukan hanya bangunan generik

### Image treatment
- saturation natural
- contrast lembut
- tone hangat bersih

---

## 13. Motion Rules

- motion hanya enhancement
- durasi singkat dan halus
- jangan pakai animasi bouncing/promosi murahan
- hover ringan cukup
- reveal section boleh, tapi tidak mengganggu scanning

---

## 14. Do / Don’t

## Do
- pakai deep teal untuk rasa aman dan bobot visual
- pakai ivory untuk kehangatan dan diferensiasi dari putih dingin
- pakai turquoise untuk aksen brand dan icon
- pakai yellow hanya untuk micro highlight
- utamakan readability dan trust

## Don’t
- jangan gunakan turquoise untuk paragraf panjang
- jangan gunakan kuning sebagai background halaman besar
- jangan pakai gradient turquoise-kuning sebagai hero utama
- jangan bikin homepage terasa seperti poster promo diskon
- jangan gunakan terlalu banyak CTA dominan dalam satu layar

---

## 15. Frontend Implementation Notes

### Tailwind direction
Butuh token minimal:
- colors
- radius
- shadow
- spacing aliases
- typography presets

### Shadcn direction
Perlu override untuk:
- button variants
- input focus/border
- card radius
- accordion states

### CSS philosophy
- boring, token-first
- utility-friendly
- no ad-hoc hex scattered in components

---

## 16. Dokumen Lama yang Harus Mengikuti System Ini

Setelah design system ini aktif, dokumen berikut harus dianggap mengikuti sistem ini:
- PRD
- wireframe spec
- page-by-page content matrix
- payload implementation spec bila menyebut admin/frontend UI

Artinya:
- semua referensi visual lama yang masih generik kini diikat ke palette/type/layout system ini
- CTA hierarchy lama tetap berlaku, tapi kini punya aturan visual final
