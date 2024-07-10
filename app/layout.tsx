import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'

import { Spacer } from '@/components/Spacer'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { GoToTop } from '@/components/GoToTop'
import { DifferenceCursor } from '@/components/Cursor'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
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
  { children }:
  Readonly<{ children: React.ReactNode }>
) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${roboto.variable}`}
      >
        <body>
          <main>
            <Header />
            {children}
            <Footer />
            <Spacer size={`10vh`} />
            <GoToTop />
            <DifferenceCursor />
          </main>
        </body>
      </html>
    </ViewTransitions>
  )
}
