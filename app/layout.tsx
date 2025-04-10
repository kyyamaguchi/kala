import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'

import { Spacer } from '@/components/Spacer'
import { Header } from '@/components/Header'
import { Cursor } from '@/components/Cursor'
import { MainWrapper } from '@/components/MainWrapper'

import './globals.css'

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
      <html lang="en">
        <body>
          <MainWrapper>
            <Header />
            {children}
            <Spacer size={`10vh`} />
            <Cursor />
          </MainWrapper>
        </body>
      </html>
    </ViewTransitions>
  )
}
