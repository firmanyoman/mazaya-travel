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
  title: 'Tentang Mazaya Travel | Profil, Nilai, dan Pendampingan',
  description:
    'Kenali Mazaya Travel lebih dekat, mulai dari profil perusahaan, nilai layanan, legalitas, sampai cara tim mendampingi calon jemaah sebelum berangkat.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20tentang%20paket%20Umrah'

const strengths = [
  {
    title: 'Berjalan di atas identitas perusahaan yang terbuka',
    description:
      'Mazaya Travel beroperasi dengan nama PT Mazaya Amanah Wisata. Identitas ini kami tampilkan agar calon jemaah dan keluarga dapat memeriksanya dengan tenang.',
    accent: '01',
  },
  {
    title: 'Tumbuh dekat dengan jamaah Bone dan sekitarnya',
    description:
      'Keberadaan kantor layanan di Bone membuat calon jemaah dapat datang, bertanya, dan mengenal siapa yang akan mendampingi perjalanan mereka.',
    accent: '02',
  },
  {
    title: 'Mendampingi sejak bertanya sampai hari berangkat',
    description:
      'Tim Mazaya membantu menjelaskan pilihan paket, menyiapkan dokumen, hingga mengantar proses persiapan keberangkatan dengan pendampingan yang insyaAllah sabar.',
    accent: '03',
  },
  {
    title: 'Menjaga agar jamaah bisa beribadah dengan lebih tenang',
    description:
      'Bagi kami, perjalanan umrah bukan hanya soal berangkat, tetapi juga soal membantu jamaah merasa lebih siap lahir batin saat tiba waktunya beribadah.',
    accent: '04',
  },
]

const serviceCommitments = [
  'Informasi paket, legalitas, dan alur pendaftaran kami sampaikan dengan bahasa yang ringan dan sopan.',
  'Kami berusaha memberi arahan yang cukup agar calon jemaah tidak merasa berjalan sendiri.',
  'Kehadiran kantor di Bone memudahkan jamaah yang ingin datang langsung atau bertanya bersama keluarga.',
  'Komunikasi kami jaga tetap hangat, tidak tergesa-gesa, dan insyaAllah tidak memberatkan.',
]

export default function AboutPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Tentang Mazaya"
        title="Mazaya Travel, teman perjalanan Umrah untuk jamaah Bone dan sekitarnya."
        summary="Mazaya Travel hadir untuk membantu calon jemaah dan keluarga memahami perjalanan Umrah dengan pendampingan yang insyaAllah amanah, sopan, dan menenangkan sejak awal."
        actions={
          <>
            <Button href="/daftar" size="lg">
              Lihat paket Umrah
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              WhatsApp Konsultasi
            </Button>
          </>
        }
        stats={[
          { value: 'Resmi', label: 'Berjalan dengan identitas perusahaan yang terbuka' },
          { value: 'Bone, Sulsel', label: 'Kantor layanan untuk jamaah sekitar' },
          { value: 'Amanah', label: 'Pendampingan sejak awal hingga menjelang berangkat' },
        ]}
        panelTitle="Sekilas tentang Mazaya"
        panelItems={[
          { label: 'Nama resmi', value: 'PT Mazaya Amanah Wisata' },
          { label: 'Brand publik', value: 'Mazaya Travel' },
          { label: 'Basis operasional', value: 'Bone, Sulawesi Selatan' },
          { label: 'Fokus layanan', value: 'Perjalanan ibadah Umrah dengan pendampingan yang insyaAllah amanah' },
        ]}
      />

      <TrustSection
        eyebrow="Mengapa memilih Mazaya"
        title="Kepercayaan tumbuh saat jamaah tahu kepada siapa mereka menitipkan perjalanan ini."
        summary="Karena itu, kami berusaha hadir bukan hanya sebagai penyedia paket, tetapi sebagai tim yang bisa diajak bertanya dan didatangi dengan nyaman."
      >
        <TrustCardGrid>
          {strengths.map((item) => (
            <TrustCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
          ))}
        </TrustCardGrid>
      </TrustSection>

      <TrustSection
        eyebrow="Komitmen layanan"
        title="Hal-hal yang kami jaga dalam mendampingi calon jemaah"
        summary="Kami ingin setiap calon jemaah merasakan pelayanan yang sopan dan tidak membuat keluarga ikut bingung saat menyiapkan keberangkatan."
      >
        <TrustSplitPanel
          left={
            <div className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <h3 className="text-2xl font-bold text-text">Yang berusaha kami jaga</h3>
              <div className="mt-5">
                <TrustChecklist items={serviceCommitments} />
              </div>
            </div>
          }
          right={
            <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-white/72">Legalitas Mazaya</div>
              <div className="mt-5 grid gap-3">
                {['PT Mazaya Amanah Wisata', 'PPIU resmi Kemenag RI', 'NIB: 13052200161160002', 'Kantor layanan di Bone, Sulawesi Selatan'].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/8 px-4 py-4 text-sm leading-7 text-white/88">
                    {item}
                  </div>
                ))}
              </div>
              <Button href="/legalitas" variant="secondary" size="lg" className="mt-5 border-white bg-white text-primary hover:bg-white/92">
                Lihat legalitas lengkap
              </Button>
            </div>
          }
        />
      </TrustSection>

      <TrustCta
        eyebrow="Konsultasi awal"
        title="Bila masih ingin bertanya sebelum memilih paket, silakan hubungi kami."
        summary="Tim Mazaya siap membantu menjelaskan pilihan paket, dokumen, dan alur pendaftaran dengan bahasa yang sopan agar keluarga dapat mengikutinya dengan nyaman."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp Konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Lihat paket Umrah"
      />
    </TrustPageLayout>
  )
}
