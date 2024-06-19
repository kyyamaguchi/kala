import Link from 'next/link'
import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'

import { Navbar } from '@/components/Navbar'
import { Spacer } from '@/components/Spacer'
import { Footer } from '@/components/Footer'
import { GoToTop } from '@/components/GoToTop'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-poppins'
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-roboto'
})

let metadataBase: URL
if (process.env.VERCEL_URL) metadataBase = new URL('https://kalayama.vercel.app')
else metadataBase = new URL(`http://localhost:${process.env.PORT || 3000}`)

export const metadata: Metadata = {
  metadataBase,
  title: 'Kala Yamaguchi',
  description: 'A designer, artist, human being, and avid practitioner of the K.I.S.S. philosophy.',
  openGraph: {
    images: '/og-image.png'
  }
}

export default function RootLayout(
  { children}:
  Readonly<{ children: React.ReactNode }>
) {
  return (
    <html
    lang="en"
    className={`${poppins.variable} ${roboto.variable}`}
    >
      <body>
        <header>
          <h1><Link style={{ fontWeight: '300' }} href="/">Kala Yamaguchi</Link></h1>
          <Navbar />
        </header>
        {children}
        <Spacer size={`10vh`} />
        <Footer />
        <Spacer size={`5vh`} />
        <GoToTop />
      </body>
    </html>
  )
}
