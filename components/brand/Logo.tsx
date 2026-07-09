import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/assets/mazaya_travel_rebuild_inventory/assets/Logo.png'

interface LogoProps {
  variant?: 'default' | 'reversed'
  height?: number
  priority?: boolean
}

export function Logo({
  variant = 'default',
  height = 44,
  priority = false,
}: LogoProps) {
  return (
    <Link href="/" aria-label="Mazaya Travel" className="inline-flex items-center focus-ring rounded-[var(--radius-sm)]">
      <Image
        src={logoImage}
        alt="Logo Mazaya Travel"
        className={variant === 'reversed' ? 'w-auto object-contain brightness-0 invert' : 'w-auto object-contain'}
        width={Math.round((logoImage.width / logoImage.height) * height)}
        height={height}
        style={{ width: 'auto', height: `${height}px` }}
        priority={priority}
      />
    </Link>
  )
}
