# Mazaya Travel — Payload Implementation Spec

> Status: Planning  
> Project: Mazaya Travel Website Rebuild  
> Target: implementasi Payload CMS untuk public site + admin non-teknis

---

## 1. Tujuan Dokumen

Dokumen ini menerjemahkan CMS Content Model Spec menjadi arah implementasi teknis Payload:
- globals/collections apa yang dibuat
- field types apa yang dipakai
- hook/validation apa yang dibutuhkan
- access rules apa yang perlu dijaga
- admin UX bagaimana sebaiknya dibentuk
- query patterns apa yang harus mudah diambil frontend

Dokumen ini bukan kode final, tapi cukup dekat untuk langsung dipakai implementasi.

---

## 2. Payload Architecture Direction

### Core approach
- gunakan Payload sebagai source of truth konten
- gunakan globals untuk singleton settings
- gunakan collections untuk entities berulang
- gunakan field groups/tabs agar admin non-teknis tidak bingung
- gunakan hooks untuk mencegah publish berbahaya
- jangan taruh logic layout di CMS; taruh hanya konten dan visibility control
- frontend implementation harus membaca design tokens dari `DESIGN.md` / design system foundation, bukan menyebar nilai visual acak per komponen

### Recommended top-level structure
- `src/payload/globals/`
- `src/payload/collections/`
- `src/payload/fields/`
- `src/payload/access/`
- `src/payload/hooks/`
- `src/payload/utils/`

---

## 3. Globals to Implement

## 3.1 `companySettings`

### Config direction
- type: global
- access: read internal + public through frontend server query layer
- versioning: optional, nice-to-have

### Field groups/tabs
1. Company Identity
2. Contact Info
3. Social & Maps
4. Trust Summary

### Important field types
- `text` for names/city/province
- `textarea` for address/trust summary
- `email` for primaryEmail
- `array` for secondaryEmails
- `checkbox` for publish toggle

### Hooks
- normalize WhatsApp number before save if practical
- trim empty secondary email values

---

## 3.2 `homepageSettings`

### Config direction
- type: global
- access: internal admin edit only

### Field groups/tabs
1. Hero
2. Trust Strip
3. Why Choose Us
4. Registration Steps
5. Closing CTA
6. Homepage References

### Key field type choices
- `array` for trust badges
- `array` for why choose us items
- `array` for registration steps
- `relationship` many for featured FAQ/testimonial/gallery
- `upload` for heroImage

### Validation behavior
- registration steps ideal count 4
- why choose us ideal count 4–6

---

## 3.3 `seoSettings`

### Config direction
- type: global
- used as metadata fallback source

### Important fields
- base site URL
- default site title
- default meta description
- default OG image
- robots policy

### Hook recommendations
- validate absolute URL for siteUrl

---

## 4. Collections to Implement

## 4.1 `media`

### Purpose
common asset library + sensitive marker support.

### Config direction
- upload enabled
- admin thumbnail support
- mime restrictions for sensitive flows when relevant

### Extra fields
- altText
- mediaCategory
- usageRightsStatus
- isSensitive
- internalNotes

### Access considerations
- public image serving only for non-sensitive assets
- sensitive assets should not be casually selectable for public sections

### Hook recommendations
- if `isSensitive=true`, force `usageRightsStatus` non-public-safe flow

---

## 4.2 `legalDocuments`

### Purpose
verified legality proof with controlled public visibility.

### Field groups
1. Legal Identity
2. Timeline
3. Attachment
4. Verification
5. Public Display

### Important rules
- `displayOnPublicSite=true` only if `verificationStatus=verified`
- `expiresAt` optional but useful for audit

### Hook recommendations
- block save/publish if displayOnPublicSite true while status not verified
- optional warning if expiry date passed

### Admin list columns
- title
- legalType
- documentNumber
- verificationStatus
- displayOnPublicSite
- expiresAt

---

## 4.3 `packages`

### Purpose
core commercial entity for listing, detail, and registration context.

### Field tabs
1. Basic Info
2. Travel Details
3. Pricing & Seats
4. Content
5. SEO
6. Publish

### Important field types
- `text`: title, slug, tier, airline, hotels
- `select`: category, priceMode, packageStatus
- `date`: departureDate
- `number`: durationDays, price, seats, deposit
- `textarea`: packageSummary, paymentNotes
- `array`: inclusions, exclusions, requirements
- `relationship/upload`: brochureFile, ogImage

### Validation logic
- slug unique
- active package cannot have past departureDate
- public price mode requires price
- remainingSeats should not exceed totalSeats

### Hook recommendations
- auto-slug if empty
- auto-publishedAt on first publish
- soft-warning if departure قريب and remainingSeats empty

### Admin list columns
- title
- category
- departureDate
- packageStatus
- featuredOnHomepage
- remainingSeats
- priceMode

### Frontend query patterns
- featured active packages for homepage
- active/sold_out by category for listing
- detail by slug

---

## 4.4 `leads`

### Purpose
simple CRM store for registration and inquiry.

### Access direction
- no public read
- public create via controlled endpoint/server action only
- admin update allowed for notes/status

### Field tabs
1. Lead Info
2. Registration Details
3. Source & Consent
4. Internal Follow-up

### Hook recommendations
- auto-submittedAt on create
- auto-status `baru` on create
- auto-privacyConsentAt when consent true

### Validation logic
- registration requires package
- public create requires consent true

### Admin list columns
- fullName
- phone
- leadType
- package
- status
- submittedAt

### Recommended access split
- create: custom public flow only
- read/update: admin only
- delete: restrict heavily or disable in admin

---

## 4.5 `faqs`

### Purpose
structured answer bank for homepage and full FAQ page.

### Important fields
- question
- answer
- category
- featuredOnHomepage
- faqStatus
- sortOrder

### Hook recommendations
- none heavy; simple validation enough

### Admin notes
- show featured badge
- drag/sort optional if easy, else numeric sortOrder enough

---

## 4.6 `testimonials`

### Purpose
social proof with consent safety.

### Field tabs
1. Identity
2. Testimonial Content
3. Media & Package Context
4. Verification & Publish

### Important rules
- restricted consent cannot publish
- featured flag for homepage
- verified flag internal only

### Hook recommendations
- block publish if consent restricted
- optional warning if photo exists but consent unknown

### Admin list columns
- customerName
- originCity
- verified
- consentStatus
- featuredOnHomepage
- testimonialStatus

---

## 4.7 `galleryItems`

### Purpose
public documentation gallery.

### Important rules
- publish requires image + altText + safe consent
- featured flag controls homepage selection

### Hook recommendations
- block publish if consent restricted
- optional warning if altText too short

### Admin list columns
- title
- category
- consentStatus
- featuredOnHomepage
- galleryStatus

---

## 4.8 `articles`

### Purpose
SEO and education content.

### Field tabs
1. Core Content
2. Taxonomy & Relations
3. CTA
4. SEO
5. Publish

### Important rules
- publish requires title, slug, excerpt, content
- auto publishedAt when status changes to published first time

### Hook recommendations
- auto slug if empty
- trim excerpt/content blocks where possible

### Admin list columns
- title
- category
- articleStatus
- publishedAt
- featuredArticle

---

## 5. Shared Field Builders Worth Extracting

Do not over-abstract, but these are worth reusing:

1. `slugField()`
2. `seoFields()`
3. `publishStatusField()` variants
4. `featuredToggleField()`
5. `consentStatusField()`
6. `sortOrderField()`

Reason:
- repeated across articles/packages/testimonials/gallery/FAQ
- reduce config duplication

ponytail: stop at tiny field helpers only. Add bigger abstraction only if 3+ collections truly share same structure.

---

## 6. Access Control Matrix

| Model | Public Read | Public Create | Admin Read | Admin Create/Update | Admin Delete |
|---|---:|---:|---:|---:|---:|
| companySettings | indirect via frontend | No | Yes | Yes | No |
| homepageSettings | indirect via frontend | No | Yes | Yes | No |
| seoSettings | indirect via frontend | No | Yes | Yes | No |
| media | filtered only | No | Yes | Yes | Restricted |
| legalDocuments | filtered verified only | No | Yes | Yes | Restricted |
| packages | filtered public only | No | Yes | Yes | Restricted |
| leads | No | via controlled endpoint only | Yes | Yes | Very restricted |
| faqs | filtered published only | No | Yes | Yes | Restricted |
| testimonials | filtered published only | No | Yes | Yes | Restricted |
| galleryItems | filtered published only | No | Yes | Yes | Restricted |
| articles | filtered published only | No | Yes | Yes | Restricted |

### Recommended practice
Public frontend should query Payload through server-side filtered functions, not expose raw unrestricted CMS endpoints directly.

---

## 7. Hook / Validation Modules to Create

### Suggested modules
- `hooks/ensureVerifiedBeforePublic.ts`
- `hooks/ensureConsentSafeBeforePublish.ts`
- `hooks/ensureFutureDateForActivePackage.ts`
- `hooks/setPublishedAt.ts`
- `hooks/normalizeWhatsapp.ts`
- `hooks/defaultLeadStatus.ts`

### Validation utilities
- `utils/isPastDate.ts`
- `utils/normalizePhone.ts`
- `utils/isPublicPriceValid.ts`

---

## 8. Frontend Query Layer Recommendation

Use dedicated server-side query functions. Example shapes:
- `getCompanySettings()`
- `getHomepageSettings()`
- `getHomepageData()`
- `getPublishedPackagesByCategory(category)`
- `getFeaturedPackages()`
- `getPackageBySlug(slug)`
- `getPublishedArticles()`
- `getArticleBySlug(slug)`
- `getPublishedFaqs(featuredOnly?)`
- `getPublishedTestimonials(featuredOnly?)`
- `getPublishedGalleryItems(featuredOnly?)`
- `getVerifiedLegalDocuments()`

Reason:
- keep filtering logic in one place
- protect public visibility rules
- avoid duplicated query conditions across pages

---

## 9. Admin UX Implementation Notes

### Tabs/groups matter
Forms panjang harus dibagi. Prioritas:
- packages
- articles
- legalDocuments
- homepageSettings

### Status fields must be enums
No free-text status.

### Help text mandatory on trust-sensitive fields
Minimal di:
- packageStatus
- priceMode
- consentStatus
- verificationStatus
- whatsappNumber
- altText

### Prefer booleans for homepage control
- `featuredOnHomepage`
Lebih simpel daripada query builder rumit untuk admin non-teknis.

---

## 10. Seed Content Recommendation

Untuk dev/staging seed minimal:
- 1 company settings filled
- 2–3 legal documents verified sample
- 3 package samples
- 3 testimonial samples
- 6 gallery items
- 8 FAQs
- 6 articles
- 1 homepage settings filled

Reason:
- developer dan designer bisa lihat bentuk situs nyata lebih cepat

---

## 11. Implementation Order

### Phase 1 — Foundation
1. media
2. companySettings
3. seoSettings
4. homepageSettings

### Phase 2 — Trust & Commercial Data
5. legalDocuments
6. packages
7. faqs
8. testimonials
9. galleryItems

### Phase 3 — Conversion Data
10. leads
11. articles

### Phase 4 — Hardening
12. access restrictions
13. hooks/validation polish
14. seed content
15. admin UX refinement

---

## 12. Biggest Payload Risks

1. terlalu banyak flexibility di CMS → admin merusak hierarchy public page
2. public filtering tidak ketat → draft/restricted content bocor
3. media sensitif bercampur dengan media public
4. package status logic longgar → paket basi tampil
5. legal verification hanya formalitas UI tanpa enforcement hook

Mitigation:
- enforce via hooks
- frontend query layer filtered
- booleans/status enums sederhana
- singleton settings untuk identity/trust

---

## 13. Definition of Done

Payload implementation spec dianggap siap eksekusi bila:
- semua globals/collections utama sudah didefinisikan
- access direction sudah jelas
- hook list sudah jelas
- admin UX guidance cukup jelas
- frontend query layer requirement sudah jelas
