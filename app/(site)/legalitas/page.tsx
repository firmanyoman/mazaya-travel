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
  title: 'Legalitas Mazaya Travel | Cek Identitas dan Izin Dasar',
  description:
    'Lihat identitas perusahaan, PPIU, dan NIB Mazaya Travel agar calon jemaah dan keluarga dapat memeriksanya sebelum memilih paket.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20verifikasi%20legalitas%20dan%20paket'

const legalDocuments = [
  {
    title: 'Identitas perusahaan',
    type: 'Nama badan usaha',
    number: 'PT Mazaya Amanah Wisata',
    summary:
      'Nama resmi perusahaan yang kami gunakan dalam layanan Mazaya Travel.',
    accent: '01',
  },
  {
    title: 'Izin PPIU Kemenag RI',
    type: 'Legalitas perjalanan ibadah Umrah',
    number: 'PPIU resmi Kemenag RI',
    summary:
      'Informasi yang biasa lebih dulu ditanyakan calon jemaah sebelum membahas paket.',
    accent: '02',
  },
  {
    title: 'Nomor Induk Berusaha',
    type: 'NIB',
    number: '13052200161160002',
    summary:
      'Nomor usaha yang kami tampilkan agar dapat diperiksa oleh calon jemaah dan keluarga.',
    accent: '03',
  },
]

const verificationNotes = [
  'Informasi legal membantu calon jemaah mengenali identitas perusahaan sebelum melanjutkan pembicaraan ke paket.',
  'Keluarga dapat melihat data dasar ini lebih dulu sebelum bertanya lebih jauh.',
  'Jika masih ada yang ingin dipastikan, tim Mazaya siap membantu lewat WhatsApp resmi atau kantor layanan di Bone.',
]

export default function LegalPage() {
  return (
    <TrustPageLayout>
      <TrustHero
        eyebrow="Legalitas Mazaya"
        title="Legalitas Mazaya kami tampilkan terbuka agar calon jemaah dan keluarga dapat memeriksanya dengan tenang."
        summary="Di halaman ini kami menampilkan informasi dasar perusahaan yang biasanya ingin dilihat lebih dulu sebelum seseorang membahas paket atau pendaftaran."
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
          { value: 'Terbuka', label: 'Data legal utama kami tampilkan dalam satu halaman' },
          { value: 'Resmi', label: 'Berjalan dengan identitas perusahaan yang dapat diperiksa' },
          { value: 'Bone', label: 'Didukung kantor layanan yang dapat dikunjungi' },
        ]}
        panelTitle="Data legal utama"
        panelItems={[
          { label: 'Perusahaan', value: 'PT Mazaya Amanah Wisata' },
          { label: 'Izin utama', value: 'PPIU resmi Kemenag RI' },
          { label: 'Nomor usaha', value: '13052200161160002' },
          { label: 'Lokasi layanan', value: 'Bone, Sulawesi Selatan' },
        ]}
      />

      <TrustSection
        eyebrow="Legalitas utama"
        title="Informasi yang paling sering dicari sebelum calon jemaah melanjutkan pembicaraan ke paket."
        summary="Kami menaruhnya di satu halaman agar calon jemaah dan keluarga dapat melihat data dasarnya tanpa perlu berpindah-pindah halaman."
      >
        <TrustCardGrid columns="three">
          {legalDocuments.map((item) => (
            <article key={item.title} className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {item.accent}
              </div>
              <h3 className="text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
              <div className="mt-5 rounded-[16px] border border-border bg-surface-subtle p-4 text-sm text-text-secondary">
                <div>
                  <div className="text-xs uppercase tracking-[0.12em] text-muted">Jenis legal</div>
                  <div className="mt-1 font-semibold text-text">{item.type}</div>
                </div>
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-[0.12em] text-muted">Nomor / identitas</div>
                  <div className="mt-1 font-semibold text-text">{item.number}</div>
                </div>
              </div>
            </article>
          ))}
        </TrustCardGrid>
      </TrustSection>

      <TrustSection
        eyebrow="Mengapa penting"
        title="Banyak keluarga ingin melihat legalitas lebih dulu sebelum membahas hal lain."
        summary="Itu wajar. Rasa tenang biasanya tumbuh saat identitas perusahaan dapat dilihat sejak awal."
      >
        <TrustSplitPanel
          left={
            <div className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <h3 className="text-2xl font-bold text-text">Catatan singkat</h3>
              <div className="mt-5">
                <TrustChecklist items={verificationNotes} />
              </div>
            </div>
          }
          right={
            <TrustCard
              title="Setelah itu, silakan lanjut ke paket atau konsultasi"
              description="Jika data dasar ini sudah cukup, Anda dapat melihat paket aktif atau langsung bertanya ke tim Mazaya melalui WhatsApp resmi."
            />
          }
        />
      </TrustSection>

      <TrustCta
        eyebrow="Konsultasi lanjutan"
        title="Bila legalitas sudah Anda lihat, silakan lanjut bertanya soal paket atau pendaftaran."
        summary="Tim Mazaya siap membantu menjelaskan jadwal, fasilitas, dan kebutuhan awal pendaftaran dengan penjelasan yang tenang dan tidak berbelit."
        primaryHref="/daftar"
        primaryLabel="Lihat paket Umrah"
        secondaryHref={whatsappUrl}
        secondaryLabel="WhatsApp Konsultasi"
        secondaryExternal
      />
    </TrustPageLayout>
  )
}
