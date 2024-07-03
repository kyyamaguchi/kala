'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Navbar } from '@/components/Navbar'

import styles from './Header.module.css'

export function Header() {
  const pathname = usePathname()
  if (pathname.includes('projects')) return <></>
  return (
    <>
      <header className={styles.header}>
        <h1><Link href={`/`}> Kala Yamaguchi</Link></h1>
        <Navbar />
      </header>
    </>
  )
}
