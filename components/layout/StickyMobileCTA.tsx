import { Container } from './Container'
import { Button } from '@/components/ui/Button'

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border/80 bg-surface/96 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 shadow-[0_-8px_24px_rgba(15,91,91,0.12)] md:hidden">
      <Container className="flex items-center gap-3">
        <Button href="/paket-umrah" variant="secondary" size="sm" className="flex-1">
          Lihat Paket
        </Button>
        <Button
          href="https://wa.me/6285298751997?text=Assalamualaikum%20Mazaya%20Travel,%20saya%20ingin%20konsultasi"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="flex-[1.2]"
        >
          WhatsApp
        </Button>
      </Container>
    </div>
  )
}
