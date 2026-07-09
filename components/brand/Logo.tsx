import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

interface LogoProps {
  variant?: 'default' | 'reversed'
  width?: number
  priority?: boolean
}

export function Logo({
  variant = 'default',
  width = 116,
  priority = false,
}: LogoProps) {
  return (
    <Link href="/" aria-label="Mazaya Travel" className="inline-flex items-center focus-ring rounded-[var(--radius-sm)]">
      <Image
        src={logoImage}
        alt="Logo Mazaya Travel"
        className={variant === 'reversed' ? 'h-auto object-contain brightness-0 invert' : 'h-auto object-contain'}
        width={width}
        priority={priority}
      />
    </Link>
  )
}
