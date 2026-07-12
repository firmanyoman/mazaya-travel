import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { getHomepagePackages } from '@/app/lib/packages'

function formatRupiahMillions(price: number | null) {
  if (!price) return 'Hubungi CS'

  return `Rp ${(price / 1000000).toFixed(1)} Jt`
}

function formatRupiahCompact(price: number | null) {
  if (!price) return 'Konsultasikan kebutuhan Anda'

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price)
}

function formatDate(value: string) {
  if (!value) return 'Jadwal menyusul'

  return new Date(value).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function getSeatState(remainingSeats: number | null, totalSeats: number | null) {
  if (!remainingSeats || !totalSeats) {
    return {
      label: 'Konfirmasi ketersediaan kursi',
      tone: 'bg-info-soft text-info border-info/10',
      width: '40%',
      barTone: 'bg-info',
    }
  }

  const percentage = Math.max(0, Math.min(100, Math.round((remainingSeats / totalSeats) * 100)))

  if (percentage <= 20) {
    return {
      label: `Sisa ${remainingSeats} dari ${totalSeats} kursi`,
      tone: 'bg-warning-soft text-[#8A6911] border-warning/20',
      width: `${percentage}%`,
      barTone: 'bg-warning',
    }
  }

  return {
    label: `Sisa ${remainingSeats} dari ${totalSeats} kursi`,
    tone: 'bg-success-soft text-success border-success/20',
    width: `${percentage}%`,
    barTone: 'bg-success',
  }
}

function getStatusBadge(packageStatus: string) {
  if (packageStatus === 'active') {
    return {
      label: 'Tersedia',
      className: 'bg-success-soft text-success border-success/20',
    }
  }

  return {
    label: 'Info paket',
    className: 'bg-surface-soft text-text-secondary border-border',
  }
}

export default async function Home() {
  const whatsappUrl = 'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20tertarik%20dengan%20info%20paket%20Umrah'
  const consultationUrl = 'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20rencana%20Umrah'
  const featuredPackageFallbackImages = [
    '/assets/mazaya_travel_rebuild_inventory/assets/WhatsApp_Image_2025_08_24_at_04_57_58_jpeg.jpeg',
    '/assets/mazaya_travel_rebuild_inventory/assets/WhatsApp_Image_2025_08_20_at_15_52_42_jpeg.jpeg',
    '/assets/mazaya_travel_rebuild_inventory/assets/WhatsApp_Image_2024_12_25_at_09_11_57__1__jpeg.jpeg',
  ]

  const defaultPackages = [
    {
      title: 'Umrah Premium Akhir Tahun (Desember 2025)',
      tier: 'Gold',
      price: 34900000,
      durationDays: 12,
      departureDate: '2025-12-25',
      departureCity: 'Makassar',
      airline: 'Penerbangan langsung',
      makkahHotel: 'Safwat Al-Batlah',
      madinahHotel: 'Al-Ansar',
      minimumDeposit: 5000000,
      totalSeats: 45,
      remainingSeats: 8,
      packageStatus: 'active',
      image: '/assets/mazaya_travel_rebuild_inventory/assets/brosur_desember_png.png',
      badge: 'Favorit Keluarga',
      slug: 'umrah-premium-akhir-tahun-desember-2025',
      packageSummary: 'Pilihan akhir tahun untuk jemaah yang ingin jadwal keberangkatan yang rapi dan fasilitas yang nyaman.'
    },
    {
      title: 'Umrah Januari Awal Tahun (Januari 2026)',
      tier: 'Silver',
      price: 28800000,
      durationDays: 9,
      departureDate: '2026-01-19',
      departureCity: 'Makassar',
      airline: 'Penerbangan langsung',
      makkahHotel: 'Rawabi Al-Majd',
      madinahHotel: 'Golden Al-Ansar',
      minimumDeposit: 4000000,
      totalSeats: 45,
      remainingSeats: 12,
      packageStatus: 'active',
      image: '/assets/mazaya_travel_rebuild_inventory/assets/Biru_Hijau_Putih_Modern_Ibadah_Umroh_plus_Turki_Instagram_Story__12__png.png',
      badge: 'Pilihan Hemat',
      slug: 'umrah-januari-awal-tahun-januari-2026',
      packageSummary: 'Pilihan awal tahun dengan biaya yang lebih ringan dan kebutuhan utama perjalanan yang sudah disiapkan.'
    },
    {
      title: 'Umrah Awal Musim (Oktober/November 2025)',
      tier: 'Platinum',
      price: 38500000,
      durationDays: 12,
      departureDate: '2025-10-15',
      departureCity: 'Makassar',
      airline: 'Penerbangan langsung',
      makkahHotel: 'Anjum Makkah',
      madinahHotel: 'Front Taiba',
      minimumDeposit: 7000000,
      totalSeats: 45,
      remainingSeats: 5,
      packageStatus: 'active',
      image: '/assets/mazaya_travel_rebuild_inventory/assets/oktober_png.png',
      badge: 'Fasilitas Utama',
      slug: 'umrah-awal-musim-oktober-november-2025',
      packageSummary: 'Pilihan fasilitas premium dengan hotel strategis untuk jemaah yang mengutamakan kenyamanan.'
    }
  ]

  const homepagePackages = await getHomepagePackages()

  const displayPackages = homepagePackages.length > 0
    ? homepagePackages.map((pkg, index) => ({
        title: pkg.title,
        tier: pkg.tier || 'Silver',
        price: pkg.price,
        priceLabel: formatRupiahMillions(pkg.price),
        duration: `${pkg.durationDays} Hari`,
        departure: formatDate(pkg.departureDate),
        city: pkg.departureCity,
        airline: pkg.airline || 'Jadwal maskapai dikonfirmasi saat konsultasi',
        makkahHotel: pkg.makkahHotel || 'Setaraf sesuai paket',
        madinahHotel: pkg.madinahHotel || 'Setaraf sesuai paket',
        minimumDeposit: pkg.minimumDeposit,
        totalSeats: pkg.totalSeats,
        remainingSeats: pkg.remainingSeats,
        packageStatus: pkg.packageStatus,
        image: pkg.ogImage || featuredPackageFallbackImages[index % featuredPackageFallbackImages.length],
        badge: pkg.badgeText || 'Paket Pilihan',
        slug: pkg.slug,
        packageSummary: pkg.packageSummary,
      }))
    : defaultPackages.map((pkg) => ({
        title: pkg.title,
        tier: pkg.tier,
        price: pkg.price,
        priceLabel: formatRupiahMillions(pkg.price),
        duration: `${pkg.durationDays} Hari`,
        departure: formatDate(pkg.departureDate),
        city: pkg.departureCity,
        airline: pkg.airline,
        makkahHotel: pkg.makkahHotel,
        madinahHotel: pkg.madinahHotel,
        minimumDeposit: pkg.minimumDeposit,
        totalSeats: pkg.totalSeats,
        remainingSeats: pkg.remainingSeats,
        packageStatus: pkg.packageStatus,
        image: pkg.image,
        badge: pkg.badge,
        slug: pkg.slug,
        packageSummary: pkg.packageSummary,
      }))

  const trustItems = [
    { value: 'Travel resmi', label: 'Legalitas perusahaan terbuka', detail: 'Dapat diperiksa sebelum memilih paket' },
    { value: 'Berbasis di Bone', label: 'Kantor dan kontak jelas', detail: 'Dekat untuk jamaah Bone dan sekitarnya' },
    { value: 'Pendampingan', label: 'Didampingi sejak awal', detail: 'Dari tanya paket sampai persiapan berangkat' },
    { value: 'Paket aktif', label: 'Informasi inti ditampilkan', detail: 'Jadwal, harga, dan ketersediaan kursi' },
  ]

  const advantages = [
    {
      title: 'Informasi paket disampaikan apa adanya',
      description: 'Jadwal, harga, fasilitas, dan jalur konsultasi kami tampilkan agar jamaah bisa mempertimbangkan dengan lebih tenang.',
      accent: '01',
    },
    {
      title: 'Pendampingan yang sabar',
      description: 'Tim Mazaya membantu menjelaskan pilihan paket, dokumen, dan alur daftar dengan bahasa yang mudah dipahami.',
      accent: '02',
    },
    {
      title: 'Perjalanan disiapkan untuk kenyamanan ibadah',
      description: 'Rute, hotel, dan kebutuhan perjalanan diperhatikan agar jemaah bisa lebih fokus menjalani ibadah.',
      accent: '03',
    },
    {
      title: 'Identitas perusahaan kami terbuka',
      description: 'Legalitas, alamat, dan jalur komunikasi kami tampilkan agar jamaah dan keluarga bisa memeriksa lebih dulu.',
      accent: '04',
    },
  ]

  const processSteps = [
    {
      title: 'Mulai dari cerita kebutuhan Anda',
      description: 'Sampaikan dulu rencana keberangkatan, siapa yang ikut, dan kisaran kebutuhan yang sedang dipertimbangkan.',
    },
    {
      title: 'Pilih paket yang paling cocok',
      description: 'Tim Mazaya membantu menjelaskan perbedaan jadwal, fasilitas, dan biaya agar pilihan terasa pas.',
    },
    {
      title: 'Lengkapi pendaftaran dengan arahan tim',
      description: 'Setelah paket dipilih, tim kami membantu menjelaskan data dan dokumen yang perlu disiapkan.',
    },
    {
      title: 'Persiapan menjelang keberangkatan',
      description: 'Menjelang berangkat, jemaah mendapat arahan agar lebih siap dari sisi ibadah maupun kebutuhan perjalanan.',
    },
  ]

  const legalProof = [
    'PT Mazaya Amanah Wisata',
    'NIB: 13052200161160002',
    'Melayani dari kantor pusat di Kabupaten Bone, Sulawesi Selatan',
    'Konsultasi langsung via WhatsApp atau kunjungan ke kantor',
  ]

  return (
    <Container className="pb-12 pt-4 md:pt-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <SectionShell surface="card" className="relative overflow-hidden px-6 py-8 md:px-8 lg:px-12 lg:py-12">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(97,199,195,0.22),transparent_56%)]" />
          <div className="absolute right-8 top-8 hidden h-16 w-16 rounded-full bg-brand-yellow/25 blur-2xl lg:block" />
          <div className="relative grid items-center gap-10 lg:min-h-[620px] lg:grid-cols-12 lg:gap-8">
            <div className="space-y-6 lg:col-span-5">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary-soft px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Travel Umrah resmi dari Bone
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </div>
              <div className="space-y-4">
                <p className="max-w-xl text-sm font-semibold text-text-secondary">
                  Travel Umrah resmi untuk jamaah Bone dan sekitarnya.
                </p>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-[56px] lg:leading-[1.14]">
                  Temani langkah ibadah Anda bersama travel Umrah resmi dari Bone
                </h1>
                <p className="max-w-2xl text-[17px] leading-8 text-muted lg:text-lg">
                  Mazaya Travel hadir untuk membantu calon jemaah dan keluarga memahami pilihan paket, proses pendaftaran, serta persiapan keberangkatan dengan pendampingan yang insyaAllah amanah.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/paket-umrah" size="lg" className="sm:min-w-52">
                  Daftar Sekarang
                </Button>
                <Button
                  href={consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  className="sm:min-w-52"
                >
                  WhatsApp Konsultasi
                </Button>
              </div>
              <div className="grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
                <div className="rounded-[16px] bg-surface-subtle px-4 py-4">
                  <div className="text-2xl font-bold text-primary">Resmi</div>
                  <div className="text-sm text-muted">Legalitas perusahaan kami tampilkan terbuka</div>
                </div>
                <div className="rounded-[16px] bg-surface-subtle px-4 py-4">
                  <div className="text-2xl font-bold text-primary">Didampingi</div>
                  <div className="text-sm text-muted">Dari tanya paket sampai persiapan berangkat</div>
                </div>
                <div className="rounded-[16px] bg-surface-subtle px-4 py-4">
                  <div className="text-2xl font-bold text-primary">Dekat</div>
                  <div className="text-sm text-muted">Berbasis di Bone dan dekat untuk jamaah sekitar</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-6">
              <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="relative overflow-hidden rounded-[20px] border border-border bg-primary shadow-[var(--shadow-3)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/78 via-primary/10 to-transparent" />
                  <Image
                    src="/assets/mazaya_travel_rebuild_inventory/assets/1760146127_hero.jpeg"
                    alt="Jemaah Mazaya Travel di depan Ka'bah"
                    width={1200}
                    height={900}
                    className="aspect-[4/5] w-full object-cover lg:aspect-[3/2]"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                      Dokumentasi jamaah Mazaya
                    </div>
                    <h2 className="max-w-md text-xl font-bold leading-snug md:text-2xl">
                      Tim yang mendampingi calon jemaah sejak bertanya, mendaftar, hingga bersiap berangkat.
                    </h2>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-[20px] border border-border bg-surface p-5 shadow-[var(--shadow-2)]">
                    <div className="mb-4 inline-flex rounded-full bg-brand-yellow/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-text">
                      Konsultasi & verifikasi
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted">Konsultasi utama</div>
                        <div className="text-lg font-bold text-text">0852 9875 1997</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted">Kantor pelayanan</div>
                        <div className="text-sm font-medium leading-7 text-text-secondary">
                          Jl. Lapawawoi Kr. Sigeri, Kel. Biru, Kec. Tanete Riattang, Bone
                        </div>
                      </div>
                      <div className="rounded-[16px] bg-primary-soft/60 px-4 py-3 text-sm text-text-secondary">
                        Silakan mulai dengan bertanya soal paket, legalitas, dokumen, atau persiapan keberangkatan.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[20px] border border-primary/10 bg-primary p-5 text-white shadow-[var(--shadow-2)]">
                    <div className="text-sm font-semibold text-white/72">Legalitas perusahaan</div>
                    <div className="mt-3 text-2xl font-bold">NIB 13052200161160002</div>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      Legalitas kami tampilkan terbuka agar calon jemaah dan keluarga bisa memeriksa lebih dulu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell surface="card" className="px-5 py-4 md:px-6 md:py-5">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {trustItems.map((item) => (
              <div key={item.label} className="rounded-[16px] border border-border/80 bg-surface-subtle px-4 py-4">
                <div className="text-lg font-bold text-primary">{item.value}</div>
                <div className="mt-1 text-sm font-semibold text-text-secondary">{item.label}</div>
                <div className="mt-2 text-sm leading-6 text-muted">{item.detail}</div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="px-1">
          <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Paket Umrah pilihan
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                Pilihan paket Umrah yang bisa Anda lihat, bandingkan, lalu pilih sesuai kebutuhan perjalanan.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted">
                Kami menampilkan informasi dasar yang biasa paling dulu ditanyakan: jadwal, hotel, harga, dan ketersediaan kursi.
              </p>
            </div>
            <Button href="/paket-umrah" variant="ghost" className="w-fit">
              Lihat semua paket
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {displayPackages.map((pkg) => {
              const seatState = getSeatState(pkg.remainingSeats, pkg.totalSeats)
              const statusBadge = getStatusBadge(pkg.packageStatus)

              return (
                <article key={pkg.slug} className="group overflow-hidden rounded-[20px] border border-border bg-surface shadow-[var(--shadow-2)] transition-transform duration-150 hover:-translate-y-1">
                  <div className="relative">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                      <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary shadow-[var(--shadow-1)]">
                        {pkg.badge}
                      </span>
                      <span className={`rounded-full border px-3 py-1 text-xs font-bold ${statusBadge.className}`}>
                        {statusBadge.label}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-full flex-col gap-5 p-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-text-secondary">
                        <span>{pkg.departure}</span>
                        <span className="h-1 w-1 rounded-full bg-brand-yellow" />
                        <span>{pkg.tier} class</span>
                      </div>
                      <a href={`/paket/${pkg.slug}`} className="block transition-colors hover:text-primary">
                        <h3 className="text-2xl font-bold leading-snug text-text line-clamp-2">{pkg.title}</h3>
                      </a>
                      <p className="text-sm leading-7 text-muted line-clamp-3">{pkg.packageSummary}</p>
                    </div>

                    <div className="grid gap-3 rounded-[16px] border border-border bg-surface-subtle p-4 text-sm text-text-secondary">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-muted">Durasi</span>
                        <span className="text-right font-semibold text-text">{pkg.duration}</span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-muted">Kota berangkat</span>
                        <span className="text-right font-semibold text-text">{pkg.city}</span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-muted">Maskapai</span>
                        <span className="text-right font-semibold text-text">{pkg.airline}</span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-muted">Hotel Makkah</span>
                        <span className="text-right font-semibold text-text">{pkg.makkahHotel}</span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-muted">Hotel Madinah</span>
                        <span className="text-right font-semibold text-text">{pkg.madinahHotel}</span>
                      </div>
                    </div>

                    <div className="space-y-4 border-t border-border pt-5">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <div className="text-sm text-muted">Harga mulai</div>
                          <div className="text-3xl font-bold leading-none text-primary">{pkg.priceLabel}</div>
                        </div>
                        <div className="text-right text-sm text-muted">
                          <div>DP minimum</div>
                          <div className="font-semibold text-text">{formatRupiahCompact(pkg.minimumDeposit)}</div>
                        </div>
                      </div>
                      <div className={`rounded-[16px] border px-4 py-3 ${seatState.tone}`}>
                        <div className="flex items-center justify-between gap-3 text-sm font-semibold">
                          <span>Ketersediaan</span>
                          <span>{seatState.label}</span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/70">
                          <div className={`h-full rounded-full ${seatState.barTone}`} style={{ width: seatState.width }} />
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <Button href={`/paket/${pkg.slug}`} variant="secondary" fullWidth>
                          Detail paket
                        </Button>
                        <Button
                          href={`https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20paket%20${encodeURIComponent(pkg.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          fullWidth
                        >
                          Konsultasi paket
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </SectionShell>

        <SectionShell surface="soft" className="px-6 py-8 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-xl space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary shadow-[var(--shadow-1)]">
                Mengapa pilih Mazaya
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                Mazaya ingin menjadi teman perjalanan yang membuat jamaah dan keluarga merasa lebih tenteram sejak awal.
              </h2>
              <p className="text-base leading-8 text-muted">
                Karena memilih travel umrah bukan hanya perkara harga. Jamaah juga ingin tahu siapa yang mendampingi, bagaimana prosesnya, dan ke mana keluarga bisa bertanya dengan nyaman.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.accent}
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell className="px-1">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Alur pendampingan
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                Alur yang kami siapkan agar calon jemaah tidak bingung saat mulai mendaftar.
              </h2>
              <p className="max-w-xl text-base leading-8 text-muted">
                Dari konsultasi awal sampai persiapan berangkat, setiap tahap kami jelaskan supaya jemaah dan keluarga sama-sama paham.
              </p>
            </div>
            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="grid gap-4 rounded-[20px] border border-border bg-surface p-5 shadow-[var(--shadow-1)] md:grid-cols-[auto_1fr] md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell surface="card" className="overflow-hidden px-6 py-8 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.02fr] lg:items-center">
            <div className="space-y-5">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Legalitas & kredibilitas
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
                Bagi kami, rasa tenang tumbuh dari informasi yang terbuka.
              </h2>
              <p className="text-base leading-8 text-muted">
                Karena itu, identitas perusahaan, alamat kantor, dan jalur komunikasi kami tampilkan dengan terbuka agar bisa diperiksa sebelum lanjut membahas paket.
              </p>
              <div className="grid gap-3">
                {legalProof.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[16px] bg-surface-subtle px-4 py-3 text-sm leading-7 text-text-secondary">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-yellow" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[20px] border border-border bg-surface-subtle p-6">
                <div className="text-sm font-semibold text-muted">Nama badan usaha</div>
                <div className="mt-3 text-2xl font-bold leading-snug text-text">PT Mazaya Amanah Wisata</div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Nama badan usaha kami tampilkan apa adanya supaya keluarga bisa melakukan pengecekan dengan tenang.
                </p>
              </div>
              <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white">
                <div className="text-sm font-semibold text-white/72">Nomor Induk Berusaha</div>
                <div className="mt-3 text-3xl font-bold leading-tight">13052200161160002</div>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Nomor ini kami tampilkan agar calon jemaah dan keluarga dapat memeriksanya dengan tenang.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[20px] border border-border sm:col-span-2">
                <Image
                  src="/assets/mazaya_travel_rebuild_inventory/assets/WhatsApp_Image_2025_08_20_at_15_52_42_jpeg.jpeg"
                  alt="Rombongan jemaah Mazaya Travel bersama identitas perusahaan"
                  width={1200}
                  height={800}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell surface="primary" className="relative overflow-hidden px-6 py-8 md:px-8 lg:px-12 lg:py-10">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(240,235,32,0.18),transparent_62%)] lg:block" />
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                Konsultasi yang tenang
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              </div>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Bila masih ada yang ingin ditanyakan, silakan hubungi kami.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/76">
                Silakan hubungi tim Mazaya untuk menanyakan jadwal, fasilitas, dokumen, atau hal lain yang masih ingin dipastikan. Kami akan menjelaskan dengan sabar.
              </p>
            </div>
            <div className="grid gap-3 rounded-[20px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <div className="text-sm text-white/70">WhatsApp utama</div>
                <div className="mt-1 text-xl font-bold text-white">0852 9875 1997</div>
              </div>
              <div>
                <div className="text-sm text-white/70">Email</div>
                <div className="mt-1 text-base font-semibold text-white">info@mazaya-travel.id</div>
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2 lg:flex-row">
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  className="border-white bg-white text-primary hover:bg-white/92 lg:flex-1"
                >
                  Chat WhatsApp
                </Button>
                <Button href="/kontak" variant="secondary" size="lg" className="border-white bg-transparent text-white hover:bg-white/10 lg:flex-1">
                  Lihat kontak lengkap
                </Button>
              </div>
            </div>
          </div>
        </SectionShell>
      </div>
    </Container>
  )
}
