import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export const metadata: Metadata = {
  title: 'Tentang Kami - Mazaya Travel',
  description:
    'Kenal lebih dekat dengan Mazaya Travel, travel Umrah resmi berbasis di Bone yang mengutamakan amanah, pendampingan, dan kejelasan layanan.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20tentang%20paket%20Umrah'

const strengths = [
  {
    title: 'Travel Resmi dan Terverifikasi',
    description:
      'Mazaya Travel membawa identitas PT Mazaya Amanah Wisata dengan izin operasional PPIU yang ditampilkan terbuka untuk memudahkan verifikasi keluarga dan calon jemaah.',
  },
  {
    title: 'Berbasis di Bone',
    description:
      'Kami hadir dekat dengan masyarakat Bone dan sekitarnya, sehingga komunikasi, konsultasi, dan kunjungan kantor terasa lebih mudah dan lebih menenangkan.',
  },
  {
    title: 'Pendampingan Amanah',
    description:
      'Dari konsultasi awal, pemilihan paket, sampai proses keberangkatan, jemaah dibantu dengan alur yang jelas dan bahasa yang mudah dipahami.',
  },
  {
    title: 'Fokus pada Ketenangan Ibadah',
    description:
      'Layanan disusun agar jemaah dan keluarga tidak dibebani informasi yang membingungkan, dengan penjelasan paket, dokumen, dan langkah daftar yang rapi.',
  },
]

const legalHighlights = [
  'PT Mazaya Amanah Wisata',
  'PPIU Resmi Kemenag RI',
  'NIB: 13052200161160002',
  'Kantor layanan di Bone, Sulawesi Selatan',
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col py-8">
      <header className="mb-8 flex items-center justify-between border-b border-border pb-4">
        <Link href="/">
          <Image
            src={logoImage}
            alt="Logo Mazaya Travel"
            className="h-auto w-[120px] object-contain"
            priority
          />
        </Link>
        <Link href="/" className="text-sm font-semibold text-primary hover:underline">
          ← Kembali ke Beranda
        </Link>
      </header>

      <main className="mx-auto flex-1 w-full max-w-5xl space-y-8">
        <section className="rounded-radius-card border border-border bg-primary-soft/20 px-6 py-10 sm:px-10">
          <span className="inline-block rounded-radius-pill bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            Tentang Mazaya Travel
          </span>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold text-text sm:text-4xl">
                Travel Umrah Resmi di Bone yang Mengutamakan Amanah dan Ketenangan Jemaah
              </h1>
              <p className="text-base leading-relaxed text-muted">
                Mazaya Travel hadir untuk membantu calon jemaah Bone dan sekitarnya berangkat Umrah dengan proses yang lebih jelas, layanan yang lebih tenang, dan pendampingan yang dapat dipercaya.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Kami percaya keputusan berangkat Umrah selalu melibatkan keluarga, pertimbangan trust, dan kebutuhan akan informasi yang rapi. Karena itu, setiap halaman, kontak, dan legalitas kami susun untuk membantu jemaah merasa lebih yakin sebelum mendaftar.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  href="/daftar"
                  className="inline-flex items-center justify-center rounded-radius-control bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary-hover"
                >
                  Lihat Paket / Daftar
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-6 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
                >
                  WhatsApp Konsultasi
                </a>
              </div>
            </div>
            <div className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-text">Ringkas Profil</h2>
              <dl className="mt-4 space-y-4 text-sm text-text">
                <div>
                  <dt className="text-muted">Nama Resmi</dt>
                  <dd className="font-semibold">PT Mazaya Amanah Wisata</dd>
                </div>
                <div>
                  <dt className="text-muted">Brand Publik</dt>
                  <dd className="font-semibold">Mazaya Travel</dd>
                </div>
                <div>
                  <dt className="text-muted">Basis Operasional</dt>
                  <dd className="font-semibold">Bone, Sulawesi Selatan</dd>
                </div>
                <div>
                  <dt className="text-muted">Fokus Layanan</dt>
                  <dd className="font-semibold">Perjalanan ibadah Umrah dengan pendampingan amanah</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {strengths.map((item) => (
            <article key={item.title} className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-xl font-bold text-text">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text">Komitmen Layanan</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Informasi paket dibuat jelas agar keluarga mudah membandingkan dan mengambil keputusan.</li>
              <li>CTA WhatsApp dan pendaftaran disiapkan langsung agar calon jemaah tidak bingung harus mulai dari mana.</li>
              <li>Identitas lokal Bone ditampilkan natural karena kedekatan layanan adalah bagian penting dari trust.</li>
            </ul>
          </article>
          <article className="rounded-radius-card border border-border bg-primary text-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold">Ringkasan Legalitas</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/85">
              {legalHighlights.map((item) => (
                <li key={item} className="rounded-radius-control border border-white/15 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/legalitas"
              className="mt-5 inline-flex items-center justify-center rounded-radius-control bg-white px-5 py-3 font-bold text-primary transition-opacity hover:opacity-90"
            >
              Lihat Halaman Legalitas
            </Link>
          </article>
        </section>

        <section className="rounded-radius-card border border-border bg-primary-soft/20 px-6 py-8 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold text-text">Siap konsultasi paket yang paling cocok?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Tim Mazaya Travel siap membantu menjelaskan pilihan paket, proses dokumen, dan langkah pendaftaran dengan bahasa yang mudah dipahami.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-radius-control bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary-hover"
            >
              WhatsApp Konsultasi
            </a>
            <Link
              href="/daftar"
              className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-6 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
