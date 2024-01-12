import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
  title: 'David Bendezú (Daustinn)',
  description: 'David Bendezú (Daustinn) - Web Development',
  icons: {
    icon: '/daustinn.webp'
  },
  authors: {
    name: 'David Bendezú (Daustinn)',
    url: 'https://daustinn.com'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'David Bendezú (Daustinn)',
    description: 'David Bendezú (Daustinn) - Web Development',
    siteName: 'David Bendezú (Daustinn)',
    url: 'https://daustinn.com',
    images: '/daustinn.webp'
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@daustinndev',
    images: '/daustinn.webp',
    site: '@daustinndev',
    title: 'David Bendezú (Daustinn)',
    description: 'David Bendezú (Daustinn) - Web Development'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/daustinn.webp" />
        <link rel="preload" as="image" href="/daustinn.webp"></link>
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
