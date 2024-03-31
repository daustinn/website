import type { Metadata } from 'next'
import { Sarabun } from 'next/font/google'
import './globals.css'
import { Nav } from 'ui/components'
import { ThemeProvider } from 'providers/theme'

const DosisSans = Sarabun({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'David Bendezú (Daustinn) - Software Engineer',
  description:
    'Software Engineer based in Lima, Perú with a passion for web development and open source software. I specialize in building high-quality websites and applications.',
  keywords: [
    'David Bendezú',
    'Daustinn',
    'Software Engineer',
    'Web Developer',
    'Open Source',
    'React',
    'Next.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'CSS',
    'HTML',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Fullstack Development',
    'Lima',
    'Perú'
  ],
  abstract:
    'Software Engineer based in Lima, Perú with a passion for web development and open source software.',
  alternates: {
    canonical: 'https://daustinn.com',
    languages: {
      es: 'https://daustinn.com/es',
      en: 'https://daustinn.com'
    },
    types: { html: 'text/html' }
  },
  category: 'Software Development',
  creator: 'David Bendezú',
  icons: './favicon.svg',
  authors: {
    name: 'David Bendezú',
    url: 'https://daustinn.com'
  },
  metadataBase: {
    hash: 'daustinn',
    host: 'https://daustinn.com',
    hostname: 'daustinn.com',
    href: 'https://daustinn.com',
    origin: 'https://daustinn.com',
    password: 'daustinn',
    pathname: '/',
    port: '443',
    protocol: 'https:',
    search: '',
    toJSON: () => 'https://daustinn.com',
    toString: () => 'https://daustinn.com',
    username: 'daustinn',
    searchParams: new URLSearchParams()
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${DosisSans.className} dark:bg-[#0e0d0b] pb-24 *:selection:bg-[#0e0d0b] *:selection:text-[#efefef] *:dark:selection:bg-[#efefef] *:dark:selection:text-[#010101] dark:text-[#efefef] bg-[#efefef] text-[#010101]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div
            className="w-full h-full pointer-events-none select-none left-0 z-30 top-0 dark:opacity-10 opacity-0 fixed bg-center"
            style={{
              backgroundImage: 'url(/noise.webp)'
            }}
          />
          <Nav />
          <div className="bg-gradient-to-t from-transparent via-transparent to-[#efefef] dark:to-[#0e0d0b] pointer-events-none select-none fixed top-0 z-10 w-full h-20" />
          <div className="bg-gradient-to-b from-transparent via-transparent to-[#efefef] dark:to-[#0e0d0b] pointer-events-none select-none fixed bottom-0 z-10 w-full h-20" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
