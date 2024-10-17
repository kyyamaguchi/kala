'use client'

import { usePathname } from 'next/navigation'
import Link, { type LinkProps } from 'next/link'

import styles from './NavItems.module.css'

export function NavItems() {
  const navItems = [
    { href: '/', text: 'Work' },
    { href: '/about', text: 'About' }
  ]
  return (
    <>
      <ul>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}
          >
            {item.text}
          </NavItem>
        ))}
      </ul>
    </>
  )
}

function NavItem({ children, ...props }: NavItemProps) {
  const pathname = usePathname()
  return (
    <li>
      <Link
        className={
          pathname === props.href
          ? styles.active
          : styles.inactive
        }
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}

interface NavItemProps extends LinkProps {
  children: string
}
