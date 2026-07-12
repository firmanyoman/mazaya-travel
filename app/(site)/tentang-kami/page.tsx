import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import {
  TrustCard,
  TrustCardGrid,
  TrustChecklist,
  TrustCta,
  TrustHero,
  TrustPageLayout,
  TrustSection,
  TrustSplitPanel,
} from '@/components/trust/TrustPage'

export const metadata: Metadata = {
  title: 'Tentang Kami - Mazaya Travel',
  description:
    'Kenal lebih dekat dengan Mazaya Travel, travel Umrah resmi berbasis di Bone yang mengutamakan amanah, pendampingan, dan kejelasan layanan.',
}

const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20tentang%20paket%20Umrah'

const strengths = [
  {
    title: 'Travel resmi dan mudah dicek',
    description:
      'Mazaya Travel membawa identitas PT Mazaya Amanah Wisata dengan legalitas yang ditampilkan terbuka agar calon jemaah dan keluarga lebih mudah melakukan verifikasi.',
    accent: '01',
  },
  {
    title: 'Dekat dengan masyarakat Bone',
    description:
      'Keberadaan kantor layanan di Bone memudahkan konsultasi, kunjungan langsung, dan komunikasi yang lebih dekat dengan calon jemaah lokal.',
    accent: '02',
  },
  {
    title: 'Pendampingan dari awal sampai berangkat',
    description:
      'Tim Mazaya membantu calon jemaah memahami paket, menyiapkan dokumen, mengikuti manasik, hingga menghadapi proses keberangkatan dengan lebih tenang.',
    accent: '03',
  },
  {
    title: 'Fokus pada kenyamanan ibadah',
    description:
      'Kami ingin jemaah dan keluarga merasa lebih siap, lebih jelas, dan lebih mantap saat mengambil keputusan untuk berangkat Umrah.',
    accent: '04',
  },
]

const serviceCommitments = [
  'Informasi paket, legalitas, dan alur pendaftaran kami jelaskan dengan bahasa yang mudah dipahami keluarga.',
  'Jalur konsultasi dibuat jelas agar calon jemaah tahu harus mulai dari mana.',
  'Kehadiran lokal di Bone memudahkan calon jemaah yang ingin bertanya atau datang langsung ke kantor.',
  'Komunikasi dijaga tetap sopan, hangat, dan tidak menekan calon jemaah.',
]

export default function AboutPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Tentang Mazaya"
        title="Travel Umrah resmi dari Bone yang mendampingi calon jemaah dengan amanah dan jelas."
        summary="Mazaya Travel hadir untuk membantu calon jemaah berangkat Umrah dengan proses yang lebih terarah, pendampingan yang rapi, dan informasi yang nyaman dibaca bersama keluarga."
        actions={
          <>
            <Button href="/daftar" size="lg">
              Lihat paket / daftar
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              WhatsApp konsultasi
            </Button>
          </>
        }
        stats={[
          { value: 'Resmi', label: 'Beroperasi dengan identitas perusahaan yang jelas' },
          { value: 'Bone, Sulsel', label: 'Kantor layanan dekat untuk verifikasi langsung' },
          { value: 'Amanah', label: 'Pendampingan rapi sejak konsultasi awal' },
        ]}
        panelTitle="Profil singkat"
        panelItems={[
          { label: 'Nama resmi', value: 'PT Mazaya Amanah Wisata' },
          { label: 'Brand publik', value: 'Mazaya Travel' },
          { label: 'Basis operasional', value: 'Bone, Sulawesi Selatan' },
          { label: 'Fokus layanan', value: 'Perjalanan ibadah Umrah dengan pendampingan amanah' },
        ]}
      />

      <TrustSection
        eyebrow="Mengapa memilih Mazaya"
        title="Kepercayaan dibangun lewat pelayanan yang jelas, dekat, dan mudah diikuti."
        summary="Mazaya tidak hanya menawarkan paket, tetapi juga membantu calon jemaah memahami proses berangkat dengan lebih tenang."
      >
        <TrustCardGrid>
          {strengths.map((item) => (
            <TrustCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
          ))}
        </TrustCardGrid>
      </TrustSection>

      <TrustSection
        eyebrow="Komitmen layanan"
        title="Apa yang kami jaga dalam setiap proses pendampingan jemaah"
        summary="Kami ingin calon jemaah merasa lebih paham, lebih siap, dan tidak merasa dibiarkan bingung saat merencanakan keberangkatan."
      >
        <TrustSplitPanel
          left={
            <div className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <h3 className="text-2xl font-bold text-text">Komitmen layanan</h3>
              <div className="mt-5">
                <TrustChecklist items={serviceCommitments} />
              </div>
            </div>
          }
          right={
            <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-white/72">Ringkasan legalitas</div>
              <div className="mt-5 grid gap-3">
                {['PT Mazaya Amanah Wisata', 'PPIU resmi Kemenag RI', 'NIB: 13052200161160002', 'Kantor layanan di Bone, Sulawesi Selatan'].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/8 px-4 py-4 text-sm leading-7 text-white/88">
                    {item}
                  </div>
                ))}
              </div>
              <Button href="/legalitas" variant="secondary" size="lg" className="mt-5 border-white bg-white text-primary hover:bg-white/92">
                Lihat halaman legalitas
              </Button>
            </div>
          }
        />
      </TrustSection>

      <TrustCta
        eyebrow="Konsultasi awal"
        title="Ingin menilai paket yang paling sesuai bersama keluarga?"
        summary="Tim Mazaya siap membantu menjelaskan pilihan paket, proses dokumen, dan langkah pendaftaran dengan bahasa yang ringan dan mudah dipahami."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Daftar sekarang"
      />
    </TrustPageLayout>
  )
}
