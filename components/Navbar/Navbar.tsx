import Link from 'next/link'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <>
      <nav id={styles.navbar}>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/resume">resume</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
