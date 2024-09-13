export function Subtle({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 0.8,
      color: 'var(--color-black-30)',
    }}>
      {children}
    </span>
  )
}
