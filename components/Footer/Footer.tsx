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
      <footer className={styles.footer}>
        <Grid columns={3} columnSizeDistribution={['2fr', '1fr', '1fr']}>
          <p>© 2024 Kala Yamaguchi</p>
          <nav id={styles["site-links"]}>
            <NavItems />
          </nav>
          <nav id={styles["external-links"]}>
            <ul>
              <li>
                {/* TODO: Update href */}
                <Link href="/">
                  Résumé
                  <ExternalLinkIcon
                      style={{ scale: 0.8, marginLeft: '6px', verticalAlign: '-5px' }}
                  />
                </Link>
              </li>
              <li>
                {/* TODO: Update href */}
                <Link href="/">
                  Email
                  <ExternalLinkIcon
                    style={{ scale: 0.8, marginLeft: '6px', verticalAlign: '-5px' }}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/kalayamaguchi">
                  LinkedIn
                  <ExternalLinkIcon
                    style={{ scale: 0.8, marginLeft: '6px', verticalAlign: '-5px' }}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </Grid>
      </footer>
    </>
  )
}

function ExternalLinkIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.25 3.75H8.55C6.86984 3.75 6.02976 3.75 5.38803 4.07698C4.82354 4.3646 4.3646 4.82354 4.07698 5.38803C3.75 6.02976 3.75 6.86984 3.75 8.55V15.45C3.75 17.1302 3.75 17.9702 4.07698 18.612C4.3646 19.1765 4.82354 19.6354 5.38803 19.923C6.02976 20.25 6.86984 20.25 8.55 20.25H15.45C17.1302 20.25 17.9702 20.25 18.612 19.923C19.1765 19.6354 19.6354 19.1765 19.923 18.612C20.25 17.9702 20.25 17.1302 20.25 15.45V14.75M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
