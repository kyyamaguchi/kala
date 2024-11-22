'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Grid } from '@/components/Grid'
import { Spacer } from '@/components/Spacer'
import { NavItems } from '@/components/NavItems'

import styles from './Footer.module.css'

export function Footer() {
  const pathname = usePathname()
  if (pathname.includes('projects')) return <></>
  return (
    <>
      <Spacer size={`10vh`} />
      <footer id={styles.footer}>
        <Grid columns={3} columnSizeDistribution={['3fr', '1fr', '1fr']}>
          <p>Kala Yamaguchi</p>
          <nav id={styles["site-links"]}>
            <NavItems />
          </nav>
          <nav id={styles["external-links"]}>
            <ul>
              <li>
                <Link href="/">
                  Résumé
                </Link>
              </li>
              <li>
                <Link href="/">
                  Email
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/kalayamaguchi">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </nav>
        </Grid>
      </footer>
    </>
  )
}
