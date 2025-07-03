'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import * as motion from 'motion/react-client'

import { Navbar } from '@/components/Navbar'

import styles from './Header.module.css'
import { fadeInFrom, fadeInTo, fadeInProps } from '@/lib/animations'

function HeaderContent() {
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

export function Header() {
  const pathname = usePathname()
  if (pathname.includes('projects')) return <></>
  if (pathname.includes('about')) return <HeaderContent />

  return (
    <motion.div
      initial={fadeInFrom}
      animate={fadeInTo}
      transition={fadeInProps}
      viewport={{ once: true }}
    >
      <HeaderContent />
    </motion.div>
  )
}
