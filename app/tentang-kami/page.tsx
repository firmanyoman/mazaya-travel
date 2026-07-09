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
    title: 'Travel resmi dan terverifikasi',
    description:
      'Mazaya Travel membawa identitas PT Mazaya Amanah Wisata dengan legalitas yang ditampilkan terbuka agar calon jemaah dan keluarga mudah melakukan verifikasi dasar.',
    accent: '01',
  },
  {
    title: 'Berbasis di Bone',
    description:
      'Kedekatan lokasi membuat konsultasi, kunjungan kantor, dan komunikasi dengan tim terasa lebih mudah bagi masyarakat Bone dan sekitarnya.',
    accent: '02',
  },
  {
    title: 'Pendampingan amanah',
    description:
      'Dari pertanyaan awal sampai proses keberangkatan, jemaah dibantu dengan alur yang rapi, bahasa yang mudah dipahami, dan ekspektasi yang lebih jelas.',
    accent: '03',
  },
  {
    title: 'Fokus pada ketenangan ibadah',
    description:
      'Layanan disusun agar keluarga tidak dibebani informasi yang membingungkan, sehingga keputusan berangkat terasa lebih mantap dan tenang.',
    accent: '04',
  },
]

const serviceCommitments = [
  'Informasi paket, legalitas, dan alur pendaftaran disusun agar mudah dipindai keluarga.',
  'Jalur konsultasi dibuat langsung dan jelas supaya calon jemaah tahu harus mulai dari mana.',
  'Kehadiran lokal Bone ditampilkan sebagai bagian dari trust, bukan sekadar pelengkap profil.',
  'Nada komunikasi dijaga tetap hangat, profesional, dan tidak menekan calon jemaah.',
]

export default function AboutPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Tentang Mazaya"
        title="Travel Umrah resmi dari Bone yang mengutamakan amanah, kejelasan, dan ketenangan jemaah."
        summary="Mazaya Travel hadir untuk membantu calon jemaah berangkat Umrah dengan proses yang lebih terarah, pendampingan yang lebih manusiawi, dan informasi yang terasa aman dibaca bersama keluarga."
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
        eyebrow="Nilai layanan"
        title="Kepercayaan dibangun lewat struktur layanan yang rapi dan terasa dekat."
        summary="Mazaya tidak hanya menjual paket. Kami menata pengalaman awal calon jemaah agar keputusan berangkat bisa diambil dengan informasi yang lebih jernih."
      >
        <TrustCardGrid>
          {strengths.map((item) => (
            <TrustCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
          ))}
        </TrustCardGrid>
      </TrustSection>

      <TrustSection
        eyebrow="Komitmen Mazaya"
        title="Apa yang kami jaga dalam setiap interaksi dengan calon jemaah"
        summary="Halaman, kontak, dan alur pendaftaran kami susun agar jemaah bisa merasa dituntun dengan baik, bukan didorong terburu-buru."
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
        eyebrow="Konsultasi yang tenang"
        title="Ingin menilai paket yang paling sesuai bersama keluarga?"
        summary="Tim Mazaya siap membantu menjelaskan pilihan paket, proses dokumen, dan langkah pendaftaran dengan bahasa yang ringan dan tidak tergesa-gesa."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/daftar"
        secondaryLabel="Daftar sekarang"
      />
    </TrustPageLayout>
  )
}
