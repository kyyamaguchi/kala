import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <h1>Kala Yamaguchi</h1>
        <nav>
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
      </header>
    </>
  )
}
