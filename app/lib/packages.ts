import { asc, eq } from 'drizzle-orm'
import { db } from '@/db'
import { packages } from '@/db/schema'

export interface LocalPackage {
  id: number
  title: string
  slug: string
  category: 'umrah' | 'haji'
  tier: string | null
  shortLabel: string | null
  departureDate: string
  durationDays: number
  departureCity: string
  airline: string | null
  makkahHotel: string | null
  madinahHotel: string | null
  priceMode: 'public' | 'contact'
  price: number | null
  minimumDeposit: number | null
  totalSeats: number | null
  remainingSeats: number | null
  packageStatus: 'active' | 'sold_out' | 'draft' | 'archived'
  featuredOnHomepage: boolean
  packageSummary: string
  inclusions: string[] | null
  exclusions: string[] | null
  requirements: string[] | null
  itinerarySummary: string | null
  paymentNotes: string | null
  badgeText: string | null
  seoTitle: string | null
  seoDescription: string | null
  ogImage: string | null
}

export const localPackages: LocalPackage[] = [
  {
    id: 1,
    title: 'Paket Umrah Ramadhan 1447H - Gold',
    slug: 'umrah-ramadhan-1447h-gold',
    category: 'umrah',
    tier: 'gold',
    shortLabel: 'Ramadhan Gold',
    departureDate: '2027-03-15',
    durationDays: 16,
    departureCity: 'Makassar',
    airline: 'Saudia Airlines',
    makkahHotel: 'Hotel Elaf Ajyad',
    madinahHotel: 'Hotel Dar Al Eiman',
    priceMode: 'public',
    price: 42500000,
    minimumDeposit: 10000000,
    totalSeats: 45,
    remainingSeats: 12,
    packageStatus: 'active',
    featuredOnHomepage: true,
    packageSummary:
      'Paket Umrah Ramadhan spesial dengan hotel bintang 4 dekat Masjidil Haram dan Masjid Nabawi. Termasuk bimbingan ibadah, muthawif berpengalaman, dan city tour Madinah.',
    inclusions: [
      'Tiket pesawat PP Makassar - Jeddah (Saudia Airlines)',
      'Visa Umrah',
      'Hotel bintang 4 di Makkah (walking distance 500m ke Masjidil Haram)',
      'Hotel bintang 4 di Madinah (walking distance 300m ke Masjid Nabawi)',
      'Makan 3x sehari (prasmanan)',
      'Bus AC full selama di Arab Saudi',
      'Pembimbing ibadah berpengalaman dari Bone',
      'Perlengkapan umrah (tas, koper, kain ihram)',
      'Ziarah Madinah dan Makkah',
      'Handling keberangkatan dan kepulangan',
      'Air zam-zam 5 liter',
      'Asuransi perjalanan',
    ],
    exclusions: [
      'Biaya pembuatan paspor',
      'Biaya vaksinasi meningitis',
      'Pengeluaran pribadi',
      'Biaya kelebihan bagasi',
      'Tips untuk muthawif dan supir (optional)',
    ],
    requirements: [
      'Paspor minimal berlaku 8 bulan',
      'KTP asli dan fotocopy',
      'Kartu Keluarga asli dan fotocopy',
      'Pas foto 4x6 background putih (4 lembar)',
      'Sertifikat vaksin meningitis',
      'Surat keterangan mahram (untuk wanita di bawah 45 tahun)',
    ],
    itinerarySummary:
      'Hari 1-2: Keberangkatan dari Makassar menuju Madinah. Hari 3-8: Di Madinah untuk shalat di Masjid Nabawi dan ziarah. Hari 9: Perjalanan Madinah-Makkah. Hari 10-15: Pelaksanaan umrah, tawaf, sai, dan ibadah di Masjidil Haram. Hari 16: Kepulangan ke Makassar.',
    paymentNotes:
      'DP minimal Rp 10.000.000 saat pendaftaran. Pelunasan paling lambat 30 hari sebelum keberangkatan. Pembayaran bisa dicicil 3x. Transfer ke rekening resmi PT Mazaya Amanah Wisata.',
    badgeText: 'Ramadhan Special',
    seoTitle: 'Paket Umrah Ramadhan 1447H Gold - Travel Umrah Bone Terpercaya',
    seoDescription:
      'Paket Umrah Ramadhan 1447H dari Bone dengan hotel bintang 4 dekat haram. Harga Rp 42.5 juta sudah termasuk tiket, visa, hotel, makan, dan bimbingan. Seat terbatas!',
    ogImage: null,
  },
  {
    id: 2,
    title: 'Paket Umrah Reguler Silver - Keberangkatan Agustus 2026',
    slug: 'umrah-reguler-agustus-2026-silver',
    category: 'umrah',
    tier: 'silver',
    shortLabel: 'Reguler Silver',
    departureDate: '2026-08-20',
    durationDays: 12,
    departureCity: 'Makassar',
    airline: 'Garuda Indonesia',
    makkahHotel: 'Hotel Ajyad Makkah',
    madinahHotel: 'Hotel Dar Al Taqwa',
    priceMode: 'public',
    price: 32000000,
    minimumDeposit: 8000000,
    totalSeats: 45,
    remainingSeats: 8,
    packageStatus: 'active',
    featuredOnHomepage: true,
    packageSummary:
      'Paket Umrah ekonomis dengan fasilitas nyaman. Hotel bintang 3 dengan jarak tempuh 10-15 menit ke Masjidil Haram dan Masjid Nabawi. Cocok untuk jamaah yang ingin hemat tanpa mengurangi kenyamanan.',
    inclusions: [
      'Tiket pesawat PP Makassar - Jeddah via Jakarta',
      'Visa Umrah',
      'Hotel bintang 3 di Makkah',
      'Hotel bintang 3 di Madinah',
      'Makan 3x sehari',
      'Bus AC selama di Arab Saudi',
      'Pembimbing ibadah dari Bone',
      'Perlengkapan umrah dasar',
      'Ziarah Makkah dan Madinah',
      'Handling bandara',
      'Air zam-zam 5 liter',
    ],
    exclusions: [
      'Biaya pembuatan paspor',
      'Biaya vaksinasi',
      'Pengeluaran pribadi',
      'Kelebihan bagasi',
    ],
    requirements: [
      'Paspor minimal berlaku 7 bulan',
      'KTP dan KK',
      'Pas foto 4x6 background putih (4 lembar)',
      'Sertifikat vaksin meningitis',
      'Surat mahram (untuk wanita < 45 tahun)',
    ],
    itinerarySummary:
      'Hari 1: Keberangkatan Makassar-Jakarta-Madinah. Hari 2-6: Beribadah di Madinah. Hari 7: Transfer ke Makkah. Hari 8-11: Pelaksanaan umrah dan ibadah di Makkah. Hari 12: Pulang ke Indonesia.',
    paymentNotes:
      'DP Rp 8 juta saat daftar. Pelunasan H-30. Bisa dicicil 2-3x. Transfer ke rekening resmi Mazaya Travel.',
    badgeText: 'Hemat',
    seoTitle: 'Paket Umrah Silver Agustus 2026 - Murah dan Terpercaya dari Bone',
    seoDescription:
      'Paket Umrah ekonomis Rp 32 juta dari Bone. Hotel bintang 3, Garuda Indonesia, bimbingan lengkap. Seat tinggal 8. Daftar sekarang!',
    ogImage: null,
  },
  {
    id: 3,
    title: 'Paket Umrah Premium Platinum - Oktober 2026',
    slug: 'umrah-premium-platinum-oktober-2026',
    category: 'umrah',
    tier: 'platinum',
    shortLabel: 'Premium Platinum',
    departureDate: '2026-10-05',
    durationDays: 20,
    departureCity: 'Makassar',
    airline: 'Saudia Airlines',
    makkahHotel: 'Swissotel Makkah',
    madinahHotel: 'Pullman Zamzam Madinah',
    priceMode: 'public',
    price: 68000000,
    minimumDeposit: 20000000,
    totalSeats: 30,
    remainingSeats: 5,
    packageStatus: 'active',
    featuredOnHomepage: true,
    packageSummary:
      'Paket Umrah premium dengan hotel bintang 5 view Masjidil Haram. Durasi lebih panjang untuk ibadah lebih maksimal. Fasilitas VIP, kamar superior, dan city tour lengkap Jeddah-Thaif.',
    inclusions: [
      'Tiket pesawat PP Business Class Makassar - Jeddah',
      'Visa Umrah',
      'Hotel bintang 5 di Makkah dengan view haram',
      'Hotel bintang 5 di Madinah dekat Masjid Nabawi',
      'Makan 3x sehari (buffet premium)',
      'Bus VIP AC selama di Arab Saudi',
      'Pembimbing ibadah profesional',
      'Perlengkapan umrah premium (koper branded, tas eksklusif)',
      'Ziarah lengkap Makkah, Madinah, Jeddah, Thaif',
      'Handling VIP keberangkatan dan kepulangan',
      'Air zam-zam 10 liter',
      'Asuransi perjalanan premium',
      'City tour Jeddah dan Thaif',
      'Laundry service',
    ],
    exclusions: ['Biaya pembuatan paspor', 'Pengeluaran pribadi'],
    requirements: [
      'Paspor minimal berlaku 8 bulan',
      'KTP dan KK',
      'Pas foto 4x6 background putih (4 lembar)',
      'Sertifikat vaksin meningitis',
      'Surat mahram (wanita < 45 tahun)',
    ],
    itinerarySummary:
      'Hari 1-2: Penerbangan Business Class ke Madinah. Hari 3-10: Beribadah di Madinah dengan ziarah lengkap. Hari 11: Transfer VIP Madinah-Makkah. Hari 12-17: Umrah, tawaf, dan ibadah di Makkah. Hari 18: City tour Jeddah dan belanja. Hari 19: Tour Thaif. Hari 20: Kepulangan.',
    paymentNotes:
      'DP Rp 20 juta saat booking. Pelunasan H-45. Cicilan bisa diatur hingga 4x. Harga sudah nett tanpa biaya tersembunyi.',
    badgeText: 'Exclusive',
    seoTitle: 'Paket Umrah Platinum Premium Oktober 2026 - Hotel Bintang 5 View Haram',
    seoDescription:
      'Paket Umrah eksklusif dengan hotel bintang 5 view Masjidil Haram. Business class, 20 hari, city tour lengkap. Hanya 5 seat tersisa!',
    ogImage: null,
  },
  {
    id: 4,
    title: 'Paket Umrah Plus Turki - November 2026',
    slug: 'umrah-plus-turki-november-2026',
    category: 'umrah',
    tier: 'gold',
    shortLabel: 'Umrah + Turki',
    departureDate: '2026-11-10',
    durationDays: 18,
    departureCity: 'Makassar',
    airline: 'Turkish Airlines',
    makkahHotel: 'Millennium Makkah',
    madinahHotel: 'Millennium Madinah',
    priceMode: 'public',
    price: 52000000,
    minimumDeposit: 15000000,
    totalSeats: 40,
    remainingSeats: 22,
    packageStatus: 'active',
    featuredOnHomepage: true,
    packageSummary:
      'Paket spesial Umrah plus wisata Turki. Setelah menunaikan umrah, jamaah akan mengunjungi kota-kota bersejarah di Turki: Istanbul, Bursa, dan Cappadocia. Perpaduan ibadah dan wisata religi.',
    inclusions: [
      'Tiket pesawat PP Makassar - Jeddah - Istanbul - Makassar',
      'Visa Umrah dan Visa Turki',
      'Hotel bintang 4 di Makkah dan Madinah',
      'Hotel bintang 4 di Istanbul, Bursa, Cappadocia',
      'Makan 3x sehari (Indonesia, Arab, dan Turki cuisine)',
      'Bus pariwisata AC di Arab Saudi dan Turki',
      'Pembimbing ibadah dan tour guide Turki berbahasa Indonesia',
      'Perlengkapan umrah lengkap',
      'Ziarah Makkah dan Madinah',
      'City tour Istanbul (Blue Mosque, Hagia Sophia, Grand Bazaar)',
      'Tour Bursa dan Masjid Ulu Cami',
      'Tour Cappadocia (Hot Air Balloon optional)',
      'Handling bandara di 3 negara',
      'Air zam-zam 5 liter',
      'Asuransi perjalanan internasional',
    ],
    exclusions: [
      'Biaya pembuatan paspor',
      'Biaya vaksinasi',
      'Hot air balloon Cappadocia (optional tour)',
      'Pengeluaran pribadi',
      'Tips guide dan driver',
    ],
    requirements: [
      'Paspor minimal berlaku 8 bulan',
      'KTP dan KK',
      'Pas foto 4x6 dan 5x5',
      'Sertifikat vaksin meningitis',
      'Surat mahram (wanita < 45 tahun)',
      'Rekening koran 3 bulan terakhir (untuk visa Turki)',
    ],
    itinerarySummary:
      'Hari 1-2: Penerbangan ke Madinah. Hari 3-7: Beribadah di Madinah. Hari 8-12: Pelaksanaan umrah di Makkah. Hari 13: Penerbangan Jeddah-Istanbul. Hari 14-15: City tour Istanbul. Hari 16: Tour Bursa. Hari 17: Tour Cappadocia. Hari 18: Pulang ke Indonesia.',
    paymentNotes:
      'DP Rp 15 juta saat pendaftaran. Pelunasan paling lambat H-40. Bisa dicicil hingga 4x tanpa bunga. Harga sudah termasuk semua biaya tour.',
    badgeText: 'Umrah + Wisata',
    seoTitle: 'Paket Umrah Plus Turki November 2026 - Ibadah dan Wisata Religi',
    seoDescription:
      'Paket Umrah + Tour Turki 18 hari. Kunjungi Makkah, Madinah, Istanbul, Bursa, Cappadocia. Harga Rp 52 juta all-in. Travel Bone terpercaya.',
    ogImage: null,
  },
]

function getVisibleLocalPackages() {
  return localPackages.filter(
    (pkg) => pkg.packageStatus !== 'archived' && pkg.packageStatus !== 'draft'
  )
}

function mapDbPackage(pkg: typeof packages.$inferSelect): LocalPackage {
  return {
    id: pkg.id,
    title: pkg.title,
    slug: pkg.slug,
    category: pkg.category as LocalPackage['category'],
    tier: pkg.tier,
    shortLabel: pkg.shortLabel,
    departureDate: pkg.departureDate,
    durationDays: pkg.durationDays,
    departureCity: pkg.departureCity,
    airline: pkg.airline,
    makkahHotel: pkg.makkahHotel,
    madinahHotel: pkg.madinahHotel,
    priceMode: pkg.priceMode as LocalPackage['priceMode'],
    price: pkg.price,
    minimumDeposit: pkg.minimumDeposit,
    totalSeats: pkg.totalSeats,
    remainingSeats: pkg.remainingSeats,
    packageStatus: pkg.packageStatus as LocalPackage['packageStatus'],
    featuredOnHomepage: pkg.featuredOnHomepage,
    packageSummary: pkg.packageSummary,
    inclusions: pkg.inclusions,
    exclusions: pkg.exclusions,
    requirements: pkg.requirements,
    itinerarySummary: pkg.itinerarySummary,
    paymentNotes: pkg.paymentNotes,
    badgeText: pkg.badgeText,
    seoTitle: pkg.seoTitle,
    seoDescription: pkg.seoDescription,
    ogImage: pkg.ogImage,
  }
}

async function getVisibleDbPackages() {
  try {
    const rows = await db
      .select()
      .from(packages)
      .where(eq(packages.packageStatus, 'active'))
      .orderBy(asc(packages.departureDate))

    return rows.map(mapDbPackage)
  } catch {
    return []
  }
}

export async function getVisiblePackages() {
  const dbPackages = await getVisibleDbPackages()
  return dbPackages.length > 0
    ? dbPackages
    : getVisibleLocalPackages().sort((a, b) => a.departureDate.localeCompare(b.departureDate))
}

export async function getHomepagePackages() {
  const visiblePackages = await getVisiblePackages()
  return visiblePackages.filter((pkg) => pkg.featuredOnHomepage).slice(0, 3)
}

export async function getPackagesByCategory(category: LocalPackage['category']) {
  const visiblePackages = await getVisiblePackages()
  return visiblePackages
    .filter((pkg) => pkg.category === category)
    .sort((a, b) => a.departureDate.localeCompare(b.departureDate))
}

export async function getPackageBySlug(slug: string) {
  const visiblePackages = await getVisiblePackages()
  return visiblePackages.find((pkg) => pkg.slug === slug)
}
