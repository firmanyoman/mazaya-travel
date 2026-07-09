import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export const metadata: Metadata = {
  title: 'Kontak - Mazaya Travel',
  description:
    'Hubungi Mazaya Travel melalui WhatsApp, telepon, email, atau kunjungi kantor layanan kami di Bone, Sulawesi Selatan.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi'
const mapsUrl = 'https://maps.google.com/?q=PT+Mazaya+Amanah+Wisata+Bone'

const contactMethods = [
  {
    title: 'WhatsApp',
    value: '0852 9875 1997',
    description: 'Kanal tercepat untuk tanya paket, jadwal, dan proses pendaftaran.',
  },
  {
    title: 'Telepon',
    value: '0852 9875 1997',
    description: 'Bisa dihubungi untuk kebutuhan konfirmasi dan konsultasi langsung.',
  },
  {
    title: 'Email',
    value: 'info@mazaya-travel.id',
    description: 'Untuk pertanyaan umum dan kebutuhan administrasi dasar.',
  },
  {
    title: 'Jam Operasional',
    value: 'Senin - Sabtu, 08.00 - 17.00 WITA',
    description: 'Disarankan hubungi WhatsApp terlebih dulu bila ingin datang ke kantor.',
  },
]

export default function ContactPage() {
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
            Kontak Mazaya Travel
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Hubungi Mazaya Travel dengan Cara yang Paling Nyaman
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Untuk calon jemaah di Bone dan sekitarnya, kami siapkan jalur kontak yang jelas agar konsultasi paket, pertanyaan dokumen, dan rencana kunjungan kantor terasa lebih mudah.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-radius-control bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary-hover"
            >
              WhatsApp Sekarang
            </a>
            <Link
              href="/daftar"
              className="inline-flex items-center justify-center rounded-radius-control border border-primary bg-surface px-6 py-3 font-bold text-primary transition-colors hover:bg-primary-soft"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {contactMethods.map((item) => (
            <article key={item.title} className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-lg font-bold text-text">{item.title}</h2>
              <p className="mt-2 text-base font-semibold text-primary">{item.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text">Alamat Kantor</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              PT Mazaya Amanah Wisata<br />
              Jl. Lapawawoi Kr. Sigeri, Kel. Biru, Kec. Tanete Riattang, Bone, Sulawesi Selatan
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Kota Bone kami tampilkan jelas agar calon jemaah lokal dan keluarga lebih mudah memverifikasi lokasi layanan sebelum datang atau berkonsultasi.
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-radius-control border border-primary bg-primary-soft px-5 py-3 font-bold text-primary transition-colors hover:bg-primary-soft/70"
            >
              Buka Google Maps
            </a>
          </article>
          <article className="rounded-radius-card border border-border bg-primary text-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold">Butuh respon cepat?</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              WhatsApp tetap jadi jalur paling cepat untuk cek paket aktif, tanya jadwal keberangkatan, dan minta arahan langkah pendaftaran.
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/85">
              <div className="rounded-radius-control border border-white/15 bg-white/5 px-4 py-3">Nomor utama: 0852 9875 1997</div>
              <div className="rounded-radius-control border border-white/15 bg-white/5 px-4 py-3">Email: info@mazaya-travel.id</div>
              <div className="rounded-radius-control border border-white/15 bg-white/5 px-4 py-3">Layanan lokal Bone dan sekitarnya</div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-radius-control bg-white px-5 py-3 font-bold text-primary transition-opacity hover:opacity-90"
            >
              Chat via WhatsApp
            </a>
          </article>
        </section>
      </main>
    </div>
  )
}
