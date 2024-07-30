'use client'

import { usePathname } from 'next/navigation'

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname.includes('projects'))
    return (
      <>
        <main style={{ maxWidth: 'var(--max-width-projects)' }}>
          {children}
        </main>
      </>
    )
  return (
    <>
      <main style={{ maxWidth: 'var(--max-width)' }}>
        {children}
      </main>
    </>
  )
}
