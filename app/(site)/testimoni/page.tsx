import type { Metadata } from 'next'
import { ContentCta, ContentHero, ContentPageLayout, ContentSection } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Testimoni Jamaah | Pengalaman Layanan Mazaya Travel',
  description:
    'Baca pengalaman jamaah Mazaya Travel untuk melihat bagaimana layanan, pendampingan, dan komunikasi berjalan sebelum keberangkatan.',
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
      'Layanan Mazaya terasa amanah. Jadwal, kebutuhan dokumen, dan arahan keberangkatan disampaikan tanpa membuat jamaah panik.',
  },
]

export default function TestimonialsPage() {
  return (
    <ContentPageLayout>
      <ContentHero
        eyebrow="Testimoni Jamaah"
        backHref="/"
        backLabel="Kembali ke Beranda"
        title="Cerita jamaah yang membantu Anda menilai layanan Mazaya sebelum mendaftar."
        summary="Testimoni ini memberi gambaran tentang cara tim Mazaya mendampingi calon jemaah, menjelaskan proses, dan menjaga komunikasi tetap jelas sejak awal."
        actions={
          <>
            <Button href="/paket-umrah" size="lg">
              Lihat paket Umrah
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              WhatsApp konsultasi
            </Button>
          </>
        }
        metrics={[
          { value: `${testimonials.length} testimoni`, label: 'Cerita singkat dari jamaah dan keluarga' },
          { value: 'Pendampingan', label: 'Hal yang paling sering dirasakan jamaah Mazaya' },
          { value: 'Bone & sekitar', label: 'Dekat dengan kebutuhan calon jemaah lokal' },
        ]}
        panelTitle="Yang biasanya ingin dipastikan"
        panelItems={[
          { label: 'Sebelum daftar', value: 'Apakah travel ini amanah dan mudah dihubungi' },
          { label: 'Saat proses berjalan', value: 'Apakah tim membantu dokumen, manasik, dan keberangkatan' },
          { label: 'Untuk keluarga', value: 'Apakah komunikasi cukup jelas untuk menumbuhkan rasa yakin' },
        ]}
      />

      <ContentSection
        eyebrow="Cerita jamaah"
        title="Pengalaman nyata yang sering menjadi alasan calon jemaah merasa lebih mantap."
        summary="Fokus testimoni ini ada pada kejelasan informasi, pendampingan, dan rasa aman yang dirasakan jamaah selama proses berjalan."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <article key={item.name + item.city} className="rounded-[20px] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-text">{item.name}</h2>
                  <p className="text-sm text-muted">Jamaah Mazaya Travel • {item.city}</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-8 text-text-secondary">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <SectionShell surface="card" className="px-6 py-6 md:px-8 md:py-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[20px] border border-border bg-surface-subtle p-6 shadow-[var(--shadow-1)]">
            <h2 className="text-2xl font-bold text-text">Hal yang paling sering disebut jamaah</h2>
            <div className="mt-5 grid gap-3">
              {[
                'Penjelasan yang jelas sebelum daftar dan menjelang keberangkatan.',
                'Keluarga merasa lebih tenang karena alur proses mudah dipahami.',
                'Pendampingan terasa dekat saat mengurus dokumen dan mengikuti manasik.',
              ].map((item) => (
                <div key={item} className="rounded-[16px] border border-border bg-surface px-4 py-4 text-sm leading-7 text-text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] border border-primary/10 bg-primary p-6 text-white shadow-[var(--shadow-2)]">
            <div className="text-sm font-semibold text-white/72">Setelah membaca testimoni</div>
            <h2 className="mt-3 text-2xl font-bold leading-snug">Anda bisa lanjut melihat paket atau bertanya langsung kepada admin.</h2>
            <p className="mt-3 text-sm leading-7 text-white/78">
              Gunakan halaman ini untuk menilai layanan Mazaya, lalu lanjutkan ke paket aktif atau WhatsApp jika ingin menyesuaikan kebutuhan dan budget keluarga.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button href="/paket-umrah" variant="secondary" fullWidth className="bg-white text-primary hover:bg-white/92 border-white">
                Lihat paket
              </Button>
              <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="ghost" fullWidth className="border border-white/20 text-white hover:bg-white/10">
                WhatsApp konsultasi
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <ContentCta
        eyebrow="Konsultasi Mazaya"
        title="Masih ingin memastikan pilihan travel, paket, atau dokumen?"
        summary="Tim Mazaya siap membantu menjawab pertanyaan lanjutan agar keputusan berangkat terasa lebih mantap bersama keluarga."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp konsultasi"
        secondaryHref="/paket-umrah"
        secondaryLabel="Lihat paket aktif"
      />
    </ContentPageLayout>
  )
}
