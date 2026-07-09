import Image from 'next/image'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'
import { db } from '@/db'
import { packages } from '@/db/schema'
import { eq, and } from 'drizzle-orm'

interface DbPackage {
  title: string
  slug: string
  category: string
  tier: string | null
  shortLabel: string | null
  departureDate: string
  durationDays: number
  departureCity: string
  airline: string | null
  makkahHotel: string | null
  madinahHotel: string | null
  priceMode: string
  price: number | null
  minimumDeposit: number | null
  totalSeats: number | null
  remainingSeats: number | null
  packageStatus: string
  featuredOnHomepage: boolean
  brochureFile: string | null
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
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date
}

export default async function Home() {
  const whatsappUrl = 'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20tertarik%20dengan%20info%20paket%20Umrah'

  // Fetch dynamic packages from database
  let dbPackages: DbPackage[] = [] as DbPackage[]
  try {
    const results = await db.query.packages.findMany({
      where: and(
        eq(packages.packageStatus, 'active'),
        eq(packages.featuredOnHomepage, true)
      ),
      limit: 3
    })
    dbPackages = results as unknown as DbPackage[]
  } catch (e) {
    console.error('Failed to fetch packages from DB, using fallback.', e)
  }

  const defaultPackages = [
    {
      title: 'Umrah Premium Akhir Tahun (Desember 2025)',
      tier: 'Gold',
      price: 'Rp 34,9 Jt',
      duration: '12 Hari',
      departure: '25 Desember 2025',
      city: 'Makassar',
      hotel: "Al-Ansar / Setaraf (Madinah) & Safwat Al-Batlah (Makkah)",
      seats: 'Sisa 8 Kursi',
      image: '/assets/mazaya_travel_rebuild_inventory/assets/brosur_desember_png.png',
      badge: 'Favorit Keluarga',
      slug: 'umrah-premium-akhir-tahun-desember-2025'
    },
    {
      title: 'Umrah Januari Awal Tahun (Januari 2026)',
      tier: 'Silver',
      price: 'Rp 28,8 Jt',
      duration: '9 Hari',
      departure: '19 Januari 2026',
      city: 'Makassar',
      hotel: "Rawabi Al-Majd (Makkah) & Golden Al-Ansar (Madinah)",
      seats: 'Sisa 12 Kursi',
      image: '/assets/mazaya_travel_rebuild_inventory/assets/Biru_Hijau_Putih_Modern_Ibadah_Umroh_plus_Turki_Instagram_Story__12__png.png',
      badge: 'Promo Hemat',
      slug: 'umrah-januari-awal-tahun-januari-2026'
    },
    {
      title: 'Umrah Awal Musim (Oktober/November 2025)',
      tier: 'Platinum',
      price: 'Rp 38,5 Jt',
      duration: '12 Hari',
      departure: 'Oktober 2025',
      city: 'Makassar',
      hotel: "Anjum Makkah (Makkah) & Front Taiba (Madinah)",
      seats: 'Sisa 5 Kursi',
      image: '/assets/mazaya_travel_rebuild_inventory/assets/oktober_png.png',
      badge: 'Fasilitas Bintang 5',
      slug: 'umrah-awal-musim-oktober-november-2025'
    }
  ]

  const displayPackages = dbPackages.length > 0 ? dbPackages.map((pkg) => ({
    title: pkg.title,
    tier: pkg.tier || 'Silver',
    price: pkg.price ? `Rp ${(pkg.price / 1000000).toFixed(1)} Jt` : 'Hubungi CS',
    duration: `${pkg.durationDays} Hari`,
    departure: pkg.departureDate ? new Date(pkg.departureDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '',
    city: pkg.departureCity,
    hotel: `${pkg.madinahHotel || 'Setaraf'} (Madinah) & ${pkg.makkahHotel || 'Setaraf'} (Makkah)`,
    seats: pkg.remainingSeats ? `Sisa ${pkg.remainingSeats} Kursi` : 'Hubungi CS',
    image: pkg.ogImage || '/assets/mazaya_travel_rebuild_inventory/assets/No Image.jpg.jpeg',
    badge: pkg.badgeText || 'Paket Pilihan',
    slug: pkg.slug
  })) : defaultPackages

  const benefits = [
    {
      title: 'Izin Resmi Kemenag',
      description: 'Mazaya Amanah Wisata mengantongi izin resmi PPIU Kemenag RI (NIB: 13052200161160002) menjamin keberangkatan aman.',
      icon: '🕌'
    },
    {
      title: 'Pembimbing Berpengalaman',
      description: 'Dibimbing langsung oleh Muthawwif & Asatidz berpengalaman untuk ibadah sesuai tuntunan Sunnah.',
      icon: '📖'
    },
    {
      title: 'Penerbangan Langsung',
      description: 'Penerbangan rute Makassar langsung ke Jeddah / Madinah untuk meminimalkan kelelahan fisik jemaah.',
      icon: '✈️'
    },
    {
      title: 'Hotel Dekat Masjid',
      description: 'Akomodasi bintang 3 hingga 5 dengan lokasi strategis yang memudahkan jemaah ibadah harian.',
      icon: '🏢'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Image
              src={logoImage}
              alt="Logo Mazaya Travel"
              className="h-auto w-[140px] object-contain"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-text">
            <a href="#hero" className="hover:text-primary transition-colors">Beranda</a>
            <a href="#paket" className="hover:text-primary transition-colors">Paket Umrah</a>
            <a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a>
            <a href="#kontak" className="hover:text-primary transition-colors">Kontak</a>
          </nav>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-5 py-2.5 bg-primary text-white font-bold rounded-radius-control hover:bg-primary-hover transition-colors text-sm shadow-md"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative py-20 lg:py-32 overflow-hidden bg-primary-soft/30 rounded-radius-card mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 lg:px-12">
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-radius-pill w-fit">
                PPIU Resmi Kemenag RI
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text leading-tight">
                Perjalanan Umrah Nyaman, Ibadah Tenang Bersama <span className="text-primary">Mazaya Travel</span>
              </h1>
              <p className="text-lg text-muted max-w-2xl leading-relaxed">
                Penyelenggara Perjalanan Ibadah Umrah resmi yang berbasis di Bone, Sulawesi Selatan. Komitmen kami melayani jemaah se-Amanah mungkin dengan layanan bintang lima.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-radius-control hover:bg-primary-hover transition-colors shadow-lg"
                >
                  Daftar Umrah Sekarang
                </a>
                <a
                  href="#paket"
                  className="inline-flex justify-center items-center px-8 py-4 bg-surface text-primary border border-primary text-lg font-bold rounded-radius-control hover:bg-primary-soft transition-colors"
                >
                  Lihat Jadwal Keberangkatan
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 border-t border-border pt-8 mt-6">
                <div>
                  <div className="text-3xl font-black text-primary">100%</div>
                  <div className="text-xs text-muted font-medium mt-1">Jaminan Berangkat</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">Official</div>
                  <div className="text-xs text-muted font-medium mt-1">Izin PPIU Kemenag</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">Bintang 5</div>
                  <div className="text-xs text-muted font-medium mt-1">Ulasan Layanan</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[500px] rounded-radius-card overflow-hidden shadow-2xl">
              <Image
                src="/assets/mazaya_travel_rebuild_inventory/assets/1760146127_hero.jpeg"
                alt="Jemaah Mazaya Travel didepan Ka'bah"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text">
              Mengapa Memilih Mazaya Travel?
            </h2>
            <p className="text-muted leading-relaxed">
              Kami mendampingi langkah Anda menuju Baitullah dengan rasa tanggung jawab penuh dan transparansi layanan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-surface p-8 rounded-radius-card border border-border flex flex-col space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-text">{benefit.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages Section */}
        <section id="paket" className="py-24 bg-primary-soft/10 rounded-radius-card px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text">
              Paket Umrah Unggulan 2025 - 2026
            </h2>
            <p className="text-muted leading-relaxed">
              Pilihan paket Umrah terbaik dengan jadwal kepastian berangkat langsung dari bandara Sultan Hasanuddin Makassar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPackages.map((pkg, i) => (
              <div key={i} className="bg-surface rounded-radius-card overflow-hidden border border-border flex flex-col h-full shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-radius-pill uppercase shadow-sm">
                    {pkg.badge}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Keberangkatan {pkg.departure}</span>
                      <span className="px-2.5 py-1 bg-brand-yellow/30 text-text text-xs font-black rounded-radius-pill">{pkg.tier} Class</span>
                    </div>
                    <a href={`/paket/${pkg.slug}`} className="hover:text-primary transition-colors block">
                      <h3 className="text-xl font-extrabold text-text line-clamp-2 leading-snug">{pkg.title}</h3>
                    </a>
                    <div className="grid grid-cols-2 gap-3 text-xs text-muted border-t border-b border-border/60 py-3">
                      <div>🕒 Durasi: <strong className="text-text">{pkg.duration}</strong></div>
                      <div>✈️ Rute: <strong className="text-text">{pkg.city}</strong></div>
                      <div className="col-span-2">🏢 Hotel: <span className="text-text font-medium">{pkg.hotel}</span></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs text-muted">Mulai Dari</div>
                        <div className="text-2xl font-black text-primary">{pkg.price}</div>
                      </div>
                      <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-radius-pill border border-red-100">
                        {pkg.seats}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`/paket/${pkg.slug}`}
                        className="inline-flex justify-center items-center py-3 bg-surface text-primary border border-primary font-bold rounded-radius-control hover:bg-primary-soft transition-colors text-xs"
                      >
                        Detail Paket
                      </a>
                      <a
                        href={`/daftar/${pkg.slug}`}
                        className="inline-flex justify-center items-center py-3 bg-primary text-white font-bold rounded-radius-control hover:bg-primary-hover transition-colors text-xs shadow-md"
                      >
                        Daftar Online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legalities & About Section */}
        <section id="tentang" className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight">
                Penyelenggara Resmi & Berizin Keberangkatan Terjamin
              </h2>
              <p className="text-muted leading-relaxed">
                Mazaya Travel dikelola oleh **PT Mazaya Amanah Wisata**, sebuah biro perjalanan terpercaya yang fokus pada penyediaan paket ibadah Umrah dan Haji Khusus. Berpusat di Kabupaten Bone, kami memiliki perwakilan resmi yang melayani jemaah di seluruh penjuru Sulawesi Selatan.
              </p>
              <div className="bg-primary-soft/20 p-6 rounded-radius-card border border-border/80">
                <h4 className="font-bold text-text mb-3">Informasi Izin Operasional:</h4>
                <ul className="space-y-2 text-sm text-text">
                  <li>📄 <strong>Nama Badan Hukum:</strong> PT Mazaya Amanah Wisata</li>
                  <li>🔑 <strong>Izin PPIU Kemenag RI:</strong> Terdaftar Resmi</li>
                  <li>📋 <strong>Nomor Induk Berusaha (NIB):</strong> 13052200161160002</li>
                  <li>🏢 <strong>Kantor Pusat:</strong> Kab. Bone, Sulawesi Selatan</li>
                </ul>
              </div>
            </div>
            <div className="relative w-full h-[400px] rounded-radius-card overflow-hidden shadow-lg border border-border">
              <Image
                src="/assets/mazaya_travel_rebuild_inventory/assets/WhatsApp_Image_2025_08_20_at_15_52_42_jpeg.jpeg"
                alt="Jemaah Rombongan Mazaya Travel membawa spanduk resmi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="kontak" className="py-24 bg-primary-soft/10 rounded-radius-card px-6 lg:px-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold text-text">Hubungi Kantor Kami</h2>
              <p className="text-muted leading-relaxed">
                Pintu kami selalu terbuka untuk melayani konsultasi rencana ibadah Anda dan keluarga. Hubungi melalui WhatsApp atau kunjungi kantor pelayanan kami.
              </p>
              <div className="space-y-4 text-sm text-text">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <strong className="block text-base">Alamat Kantor:</strong>
                    Jl. Lapawawoi Kr. Sigeri, Kel. Biru, Kec. Tanete Riattang, Bone, Sulawesi Selatan
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <strong>Telepon / WA:</strong> 0852 9875 1997
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <strong>Email:</strong> info@mazaya-travel.id
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-8 py-3 bg-primary text-white font-bold rounded-radius-control hover:bg-primary-hover transition-colors shadow-md text-sm"
                >
                  💬 Chat Customer Service Kami
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 h-[350px] lg:h-full min-h-[350px] rounded-radius-card overflow-hidden border border-border shadow-inner relative bg-surface">
              {/* Fallback mockup peta untuk Bone, Sulsel */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-surface">
                <span className="text-5xl mb-4">🗺️</span>
                <h4 className="font-extrabold text-text">Lokasi PT Mazaya Amanah Wisata</h4>
                <p className="text-xs text-muted max-w-sm mt-2">
                  Jl. Lapawawoi Kr. Sigeri, Kel. Biru, Kec. Tanete Riattang, Bone, Sulawesi Selatan.
                </p>
                <a
                  href="https://maps.google.com/?q=PT+Mazaya+Amanah+Wisata+Bone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-primary/10 text-primary font-bold text-xs rounded-radius-pill border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 rounded-t-radius-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8 mb-8 px-6">
          <div className="space-y-4">
            <Image
              src={logoImage}
              alt="Logo Mazaya Travel"
              className="h-auto w-[140px] object-contain brightness-0 invert"
            />
            <p className="text-xs text-white/70 leading-relaxed">
              PT Mazaya Amanah Wisata - Mitra tepercaya perjalanan ibadah Umrah & Haji Khusus Anda. Memberikan kepastian keberangkatan dengan bimbingan sesuai Sunnah.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4">Navigasi Halaman</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#hero" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#paket" className="hover:text-white transition-colors">Paket Umrah</a></li>
              <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4">Izin Operasional</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Resmi Terdaftar PPIU Kemenag RI<br />
              NIB: 13052200161160002<br />
              Kab. Bone, Sulawesi Selatan
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 px-6">
          <p>© 2026 PT Mazaya Amanah Wisata. Hak Cipta Dilindungi.</p>
          <p className="mt-2 sm:mt-0">Didesain dengan ❤️ oleh Mazaya Dev Team</p>
        </div>
      </footer>
    </div>
  )
}
