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
      <header id={styles.header}>
        <div id={styles["name-container"]}>
          <h1><Link href={`/`}>Kala Yamaguchi</Link></h1>
          <h2>Designer</h2>
        </div>
        <Navbar />
      </header>
    </>
  )
}
