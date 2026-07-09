import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export const metadata: Metadata = {
  title: 'Testimoni - Mazaya Travel',
  description:
    'Baca testimoni jamaah Mazaya Travel untuk melihat pengalaman layanan, pendampingan, dan rasa aman sebelum berangkat.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20setelah%20membaca%20testimoni'

const testimonials = [
  {
    name: 'Ibu Rahmawati',
    city: 'Bone',
    quote:
      'Dari awal tanya sampai berangkat, penjelasan Mazaya Travel terasa rapi dan menenangkan. Keluarga juga lebih yakin karena legalitas dan alur keberangkatannya jelas.',
  },
  {
    name: 'Bapak Syamsuddin',
    city: 'Watampone',
    quote:
      'Yang paling membantu adalah pendampingannya. Saat persiapan dokumen dan manasik, kami tidak merasa bingung karena tim cepat merespons dan bahasanya mudah dipahami.',
  },
  {
    name: 'Ibu Nurhayati',
    city: 'Bone',
    quote:
      'Kami mencari travel yang bisa dipercaya dan dekat untuk konsultasi. Mazaya Travel memberi rasa aman karena komunikasinya jelas dan prosesnya terasa tertata.',
  },
  {
    name: 'Bapak Mulyadi',
    city: 'Sinjai',
    quote:
      'Testimoni saya sederhana: layanan terasa amanah. Jadwal, kebutuhan dokumen, dan arahan keberangkatan disampaikan tanpa membuat jamaah panik.',
  },
]

export default function TestimonialsPage() {
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
            Testimoni Jamaah
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Suara Jamaah yang Membantu Calon Jemaah Menilai Pengalaman Layanan Mazaya Travel
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Testimoni dipakai sebagai penguat trust untuk calon jemaah yang masih membandingkan layanan, pendampingan, dan kejelasan proses. Untuk launch saat ini, kami menampilkan testimoni statis yang fokus pada kualitas pengalaman dan rasa aman.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name + item.city} className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
              <p className="text-base leading-relaxed text-text">“{item.quote}”</p>
              <div className="mt-5 border-t border-border pt-4">
                <h2 className="text-lg font-bold text-text">{item.name}</h2>
                <p className="text-sm text-muted">Jamaah Mazaya Travel • {item.city}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text">Yang paling sering dicari dari testimoni</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Kejelasan komunikasi sebelum daftar dan sebelum berangkat.</li>
              <li>Rasa aman keluarga saat memverifikasi travel dan prosesnya.</li>
              <li>Pendampingan selama persiapan, manasik, dan agenda perjalanan.</li>
            </ul>
          </article>
          <article className="rounded-radius-card border border-border bg-primary p-6 text-white shadow-sm">
            <h2 className="text-2xl font-extrabold">Siap lanjut ke paket aktif?</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Setelah membaca pengalaman jamaah, Anda bisa langsung cek paket Umrah yang tersedia atau konsultasi via WhatsApp untuk menyesuaikan kebutuhan dan budget.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/paket-umrah"
                className="inline-flex items-center justify-center rounded-radius-control bg-white px-6 py-3 font-bold text-primary transition-opacity hover:opacity-90"
              >
                Lihat Paket
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
