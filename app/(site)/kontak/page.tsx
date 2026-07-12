import type { Metadata } from 'next'
import { officeMapsUrl } from './mapsUrl'
import { Button } from '@/components/ui/Button'
import {
  TrustCardGrid,
  TrustChecklist,
  TrustCta,
  TrustHero,
  TrustPageLayout,
  TrustSection,
  TrustSplitPanel,
} from '@/components/trust/TrustPage'

export const metadata: Metadata = {
  title: 'Kontak - Mazaya Travel',
  description:
    'Hubungi Mazaya Travel melalui WhatsApp, telepon, email, atau kunjungi kantor layanan kami di Bone, Sulawesi Selatan.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi'

const contactMethods = [
  {
    title: 'WhatsApp',
    value: '0852 9875 1997',
    description: 'Jalur tercepat untuk bertanya soal paket, jadwal keberangkatan, dokumen, dan pendaftaran.',
    accent: '01',
  },
  {
    title: 'Telepon',
    value: '0852 9875 1997',
    description: 'Cocok untuk konfirmasi cepat atau percakapan langsung pada jam operasional.',
    accent: '02',
  },
  {
    title: 'Email',
    value: 'info@mazaya-travel.id',
    description: 'Bisa digunakan untuk pertanyaan umum, administrasi awal, atau tindak lanjut tertulis.',
    accent: '03',
  },
  {
    title: 'Jam operasional',
    value: 'Senin - Sabtu, 08.00 - 17.00 WITA',
    description: 'Jika ingin datang ke kantor, sebaiknya hubungi WhatsApp lebih dulu agar tim bisa menyiapkan waktu.',
    accent: '04',
  },
]

const visitNotes = [
  'Kantor layanan berada di Bone, Sulawesi Selatan, sehingga calon jemaah lokal lebih mudah datang langsung.',
  'Hubungi WhatsApp resmi sebelum berkunjung agar tim dapat menyiapkan waktu konsultasi.',
  'Semua jalur kontak kami sediakan agar Anda bisa memilih cara komunikasi yang paling nyaman.',
]

export default function ContactPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Kontak Mazaya"
        title="Hubungi Mazaya Travel dengan cara yang paling nyaman untuk Anda dan keluarga."
        summary="Silakan pilih jalur komunikasi yang paling sesuai, baik untuk bertanya soal paket, menanyakan dokumen, maupun merencanakan kunjungan ke kantor."
        actions={
          <>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
              WhatsApp sekarang
            </Button>
            <Button href="/daftar" variant="secondary" size="lg">
              Daftar sekarang
            </Button>
          </>
        }
        stats={[
          { value: 'Cepat', label: 'WhatsApp untuk konsultasi paling responsif' },
          { value: 'Bone', label: 'Kantor layanan bisa dikunjungi langsung' },
          { value: 'Jelas', label: 'Kontak, jam operasional, dan lokasi ditampilkan terbuka' },
        ]}
        panelTitle="Kontak utama"
        panelItems={[
          { label: 'WhatsApp / telepon', value: '0852 9875 1997' },
          { label: 'Email', value: 'info@mazaya-travel.id' },
          { label: 'Jam operasional', value: 'Senin - Sabtu, 08.00 - 17.00 WITA' },
          { label: 'Lokasi', value: 'Bone, Sulawesi Selatan' },
        ]}
      />

      <TrustSection
        eyebrow="Pilihan komunikasi"
        title="Setiap jalur kontak kami siapkan dengan fungsi yang jelas."
        summary="Tujuannya agar Anda tidak bingung harus mulai dari mana saat ingin bertanya atau merencanakan keberangkatan."
      >
        <TrustCardGrid>
          {contactMethods.map((item) => (
            <article key={item.title} className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {item.accent}
              </div>
              <h3 className="text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-base font-semibold text-primary">{item.value}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </TrustCardGrid>
      </TrustSection>

      <TrustSection
        eyebrow="Kunjungan kantor"
        title="Datang langsung ke kantor bisa membantu Anda merasa lebih yakin sebelum mendaftar."
        summary="Bagi calon jemaah lokal, bertemu langsung dengan tim sering menjadi langkah penting sebelum membahas paket dan pembayaran."
      >
        <TrustSplitPanel
          left={
            <div className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <h3 className="text-2xl font-bold text-text">Alamat kantor</h3>
              <p className="mt-4 text-sm leading-7 text-text-secondary">
                PT Mazaya Amanah Wisata<br />
                Jl. Lapawawoi Kr. Sigeri, Kel. Biru, Kec. Tanete Riattang, Bone, Sulawesi Selatan
              </p>
              <div className="mt-5">
                <TrustChecklist items={visitNotes} />
              </div>
              <Button href={officeMapsUrl} target="_blank" rel="noopener noreferrer" variant="soft" size="lg" className="mt-5">
                Buka Google Maps
              </Button>
            </div>
          }
          right={
            <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-white/72">Butuh respon cepat?</div>
              <p className="mt-4 text-sm leading-7 text-white/82">
                WhatsApp tetap menjadi jalur tercepat untuk cek paket aktif, menanyakan jadwal keberangkatan, dan meminta arahan langkah pendaftaran.
              </p>
              <div className="mt-5 grid gap-3">
                {['Nomor utama: 0852 9875 1997', 'Email: info@mazaya-travel.id', 'Layanan untuk Bone dan sekitarnya'].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/8 px-4 py-4 text-sm leading-7 text-white/88">
                    {item}
                  </div>
                ))}
              </div>
              <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" className="mt-5 border-white bg-white text-primary hover:bg-white/92">
                Chat via WhatsApp
              </Button>
            </div>
          }
        />
      </TrustSection>

      <TrustCta
        eyebrow="Mulai bertanya"
        title="Ingin bertanya dulu sebelum memilih paket?"
        summary="Silakan hubungi kami lewat WhatsApp resmi. Tim Mazaya akan membantu menjelaskan pilihan paket dan langkah awal yang perlu Anda siapkan."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Buka pendaftaran"
      />
    </TrustPageLayout>
  )
}
