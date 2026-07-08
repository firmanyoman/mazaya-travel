# Mazaya Travel Website Rebuild — Product Requirements Document

**Version:** 1.1
**Date:** 2026-07-07
**Author:** PRD Generator
**Status:** Draft (Expanded)

## Executive Summary
Mazaya Travel Website Rebuild adalah proyek pembangunan ulang website publik Mazaya Travel untuk meningkatkan lead jamaah Umrah/Haji dari market lokal Bone sekaligus membangun fondasi CMS yang rapi untuk operasional konten jangka panjang. Produk ini ditujukan terutama untuk calon jamaah, keluarga pengambil keputusan, dan admin non-teknis yang akan mengelola paket, legalitas, dokumentasi, FAQ, testimonial, dan artikel. Masalah utama situs lama adalah informasi yang membingungkan, trust architecture yang lemah, data paket basi, konten yang tidak konsisten, dan pengalaman conversion yang tidak terarah. Hasil yang diharapkan adalah website public-facing yang lebih meyakinkan, mudah dipahami, mudah di-update, SEO-friendly, dan mendorong lebih banyak klik WhatsApp, pendaftaran, serta peningkatan closing rate.

## Product Vision
Membangun website Mazaya Travel sebagai **mesin trust lokal Bone + mesin lead jamaah** yang terasa resmi, menenangkan, hangat, dan mudah dipahami oleh calon jamaah maupun keluarganya.

## Product Positioning
**Daftar Umrah Lebih Tenang Bersama Travel Resmi dan Terpercaya di Bone**

## Brand Direction Summary
- **Brand pillars:** resmi, terpercaya, lokal Bone, amanah, berkah
- **Tone:** syar’i, hangat, menenangkan, jelas, tidak berisik
- **Visual intent:** bersih, tenang, trust-first, cukup premium tanpa terasa jauh atau terlalu korporat
- **Design system baseline:** gunakan sistem visual `Mazaya Amanah Teal` sebagai foundation frontend dan source of truth visual lintas halaman.
- **Color strategy:** warna logo asli (`#61C7C3` dan `#F0EB20`) dipertahankan sebagai brand accents, tetapi UI utama ditambatkan pada deep teal `#0F5B5B`, warm ivory `#F7F3E8`, surface putih, dan text ink teal `#123434` untuk menghindari kesan pucat atau murah.
- **Typography baseline:** Plus Jakarta Sans sebagai font tunggal launch untuk marketing pages dan UI dasar.
- **Layout baseline:** max container 1200px, spacing system kelipatan 8px, section padding 96/64/48, radius utama 20px pada cards dan 12px pada buttons/inputs.
- **CTA hierarchy rule:** satu viewport/section besar maksimal satu CTA dominan; `Daftar Sekarang` tetap primary CTA, `WhatsApp Konsultasi` tetap secondary CTA.
- **Accessibility baseline:** kombinasi warna utama wajib mengikuti WCAG AA; turquoise tidak boleh dipakai untuk body text panjang di atas putih dan kuning tidak boleh dipakai sebagai background section besar.

## Problem Statement

**Current state:**
Situs Mazaya Travel saat ini sudah memuat informasi dasar perusahaan, paket, dokumentasi, testimoni, dan beberapa formulir layanan, tetapi arsitektur informasinya lemah, fokus conversion tidak jelas, dan beberapa data terlihat basi atau tidak konsisten. Temuan inventaris juga menunjukkan inkonsistensi email/kontak/legalitas, paket yang sudah lewat masih tercantum, serta error teknis yang terekspos ke publik.

**Pain points:**
1. Pengunjung tidak cepat memahami kenapa Mazaya layak dipercaya dibanding travel lain.
2. Homepage belum berfungsi sebagai funnel conversion untuk mendorong pendaftaran atau konsultasi.
3. Paket keberangkatan lama masih terlihat sebagai paket aktif, menurunkan trust.
4. Konten legalitas, kontak, dan identitas brand belum konsisten.
5. Tim admin non-teknis belum didukung sistem CMS yang rapi untuk update paket, dokumentasi, FAQ, legalitas, dan artikel.
6. Tidak ada operating model konten yang jelas untuk menjaga data tetap akurat setelah launch.
7. Belum ada struktur SEO lokal Bone yang cukup tajam untuk menangkap intent pencarian regional.

**Impact:**
Jika tidak dibenahi, website akan terus gagal menjadi mesin lead utama, mengurangi kepercayaan calon jamaah lokal Bone, memperlemah conversion ke WhatsApp dan pendaftaran, menghambat closing rate, serta menurunkan efisiensi tim saat mengelola konten, paket, dan data legalitas.

## Goals & Success Metrics

| Goal | Metric | Target | Measurement Method |
|------|--------|--------|-------------------|
| Meningkatkan intent daftar | CTR tombol Daftar Sekarang di homepage | >= 8% dari unique homepage visitors dalam 90 hari awal | Analytics event tracking |
| Meningkatkan intent konsultasi | CTR WhatsApp Konsultasi | >= 12% dari unique homepage visitors dalam 90 hari awal | Analytics + outbound click tracking |
| Meningkatkan lead masuk | Form submission rate | >= 3% dari unique visitors ke halaman paket/detail paket | Form analytics |
| Mendukung closing rate lebih baik | Lead dengan data lengkap | >= 80% lead masuk memiliki data valid minimum | CRM/CMS lead records |
| Memperbaiki maintainability konten | Waktu update paket oleh admin | <= 10 menit untuk membuat paket baru | UAT dengan admin non-teknis |
| Menjaga kualitas public site | Paket kedaluwarsa tampil publik | 0 paket expired berstatus active di public site | QA + scheduled content validation |
| Menjaga kualitas SEO awal | Artikel published saat launch | >= 6 artikel berkualitas | CMS content audit |
| Memperkuat trust signals | Legalitas utama tampil konsisten di seluruh public site | 100% konsisten | Content QA checklist |

## Non-Goals (V1)
- Portal agen dengan auth khusus dan dashboard komisi
- Portal jamaah/member area
- Payment gateway online
- Automation CRM lanjutan seperti assignment, reminders, pipeline reporting kompleks
- Multi-branch operating system kompleks
- Fitur booking tiket/visa/merchandise sebagai core conversion flow homepage

## User Personas

#### Calon Jamaah Utama
- **Role:** Pengunjung utama website / calon pembeli paket Umrah/Haji
- **Goals:** Menemukan travel resmi di Bone, memahami paket, dan mendaftar dengan tenang
- **Pain points:** Takut travel tidak resmi, informasi tidak jelas, bingung langkah daftar
- **Technical proficiency:** Low to Medium
- **Usage context:** Mengakses website dari mobile setelah melihat info dari teman, sosial media, atau pencarian Google

#### Keluarga / Pendamping Pengambil Keputusan
- **Role:** Pasangan, anak, atau anggota keluarga yang ikut memvalidasi keputusan
- **Goals:** Memastikan travel aman, legal, jelas alamatnya, dan punya jejak nyata
- **Pain points:** Curiga pada klaim berlebihan, sulit membedakan travel terpercaya dan tidak
- **Technical proficiency:** Low to Medium
- **Usage context:** Membuka halaman legalitas, dokumentasi, testimoni, dan kontak sebelum menyarankan keputusan

#### Admin Non-Teknis
- **Role:** Staf internal Mazaya yang mengelola paket, dokumentasi, artikel, FAQ, legalitas, dan lead status
- **Goals:** Mengupdate konten website tanpa bantuan developer
- **Pain points:** UI admin rumit, data paket mudah salah, proses publikasi lambat, risk salah tampil info sensitif
- **Technical proficiency:** Low
- **Usage context:** Login ke admin panel beberapa kali per minggu untuk update paket aktif, artikel, dokumentasi, legalitas, dan status lead

## Sitemap & Route Strategy

### Public Routes V1
- `/` — Homepage
- `/paket-umrah` — Listing paket Umrah
- `/paket-haji` — Listing paket Haji
- `/paket/[slug]` — Detail paket
- `/tentang-kami` — Profil perusahaan + legalitas + tim
- `/legalitas` — Halaman legalitas khusus
- `/dokumentasi` — Gallery/dokumentasi jamaah
- `/testimoni` — Testimoni jamaah
- `/artikel` — Listing artikel
- `/artikel/[slug]` — Detail artikel
- `/faq` — FAQ lengkap
- `/kontak` — Kontak, maps, CTA
- `/daftar/[slug]` — Form pendaftaran paket berbasis slug paket
- `/kebijakan-privasi` — Privacy policy
- `/syarat-ketentuan` — Terms dasar bila diperlukan

### Admin / CMS Scope
- `/admin` atau default Payload route
- Collections/globals minimum:
  - CompanySettings
  - Package
  - Lead
  - Testimonial
  - GalleryItem
  - Article
  - FAQ
  - Navigation/Menu (opsional jika diperlukan)

### Navigation Priority
Header public:
- Beranda
- Paket Umrah
- Paket Haji
- Tentang Kami
- Dokumentasi
- Testimoni
- Artikel
- Kontak
- CTA Daftar Sekarang

### Footer Priority
- Ringkasan brand
- Legalitas singkat
- Kontak utama
- Alamat Bone
- Quick links
- Kebijakan privasi
- Syarat & ketentuan

## Goals by Release Phase

### Phase 0 — Discovery & Content Foundation
- finalisasi PRD
- finalisasi blueprint homepage
- finalisasi sitemap
- finalisasi design direction dan brand system awal
- finalisasi source of truth legalitas, alamat, nomor, email
- inventaris asset final + status izin pakai/consent
- menyiapkan minimal 6 artikel launch

### Phase 1 — MVP Public Website Launch
- homepage conversion-first
- paket umrah/haji listing
- detail paket
- form pendaftaran
- CTA WhatsApp
- tentang kami / legalitas / kontak
- dokumentasi
- testimoni
- FAQ
- artikel (minimal 6)
- CMS untuk update semua konten inti
- simple lead CRM status

### Phase 2 — Post-launch Optimization
- A/B improvement copy/CTA bila perlu
- perbaikan funnel berdasarkan analytics
- peningkatan internal workflow konten
- enhancement SEO tambahan
- pengayaan gallery/testimoni/artikel

### Phase 3 — Future Expansion
- portal agen
- dashboard reporting lead lebih lanjut
- automation follow-up
- member area jamaah

## Functional Requirements

#### FR-001: Homepage High-Conversion

**Description:** Sistem menyediakan homepage public yang menyusun trust, paket, dan CTA secara conversion-first.

**User story:** As a calon jamaah, I want to understand quickly why Mazaya is trustworthy and what action to take so that I can decide whether to register or consult.

**Acceptance criteria:**
- [ ] Homepage menampilkan headline positioning utama dan subheadline yang jelas di first screen.
- [ ] CTA **Daftar Sekarang** terlihat tanpa scroll pada viewport mobile umum width 360–430px.
- [ ] CTA **WhatsApp Konsultasi** tersedia sebagai CTA sekunder di hero.
- [ ] Homepage memuat section trust, paket unggulan, cara daftar, dokumentasi, legalitas, testimoni, FAQ, dan CTA penutup.
- [ ] Semua section utama dapat dikelola lewat CMS kecuali layout shell.
- [ ] Homepage menonjolkan identitas lokal Bone secara natural, bukan hanya disebut sekali.

**Priority:** P0

**Dependencies:** FR-003, FR-004, FR-005, FR-006, FR-007, FR-008, FR-010, FR-015

#### FR-002: Navigasi Public Website

**Description:** Sistem menyediakan struktur navigasi public yang sederhana dan fokus pada journey calon jamaah.

**User story:** As a pengunjung, I want to move quickly between paket, profil, dokumentasi, artikel, dan kontak so that I can find the right information without confusion.

**Acceptance criteria:**
- [ ] Navbar desktop memuat Beranda, Paket Umrah, Paket Haji, Tentang Kami, Dokumentasi, Testimoni, Artikel, dan Kontak.
- [ ] Tombol **Daftar Sekarang** tampil sebagai CTA utama di header desktop dan mobile menu.
- [ ] Header menjadi sticky setelah user scroll melewati hero.
- [ ] Mobile navigation dapat dibuka/ditutup dengan state yang aksesibel.
- [ ] Footer menampilkan quick links, kontak, legalitas singkat, dan privacy link.

**Priority:** P0

**Dependencies:** FR-001

#### FR-003: Paket Listing dan Detail Paket

**Description:** Sistem menyediakan listing paket aktif dan halaman detail paket dengan informasi yang mudah dipindai.

**User story:** As a calon jamaah, I want to compare available packages and view details so that I can choose the package that fits my needs.

**Acceptance criteria:**
- [ ] Halaman Paket Umrah menampilkan hanya paket berstatus `active` atau `sold_out`.
- [ ] Halaman Paket Haji mengikuti rule public visibility yang sama.
- [ ] Paket diurutkan berdasarkan tanggal keberangkatan terdekat.
- [ ] Setiap card paket menampilkan nama paket, tanggal, durasi, kota keberangkatan, maskapai, hotel, status seat, dan harga atau label `Hubungi Admin`.
- [ ] Halaman detail paket menampilkan inclusions, exclusions, itinerary summary, syarat daftar, CTA daftar, dan CTA WhatsApp.
- [ ] Paket berstatus `sold_out` tidak menampilkan CTA daftar aktif.
- [ ] Paket dengan tanggal keberangkatan lampau tidak pernah tampil sebagai `active` di public site.

**Priority:** P0

**Dependencies:** FR-010, FR-011

#### FR-004: Form Pendaftaran Paket

**Description:** Sistem menyediakan form pendaftaran lengkap untuk calon jamaah yang memilih paket.

**User story:** As a calon jamaah, I want to submit my registration details in one clear flow so that admin can process my application without asking for basic data again.

**Acceptance criteria:**
- [ ] Form pendaftaran minimal meminta nama lengkap, nomor WhatsApp aktif, NIK, nama ayah, paket terpilih, kota domisili, jenis kelamin, tanggal lahir, dan unggahan KTP.
- [ ] Form dapat memuat field tambahan yang realistis untuk proses travel tanpa membuat friction berlebihan.
- [ ] Form menampilkan checkbox persetujuan kebijakan privasi sebelum submit.
- [ ] Validasi client dan server menolak field wajib kosong atau format nomor telepon tidak valid.
- [ ] File KTP hanya menerima MIME type yang diizinkan dan ukuran maksimum yang ditentukan konfigurasi.
- [ ] Setelah submit berhasil, lead tersimpan dengan status `baru` dan user diarahkan ke langkah konfirmasi WhatsApp admin.
- [ ] Sistem mengaitkan lead dengan paket yang dipilih.

**Priority:** P0

**Dependencies:** FR-003, FR-009, FR-012, FR-023

#### FR-005: CTA WhatsApp Consultation

**Description:** Sistem menyediakan integrasi CTA WhatsApp untuk user yang belum siap daftar atau butuh bantuan.

**User story:** As a calon jamaah, I want to contact admin via WhatsApp from any important page so that I can ask questions before registering.

**Acceptance criteria:**
- [ ] CTA WhatsApp tersedia di hero, detail paket, FAQ, CTA penutup, dan sticky mobile action bar.
- [ ] Link WhatsApp dapat menyertakan prefilled message sesuai konteks halaman bila tersedia.
- [ ] Klik CTA WhatsApp tercatat sebagai analytics event.
- [ ] Jika nomor WhatsApp belum dikonfigurasi, CTA tidak dirender pada public site production.

**Priority:** P0

**Dependencies:** FR-010, FR-014

#### FR-006: Dokumentasi / Gallery

**Description:** Sistem menyediakan halaman dan section dokumentasi jamaah berbasis gallery yang membangun trust.

**User story:** As a calon jamaah or family member, I want to see real documentation from past trips so that I trust Mazaya more.

**Acceptance criteria:**
- [ ] Homepage menampilkan minimal 6 item dokumentasi unggulan.
- [ ] Halaman dokumentasi penuh menampilkan listing gallery dengan image optimization.
- [ ] Setiap item gallery memiliki judul, alt text, kategori, dan consent status internal.
- [ ] Hanya item gallery yang berstatus publish yang tampil ke publik.
- [ ] Item dengan consent status `restricted` tidak dapat dipublish.

**Priority:** P1

**Dependencies:** FR-010, FR-013, FR-021

#### FR-007: Testimoni Jamaah

**Description:** Sistem menyediakan section dan halaman testimoni yang dapat dikelola admin.

**User story:** As a pengunjung, I want to read testimonials from real jamaah so that I feel more confident to proceed.

**Acceptance criteria:**
- [ ] Homepage menampilkan minimal 3 testimoni unggulan.
- [ ] Testimoni memuat nama, kutipan, dan optional kota/asal serta foto bila ada izin.
- [ ] Admin dapat menandai testimonial sebagai verified/unverified secara internal.
- [ ] Hanya testimonial publish yang tampil di public site.

**Priority:** P1

**Dependencies:** FR-010, FR-021

#### FR-008: FAQ dan Edukasi Keraguan Dasar

**Description:** Sistem menyediakan FAQ yang menjawab pertanyaan umum calon jamaah.

**User story:** As a calon jamaah, I want answers to common questions so that I can proceed without unnecessary hesitation.

**Acceptance criteria:**
- [ ] Homepage menampilkan FAQ accordion dengan minimal 8 pertanyaan saat launch.
- [ ] FAQ mencakup legalitas, cara daftar, harga, dokumen, kota keberangkatan, pendampingan, dan seat availability.
- [ ] Setiap jawaban FAQ dapat diedit dari CMS.
- [ ] CTA WhatsApp kecil tersedia di section FAQ.

**Priority:** P1

**Dependencies:** FR-010

#### FR-009: Simple Lead CRM

**Description:** Sistem menyediakan penyimpanan lead sederhana untuk pendaftaran dan konsultasi.

**User story:** As an admin, I want incoming leads stored with status so that I can track follow-up work.

**Acceptance criteria:**
- [ ] Lead tersimpan dengan status enum: `baru`, `dihubungi`, `follow_up`, `closing`, `gagal`.
- [ ] Admin dapat melihat detail lead, mengubah status, dan menambahkan catatan internal.
- [ ] Lead menampilkan source halaman/form asal jika tersedia.
- [ ] Lead dapat difilter berdasarkan status dan tanggal masuk.
- [ ] Public user tidak memiliki akses ke halaman lead.

**Priority:** P0

**Dependencies:** FR-004, FR-010, FR-012

#### FR-010: CMS untuk Admin Non-Teknis

**Description:** Sistem menyediakan admin panel user-friendly untuk mengelola konten public website.

**User story:** As an admin non-teknis, I want to manage website content without developer help so that content stays fresh and accurate.

**Acceptance criteria:**
- [ ] Admin dapat CRUD paket, artikel, FAQ, testimonial, gallery, dan company settings.
- [ ] Admin dapat menyimpan entry sebagai draft sebelum publish.
- [ ] UI admin mendukung field help text untuk field penting seperti legalitas, status paket, dan alt text.
- [ ] Role minimum `admin` tersedia untuk akses panel.
- [ ] Konten yang belum publish tidak tampil di public site.

**Priority:** P0

**Dependencies:** FR-011, FR-012, FR-013, FR-015, FR-021

#### FR-011: Status Paket Dinamis dan Arsip

**Description:** Sistem mengelola lifecycle paket agar data basi tidak tampil sebagai aktif.

**User story:** As an admin, I want package statuses to reflect reality so that the public site stays trustworthy.

**Acceptance criteria:**
- [ ] Package status mendukung `draft`, `active`, `sold_out`, dan `archived`.
- [ ] Paket dengan departure date lampau bisa diarsipkan manual dari admin.
- [ ] Public queries hanya mengambil package status yang diizinkan.
- [ ] Admin melihat status jelas di listing packages.
- [ ] Paket archived tetap tersimpan untuk referensi internal dan tidak muncul di public site.

**Priority:** P0

**Dependencies:** FR-010

#### FR-012: Upload Aman untuk Dokumen Sensitif

**Description:** Sistem menangani unggahan KTP dan file sensitif secara aman.

**User story:** As an admin and business owner, I want sensitive uploads handled securely so that user data is protected.

**Acceptance criteria:**
- [ ] File upload divalidasi berdasarkan MIME type dan ukuran maksimum.
- [ ] File sensitif tidak disajikan langsung dari public URL tanpa kontrol akses.
- [ ] Metadata file tercatat pada record lead.
- [ ] Pesan error upload tidak membocorkan detail server.

**Priority:** P0

**Dependencies:** FR-004, FR-009

#### FR-013: Artikel / Blog

**Description:** Sistem menyediakan modul artikel untuk SEO dan edukasi calon jamaah.

**User story:** As a calon jamaah discovering Mazaya from search, I want useful articles so that I trust the brand and understand the service better.

**Acceptance criteria:**
- [ ] Saat launch tersedia minimal 6 artikel published.
- [ ] Halaman listing artikel menampilkan title, excerpt, category, thumbnail optional, dan tanggal publish.
- [ ] Halaman detail artikel mendukung heading, paragraf, gambar, dan metadata SEO.
- [ ] Artikel dapat di-draft dan dipublish manual oleh admin.
- [ ] URL artikel SEO-friendly dan menggunakan slug unik.

**Priority:** P1

**Dependencies:** FR-010, FR-018

#### FR-014: Analytics dan Event Tracking

**Description:** Sistem mencatat event conversion utama dari website public.

**User story:** As a business owner, I want to measure which pages and CTAs generate leads so that I can improve the site over time.

**Acceptance criteria:**
- [ ] Event tracked minimal: page_view, click_daftar, click_whatsapp, submit_lead_form, view_package_detail.
- [ ] Event dapat dibedakan berdasarkan halaman sumber.
- [ ] Implementasi analytics tidak memperlambat first contentful render secara signifikan.
- [ ] Tracking bisa dimatikan dari environment/config saat dibutuhkan.
- [ ] Event names dan properties terdokumentasi untuk tim.

**Priority:** P1

**Dependencies:** FR-001, FR-003, FR-004, FR-005

#### FR-015: Legalitas dan Company Settings

**Description:** Sistem menyediakan halaman/section legalitas dan pengaturan informasi perusahaan sebagai source of truth.

**User story:** As a family decision-maker, I want to verify company identity and legal details so that I trust the business.

**Acceptance criteria:**
- [ ] Homepage menampilkan ringkasan legalitas dan identitas perusahaan.
- [ ] Halaman legalitas/tentang menampilkan seluruh legalitas yang telah diverifikasi tim internal.
- [ ] Informasi nama PT, alamat, nomor kontak, email, dan nomor legal berasal dari satu record company settings.
- [ ] Jika ada field legalitas kosong, section public hanya menampilkan data yang sudah diisi.
- [ ] Tidak ada inkonsistensi alamat, email, atau nomor telepon antarhalaman.

**Priority:** P0

**Dependencies:** FR-010, FR-020

#### FR-016: Contact & Office Trust Layer

**Description:** Sistem menyediakan halaman kontak dan trust layer lokasi kantor untuk meningkatkan kedekatan lokal.

**User story:** As a calon jamaah Bone, I want to know where the office is and how to contact the team so that I feel safer dealing with a local business.

**Acceptance criteria:**
- [ ] Halaman kontak menampilkan alamat Bone, nomor utama, WhatsApp, email, dan maps link bila tersedia.
- [ ] Homepage memiliki trust mention yang menekankan basis operasional Bone.
- [ ] CTA kunjungi kantor optional dapat dimunculkan bila bisnis menginginkan.

**Priority:** P1

**Dependencies:** FR-015

#### FR-017: Homepage Design System Alignment

**Description:** Sistem public mengikuti design direction yang konsisten dengan tone syar’i, hangat, dan terpercaya.

**User story:** As a user, I want the website to feel calm and trustworthy so that the brand appears more professional.

**Acceptance criteria:**
- [ ] CTA hierarchy konsisten di seluruh halaman utama.
- [ ] Typography, spacing, color, dan card patterns konsisten.
- [ ] Tidak ada section visual yang terasa terlalu ramai atau mengaburkan CTA utama.
- [ ] Motion/animation hanya dipakai sebagai enhancement non-kritis.
- [ ] Implementasi visual mengikuti design system `Mazaya Amanah Teal` / `DESIGN.md` project root sebagai source of truth visual.
- [ ] Deep teal `#0F5B5B` menjadi warna aksi utama untuk CTA primer dan emphasis utama.
- [ ] Brand teal `#61C7C3` dipakai sebagai accent saja, bukan warna body text panjang atau warna dominan section besar.
- [ ] Brand yellow `#F0EB20` hanya dipakai untuk micro highlight atau promo chip, bukan background section besar atau CTA utama global.
- [ ] Background utama halaman menggunakan warm ivory `#F7F3E8` dengan white surface untuk cards/forms.
- [ ] Typography launch menggunakan Plus Jakarta Sans secara konsisten.
- [ ] Card radius, button radius, input radius, dan spacing system mengikuti token design system yang disepakati.

**Priority:** P1

**Dependencies:** FR-001, FR-002

#### FR-018: SEO Foundation

**Description:** Sistem menyediakan fondasi SEO teknis dan konten untuk target pasar lokal Bone.

**User story:** As a business owner, I want the site discoverable on search for local intent so that more qualified visitors find Mazaya organically.

**Acceptance criteria:**
- [ ] Semua halaman public memiliki title, meta description, canonical, OG, dan structured data yang relevan.
- [ ] Sitemap XML dan robots.txt tersedia.
- [ ] Homepage dan halaman paket menargetkan keyword lokal Bone secara natural.
- [ ] Artikel mendukung internal linking ke paket, legalitas, atau CTA konsultasi.
- [ ] Halaman legalitas, kontak, dan tentang saling mendukung trust + local SEO.

**Priority:** P1

**Dependencies:** FR-013, FR-015

#### FR-019: Content Governance

**Description:** Sistem dan proses mendukung kontrol mutu konten setelah launch.

**User story:** As an admin, I want publishing rules that reduce accidental errors so that public content remains accurate.

**Acceptance criteria:**
- [ ] Entry paket, legalitas, dan artikel memiliki status draft/published.
- [ ] Admin memiliki panduan field-level untuk konten kritis.
- [ ] Checklist QA konten tersedia untuk pre-publish package dan legalitas.
- [ ] Konten tanpa field wajib tidak bisa dipublish bila memang critical.

**Priority:** P1

**Dependencies:** FR-010, FR-015

#### FR-020: Legal Verification Workflow

**Description:** Sistem dan workflow memastikan hanya legalitas yang sudah diverifikasi yang tampil ke publik.

**User story:** As a business owner, I want all legal information verified before display so that trust increases instead of creating risk.

**Acceptance criteria:**
- [ ] Setiap item legalitas memiliki field status verifikasi internal.
- [ ] Hanya item legalitas verified yang dapat tampil publik.
- [ ] Catatan verifikasi internal dapat disimpan untuk referensi admin.

**Priority:** P1

**Dependencies:** FR-015, FR-010

#### FR-021: Asset Consent & Usage Control

**Description:** Sistem dan workflow menjaga agar hanya aset dengan hak pakai/consent yang benar yang digunakan publik.

**User story:** As a business owner, I want to avoid using photos without proper approval so that the site remains safe and professional.

**Acceptance criteria:**
- [ ] Gallery dan testimonial photo entries memiliki consent status.
- [ ] Asset tanpa consent yang jelas tidak bisa dipublish sebagai public media utama.
- [ ] Admin dapat menandai asset sebagai restricted.

**Priority:** P1

**Dependencies:** FR-006, FR-007, FR-010

#### FR-022: Launch Readiness Checklist Support

**Description:** Proyek harus memiliki artefak readiness untuk memastikan launch public aman.

**User story:** As a project owner, I want a final readiness checklist so that launch does not go live with missing critical pieces.

**Acceptance criteria:**
- [ ] Ada checklist internal untuk legalitas, kontak, paket aktif, artikel minimum, FAQ, privacy policy, dan analytics.
- [ ] Ada checklist QA responsive untuk homepage dan form.
- [ ] Ada checklist content consistency sebelum go-live.

**Priority:** P1

**Dependencies:** FR-018, FR-019, FR-020, FR-021

#### FR-023: Privacy & Consent Compliance

**Description:** Sistem harus menampilkan dan menegakkan persetujuan privasi pada flow data sensitif.

**User story:** As a user, I want to know my personal data is collected responsibly so that I feel safe submitting information.

**Acceptance criteria:**
- [ ] Form pendaftaran dan inquiry menampilkan persetujuan kebijakan privasi.
- [ ] Timestamp persetujuan tersimpan di lead record.
- [ ] Halaman kebijakan privasi dapat diakses dari footer dan form.

**Priority:** P0

**Dependencies:** FR-004, FR-009

## Non-Functional Requirements

#### Performance
- Homepage LCP target: < 2.5 detik pada koneksi mobile 4G simulasi untuk asset produksi teroptimasi.
- TTFB public pages: < 800ms pada warm request.
- API response time untuk operasi read umum: < 500ms p95.
- Listing paket homepage harus dapat dirender tanpa blocking request berantai yang tidak perlu.

#### Security
- Authentication method admin: Payload CMS auth internal untuk MVP.
- Seluruh trafik production wajib HTTPS.
- Data sensitif terenkripsi in transit.
- File sensitif disimpan dengan akses terbatas.
- Error produksi tidak boleh menampilkan stack trace, path server, atau detail internal.
- Form wajib memiliki server-side validation dan CSRF protection sesuai framework/CMS yang dipakai.

#### Scalability
- Expected initial load: 100–300 unique visitors per hari pada fase awal.
- Growth target: 10x traffic tanpa rewrite arsitektur public dalam 12 bulan.
- Arsitektur harus mendukung penambahan halaman, paket, artikel, gallery, dan lead tanpa perubahan schema mayor.

#### Availability
- Uptime target public site: 99.5% minimum.
- Backup database: daily backup minimum.
- RPO target: <= 24 jam.
- RTO target: <= 8 jam untuk insiden non-kritis.

#### Accessibility
- Semua tombol CTA dapat diakses via keyboard.
- Kontras teks dan tombol memenuhi WCAG AA sejauh praktis untuk MVP.
- Mobile tap target minimum 44x44 px untuk CTA penting.

#### SEO
- Semua halaman public memiliki title, meta description, canonical URL, dan Open Graph fields.
- Struktur heading semantic per page.
- Sitemap XML dan robots.txt tersedia.

#### Maintainability
- Semua data identitas inti berasal dari source of truth yang tunggal.
- Semua collection kritis punya aturan publish yang jelas.
- Admin non-teknis bisa mengupdate paket dan artikel tanpa perlu deploy ulang.

## Technical Architecture

#### System Overview
Sistem akan dibangun sebagai website public berbasis Next.js App Router dengan Payload CMS sebagai admin backend dan content layer utama. Public pages mengambil data dari source CMS yang sama untuk memastikan konsistensi paket, legalitas, FAQ, artikel, dan dokumentasi. Lead dari form pendaftaran disimpan ke database PostgreSQL melalui layer Payload sehingga admin non-teknis bisa mengelola lead status dari satu panel. Sistem juga harus memisahkan media public biasa dan dokumen sensitif seperti KTP dari sisi akses dan proses publish.

#### Technology Stack
- **Frontend:** Next.js (App Router), TypeScript
- **Backend:** Payload CMS (Node.js runtime), TypeScript
- **Database:** PostgreSQL
- **Hosting:** Vercel untuk public app; opsi Coolify untuk deployment alternatif/self-hosted
- **Styling:** Tailwind CSS, shadcn/ui
- **Validation:** Zod
- **Animation:** GSAP secukupnya untuk enhancement non-kritis
- **Auth:** Payload auth untuk admin MVP

#### Architecture Diagram (Description)
User mengakses halaman public Next.js → halaman merender konten dari collections Payload yang tersimpan di PostgreSQL → user klik CTA daftar atau konsultasi → form submit ke server action/API layer → lead tervalidasi dan disimpan ke collection leads → user diarahkan ke langkah konfirmasi WhatsApp → admin login ke Payload CMS untuk mengelola paket, legalitas, artikel, FAQ, gallery, testimonial, dan lead status. Asset gambar public dimuat lewat image optimization/CDN, sedangkan upload sensitif diperlakukan terpisah dengan akses terbatas dan tidak disajikan sebagai media public langsung.

## API Specifications

#### GET /api/packages

**Purpose:** Mengambil daftar paket public yang dapat ditampilkan di listing/homepage.

**Authentication:** None

**Request:**
```json
{
  "category": "optional string — umrah or haji",
  "status": "optional string — active or sold_out",
  "featured": "optional boolean",
  "page": "optional number"
}
```

**Response (200):**
```json
{
  "items": [
    {
      "id": "uuid",
      "slug": "silver-oktober-2026",
      "title": "Silver Oktober 2026",
      "category": "umrah",
      "departureDate": "2026-10-27",
      "priceMode": "public",
      "price": 30900000,
      "remainingSeats": 12,
      "status": "active"
    }
  ],
  "page": 1,
  "totalPages": 1
}
```

**Error responses:**
- 400: query filter tidak valid
- 500: kesalahan server internal

#### GET /api/packages/:slug

**Purpose:** Mengambil detail satu paket public.

**Authentication:** None

**Request:**
```json
{
  "slug": "string — package slug"
}
```

**Response (200):**
```json
{
  "id": "uuid",
  "title": "Silver Oktober 2026",
  "category": "umrah",
  "departureDate": "2026-10-27",
  "durationDays": 12,
  "departureCity": "Makassar",
  "airline": "Lion Air",
  "makkahHotel": "Sawaed",
  "madinahHotel": "Rua International",
  "priceMode": "public",
  "price": 30900000,
  "minimumDeposit": 5000000,
  "remainingSeats": 12,
  "status": "active",
  "inclusions": ["Tiket PP", "Hotel", "Muttawif"],
  "exclusions": ["Pengeluaran pribadi"]
}
```

**Error responses:**
- 404: paket tidak ditemukan atau tidak publish
- 500: kesalahan server internal

#### POST /api/leads/register

**Purpose:** Menerima form pendaftaran paket.

**Authentication:** None

**Request:**
```json
{
  "packageId": "uuid — selected package",
  "fullName": "string — nama lengkap",
  "nik": "string — nomor identitas",
  "fatherName": "string — nama ayah",
  "phone": "string — nomor WhatsApp aktif",
  "gender": "string — male or female",
  "birthDate": "string — ISO date",
  "city": "string — domisili",
  "notes": "string — optional catatan",
  "privacyConsent": true
}
```

**Response (200):**
```json
{
  "success": true,
  "leadId": "uuid",
  "status": "baru",
  "nextStep": "redirect_whatsapp"
}
```

**Error responses:**
- 400: field wajib kurang / format salah
- 413: file upload terlalu besar
- 422: paket tidak dapat didaftarkan
- 500: kesalahan server internal

#### POST /api/leads/inquiry

**Purpose:** Menyimpan lead konsultasi non-pendaftaran.

**Authentication:** None

**Request:**
```json
{
  "fullName": "string — nama lengkap",
  "phone": "string — nomor WhatsApp aktif",
  "interest": "string — paket/minat",
  "message": "string — pesan user",
  "source": "string — page source",
  "privacyConsent": true
}
```

**Response (200):**
```json
{
  "success": true,
  "leadId": "uuid",
  "status": "baru"
}
```

**Error responses:**
- 400: validasi gagal
- 500: kesalahan server internal

## UI/UX Requirements

#### Homepage

**Purpose:** Membangun trust dan mendorong lead action dari trafik utama.

**Key elements:**
- Hero section: headline positioning, subheadline, dua CTA
- Trust strip: legalitas/identitas/keunggulan inti
- Kenapa pilih Mazaya
- Paket unggulan: 3–4 card paket aktif
- Cara daftar: 4 langkah jelas
- Dokumentasi, legalitas, testimoni, FAQ, CTA penutup

**User flow:**
1. User mendarat di homepage
2. User memahami value proposition dan identitas Bone
3. User klik paket atau tombol daftar
4. User masuk ke detail paket atau form pendaftaran

**States:**
- Empty state: jika belum ada paket unggulan, tampilkan CTA konsultasi dan link semua paket
- Loading state: skeleton ringan untuk card paket
- Error state: fallback message tanpa detail server, tetap tampilkan CTA WhatsApp

#### Paket Listing Page

**Purpose:** Menampilkan daftar paket aktif yang mudah dipindai.

**Key elements:**
- Filter kategori sederhana
- Cards paket dengan status/harga/seat/CTA
- Empty state bila belum ada paket aktif

**User flow:**
1. User membuka halaman paket
2. User memindai daftar
3. User klik detail paket atau daftar

**States:**
- Empty state: “Belum ada paket aktif saat ini” + CTA WhatsApp
- Loading state: skeleton list
- Error state: pesan ringan + CTA WhatsApp

#### Package Detail Page

**Purpose:** Memberi informasi cukup sebelum user mengisi form daftar.

**Key elements:**
- Summary paket
- Fasilitas/inclusions dan exclusions
- Syarat dokumen
- CTA Daftar dan WhatsApp
- Legal micro trust snippets bila relevan

**User flow:**
1. User membuka detail paket
2. User membaca ringkasan dan fasilitas
3. User klik daftar atau konsultasi

**States:**
- Empty state: tidak berlaku
- Loading state: skeleton detail
- Error state: 404 not found / paket tidak tersedia

#### Registration Form Page

**Purpose:** Mengumpulkan data pendaftaran awal yang cukup untuk proses travel.

**Key elements:**
- Informasi paket terpilih
- Form field wajib
- Upload KTP
- Consent privacy
- Submit button

**User flow:**
1. User memilih paket
2. User mengisi data lengkap
3. Submit berhasil
4. User diarahkan ke langkah konfirmasi WhatsApp admin

**States:**
- Empty state: jika package context hilang, arahkan kembali ke daftar paket
- Loading state: disable submit + spinner
- Error state: field-level validation + global error aman

#### About/Legal Page

**Purpose:** Menjadi pusat informasi trust mendalam.

**Key elements:**
- profil perusahaan
- legalitas
- alamat dan kontak
- tim/pembimbing bila siap
- CTA daftar/konsultasi

**User flow:**
1. User mencari validasi trust
2. User membaca identitas dan legalitas
3. User pindah ke kontak atau daftar

**States:**
- Empty state: section tanpa data tidak dirender
- Loading state: standard page skeleton
- Error state: fallback aman

#### Admin CMS

**Purpose:** Mengelola konten dan lead tanpa bantuan developer.

**Key elements:**
- Sidebar collections
- List, create, edit, publish flows
- Lead status management
- Help text dan validation yang jelas

**User flow:**
1. Admin login
2. Admin memilih collection
3. Admin membuat/mengubah entry
4. Entry disimpan draft/publish

**States:**
- Empty state: belum ada konten/lead
- Loading state: standard CMS loading
- Error state: message jelas, tanpa stack trace

## Data Models

#### CompanySettings

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| legalName | string | Yes | Nama PT resmi |
| brandName | string | Yes | Nama brand publik |
| address | text | Yes | Alamat kantor utama |
| city | string | Yes | Kota utama, default Bone |
| province | string | Yes | Provinsi |
| primaryPhone | string | Yes | Nomor kontak utama |
| whatsappNumber | string | Yes | Nomor WhatsApp utama |
| primaryEmail | string | Yes | Email resmi utama |
| secondaryEmails | json[] | No | Email tambahan bila ada |
| legalities | json[] | No | Daftar izin/legalitas terverifikasi |
| mapsUrl | string | No | Link maps kantor |
| socialLinks | json | No | Tautan sosial aktif |
| heroSettings | json | No | Copy/CTA config homepage |
| seoDefaults | json | No | Default SEO settings |
| createdAt | timestamp | Yes | Creation timestamp |
| updatedAt | timestamp | Yes | Update timestamp |

**Relationships:**
- None

**Indexes:**
- primaryEmail — validasi uniqueness bila dibutuhkan

#### Package

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| title | string | Yes | Nama paket |
| slug | string | Yes | URL slug |
| category | enum | Yes | umrah / haji |
| tier | string | No | Silver/Gold/Platinum dll |
| departureDate | date | Yes | Tanggal keberangkatan |
| durationDays | integer | Yes | Durasi paket |
| departureCity | string | Yes | Kota keberangkatan |
| airline | string | No | Maskapai |
| makkahHotel | string | No | Hotel Makkah |
| madinahHotel | string | No | Hotel Madinah |
| priceMode | enum | Yes | public / contact |
| price | integer | No | Harga jika public |
| minimumDeposit | integer | No | DP minimum |
| totalSeats | integer | No | Seat total |
| remainingSeats | integer | No | Seat tersisa |
| inclusions | json[] | No | Fasilitas |
| exclusions | json[] | No | Yang tidak termasuk |
| brochure | media | No | File brosur |
| featured | boolean | Yes | Tampil unggulan atau tidak |
| status | enum | Yes | draft/active/sold_out/archived |
| seoTitle | string | No | SEO title |
| seoDescription | text | No | SEO meta description |
| createdAt | timestamp | Yes | Creation timestamp |
| updatedAt | timestamp | Yes | Update timestamp |

**Relationships:**
- One-to-many to Lead

**Indexes:**
- slug — route lookup
- status, category, departureDate — public listing queries

#### Lead

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| leadType | enum | Yes | registration / inquiry |
| packageId | UUID | No | Relasi ke package |
| fullName | string | Yes | Nama lengkap |
| phone | string | Yes | WhatsApp aktif |
| nik | string | No | Nomor identitas |
| fatherName | string | No | Nama ayah |
| gender | enum | No | male / female |
| birthDate | date | No | Tanggal lahir |
| city | string | No | Domisili |
| notes | text | No | Catatan dari user/admin |
| ktpFile | media | No | Upload KTP |
| status | enum | Yes | baru/dihubungi/follow_up/closing/gagal |
| source | string | No | Halaman/form asal |
| privacyConsentAt | timestamp | Yes | Waktu persetujuan |
| submittedAt | timestamp | Yes | Waktu submit |
| updatedAt | timestamp | Yes | Waktu update |

**Relationships:**
- Many-to-one to Package

**Indexes:**
- status, submittedAt — CRM filter
- packageId — reporting sederhana

#### Testimonial

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| customerName | string | Yes | Nama jamaah |
| quote | text | Yes | Isi testimoni |
| originCity | string | No | Asal kota |
| travelDate | date | No | Tanggal perjalanan |
| photo | media | No | Foto jamaah |
| consentStatus | enum | Yes | approved / unknown / restricted |
| verified | boolean | Yes | Flag terverifikasi internal |
| published | boolean | Yes | Tampil publik atau tidak |
| createdAt | timestamp | Yes | Creation timestamp |
| updatedAt | timestamp | Yes | Update timestamp |

**Relationships:**
- None

**Indexes:**
- published — public fetch

#### GalleryItem

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| title | string | Yes | Judul item gallery |
| image | media | Yes | Asset gambar |
| altText | string | Yes | Alt text gambar |
| category | string | No | Kategori gallery |
| location | string | No | Lokasi foto |
| featured | boolean | Yes | Tampil di homepage atau tidak |
| consentStatus | enum | Yes | approved / unknown / restricted |
| published | boolean | Yes | Tampil publik atau tidak |
| createdAt | timestamp | Yes | Creation timestamp |
| updatedAt | timestamp | Yes | Update timestamp |

**Relationships:**
- None

**Indexes:**
- featured, published — homepage/gallery queries

#### Article

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| title | string | Yes | Judul artikel |
| slug | string | Yes | URL slug |
| excerpt | text | Yes | Ringkasan artikel |
| content | richtext | Yes | Isi artikel |
| category | string | No | Kategori artikel |
| thumbnail | media | No | Thumbnail |
| seoTitle | string | No | SEO title |
| seoDescription | text | No | SEO meta description |
| publishedAt | timestamp | No | Waktu publish |
| status | enum | Yes | draft / published |
| createdAt | timestamp | Yes | Creation timestamp |
| updatedAt | timestamp | Yes | Update timestamp |

**Relationships:**
- None

**Indexes:**
- slug — detail route
- status, publishedAt — listing queries

#### FAQ

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| question | string | Yes | Pertanyaan |
| answer | richtext/text | Yes | Jawaban |
| category | string | No | Kategori FAQ |
| featured | boolean | Yes | Tampil di homepage atau tidak |
| published | boolean | Yes | Status tampil publik |
| sortOrder | integer | No | Urutan tampil |
| createdAt | timestamp | Yes | Creation timestamp |
| updatedAt | timestamp | Yes | Update timestamp |

**Relationships:**
- None

**Indexes:**
- featured, published, sortOrder — homepage/FAQ queries

## Integration Points

#### WhatsApp Deep Link

**Purpose:** Mengarahkan user ke konsultasi atau konfirmasi pendaftaran melalui WhatsApp.

**Integration type:** Deep link / URL scheme

**Data exchanged:**
- Inbound: none
- Outbound: nomor tujuan dan prefilled text

**Authentication:** None

**Rate limits:** N/A

**Fallback behavior:** Jika nomor belum dikonfigurasi, tombol tidak dirender atau diganti informasi kontak biasa.

#### Analytics Provider

**Purpose:** Mengukur conversion event dan behavior dasar website.

**Integration type:** SDK / script

**Data exchanged:**
- Inbound: event acknowledgement / dashboard data via vendor
- Outbound: page_view, CTA click, form submit, detail package view

**Authentication:** API key / project config

**Rate limits:** Sesuai vendor

**Fallback behavior:** Jika analytics gagal load, website tetap berfungsi normal tanpa tracking.

## Analytics Event Taxonomy

| Event Name | Trigger | Required Properties |
|---|---|---|
| page_view | Halaman public diload | page_path, page_type |
| click_daftar | CTA daftar diklik | page_path, section, package_slug? |
| click_whatsapp | CTA WhatsApp diklik | page_path, section, context |
| view_package_detail | Halaman detail paket dibuka | package_slug, category |
| submit_lead_form | Form pendaftaran sukses | package_slug, source_page |
| submit_inquiry_form | Form konsultasi sukses | source_page |
| click_article | Artikel diklik | article_slug, source_page |

## SEO & Content Strategy Requirements

### Local SEO Direction
Target keyword cluster awal:
- travel umrah bone
- travel umrah terpercaya di bone
- travel umrah resmi bone
- paket umrah bone
- travel haji umrah bone

### Content Requirements at Launch
- minimal 6 artikel published
- minimal 1 artikel yang menjelaskan cara memilih travel umrah terpercaya
- minimal 1 artikel yang menjelaskan alur pendaftaran umrah
- minimal 1 artikel yang menegaskan pentingnya legalitas travel
- artikel harus punya CTA halus ke paket atau WhatsApp

### Internal Linking Rules
- homepage → paket umrah / legalitas / kontak
- artikel → paket relevan / FAQ / kontak
- halaman detail paket → daftar / WhatsApp / FAQ
- tentang/legalitas → kontak / paket / CTA daftar

## Asset & Content Operations Requirements

### Asset Categories
- logo resmi
- hero image utama
- dokumentasi jamaah
- legality evidence assets
- article thumbnails
- brochure packages

### Asset Rules
- aset public harus punya status usage/consent
- aset sensitif tidak boleh tercampur dengan asset public sembarang
- semua alt text harus manusiawi dan deskriptif
- file placeholder tidak boleh tayang di production

### Content Ops Rules
- package publish harus melewati QA data inti
- artikel publish harus punya title, excerpt, slug, SEO fields minimum
- legalitas publish harus terverifikasi
- testimonial publish harus punya consent status aman

## Edge Cases & Error Handling

#### Edge Cases

| Scenario | Expected Behavior |
|----------|-------------------|
| Paket active tapi departure date sudah lampau | Paket tidak tampil di public site; admin perlu ubah status atau sistem memblok query public |
| Harga paket belum boleh tampil publik | Card/detail tampil label `Hubungi Admin` tanpa angka harga |
| User submit form tanpa upload KTP | Submit ditolak jika KTP diwajibkan pada flow launch |
| File upload melebihi batas | Tampilkan error user-friendly, file tidak disimpan |
| Nomor WhatsApp company belum dikonfigurasi | CTA WhatsApp tidak tampil |
| Belum ada paket aktif | Halaman paket/homepage tetap tampil dengan empty state + CTA konsultasi |
| Artikel kurang dari 6 saat prelaunch QA | Release gate gagal sampai konten minimum terpenuhi atau requirement diturunkan resmi |
| Legalitas belum diverifikasi penuh | Hanya data yang sudah diverifikasi yang tampil publik |
| Asset consent tidak aman | Asset tidak dapat dipublish ke public section |

#### Error Handling Strategy
- **User-facing errors:** Tampilkan pesan singkat, jelas, tidak teknis, dalam bahasa Indonesia.
- **System errors:** Log ke server/observability tanpa mengekspos path internal.
- **Retry logic:** Retry terbatas hanya untuk operasi non-mutating atau upload transient bila aman.
- **Graceful degradation:** Jika analytics atau CTA WhatsApp context gagal, public pages tetap render dan form utama tetap berfungsi.

## Testing Requirements

#### Unit Tests
- Zod validators untuk lead form, package filters, company settings
- Helper untuk package status/public visibility
- Utility builder untuk WhatsApp prefilled message
- Utility untuk SEO metadata builders

#### Integration Tests
- Submit form pendaftaran → lead tersimpan → status `baru`
- Package listing hanya mengambil status public valid
- Admin CRUD paket/article/FAQ/testimonial/gallery
- Legalitas public mengambil data dari CompanySettings tunggal
- Restricted asset tidak dapat tampil publik

#### E2E Tests
- User journey homepage → package detail → form daftar → success state
- User journey homepage → WhatsApp CTA
- Admin login → create package → publish → tampil di public site
- Admin archive package → package hilang dari public listing
- Admin publish artikel → artikel muncul di listing publik

#### Performance Tests
- Homepage render dengan 3–4 featured packages dan 6 gallery items tetap mencapai LCP < 2.5s pada mobile test profile
- Detail package page dengan gambar dan metadata tetap TTFB sesuai target

## Epic & Story Map

### Epic 1 — Trust Foundation
**Goal:** memastikan user langsung percaya pada Mazaya di first visit.

**Stories:**
- Sebagai calon jamaah, saya ingin melihat travel resmi dan identitas Bone di hero agar saya merasa lebih aman.
- Sebagai anggota keluarga, saya ingin melihat legalitas dan alamat kantor yang konsisten agar saya yakin ini bisnis nyata.
- Sebagai pengunjung, saya ingin melihat dokumentasi dan testimoni nyata agar saya percaya Mazaya punya jejak pelayanan.

### Epic 2 — Package Discovery & Selection
**Goal:** memudahkan user menemukan dan membandingkan paket aktif.

**Stories:**
- Sebagai calon jamaah, saya ingin melihat paket aktif yang rapi agar saya bisa cepat memilih.
- Sebagai user, saya ingin melihat harga atau status hubungi admin agar ekspektasi saya jelas.
- Sebagai user, saya ingin detail fasilitas dan seat agar saya bisa mengambil keputusan.

### Epic 3 — Registration Funnel
**Goal:** membuat flow daftar jelas dan tidak membingungkan.

**Stories:**
- Sebagai calon jamaah, saya ingin alur pilih paket → isi form → konfirmasi WA agar saya paham langkah berikutnya.
- Sebagai admin, saya ingin lead masuk dengan data cukup lengkap agar follow-up lebih efektif.
- Sebagai business owner, saya ingin semua form menghormati privasi data agar proses lebih aman.

### Epic 4 — Consultation Funnel
**Goal:** menangkap user yang belum siap daftar.

**Stories:**
- Sebagai user yang masih ragu, saya ingin tombol WhatsApp terlihat jelas agar saya bisa bertanya dulu.
- Sebagai owner, saya ingin klik WhatsApp terukur agar tahu section mana paling efektif.

### Epic 5 — CMS & Content Governance
**Goal:** memberi tim admin non-teknis kemampuan mengelola website tanpa developer.

**Stories:**
- Sebagai admin, saya ingin CRUD paket, artikel, dan dokumentasi dari panel yang mudah dipakai.
- Sebagai admin, saya ingin status draft/publish agar bisa cek konten sebelum tayang.
- Sebagai admin, saya ingin help text di field penting agar kecil risiko salah input.

### Epic 6 — SEO & Content Engine
**Goal:** membuat website dapat menarik traffic organik lokal dan mendidik user.

**Stories:**
- Sebagai calon jamaah yang datang dari Google, saya ingin menemukan artikel yang relevan agar saya lebih percaya.
- Sebagai owner, saya ingin keyword lokal Bone tertanam natural agar peluang traffic organik meningkat.
- Sebagai editor, saya ingin struktur artikel mudah diisi dan dioptimasi.

### Epic 7 — Readiness, QA, and Safe Launch
**Goal:** memastikan website siap launch tanpa missing critical info.

**Stories:**
- Sebagai owner, saya ingin legalitas, kontak, dan paket aktif tervalidasi sebelum launch.
- Sebagai tim, saya ingin checklist QA agar tidak ada paket basi, placeholder, atau error publik.
- Sebagai user, saya ingin website cepat dan stabil saat diakses dari mobile.

## Development Phase Breakdown

### Sprint/Phase A — Foundation
- project setup
- Payload collections/global skeleton
- CompanySettings source of truth
- basic route shell
- design tokens awal

### Sprint/Phase B — Core Public Funnel
- homepage
- package listing
- package detail
- WhatsApp CTA plumbing
- contact/about/legality pages

### Sprint/Phase C — Registration & Leads
- registration form
- secure upload
- lead storage
- admin lead status update
- privacy policy integration

### Sprint/Phase D — Content & SEO
- article module
- FAQ module
- gallery/documentation
- testimonial module
- metadata + sitemap + robots

### Sprint/Phase E — Launch Hardening
- analytics events
- responsive QA
- performance pass
- content consistency QA
- launch checklist signoff

## Launch Readiness Checklist

### Product Readiness
- [ ] homepage final copy disetujui
- [ ] CTA hierarchy final disetujui
- [ ] semua route public utama berjalan

### Content Readiness
- [ ] minimal 6 artikel published
- [ ] FAQ minimum terpenuhi
- [ ] paket aktif final sudah dicek
- [ ] semua placeholder hilang

### Trust Readiness
- [ ] legalitas terverifikasi
- [ ] alamat/kontak/email konsisten
- [ ] dokumentasi yang dipublish aman dipakai
- [ ] testimoni yang dipublish aman dipakai

### Technical Readiness
- [ ] analytics aktif
- [ ] metadata SEO aktif
- [ ] robots.txt dan sitemap tersedia
- [ ] error pages aman
- [ ] no debug info di production

### QA Readiness
- [ ] mobile homepage checked
- [ ] form submit success tested
- [ ] package visibility logic tested
- [ ] CTA WhatsApp tested

## Implementation Notes for AI

#### Build Order
1. Setup project shell: Next.js + Payload + PostgreSQL + Tailwind + shadcn/ui
2. Definisikan collections utama: CompanySettings, Package, Lead, Article, Testimonial, GalleryItem, FAQ
3. Implement auth admin Payload untuk panel internal
4. Implement public data fetch layer untuk homepage, packages, articles, company settings
5. Bangun homepage conversion-first dengan konten dinamis dari CMS
6. Bangun package listing dan package detail
7. Bangun lead registration form dan secure upload flow
8. Bangun simple lead CRM status management di admin
9. Bangun article module, documentation, testimonials, FAQ
10. Tambahkan analytics, SEO metadata, hardening, launch checklist support, dan QA

#### File Structure Suggestion
```text
/src
  /app
    /(public)
      /page.tsx
      /paket-umrah/page.tsx
      /paket-haji/page.tsx
      /paket/[slug]/page.tsx
      /artikel/page.tsx
      /artikel/[slug]/page.tsx
      /dokumentasi/page.tsx
      /tentang-kami/page.tsx
      /legalitas/page.tsx
      /kontak/page.tsx
      /faq/page.tsx
      /daftar/[slug]/page.tsx
      /kebijakan-privasi/page.tsx
    /(payload)
  /components
    /layout
    /sections
    /packages
    /forms
    /shared
  /lib
    /cms
    /validation
    /analytics
    /whatsapp
    /seo
  /payload
    /collections
    /globals
  /types
  /styles
```

#### Critical Implementation Details
- Satu source of truth untuk identitas perusahaan: `CompanySettings` global/collection tunggal.
- Jangan tampilkan package dengan status atau tanggal yang tidak valid di public layer.
- Bedakan asset public images dan upload sensitif; jangan reuse storage policy yang sama tanpa kontrol.
- CTA utama selalu `Daftar Sekarang`; jangan biarkan CTA sekunder menyaingi hierarchy visual.
- Semua copy public awal disiapkan dalam bahasa Indonesia.
- Buat field help text admin untuk mencegah salah input legalitas, seat, dan harga.
- Rancang struktur komponen homepage per section agar mudah diganti isi dari CMS tanpa refactor layout besar.

#### Code Style Preferences
- TypeScript strict mode
- Server-first bila memungkinkan untuk page rendering public
- Nama file route dan komponen konsisten, deskriptif, lowercase untuk route
- Schema validation dekat dengan boundary input
- Hindari abstraction berlebih; pilih struktur boring dan eksplisit

#### Libraries to Use
- Payload CMS untuk admin/content/auth — paling cocok untuk admin non-teknis dan content-heavy site
- Zod untuk validation — type-safe di boundary input
- Tailwind CSS untuk styling — cepat dan konsisten
- shadcn/ui untuk komponen dasar — kontrol penuh, tidak terlalu opinionated
- GSAP hanya untuk motion enhancement minor — bukan core dependency UX

#### Libraries to Avoid
- Better Auth untuk MVP — redundant dengan auth Payload selama belum ada portal custom
- Drizzle untuk MVP — hindari dual schema ownership kecuali ada kebutuhan domain custom kuat
- UI animation library berlebih — risiko perf dan kompleksitas tidak perlu

#### Common Pitfalls
- **Data legalitas tidak konsisten:** pastikan mapping field public dari satu sumber tunggal.
- **Paket basi tampil aktif:** filter public harus ketat, bukan mengandalkan disiplin admin semata.
- **Form terlalu pendek:** jangan korbankan kualitas lead demi friction rendah; ambil data minimum yang realistis untuk travel.
- **Form terlalu panjang dan menakutkan:** urutkan field dengan microcopy yang menenangkan.
- **Upload KTP tidak aman:** jangan expose direct URL public untuk file sensitif.
- **Homepage terlalu ramai:** jaga hierarchy; layanan tambahan jangan mencuri fokus dari funnel utama.
- **Admin workflow terlalu bebas:** tambahkan status, help text, dan publish rules.

#### Testing Approach
- Tulis unit tests untuk validator, package visibility logic, CTA builder, dan metadata helpers
- Tulis integration tests untuk lead submission dan admin package publish/archive flow
- Tulis E2E untuk 2 jalur kritis: daftar paket dan konsultasi WhatsApp
- Skip snapshot tests untuk section dekoratif; fokus ke behavior dan data integrity

## Assumptions
- Launch v1 memprioritaskan homepage + public site, bukan dashboard operasional kompleks.
- Admin/CMS tetap tersedia pada fase launch agar konten public bisa dikelola tim non-teknis.
- Semua legalitas boleh ditampilkan setelah diverifikasi internal Mazaya.
- Artikel launch minimal 6 buah akan disiapkan sebelum go-live.
- Market utama tetap lokal Bone walau site tetap dapat diakses nasional.
- Homepage tetap menjadi prioritas tertinggi dalam seluruh sequence pengembangan.

## Open Questions
- Field final pendaftaran apakah perlu menambahkan paspor atau cukup KTP untuk lead awal?
- Apakah tim/pembimbing siap ditampilkan di launch, atau menyusul setelah asset/foto final tersedia?
- Apakah alamat cabang/operasional selain Bone akan tampil, atau homepage hanya fokus 1 lokasi utama?
- Apakah inquiry form non-WhatsApp benar-benar dibutuhkan di launch, atau CTA WhatsApp cukup sebagai jalur konsultasi sekunder?

## Out of Scope for V1
- Portal agen khusus dengan auth terpisah
- Portal jamaah / member area
- Payment gateway online
- Multi-branch operational workflow kompleks
- Automation CRM lanjutan seperti reminder, assignment, dan pipeline analytics detail
- Fitur booking tiket/visa/merchandise sebagai core conversion flow homepage
- Pengelolaan layanan tambahan sebagai funnel utama di public homepage
