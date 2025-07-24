export function Subtle({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 0.8,
      color: 'var(--color-subtle)',
    }}>
      {children}
    </span>
  )
}
