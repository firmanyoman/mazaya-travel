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
  title: 'Kontak Mazaya Travel | WhatsApp, Telepon, dan Kantor',
  description:
    'Hubungi Mazaya Travel lewat WhatsApp, telepon, email, atau datang langsung ke kantor untuk bertanya soal paket dan pendaftaran Umrah.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi'

const contactMethods = [
  {
    title: 'WhatsApp',
    value: '0852 9875 1997',
    description: 'Jalur yang paling sering dipakai untuk bertanya soal paket, jadwal keberangkatan, dan pendaftaran.',
    accent: '01',
  },
  {
    title: 'Telepon',
    value: '0852 9875 1997',
    description: 'Bisa digunakan untuk konfirmasi cepat atau percakapan langsung pada jam operasional.',
    accent: '02',
  },
  {
    title: 'Email',
    value: 'info@mazaya-travel.id',
    description: 'Dapat digunakan untuk pertanyaan umum atau tindak lanjut tertulis.',
    accent: '03',
  },
  {
    title: 'Jam operasional',
    value: 'Senin - Sabtu, 08.00 - 17.00 WITA',
    description: 'Jika ingin datang ke kantor, sebaiknya hubungi WhatsApp lebih dulu agar tim dapat menyiapkan waktu.',
    accent: '04',
  },
]

const visitNotes = [
  'Kantor layanan berada di Bone, Sulawesi Selatan, sehingga jamaah sekitar dapat datang langsung.',
  'Hubungi WhatsApp resmi sebelum berkunjung agar tim dapat menyiapkan waktu konsultasi.',
  'Silakan pilih jalur komunikasi yang paling nyaman bagi Anda dan keluarga.',
]

export default function ContactPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Kontak Mazaya"
        title="Hubungi Mazaya Travel melalui jalur yang paling nyaman bagi Anda dan keluarga."
        summary="Anda dapat bertanya soal paket, pendaftaran, atau rencana berkunjung ke kantor melalui WhatsApp, telepon, email, maupun datang langsung."
        actions={
          <>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
              WhatsApp Konsultasi
            </Button>
            <Button href="/daftar" variant="secondary" size="lg">
              Lihat paket Umrah
            </Button>
          </>
        }
        stats={[
          { value: 'WhatsApp', label: 'Jalur yang paling sering dipakai untuk konsultasi awal' },
          { value: 'Bone', label: 'Kantor layanan dapat dikunjungi langsung' },
          { value: 'Terbuka', label: 'Kontak, jam operasional, dan lokasi kami tampilkan' },
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
        title="Setiap jalur kontak kami sediakan untuk kebutuhan yang berbeda."
        summary="Sebagian jamaah memilih WhatsApp, sebagian ingin menelepon, dan ada juga yang lebih nyaman datang langsung ke kantor."
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
        title="Bagi banyak calon jemaah, datang ke kantor menjadi cara yang menenangkan sebelum mendaftar."
        summary="Terutama untuk jamaah Bone dan sekitarnya, bertemu langsung sering terasa lebih mantap sebelum membahas paket lebih jauh."
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
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-white/72">Butuh jawaban cepat?</div>
              <p className="mt-4 text-sm leading-7 text-white/82">
                WhatsApp biasanya menjadi jalur yang paling cepat untuk menanyakan paket aktif, jadwal keberangkatan, dan kebutuhan awal pendaftaran.
              </p>
              <div className="mt-5 grid gap-3">
                {['Nomor utama: 0852 9875 1997', 'Email: info@mazaya-travel.id', 'Layanan untuk Bone dan sekitarnya'].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/8 px-4 py-4 text-sm leading-7 text-white/88">
                    {item}
                  </div>
                ))}
              </div>
              <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" className="mt-5 border-white bg-white text-primary hover:bg-white/92">
                WhatsApp Konsultasi
              </Button>
            </div>
          }
        />
      </TrustSection>

      <TrustCta
        eyebrow="Mulai bertanya"
        title="Jika masih ingin bertanya sebelum memilih paket, silakan hubungi kami."
        summary="Tim Mazaya siap membantu menjelaskan pilihan paket dan kebutuhan awal yang perlu Anda siapkan dengan penjelasan yang sabar dan tidak tergesa-gesa."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp Konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Lihat paket Umrah"
      />
    </TrustPageLayout>
  )
}
