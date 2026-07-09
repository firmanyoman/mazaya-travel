import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export const metadata: Metadata = {
  title: 'Legalitas - Mazaya Travel',
  description:
    'Lihat ringkasan legalitas Mazaya Travel dalam satu halaman untuk membantu calon jemaah dan keluarga melakukan verifikasi dasar.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20verifikasi%20legalitas%20dan%20paket'

const legalDocuments = [
  {
    title: 'Identitas Perusahaan',
    type: 'Nama badan usaha',
    number: 'PT Mazaya Amanah Wisata',
    summary:
      'Nama resmi perusahaan yang digunakan sebagai dasar identitas publik dan operasional layanan Mazaya Travel.',
  },
  {
    title: 'Izin PPIU Kemenag RI',
    type: 'Legalitas perjalanan ibadah Umrah',
    number: 'PPIU Resmi Kemenag RI',
    summary:
      'Ditampilkan sebagai bukti bahwa layanan perjalanan Umrah dijalankan dengan landasan legal yang jelas dan relevan untuk kebutuhan verifikasi calon jemaah.',
  },
  {
    title: 'Nomor Induk Berusaha',
    type: 'NIB',
    number: '13052200161160002',
    summary:
      'Nomor identitas usaha yang kami tampilkan terbuka untuk memperkuat transparansi dan memudahkan pengecekan dasar.',
  },
]

export default function LegalPage() {
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
            Legalitas Mazaya Travel
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Satu Halaman untuk Melihat Dasar Legal Mazaya Travel
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Halaman ini disusun untuk membantu calon jemaah dan keluarga melakukan verifikasi dasar dengan lebih mudah. Untuk launch saat ini, kami menampilkan ringkasan legal publik yang paling penting dan mudah dipahami.
          </p>
        </section>

        <section className="grid gap-6">
          {legalDocuments.map((item) => (
            <article key={item.title} className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <span className="inline-block rounded-radius-pill bg-primary-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                    Verified Public Summary
                  </span>
                  <h2 className="text-xl font-bold text-text">{item.title}</h2>
                  <p className="text-sm text-muted">{item.summary}</p>
                </div>
                <div className="rounded-radius-card border border-border bg-primary-soft/20 p-4 text-sm text-text sm:min-w-64">
                  <div>
                    <span className="block text-xs text-muted">Jenis Legal</span>
                    <strong>{item.type}</strong>
                  </div>
                  <div className="mt-3">
                    <span className="block text-xs text-muted">Nomor / Identitas</span>
                    <strong>{item.number}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text">Mengapa legalitas penting?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Untuk layanan perjalanan ibadah, legalitas membantu calon jemaah menilai apakah identitas perusahaan, izin terkait, dan informasi usaha ditampilkan secara terbuka dan konsisten.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Halaman ini juga membantu keluarga melakukan cross-check cepat sebelum melanjutkan ke konsultasi atau pendaftaran paket.
            </p>
          </article>
          <article className="rounded-radius-card border border-border bg-primary text-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold">Lanjut cek paket atau konsultasi</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Setelah verifikasi dasar, Anda bisa langsung melihat paket aktif atau menghubungi tim kami lewat WhatsApp untuk pertanyaan lanjutan.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/daftar"
                className="inline-flex items-center justify-center rounded-radius-control bg-white px-6 py-3 font-bold text-primary transition-opacity hover:opacity-90"
              >
                Daftar Sekarang
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-radius-control border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition-colors hover:bg-white/15"
              >
                WhatsApp Konsultasi
              </a>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
