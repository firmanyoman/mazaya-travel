import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - Mazaya Travel',
  description:
    'Pelajari bagaimana Mazaya Travel mengumpulkan, menggunakan, dan menjaga data calon jamaah yang dikirim melalui form pendaftaran dan konsultasi.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20bertanya%20tentang%20kebijakan%20privasi'

const privacyPoints = [
  {
    title: 'Data yang kami kumpulkan',
    body:
      'Untuk launch saat ini, data yang dapat kami terima dari calon jamaah meliputi nama lengkap, nomor WhatsApp, NIK, nama ayah, jenis kelamin, tanggal lahir, kota domisili, pesan tambahan, serta file KTP bila diunggah melalui form pendaftaran.',
  },
  {
    title: 'Tujuan penggunaan data',
    body:
      'Data digunakan untuk memproses pendaftaran awal Umrah atau Haji, menghubungi calon jamaah untuk tindak lanjut, memverifikasi kebutuhan administrasi dasar, dan membantu tim internal menyiapkan layanan yang relevan dengan paket yang dipilih.',
  },
  {
    title: 'Persetujuan pengguna',
    body:
      'Sebelum mengirim form pendaftaran, pengguna diminta memberikan persetujuan bahwa data yang dimasukkan benar dan boleh digunakan oleh PT Mazaya Amanah Wisata untuk kebutuhan administrasi pendaftaran Umrah atau Haji.',
  },
  {
    title: 'Penyimpanan dan akses internal',
    body:
      'Data lead disimpan untuk kebutuhan tindak lanjut internal Mazaya Travel. Akses data dibatasi untuk keperluan operasional yang relevan, seperti follow up pendaftaran, verifikasi awal, dan koordinasi layanan calon jamaah.',
  },
  {
    title: 'Berbagi data',
    body:
      'Kami tidak menampilkan data pribadi calon jamaah sebagai konten publik. Bila pada tahap lanjutan dibutuhkan pihak pendukung proses layanan, pembagian data dilakukan seperlunya sesuai konteks operasional dan administrasi perjalanan ibadah.',
  },
  {
    title: 'Hak untuk menghubungi kami',
    body:
      'Jika Anda ingin menanyakan penggunaan data, memperbarui informasi kontak, atau meminta tindak lanjut terkait data yang sudah dikirim, silakan hubungi tim Mazaya Travel melalui WhatsApp resmi yang tercantum di website.',
  },
]

export default function PrivacyPolicyPage() {
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

      <main className="mx-auto flex-1 w-full max-w-4xl space-y-8">
        <section className="rounded-radius-card border border-border bg-primary-soft/20 px-6 py-10 sm:px-10">
          <span className="inline-block rounded-radius-pill bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            Kebijakan Privasi
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-text sm:text-4xl">
            Penjelasan Ringkas Penggunaan Data di Mazaya Travel
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Halaman ini menjelaskan praktik privasi pada website launch saat ini, terutama untuk data yang dikirim melalui form pendaftaran dan jalur konsultasi. Kami berusaha memakai data seperlunya untuk proses layanan calon jamaah dan tindak lanjut internal yang relevan.
          </p>
        </section>

        <section className="space-y-6">
          {privacyPoints.map((item) => (
            <article key={item.title} className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
              <h2 className="text-xl font-bold text-text">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="rounded-radius-card border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text">Konteks data pada launch saat ini</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>Form pendaftaran meminta data identitas dasar dan persetujuan privasi sebelum submit.</li>
              <li>Nomor WhatsApp dipakai untuk koordinasi lanjutan dan arahan langkah berikutnya.</li>
              <li>File KTP, bila diunggah, diperlakukan sebagai data sensitif untuk kebutuhan administrasi awal.</li>
              <li>Halaman ini dapat berubah bila alur pengumpulan data atau operasional layanan berubah pada fase berikutnya.</li>
            </ul>
          </article>
          <article className="rounded-radius-card border border-border bg-primary text-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold">Butuh klarifikasi?</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Jika ada pertanyaan soal penggunaan data pribadi atau proses pendaftaran, hubungi tim kami lewat WhatsApp resmi agar Anda mendapat penjelasan langsung.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-radius-control bg-white px-6 py-3 font-bold text-primary transition-opacity hover:opacity-90"
              >
                WhatsApp Konsultasi
              </a>
              <Link
                href="/daftar"
                className="inline-flex items-center justify-center rounded-radius-control border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition-colors hover:bg-white/15"
              >
                Buka Form Pendaftaran
              </Link>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
