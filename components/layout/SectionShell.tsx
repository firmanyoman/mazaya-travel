interface SectionShellProps {
  children: React.ReactNode
  className?: string
  surface?: 'default' | 'soft' | 'card' | 'primary'
}

const surfaceClassName = {
  default: '',
  soft: 'rounded-[20px] bg-primary-soft/10',
  card: 'rounded-[20px] border border-border bg-surface shadow-[var(--shadow-1)]',
  primary: 'rounded-[20px] bg-primary text-white',
}

export function SectionShell({ children, className = '', surface = 'default' }: SectionShellProps) {
  return (
    <section className={[
      'section-shell',
      surfaceClassName[surface],
      className,
    ].filter(Boolean).join(' ')}>
      {children}
    </section>
  )
}
