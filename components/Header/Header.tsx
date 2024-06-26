'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Navbar } from '@/components/Navbar'

export function Header() {
  const pathname = usePathname()
  if (pathname.includes('projects')) return <></>
  return (
    <>
      <header>
        <h1><Link style={{ fontWeight: '300' }} href="/">Kala Yamaguchi</Link></h1>
        <Navbar />
      </header>
    </>
  )
}
