import Link from 'next/link'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <>
      <nav id={styles.navbar}>
        <ul>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/lab">Lab</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
