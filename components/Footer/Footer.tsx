'use client'

import Link from 'next/link'
import { IconLink } from '@/components/Icon'
import { Spacer } from '@/components/Spacer'

import { usePathname } from 'next/navigation'

import styles from './Footer.module.css'

export function Footer() {
  const pathname = usePathname()
  if (pathname.includes('projects')) return <></>
  return (
    <>
      <Spacer size={`10vh`} />
      <footer id={styles.footer}>
        <p>© 2025</p>
        <p><Link href="mailto:kalayamaguchi@gmail.com">kalayamaguchi@gmail.com</Link></p>
        <nav id={styles["external-links"]}>
          <ul>
            <li>
              <IconLink
                type="LinkedIn"
                href="https://linkedin.com/in/kalayamaguchi"
              />
            </li>
            <li>
              <IconLink
                type="Instagram"
                href="https://instagram.com/kalayamaguchi"
              />
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}
