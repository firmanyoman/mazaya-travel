import type { Metadata } from 'next'
import { ContentCta, ContentHero, ContentPageLayout, ContentSection } from '@/components/content/ContentPage'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Testimoni Jamaah | Pengalaman Layanan Mazaya Travel',
  description:
    'Baca pengalaman jamaah Mazaya Travel untuk melihat bagaimana pendampingan dan komunikasi berjalan sebelum keberangkatan.',
}
const whatsappUrl =
  'https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi%20setelah%20membaca%20testimoni'

const testimonials = [
  {
    name: 'Ibu Rahmawati',
    city: 'Bone',
    quote:
      'Dari awal bertanya sampai hari berangkat, tim Mazaya mendampingi dengan sabar. Keluarga juga merasa lebih tenang karena semuanya disampaikan sejak awal.',
  },
  {
    name: 'Bapak Syamsuddin',
    city: 'Watampone',
    quote:
      'Yang paling terasa bagi kami adalah pendampingannya. Saat persiapan dokumen dan manasik, tim Mazaya hadir membantu tanpa membuat kami bingung.',
  },
  {
    name: 'Ibu Nurhayati',
    city: 'Bone',
    quote:
      'Kami mencari travel yang bisa dipercaya dan dekat untuk konsultasi. Mazaya membuat kami merasa lebih tenteram karena komunikasinya baik dan prosesnya terasa dijaga.',
  },
  {
    name: 'Bapak Mulyadi',
    city: 'Sinjai',
    quote:
      'Layanan Mazaya terasa amanah. Jadwal, kebutuhan dokumen, dan arahan keberangkatan disampaikan dengan tenang sehingga jamaah tidak panik.',
  },
]

export default function TestimonialsPage() {
  return (
    <ContentPageLayout>
      <ContentHero
        eyebrow="Testimoni Jamaah"
        backHref="/"
        backLabel="Kembali ke Beranda"
        title="Cerita jamaah yang dapat membantu Anda mengenal cara Mazaya melayani sebelum mendaftar."
        summary="Testimoni ini memberi gambaran tentang bagaimana tim Mazaya mendampingi jamaah, menjaga komunikasi, dan menemani proses sejak awal hingga keberangkatan."
        actions={
          <>
            <Button href="/paket-umrah" size="lg">
              Lihat paket Umrah
            </Button>
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              WhatsApp Konsultasi
            </Button>
          </>
        }
        metrics={[
          { value: `${testimonials.length} testimoni`, label: 'Cerita singkat dari jamaah dan keluarga' },
          { value: 'Pendampingan', label: 'Hal yang paling sering disebut dalam pengalaman jamaah' },
          { value: 'Bone & sekitar', label: 'Dekat dengan kebutuhan calon jemaah lokal' },
        ]}
        panelTitle="Hal yang biasa ingin diketahui"
        panelItems={[
          { label: 'Sebelum daftar', value: 'Apakah travel ini amanah dan enak diajak bertanya' },
          { label: 'Saat proses berjalan', value: 'Apakah tim membantu dokumen, manasik, dan keberangkatan' },
          { label: 'Untuk keluarga', value: 'Apakah komunikasi membuat keluarga merasa lebih tenang' },
        ]}
      />

      <ContentSection
        eyebrow="Cerita jamaah"
        title="Pengalaman nyata yang sering membuat calon jemaah merasa lebih tenang."
        summary="Yang paling sering muncul dalam cerita mereka adalah pendampingan, komunikasi, dan rasa aman selama proses berjalan."
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
                'Penjelasan yang disampaikan sejak awal hingga menjelang keberangkatan.',
                'Keluarga merasa lebih tenang karena prosesnya dijelaskan dengan sabar.',
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
            <h2 className="mt-3 text-2xl font-bold leading-snug">Jika Anda merasa cukup cocok, silakan lanjut melihat paket atau bertanya langsung kepada kami.</h2>
            <p className="mt-3 text-sm leading-7 text-white/78">
              Setelah membaca pengalaman jamaah lain, Anda dapat lanjut ke paket aktif atau bertanya lewat WhatsApp bila masih ingin menyesuaikan kebutuhan keluarga.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button href="/paket-umrah" variant="secondary" fullWidth className="bg-white text-primary hover:bg-white/92 border-white">
                Lihat paket
              </Button>
              <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="ghost" fullWidth className="border border-white/20 text-white hover:bg-white/10">
                WhatsApp Konsultasi
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <ContentCta
        eyebrow="Konsultasi Mazaya"
        title="Jika masih ada yang ingin ditanyakan soal travel, paket, atau dokumen, silakan hubungi kami."
        summary="Tim Mazaya siap membantu menjawab pertanyaan lanjutan dengan penjelasan yang sabar agar Anda dan keluarga dapat mempertimbangkannya dengan tenang."
        primaryHref={whatsappUrl}
        primaryLabel="WhatsApp Konsultasi"
        secondaryHref="/paket-umrah"
        secondaryLabel="Lihat paket Umrah"
      />
    </ContentPageLayout>
  )
}
