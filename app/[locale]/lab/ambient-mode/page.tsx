import { Metadata } from 'next'
import React from 'react'
import { Content } from './content'
import { HeaderItem } from 'ui/components/lab/header-item'

export const metadata: Metadata = {
  title: 'Youtube ambient mode',
  description: 'Youtube ambient mode page in the lab section of Daustinn.',
  keywords: [
    'lab',
    'youtube',
    'canvas',
    'ambient mode',
    'react',
    'tailwindcss',
    'nextjs',
    'typescript',
    'javascript',
    'web development'
  ],
  openGraph: {
    type: 'website',
    title: 'Youtube ambient mode',
    description: 'Youtube ambient mode page in the lab section of Daustinn.',
    images: {
      hash: 'og-image-lab-ambient-mode',
      host: 'https://daustinn.com',
      pathname: '/og/ambient-mode.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/ambient-mode.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/ambient-mode.webp',
      alt: 'Youtube ambient mode',
      height: 630,
      secureUrl: 'https://daustinn.com/og/ambient-mode.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function AmbientMode() {
  return (
    <div className="animate-fade-in">
      <HeaderItem date="March 2024" title="Ambient Mode" />
      <Content />
    </div>
  )
}
