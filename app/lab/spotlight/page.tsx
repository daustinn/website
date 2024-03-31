import { Metadata } from 'next'
import React from 'react'
import { HeaderItem } from 'ui/components/lab/header-item'
import { Content } from './content'

export const metadata: Metadata = {
  title: 'Smotlight',
  description: 'Smotlight page in the lab section of Daustinn.',
  keywords: [
    'lab',
    'smotlight',
    'vaul',
    'react',
    'tailwindcss',
    'nextjs',
    'typescript',
    'javascript',
    'web development'
  ],
  openGraph: {
    type: 'website',
    title: 'Smotlight',
    description: 'Smotlight page in the lab section of Daustinn.',
    images: {
      hash: 'og-image-lab-smotlight',
      host: 'https://daustinn.com',
      pathname: '/og/smotlight.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/smotlight.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/smotlight.webp',
      alt: 'Smotlight',
      height: 630,
      secureUrl: 'https://daustinn.com/og/smotlight.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function SmotlightPage() {
  return (
    <div className="animate-fade-in">
      <HeaderItem
        blurBackground="from-rose-500/10 to-rose-500/5 dark:from-rose-600/5 dark:to-rose-700/0"
        dependencies={[
          {
            name: 'framer-motion',
            url: 'https://www.framer.com/api/motion/'
          }
        ]}
        date="March 2024"
        title="Drawer"
      />
      <Content />
    </div>
  )
}
