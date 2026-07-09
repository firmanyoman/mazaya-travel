interface SectionShellProps {
  children: React.ReactNode
  className?: string
  surface?: 'default' | 'soft' | 'card' | 'primary'
}

const surfaceClassName = {
  default: '',
  soft: 'rounded-radius-card bg-primary-soft/10',
  card: 'rounded-radius-card border border-border bg-surface shadow-[var(--shadow-1)]',
  primary: 'rounded-radius-card bg-primary text-white',
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
