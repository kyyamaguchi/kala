import Link from 'next/link'

import { Grid } from '@/components/Grid'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Grid columns={3} columnSizeDistribution={['2fr', '1fr', '1fr']}>
          <p>© 2024 Kala Yamaguchi</p>
          <nav>
            <ul>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/play">Play</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <Link href="/">Résumé</Link>
              </li>
              <li>
                <Link href="/">Email</Link>
              </li>
              <li>
                <Link href="/">LinkedIn</Link>
              </li>
            </ul>
          </nav>
        </Grid>
      </footer>
    </>
  )
}
