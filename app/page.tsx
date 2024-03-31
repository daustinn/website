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
  title: 'David Bendezú (Daustinn) - Front-End Developer and UI Designer',
  description:
    'Front-End Developer and UI Designer based in Lima, Perú with a passion for web development and open source software.',
  keywords: [
    'David Bendezú',
    'Daustinn',
    'Front-End',
    'Developer',
    'UI Designer',
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
    'Front-End Developer and UI Designer based in Lima, Perú with a passion for web development and open source software.',
  openGraph: {
    type: 'website',
    title: 'Daustinn',
    description:
      'More than 3 years creating beautiful and minimalist websites and applications with the latest technologies.',
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
