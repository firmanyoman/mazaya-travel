import type { AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

const variantClassName: Record<ButtonVariant, string> = {
  primary: 'border border-primary bg-primary text-white hover:bg-primary-hover hover:text-white shadow-[var(--shadow-1)]',
  secondary: 'border border-primary bg-surface text-primary hover:bg-primary-soft',
  soft: 'border border-transparent bg-primary-soft text-primary hover:bg-primary-soft/80',
  ghost: 'border border-transparent bg-transparent text-text hover:bg-primary-soft/40',
}

const sizeClassName: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 text-[15px]',
  md: 'min-h-12 px-5 text-[15px]',
  lg: 'min-h-14 px-6 text-base',
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  style,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={[
        'focus-ring inline-flex items-center justify-center gap-2 rounded-radius-control font-semibold transition-[background-color,border-color,color,box-shadow,opacity] duration-150',
        variantClassName[variant],
        sizeClassName[size],
        fullWidth ? 'w-full' : '',
        className,
      ].filter(Boolean).join(' ')}
      style={variant === 'primary' ? { color: '#ffffff', ...style } : style}
      {...props}
    >
      {children}
    </a>
  )
}
