import { NavItems } from '@/components/NavItems'

import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <>
      <nav id={styles.navbar}>
        <NavItems />
      </nav>
    </>
  )
}
