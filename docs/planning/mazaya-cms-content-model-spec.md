# Mazaya Travel — CMS Content Model Spec

> Status: Planning  
> Project: Mazaya Travel Website Rebuild  
> Target CMS direction: Payload CMS  
> Scope: Public website launch + internal CMS for non-technical admin

---

## 1. Tujuan Dokumen

Dokumen ini mendefinisikan content model CMS secara detail supaya:
- struktur data konsisten dengan PRD
- implementasi Payload CMS lebih cepat
- admin non-teknis mudah mengelola konten
- field penting tidak terlewat
- publish workflow aman untuk trust-sensitive content

Dokumen ini fokus pada:
- collections / globals
- field definitions
- required vs optional
- validation rules
- admin UX/help text
- relations
- publish rules
- public query use-cases

---

## 2. Prinsip Desain Model

1. **Single source of truth** untuk data identitas perusahaan.
2. **Publish-safe by default** — konten sensitif tidak otomatis public.
3. **Admin non-teknis friendly** — label jelas, help text jelas, field tidak berlebihan.
4. **Future-proof secukupnya** — cukup untuk launch dan growth dekat, jangan overbuild.
5. **Public query sederhana** — homepage dan pages inti harus mudah mengambil data.
6. **Status-driven content** — draft/published/archived/restricted dipakai untuk mengontrol visibility.

---

## 3. Model Overview

## Globals
1. `companySettings`
2. `homepageSettings`
3. `seoSettings`
4. `navigationSettings` *(opsional, bisa ditunda bila nav statis)*

## Collections
1. `packages`
2. `leads`
3. `articles`
4. `testimonials`
5. `galleryItems`
6. `faqs`
7. `media`
8. `legalDocuments` *(direkomendasikan terpisah dari companySettings agar legality items lebih rapi)*

---

# 4. Global Spec

## 4.1 `companySettings`

**Purpose:** source of truth untuk identitas perusahaan.

**Admin owner:** super admin / admin terpercaya

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| legalName | text | Yes | Nama PT resmi |
| brandName | text | Yes | Nama brand publik |
| tagline | text | No | Tagline pendek opsional |
| primaryAddress | textarea | Yes | Alamat utama yang tampil publik |
| city | text | Yes | Default: Bone |
| province | text | Yes | Sulawesi Selatan |
| primaryPhone | text | Yes | Nomor utama publik |
| whatsappNumber | text | Yes | Nomor WA utama |
| primaryEmail | email | Yes | Email resmi utama |
| secondaryEmails | array of email | No | Email cadangan/opsional |
| mapsUrl | text/url | No | Link Google Maps |
| officeHours | textarea | No | Jam operasional |
| instagramUrl | text/url | No | Hanya bila aktif |
| facebookUrl | text/url | No | Hanya bila aktif |
| youtubeUrl | text/url | No | Hanya bila aktif |
| trustSummary | textarea | No | Ringkasan singkat untuk footer/about |
| isPublished | checkbox | Yes | Toggle render public settings |

### Validation rules
- `whatsappNumber` harus disimpan dalam format internasional/normalized bila memungkinkan.
- `primaryEmail` harus valid email.
- `mapsUrl` jika ada harus URL valid.
- `isPublished=false` seharusnya memicu fallback internal, bukan mematikan situs.

### Admin help text
- `legalName`: “Gunakan nama resmi perusahaan sesuai dokumen legal.”
- `primaryAddress`: “Alamat ini akan tampil di halaman kontak, footer, dan legalitas.”
- `whatsappNumber`: “Nomor utama untuk CTA konsultasi dan konfirmasi pendaftaran.”

### Public query use-cases
- header/footer contact
- homepage trust bar
- contact page
- about page
- legal page summary
- WhatsApp CTA target

---

## 4.2 `homepageSettings`

**Purpose:** mengelola konten section homepage tanpa mengubah layout code.

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| heroHeadline | text | Yes | Headline utama |
| heroSubheadline | textarea | Yes | Subheadline utama |
| heroPrimaryCtaLabel | text | Yes | Default: Daftar Sekarang |
| heroPrimaryCtaTarget | text | Yes | Route target |
| heroSecondaryCtaLabel | text | Yes | Default: WhatsApp Konsultasi |
| heroSecondaryCtaMode | select | Yes | whatsapp / route |
| heroImage | upload(media) | No | Asset hero utama |
| trustBadges | array | No | 3–5 badge pendek |
| whyChooseUsTitle | text | Yes | Judul section |
| whyChooseUsItems | array | Yes | 4–6 items |
| registrationSteps | array | Yes | 4 langkah utama |
| closingCtaHeadline | text | Yes | CTA section bawah |
| closingCtaSubheadline | textarea | No | Penjelas singkat |
| featuredFaqIds | relationship(faqs, many) | No | FAQ homepage |
| featuredTestimonialIds | relationship(testimonials, many) | No | Testimonial homepage |
| featuredGalleryIds | relationship(galleryItems, many) | No | Gallery homepage |

### Suggested array shape
#### trustBadges item
- label
- iconKey *(optional, string only; mapping icon di frontend)*

#### whyChooseUsItems item
- title
- description
- iconKey

#### registrationSteps item
- stepNumber
- title
- description

### Validation rules
- `heroHeadline` max 110 chars ideal.
- `whyChooseUsItems` min 4, max 6.
- `registrationSteps` exact 4 ideal untuk launch.

### Admin help text
- “Edit hanya isi section, bukan struktur. Layout homepage diatur developer.”

### Public query use-cases
- render seluruh homepage section statis-dinamis

---

## 4.3 `seoSettings`

**Purpose:** default metadata dan SEO baseline.

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| siteTitleDefault | text | Yes | Default site title |
| metaDescriptionDefault | textarea | Yes | Default meta description |
| siteUrl | text/url | Yes | Base canonical URL |
| defaultOgImage | upload(media) | No | Default OG image |
| robotsPolicy | select | Yes | index,follow default |
| organizationName | text | Yes | Nama organisasi untuk schema |
| localAreaServed | text | No | Bone / Sulsel |
| seoFooterDisclaimer | textarea | No | Optional |

### Validation rules
- `siteUrl` wajib absolute URL.
- `metaDescriptionDefault` ideal <= 160 chars.

### Public query use-cases
- default metadata layout
- fallback OG image
- canonical construction

---

## 4.4 `navigationSettings` *(optional)*

**Purpose:** jika ingin nav/footer editable via CMS.

**Lazy recommendation:** tunda untuk MVP bila nav masih stabil.

### Minimal fields
- headerLinks[]
- footerQuickLinks[]
- footerLegalLinks[]

---

# 5. Collection Spec

## 5.1 `packages`

**Purpose:** menyimpan seluruh paket Umrah/Haji yang bisa dipublish ke public site.

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| title | text | Yes | Nama paket publik |
| slug | text | Yes | Unique slug |
| category | select | Yes | umrah / haji |
| tier | text | No | Silver/Gold/Platinum dll |
| shortLabel | text | No | Label kecil card jika perlu |
| departureDate | date | Yes | Tanggal keberangkatan |
| durationDays | number | Yes | Durasi hari |
| departureCity | text | Yes | Kota keberangkatan |
| airline | text | No | Maskapai |
| makkahHotel | text | No | Hotel Makkah |
| madinahHotel | text | No | Hotel Madinah |
| priceMode | select | Yes | public / contact |
| price | number | No | Harga publik |
| minimumDeposit | number | No | DP minimum |
| totalSeats | number | No | Total kursi |
| remainingSeats | number | No | Kursi tersisa |
| packageStatus | select | Yes | draft / active / sold_out / archived |
| featuredOnHomepage | checkbox | Yes | default false |
| brochureFile | upload(media) | No | Brosur PDF/image |
| packageSummary | textarea | Yes | Ringkasan pendek untuk listing/detail |
| inclusions | array(text) | No | Yang termasuk |
| exclusions | array(text) | No | Yang tidak termasuk |
| requirements | array(text) | No | Syarat dokumen awal |
| itinerarySummary | richText/textarea | No | Ringkasan itinerary |
| paymentNotes | textarea | No | Catatan pembayaran |
| badgeText | text | No | Mis. seat terbatas |
| seoTitle | text | No | SEO override |
| seoDescription | textarea | No | SEO override |
| ogImage | upload(media) | No | OG khusus paket |
| publishedAt | dateTime | No | Waktu publish |

### Validation rules
- `slug` unique.
- `price` wajib jika `priceMode=public`.
- `price` harus kosong atau optional jika `priceMode=contact`.
- `remainingSeats <= totalSeats` bila keduanya diisi.
- `packageStatus=active` tidak boleh jika `departureDate` sudah lampau. Bisa dicegah via hook/validation.
- `title`, `packageSummary`, `departureDate`, `category` wajib sebelum publish.

### Admin UX
#### Field groups
1. **Basic Info**
2. **Schedule & Travel Details**
3. **Pricing & Seats**
4. **Content & Facilities**
5. **SEO**
6. **Publishing**

#### Help text examples
- `priceMode`: “Pilih `contact` bila harga tidak ingin ditampilkan publik.”
- `packageStatus`: “Gunakan `archived` untuk paket lampau, jangan biarkan paket lama tetap active.”
- `featuredOnHomepage`: “Centang hanya untuk paket yang ingin tampil di homepage.”

### Public query use-cases
- homepage featured packages
- package listing umrah
- package listing haji
- package detail page
- CTA registration context

### Admin filters needed
- by `category`
- by `packageStatus`
- by `featuredOnHomepage`
- by `departureDate`

---

## 5.2 `leads`

**Purpose:** menyimpan lead registration dan inquiry.

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| leadType | select | Yes | registration / inquiry |
| package | relationship(packages, one) | No | Required for registration |
| fullName | text | Yes | Nama lead |
| phone | text | Yes | WA aktif |
| nik | text | No | Umumnya untuk registration |
| fatherName | text | No | Registration |
| gender | select | No | male / female |
| birthDate | date | No | Registration |
| city | text | No | Domisili |
| message | textarea | No | Inquiry message / catatan user |
| ktpFile | upload(media) | No | Sensitif |
| sourcePage | text | No | halaman asal form |
| sourceCampaign | text | No | optional, future use |
| status | select | Yes | baru / dihubungi / follow_up / closing / gagal |
| internalNotes | textarea | No | Catatan admin |
| privacyConsentGiven | checkbox | Yes | true/false |
| privacyConsentAt | dateTime | Yes | timestamp |
| submittedAt | dateTime | Yes | creation timestamp |

### Validation rules
- `package` wajib bila `leadType=registration`.
- `privacyConsentGiven` harus true untuk submit dari public form.
- `ktpFile` hanya untuk registration flow.
- `phone` format minimal tervalidasi.

### Access rules
- collection ini **tidak boleh public readable**.
- hanya admin internal.

### Admin UX
- sortable by `submittedAt`
- filter by `status`
- filter by `leadType`
- filter by `package`

### Public query use-cases
- none

### Internal use-cases
- follow-up leads
- status updates
- simple closing tracking

---

## 5.3 `articles`

**Purpose:** SEO + edukasi + trust content.

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| title | text | Yes | Judul artikel |
| slug | text | Yes | Unique slug |
| excerpt | textarea | Yes | Ringkasan pendek |
| category | select/text | No | Mis. Umrah, Haji, Edukasi, Tips |
| thumbnail | upload(media) | No | Thumbnail artikel |
| content | richText | Yes | Isi utama |
| featuredArticle | checkbox | Yes | default false |
| relatedPackages | relationship(packages, many) | No | Internal CTA/links |
| ctaMode | select | No | package / whatsapp / none |
| ctaLabel | text | No | CTA dalam artikel |
| seoTitle | text | No | SEO override |
| seoDescription | textarea | No | SEO override |
| ogImage | upload(media) | No | OG override |
| articleStatus | select | Yes | draft / published |
| publishedAt | dateTime | No | Publish date |

### Validation rules
- `slug` unique.
- `excerpt` wajib sebelum publish.
- `content` wajib sebelum publish.
- `publishedAt` auto-set saat published bila kosong.
- minimal 6 article entries harus published sebelum launch signoff.

### Admin UX
- sort by publishedAt desc
- filter by articleStatus
- filter by category
- highlight featuredArticle

### Public query use-cases
- article listing
- article detail
- homepage optional featured article block in future

---

## 5.4 `testimonials`

**Purpose:** social proof jamaah.

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| customerName | text | Yes | Nama jamaah |
| quote | textarea | Yes | Isi testimoni |
| originCity | text | No | Kota asal |
| travelDate | date | No | Tanggal keberangkatan/perjalanan |
| relatedPackage | relationship(packages, one) | No | optional |
| customerPhoto | upload(media) | No | Jika ada izin |
| consentStatus | select | Yes | approved / unknown / restricted |
| verified | checkbox | Yes | default false |
| featuredOnHomepage | checkbox | Yes | default false |
| testimonialStatus | select | Yes | draft / published |
| sortOrder | number | No | urutan manual |

### Validation rules
- `consentStatus=restricted` tidak boleh dipublish.
- `quote` wajib sebelum publish.
- `customerName` wajib sebelum publish.

### Admin UX
- warning keras jika consent bukan approved.
- toggle featured untuk homepage.

### Public query use-cases
- homepage featured testimonials
- testimonials listing page

---

## 5.5 `galleryItems`

**Purpose:** dokumentasi jamaah dan trust visuals.

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| title | text | Yes | Judul internal/publik |
| image | upload(media) | Yes | Gambar |
| altText | text | Yes | Alt deskriptif |
| category | select/text | No | Mis. Ka'bah, Bandara, Rombongan, Hotel |
| location | text | No | Lokasi foto |
| capturedAt | date | No | Opsional |
| relatedPackage | relationship(packages, one) | No | Opsional |
| consentStatus | select | Yes | approved / unknown / restricted |
| featuredOnHomepage | checkbox | Yes | default false |
| galleryStatus | select | Yes | draft / published |
| sortOrder | number | No | Urutan manual |

### Validation rules
- `altText` wajib sebelum publish.
- `consentStatus=restricted` tidak boleh dipublish.
- `image` wajib sebelum publish.

### Admin UX
- tunjukkan thumbnail preview.
- help text altText: “Jangan isi dengan nama file. Jelaskan isi gambar.”

### Public query use-cases
- homepage gallery preview
- dokumentasi listing page

---

## 5.6 `faqs`

**Purpose:** menjawab pertanyaan umum dan mengurangi keraguan.

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| question | text | Yes | Pertanyaan |
| answer | richText/textarea | Yes | Jawaban |
| category | select/text | No | Legalitas, Harga, Pendaftaran, dll |
| featuredOnHomepage | checkbox | Yes | default false |
| faqStatus | select | Yes | draft / published |
| sortOrder | number | No | Urutan |

### Validation rules
- `question` dan `answer` wajib sebelum publish.
- homepage ideal menampilkan 8 FAQ featured.

### Public query use-cases
- homepage FAQ section
- FAQ full page

---

## 5.7 `legalDocuments`

**Purpose:** mengelola semua item legalitas secara lebih rapi daripada ditanam mentah di company settings.

**Recommendation:** pakai collection terpisah supaya verification workflow lebih bersih.

### Fields

| Field | Type | Required | Notes |
|---|---|---:|---|
| title | text | Yes | Nama dokumen/legal item |
| legalType | select/text | Yes | NIB / PPIU / lain |
| documentNumber | text | Yes | Nomor dokumen |
| issuingAuthority | text | No | Otoritas penerbit |
| issuedAt | date | No | Tanggal terbit |
| expiresAt | date | No | Tanggal expired jika ada |
| attachment | upload(media) | No | Scan/file pendukung |
| verificationStatus | select | Yes | verified / pending / rejected |
| publicSummary | textarea | No | Ringkasan publik |
| displayOnPublicSite | checkbox | Yes | default false |
| internalNotes | textarea | No | Catatan verifikasi internal |
| sortOrder | number | No | Urutan tampil |

### Validation rules
- `displayOnPublicSite=true` hanya boleh bila `verificationStatus=verified`.
- `title`, `legalType`, `documentNumber` wajib.

### Public query use-cases
- legal page
- homepage legality snippet
- about page legal proof area

---

## 5.8 `media`

**Purpose:** library aset umum.

### Fields recommended beyond default

| Field | Type | Required | Notes |
|---|---|---:|---|
| altText | text | No | Untuk asset public |
| mediaCategory | select | No | logo / hero / gallery / article / brochure / sensitive |
| usageRightsStatus | select | No | approved / unknown / restricted |
| isSensitive | checkbox | Yes | default false |
| internalNotes | textarea | No | Catatan tambahan |

### Rules
- media dengan `isSensitive=true` tidak boleh dipakai di public image pickers biasa bila bisa dipisah.
- idealnya buat access guard atau collection terpisah untuk file sensitif jika Payload config memungkinkan.

---

# 6. Relationship Map

## Core relationships
- `leads.package` → `packages`
- `articles.relatedPackages` → `packages`
- `testimonials.relatedPackage` → `packages`
- `galleryItems.relatedPackage` → `packages`
- `homepageSettings.featuredFaqIds` → `faqs`
- `homepageSettings.featuredTestimonialIds` → `testimonials`
- `homepageSettings.featuredGalleryIds` → `galleryItems`

## Relationship guidance
- jangan buat relasi berlebihan kalau tidak dipakai public query
- relasi yang langsung bantu CTA/internal linking lebih diprioritaskan

---

# 7. Publish Workflow Rules

## Global rule
Konten trust-sensitive tidak boleh tayang hanya karena field dasar terisi.

## Publish rules by model

### Packages
Publish allowed if:
- title ada
- slug ada
- category ada
- departureDate ada
- packageSummary ada
- status bukan archived untuk public use
- jika priceMode=public, price ada

### Articles
Publish allowed if:
- title ada
- slug ada
- excerpt ada
- content ada
- articleStatus=published

### Testimonials
Publish allowed if:
- customerName ada
- quote ada
- consentStatus != restricted
- testimonialStatus=published

### GalleryItems
Publish allowed if:
- image ada
- altText ada
- consentStatus != restricted
- galleryStatus=published

### FAQs
Publish allowed if:
- question ada
- answer ada
- faqStatus=published

### LegalDocuments
Publish allowed if:
- verificationStatus=verified
- displayOnPublicSite=true
- documentNumber ada

---

# 8. Admin UX Recommendations

## Navigation order in admin
1. Company Settings
2. Legal Documents
3. Homepage Settings
4. Packages
5. Leads
6. Gallery Items
7. Testimonials
8. FAQs
9. Articles
10. Media
11. SEO Settings

## Field UI rules
- pakai field groups/tab untuk forms panjang
- pakai select enum, jangan text bebas untuk status penting
- pakai help text pada field trust-sensitive
- pakai checkbox featured untuk homepage control sederhana
- tampilkan badge warna untuk status publish/verification/consent

## Default sorting
- Packages: departureDate asc
- Leads: submittedAt desc
- Articles: publishedAt desc
- Gallery/Testimonial/FAQ: sortOrder asc lalu updatedAt desc

## Dangerous actions to guard
- publish restricted asset
- publish unverified legality
- set package active padahal tanggal lampau
- delete lead secara permanen tanpa kebutuhan jelas

---

# 9. Public Query Bundles

## Homepage bundle
Butuh query untuk:
- companySettings
- homepageSettings
- featured packages active
- featured testimonials published
- featured galleryItems published
- featured FAQs published
- verified legal snippets

## Package listing bundle
- packages by category
- status active/sold_out only
- ordered by departureDate asc

## Package detail bundle
- package by slug
- related testimonials optional
- related gallery optional

## About/Legal bundle
- companySettings
- legalDocuments verified + public

## Article listing bundle
- published articles
- ordered by publishedAt desc

## Contact bundle
- companySettings only

---

# 10. Hooks / Validation Logic Recommendation

## Recommended hooks

### packages
- auto-generate slug from title if empty
- block `active` when departureDate < today
- auto-set `publishedAt` when first publish

### legalDocuments
- block `displayOnPublicSite=true` if not verified

### galleryItems / testimonials
- block publish when consent restricted

### articles
- auto-set `publishedAt` when published first time

### leads
- auto-set `submittedAt`
- auto-set default `status=baru`
- auto-set `privacyConsentAt` if consent true on create

---

# 11. Minimal MVP vs Nice-to-Have Fields

## Must-have for MVP
- companySettings
- homepageSettings
- packages
- leads
- faqs
- articles
- testimonials
- galleryItems
- legalDocuments
- media
- seoSettings

## Nice-to-have, can delay
- navigationSettings
- advanced sourceCampaign tracking
- detailed itinerary blocks
- multi-office locations
- article author profiles
- package comparison module

---

# 12. Recommended Payload Implementation Order

1. `media`
2. `companySettings`
3. `legalDocuments`
4. `seoSettings`
5. `homepageSettings`
6. `packages`
7. `leads`
8. `faqs`
9. `testimonials`
10. `galleryItems`
11. `articles`
12. `navigationSettings` if still needed

Reason:
- trust source dulu
- homepage content source kedua
- packages/leads untuk funnel inti
- supporting content modules setelah itu

---

# 13. Risks if Model Is Wrong

1. **Company settings terlalu tersebar** → konten identitas tidak konsisten
2. **Legal docs tidak dipisah** → verification workflow berantakan
3. **Packages terlalu longgar** → data basi lolos ke public site
4. **Media sensitif campur media public** → risiko privasi
5. **Homepage settings terlalu kaku** → admin tidak bisa update copy penting
6. **Homepage settings terlalu bebas** → layout/funnel rusak karena admin mengubah struktur berlebihan

Mitigation:
- simpan layout control di code
- simpan isi copy dan featured references di CMS
- blok status yang berbahaya lewat hook/validation

---

# 14. Definition of Done for CMS Spec

Spec dianggap siap dipakai implementasi bila:
- semua content entities utama sudah punya model
- relasi utama sudah jelas
- required fields dan publish rules sudah jelas
- admin UX guidance cukup untuk implementer
- public query bundles sudah jelas
- collection order implementasi sudah jelas

---

# 15. Next Logical Artifact

Setelah CMS Content Model Spec, dokumen paling pas berikutnya:
1. **Page-by-Page Content Matrix**
2. **Wireframe Spec**
3. **Implementation Plan / Build Order Detail**

Saran saya: lanjut **Page-by-Page Content Matrix** dulu supaya CMS fields langsung nyambung ke kebutuhan copy dan asset per halaman.
