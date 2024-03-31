import { Metadata } from 'next'
import {
  About,
  Connect,
  Experiences,
  Header,
  Hobbies,
  LatestLab,
  Skills
} from 'ui/components'

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    title: 'Daustinn',
    description: 'Personal website of Dustin Heisey.',
    images: {
      hash: 'og-image-home',
      host: 'https://daustinn.com',
      pathname: '/og/home.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/home.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/home.webp',
      alt: 'Daustinn',
      height: 630,
      secureUrl: 'https://daustinn.com/og/home.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function Home() {
  return (
    <main className="py-10">
      <Header />
      <About />
      <LatestLab />
      <Experiences />
      <Hobbies />
      <Connect />
      <Skills />
    </main>
  )
}
