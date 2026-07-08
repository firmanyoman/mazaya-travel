# Mazaya Travel — Epic, Story, and Task Breakdown

> Status: Planning  
> Project: Mazaya Travel Website Rebuild  
> Scope focus: Homepage + public site launch dulu, dengan CMS internal untuk mengelola konten public  
> Source of truth: PRD v1.1 + Homepage Blueprint

---

## 1. Tujuan Dokumen

Dokumen ini memecah PRD menjadi:
- **Epic** → area besar product/development
- **Story** → hasil/user outcome yang bisa dibangun
- **Task** → unit kerja implementasi yang lebih konkret

Fungsi dokumen ini:
1. memberi gambaran arah development sprint per sprint
2. memudahkan sequencing pekerjaan
3. mencegah scope meloncat tanpa fondasi
4. memisahkan mana yang wajib launch dan mana yang bisa menyusul

---

## 2. Aturan Prioritas

### Priority labels
- **P0** = wajib untuk launch MVP
- **P1** = penting, idealnya ikut launch bila waktu cukup
- **P2** = bisa menyusul pasca launch

### Execution principle
- homepage tetap jadi pusat funnel
- trust layer lebih penting dari kosmetik visual
- CMS cukup kuat untuk admin non-teknis, tapi jangan overbuild
- source of truth harus tunggal untuk legalitas, kontak, dan package visibility

---

## 3. Release View

## Release A — Foundation
Target:
- project shell
- CMS/data foundation
- source of truth brand/company
- route skeleton

## Release B — Public Funnel Core
Target:
- homepage
- package listing
- package detail
- CTA WhatsApp
- about/legal/contact

## Release C — Registration & Lead Capture
Target:
- registration form
- secure upload
- lead storage
- lead status management
- privacy layer

## Release D — Trust, Content, and SEO
Target:
- documentation/gallery
- testimonials
- FAQ
- articles
- metadata and SEO

## Release E — QA & Launch Readiness
Target:
- analytics
- performance
- responsive QA
- content consistency QA
- launch checklist signoff

---

# 4. Epic Breakdown

## Epic 1 — Product Foundation & Project Setup

**Goal:** menyiapkan fondasi proyek yang tidak bikin refactor besar di tengah jalan.

**Priority:** P0

### Story 1.1 — Repository and app foundation ready
**Outcome:** developer punya codebase yang siap dipakai membangun public site + CMS.

**Tasks:**
1. Buat/apply struktur repo final untuk project website rebuild.
2. Setup Next.js App Router + TypeScript strict.
3. Setup Tailwind CSS.
4. Setup shadcn/ui base.
5. Setup Payload CMS terintegrasi.
6. Setup PostgreSQL connection.
7. Setup environment variable template.
8. Setup lint/format/build commands.
9. Setup base error handling shell.
10. Setup README project untuk developer.

### Story 1.2 — Route skeleton ready
**Outcome:** semua route utama sudah ada placeholder aman.

**Tasks:**
1. Buat route `/`.
2. Buat route `/paket-umrah`.
3. Buat route `/paket-haji`.
4. Buat route `/paket/[slug]`.
5. Buat route `/tentang-kami`.
6. Buat route `/legalitas`.
7. Buat route `/dokumentasi`.
8. Buat route `/testimoni`.
9. Buat route `/artikel`.
10. Buat route `/artikel/[slug]`.
11. Buat route `/faq`.
12. Buat route `/kontak`.
13. Buat route `/daftar/[slug]`.
14. Buat route `/kebijakan-privasi`.

### Story 1.3 — App shell and layout system ready
**Outcome:** public pages punya layout konsisten.

**Tasks:**
1. Buat root layout public.
2. Buat header skeleton.
3. Buat footer skeleton.
4. Buat container/layout utility.
5. Buat section spacing tokens.
6. Buat empty/error fallback shell.

---

## Epic 2 — Company Source of Truth & Trust Data

**Goal:** semua data identitas inti berasal dari satu sumber yang konsisten.

**Priority:** P0

### Story 2.1 — Company settings model ready
**Outcome:** legalitas, alamat, email, dan kontak tidak tercerai di banyak tempat.

**Tasks:**
1. Definisikan model `CompanySettings`.
2. Tambahkan field legal name.
3. Tambahkan field brand name.
4. Tambahkan field alamat.
5. Tambahkan field city/province.
6. Tambahkan field primary phone.
7. Tambahkan field WhatsApp.
8. Tambahkan field email utama.
9. Tambahkan field legalities list.
10. Tambahkan field social links.
11. Tambahkan field maps URL.
12. Tambahkan validation mandatory fields.

### Story 2.2 — Legal verification workflow ready
**Outcome:** hanya legalitas terverifikasi yang bisa tayang.

**Tasks:**
1. Tambahkan status verifikasi untuk tiap item legalitas.
2. Tambahkan internal notes untuk legalitas.
3. Buat rule publish hanya untuk item verified.
4. Buat rendering helper untuk legalitas public.
5. Buat QA checklist legalitas.

### Story 2.3 — Public trust data consumption ready
**Outcome:** homepage, tentang, legalitas, footer, dan kontak memakai data yang sama.

**Tasks:**
1. Buat query/helper `getCompanySettings`.
2. Map data ke header/footer.
3. Map data ke homepage trust strip.
4. Map data ke halaman legalitas.
5. Map data ke halaman kontak.
6. Tambahkan fallback jika field optional kosong.

---

## Epic 3 — Homepage Conversion Funnel

**Goal:** membuat homepage jadi mesin trust + mesin lead.

**Priority:** P0

### Story 3.1 — Hero section live
**Outcome:** user langsung paham positioning dan next step.

**Tasks:**
1. Implement headline area.
2. Implement subheadline area.
3. Implement CTA utama `Daftar Sekarang`.
4. Implement CTA sekunder `WhatsApp Konsultasi`.
5. Implement quick trust badges.
6. Hubungkan copy hero ke CMS/company settings bila perlu.
7. Pastikan hero mobile-first.

### Story 3.2 — Trust strip and why-us section live
**Outcome:** user cepat percaya sebelum melihat detail panjang.

**Tasks:**
1. Buat trust strip component.
2. Render data legal/trust inti.
3. Buat section “Kenapa Memilih Mazaya”.
4. Tambahkan 4–6 value cards.
5. Pastikan copy menonjolkan Bone, resmi, amanah, pendampingan.

### Story 3.3 — Featured package section live
**Outcome:** user bisa cepat melihat produk yang bisa dibeli.

**Tasks:**
1. Buat query featured packages.
2. Buat package card homepage.
3. Tampilkan tanggal, harga/status, seat, hotel, airline.
4. Tampilkan CTA daftar/detail paket.
5. Buat empty state jika belum ada featured package.

### Story 3.4 — Registration journey explanation live
**Outcome:** user tahu langkah daftar tanpa bingung.

**Tasks:**
1. Buat section “Cara Daftar”.
2. Tampilkan 4 langkah flow.
3. Tambahkan CTA `Mulai Daftar Sekarang`.
4. Tambahkan microcopy penenang.

### Story 3.5 — Trust reinforcement sections live
**Outcome:** homepage menutup celah keraguan utama.

**Tasks:**
1. Integrasikan dokumentasi preview section.
2. Integrasikan legalitas preview section.
3. Integrasikan testimonial preview section.
4. Integrasikan FAQ preview section.
5. Integrasikan CTA penutup.

---

## Epic 4 — Package Discovery System

**Goal:** user bisa menemukan, membandingkan, dan memahami paket aktif.

**Priority:** P0

### Story 4.1 — Package data model ready
**Outcome:** admin bisa membuat paket dengan field yang dibutuhkan funnel.

**Tasks:**
1. Definisikan model `Package`.
2. Tambahkan field title/slug/category.
3. Tambahkan field departure date/duration.
4. Tambahkan field departure city.
5. Tambahkan field airline/hotel.
6. Tambahkan field price mode/price/DP.
7. Tambahkan field total seats/remaining seats.
8. Tambahkan field inclusions/exclusions.
9. Tambahkan field brochure.
10. Tambahkan field featured/status.
11. Tambahkan SEO fields.

### Story 4.2 — Package visibility rules ready
**Outcome:** paket basi tidak muncul sebagai aktif.

**Tasks:**
1. Definisikan enum status `draft/active/sold_out/archived`.
2. Buat helper visibility public.
3. Filter package by date/status.
4. Blok CTA daftar untuk sold out.
5. Pastikan archived tidak tampil publik.

### Story 4.3 — Package listing pages live
**Outcome:** user bisa browse paket Umrah/Haji dengan jelas.

**Tasks:**
1. Buat halaman listing Umrah.
2. Buat halaman listing Haji.
3. Buat card paket reusable.
4. Buat state loading.
5. Buat state empty.
6. Buat state error aman.

### Story 4.4 — Package detail page live
**Outcome:** user mendapat konteks cukup sebelum daftar.

**Tasks:**
1. Buat hero/detail summary paket.
2. Tampilkan fasilitas/inclusions.
3. Tampilkan exclusions.
4. Tampilkan info dokumen awal.
5. Tampilkan CTA daftar/WhatsApp.
6. Tambahkan section FAQ relevan atau related CTA.

---

## Epic 5 — Registration Funnel & Lead Capture

**Goal:** mengubah intent jadi lead dengan data yang cukup lengkap.

**Priority:** P0

### Story 5.1 — Registration form UX ready
**Outcome:** user bisa mengisi form dengan flow jelas dan tidak menakutkan.

**Tasks:**
1. Definisikan final field list form.
2. Buat layout form mobile-first.
3. Tampilkan package context di atas form.
4. Tambahkan field wajib utama.
5. Tambahkan helper text pada field sensitif.
6. Tambahkan checkbox privacy consent.
7. Tambahkan success state yang mengarahkan ke WhatsApp.

### Story 5.2 — Validation and secure submission ready
**Outcome:** form aman dan datanya usable.

**Tasks:**
1. Definisikan Zod schema untuk form pendaftaran.
2. Tambahkan validasi nomor WhatsApp.
3. Tambahkan validasi NIK.
4. Tambahkan validasi field wajib.
5. Tambahkan validasi upload KTP.
6. Tangani error field-level.
7. Tangani error server global yang aman.

### Story 5.3 — Lead persistence ready
**Outcome:** lead tersimpan dan bisa dikelola admin.

**Tasks:**
1. Definisikan model `Lead`.
2. Simpan data registration lead.
3. Simpan source page.
4. Simpan consent timestamp.
5. Kaitkan lead dengan package.
6. Set default status `baru`.

### Story 5.4 — Inquiry capture ready
**Outcome:** user yang belum siap daftar tetap tertangkap sebagai lead atau diarahkan ke WA.

**Tasks:**
1. Putuskan inquiry form vs WA-only implementation.
2. Jika inquiry form dipakai, buat schema singkat.
3. Simpan inquiry lead.
4. Track inquiry submission event.

---

## Epic 6 — WhatsApp Conversion Layer

**Goal:** menangkap user yang ingin konsultasi sebelum daftar.

**Priority:** P0

### Story 6.1 — WhatsApp CTA architecture ready
**Outcome:** CTA WhatsApp konsisten di semua titik penting.

**Tasks:**
1. Definisikan nomor WhatsApp source dari company settings.
2. Buat helper generator WhatsApp URL.
3. Buat variant CTA per context.
4. Render CTA di hero.
5. Render CTA di detail paket.
6. Render CTA di FAQ.
7. Render CTA di CTA penutup.
8. Render sticky mobile CTA.

### Story 6.2 — WhatsApp tracking ready
**Outcome:** klik WA bisa diukur.

**Tasks:**
1. Track click event.
2. Tambahkan page context.
3. Tambahkan section context.
4. Tambahkan package context bila relevan.

---

## Epic 7 — CMS for Non-Technical Admin

**Goal:** admin bisa update konten tanpa developer.

**Priority:** P0

### Story 7.1 — Admin auth and access ready
**Outcome:** hanya admin yang bisa mengelola konten internal.

**Tasks:**
1. Aktifkan auth Payload.
2. Definisikan role admin minimal.
3. Lindungi access collections sensitif.
4. Lindungi media sensitif.

### Story 7.2 — CRUD core collections ready
**Outcome:** semua konten inti bisa dikelola.

**Tasks:**
1. CRUD Package.
2. CRUD Article.
3. CRUD FAQ.
4. CRUD Testimonial.
5. CRUD GalleryItem.
6. CRUD CompanySettings.
7. CRUD Lead notes/status.

### Story 7.3 — Publish workflow ready
**Outcome:** admin tidak asal publish konten mentah.

**Tasks:**
1. Tambahkan draft/published rules.
2. Tambahkan required fields sebelum publish.
3. Tambahkan help text pada field penting.
4. Tambahkan status badge/list clarity di admin.

---

## Epic 8 — Documentation, Testimonial, and Trust Content

**Goal:** memperkuat trust dengan bukti nyata.

**Priority:** P1

### Story 8.1 — Gallery/documentation module ready
**Outcome:** dokumentasi jamaah bisa tampil rapi dan aman.

**Tasks:**
1. Definisikan model `GalleryItem`.
2. Tambahkan field title/alt/category/location.
3. Tambahkan field featured/published.
4. Tambahkan consent status.
5. Buat grid gallery page.
6. Buat homepage preview gallery.

### Story 8.2 — Testimonial module ready
**Outcome:** testimoni tampil rapi dan lebih kredibel.

**Tasks:**
1. Definisikan model `Testimonial`.
2. Tambahkan quote/name/origin/photo.
3. Tambahkan verified flag.
4. Tambahkan consent status.
5. Buat homepage testimonial preview.
6. Buat halaman testimoni penuh bila diperlukan.

### Story 8.3 — Asset safety workflow ready
**Outcome:** aset tanpa consent tidak lolos ke publik.

**Tasks:**
1. Definisikan consent states.
2. Blok publish untuk restricted assets.
3. Tambahkan admin guidance untuk usage rights.
4. Tambahkan QA checklist asset.

---

## Epic 9 — FAQ, Article, and Content Engine

**Goal:** membantu conversion dan SEO lewat edukasi konten.

**Priority:** P1

### Story 9.1 — FAQ module ready
**Outcome:** keberatan dasar user terjawab.

**Tasks:**
1. Definisikan model `FAQ`.
2. Tambahkan field question/answer/category/featured.
3. Buat section FAQ homepage.
4. Buat halaman FAQ penuh.
5. Hubungkan FAQ ke CTA WhatsApp.

### Story 9.2 — Article module ready
**Outcome:** tim bisa publish artikel edukasi dan SEO.

**Tasks:**
1. Definisikan model `Article`.
2. Tambahkan field slug/excerpt/content/category.
3. Tambahkan SEO fields.
4. Buat listing artikel.
5. Buat detail artikel.
6. Tambahkan article rich content rendering.

### Story 9.3 — Launch content pack ready
**Outcome:** website tidak launch kosong secara SEO/content.

**Tasks:**
1. Siapkan 6 judul artikel launch.
2. Tulis/masukkan 6 artikel awal.
3. Tautkan artikel ke CTA dan halaman lain.
4. Verifikasi kualitas excerpt/title/meta.

---

## Epic 10 — SEO Foundation & Discoverability

**Goal:** website punya pondasi SEO lokal yang masuk akal sejak hari pertama.

**Priority:** P1

### Story 10.1 — Technical SEO baseline ready
**Outcome:** semua halaman inti siap di-crawl dan diberi metadata benar.

**Tasks:**
1. Buat metadata defaults.
2. Tambahkan per-page title/description.
3. Tambahkan canonical.
4. Tambahkan Open Graph fields.
5. Generate sitemap XML.
6. Generate robots.txt.

### Story 10.2 — Local SEO signals ready
**Outcome:** situs lebih relevan untuk keyword Bone.

**Tasks:**
1. Pastikan copy homepage mengandung intent lokal Bone.
2. Pastikan contact/about/legal pages reinforce locality.
3. Tambahkan structured data relevan bila dipilih.
4. Tautkan article ke pages transaksional.

### Story 10.3 — SEO governance ready
**Outcome:** admin tidak asal publish tanpa elemen minimum SEO.

**Tasks:**
1. Tambahkan field SEO minimum pada article/package.
2. Tambahkan validation atau warning.
3. Buat checklist internal SEO publish.

---

## Epic 11 — Analytics & Measurement

**Goal:** tim bisa tahu apa yang bekerja dan apa yang tidak.

**Priority:** P1

### Story 11.1 — Analytics foundation ready
**Outcome:** event inti tercatat.

**Tasks:**
1. Pilih provider analytics.
2. Pasang tracking page view.
3. Pasang tracking click_daftar.
4. Pasang tracking click_whatsapp.
5. Pasang tracking view_package_detail.
6. Pasang tracking submit_lead_form.
7. Pasang tracking submit_inquiry_form jika ada.

### Story 11.2 — Event taxonomy documented
**Outcome:** implementasi tracking konsisten.

**Tasks:**
1. Dokumentasikan event names.
2. Dokumentasikan required properties.
3. Dokumentasikan naming convention.
4. Verifikasi semua event kritis terkirim.

---

## Epic 12 — Trust Pages: About, Legal, Contact

**Goal:** menyediakan tempat validasi mendalam bagi user dan keluarga.

**Priority:** P1

### Story 12.1 — About/Company page ready
**Outcome:** user mengerti siapa Mazaya dan posisi lokalnya.

**Tasks:**
1. Buat struktur halaman tentang kami.
2. Tampilkan profil singkat perusahaan.
3. Tampilkan positioning dan nilai utama.
4. Tampilkan CTA ke paket/kontak.

### Story 12.2 — Legal page ready
**Outcome:** legalitas bisa dibaca dalam satu halaman khusus.

**Tasks:**
1. Buat halaman legalitas.
2. Render seluruh legalitas verified.
3. Tampilkan disclaimer bila perlu.
4. Jaga konsistensi istilah legal.

### Story 12.3 — Contact page ready
**Outcome:** user tahu cara menghubungi dan menemukan kantor.

**Tasks:**
1. Buat halaman kontak.
2. Tampilkan alamat Bone.
3. Tampilkan nomor utama/WA.
4. Tampilkan email.
5. Tampilkan maps link bila ada.
6. Tambahkan CTA daftar/konsultasi.

---

## Epic 13 — Design System & UI Consistency

**Goal:** memastikan seluruh public site terasa satu produk yang matang.

**Priority:** P1

### Story 13.1 — Core design tokens ready
**Outcome:** spacing, colors, typography tidak acak.

**Tasks:**
1. Definisikan color roles.
2. Definisikan type scale.
3. Definisikan spacing scale.
4. Definisikan button variants.
5. Definisikan card styles.

### Story 13.2 — Reusable UI patterns ready
**Outcome:** halaman-halaman bisa dirakit cepat dan konsisten.

**Tasks:**
1. Buat section heading pattern.
2. Buat CTA block pattern.
3. Buat trust card pattern.
4. Buat package card pattern.
5. Buat FAQ accordion pattern.
6. Buat form field pattern.

---

## Epic 14 — Privacy, Security, and Safe Data Handling

**Goal:** data sensitif user tidak diperlakukan sembarangan.

**Priority:** P0

### Story 14.1 — Privacy compliance basic ready
**Outcome:** user tahu datanya dikumpulkan dengan sadar.

**Tasks:**
1. Buat halaman kebijakan privasi.
2. Tambahkan link privacy di footer.
3. Tambahkan link privacy di form.
4. Simpan consent timestamp.

### Story 14.2 — Sensitive upload handling ready
**Outcome:** KTP dan data sensitif aman.

**Tasks:**
1. Definisikan allowed MIME types.
2. Definisikan max file size.
3. Pisahkan storage access policy.
4. Hindari public direct file exposure.
5. Tangani upload errors aman.

### Story 14.3 — Production safety ready
**Outcome:** tidak ada debug/error internal bocor ke publik.

**Tasks:**
1. Matikan error detail di production.
2. Pastikan custom error pages aman.
3. Audit no debug leak di public route.
4. Audit env safety.

---

## Epic 15 — QA, Launch Readiness, and Stabilization

**Goal:** launch aman, rapi, dan tidak memalukan.

**Priority:** P0

### Story 15.1 — Content QA ready
**Outcome:** situs tidak launch dengan data salah atau kosong.

**Tasks:**
1. Audit legalitas final.
2. Audit alamat/kontak/email.
3. Audit paket active/future only.
4. Audit artikel minimal 6.
5. Audit FAQ minimal.
6. Audit placeholder removal.

### Story 15.2 — Responsive and UX QA ready
**Outcome:** website enak dipakai di mobile.

**Tasks:**
1. Uji header mobile.
2. Uji hero CTA visibility.
3. Uji package card readability.
4. Uji form usability.
5. Uji sticky WhatsApp/CTA behavior.

### Story 15.3 — Functional launch QA ready
**Outcome:** jalur conversion utama terbukti jalan.

**Tasks:**
1. Test homepage → detail paket.
2. Test detail paket → daftar.
3. Test form submit success.
4. Test lead masuk admin.
5. Test WhatsApp CTA.
6. Test archived package hidden.

### Story 15.4 — Performance and SEO QA ready
**Outcome:** site layak launch secara teknis.

**Tasks:**
1. Audit homepage performance.
2. Audit image optimization.
3. Audit metadata per page.
4. Audit sitemap/robots.
5. Audit noindex issues.

---

# 5. Dependency Map

## Hard dependencies
- Epic 1 → fondasi semua epic lain
- Epic 2 → dibutuhkan Epic 3, 12
- Epic 4 → dibutuhkan Epic 5
- Epic 5 → dibutuhkan launch funnel
- Epic 7 → dibutuhkan semua update konten internal
- Epic 14 → wajib sebelum launch form pendaftaran
- Epic 15 → terakhir sebelum go-live

## Soft dependencies
- Epic 8 dan 9 bisa berjalan paralel setelah CMS dasar siap
- Epic 10 bisa berjalan paralel dengan Epic 9
- Epic 13 sebaiknya berjalan sejak awal, tapi refinement bisa bertahap

---

# 6. MVP Cut Line

## Wajib launch (P0)
- project foundation
- company settings source of truth
- homepage
- package listing
- package detail
- registration form
- WhatsApp CTA
- CMS admin dasar
- lead storage + status
- privacy consent
- production safety
- launch QA

## Sangat dianjurkan ikut launch (P1)
- dokumentasi/gallery
- testimonials
- FAQ
- 6 artikel
- SEO baseline
- analytics
- legal page khusus
- contact/about yang solid

## Bisa menyusul (P2-ish / post-launch)
- optimization dashboard
- advanced CRM
- portal agen
- member area
- automation follow-up

---

# 7. Suggested Execution Order

1. Epic 1 — Product Foundation & Project Setup
2. Epic 2 — Company Source of Truth & Trust Data
3. Epic 7 — CMS for Non-Technical Admin
4. Epic 4 — Package Discovery System
5. Epic 3 — Homepage Conversion Funnel
6. Epic 6 — WhatsApp Conversion Layer
7. Epic 5 — Registration Funnel & Lead Capture
8. Epic 12 — Trust Pages
9. Epic 8 — Documentation, Testimonial, and Trust Content
10. Epic 9 — FAQ, Article, and Content Engine
11. Epic 10 — SEO Foundation & Discoverability
12. Epic 11 — Analytics & Measurement
13. Epic 14 — Privacy, Security, and Safe Data Handling
14. Epic 13 — Design System & UI Consistency refinement
15. Epic 15 — QA, Launch Readiness, and Stabilization

---

# 8. Risk Notes

## Biggest delivery risks
1. legalitas belum final/terverifikasi
2. asset consent belum aman
3. copy/content launch terlambat
4. package data tidak disiplin
5. admin UX terlalu rumit untuk tim non-teknis
6. homepage kebanyakan section dan kehilangan hierarchy

## Mitigation
- jadikan company settings + legal workflow prioritas awal
- pakai featured content, jangan tampilkan semua sekaligus
- lock launch content minimum jauh sebelum build selesai
- jangan overbuild auth/CRM/admin complexity

---

# 9. Definition of Done

Suatu story dianggap selesai bila:
- requirement utamanya terpenuhi
- acceptance behavior bisa diverifikasi
- tidak merusak flow funnel utama
- sudah diuji minimal pada mobile
- bila terkait konten sensitif/trust, sudah lolos QA konten

Suatu epic dianggap selesai bila:
- semua story P0/P1 di epic itu selesai sesuai cut line yang disepakati
- dependency ke epic berikutnya tidak lagi blocking
- tidak ada blocker launch kritis tersisa dari epic tersebut

---

# 10. Rekomendasi Langkah Setelah Dokumen Ini

Setelah breakdown ini, artefak paling masuk akal berikutnya:
1. **CMS Content Model Spec** — field-level detail per collection
2. **Page-by-Page Content Matrix** — kebutuhan konten tiap halaman
3. **Wireframe Spec** — layout low-fidelity per route utama
4. **Implementation Plan** — task-by-task coding order
