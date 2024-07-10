import Link from 'next/link'

import styles from './BackButton.module.css'

export function BackButton() {
  return (
    <div aria-label="Back to home page">
      <Link href={`/`} className={styles.button}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5.75L3.75 12L10 18.25M4.5 12H20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  )
}
