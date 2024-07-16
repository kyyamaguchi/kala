import Link from 'next/link'

export function NavItems() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Work</Link>
        </li>
        <li>
          <Link href="/studio">Studio</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  )
}
