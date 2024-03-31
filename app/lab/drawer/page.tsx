import { Metadata } from 'next'
import React from 'react'
import { FooterItem } from 'ui/components/lab/footer-item'
import { HeaderItem } from 'ui/components/lab/header-item'
import { Content } from './content'

export const metadata: Metadata = {
  title: 'Drawer',
  description: 'Drawer page in the lab section of Daustinn.',
  keywords: [
    'lab',
    'drawer',
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
    title: 'Drawer',
    description: 'Drawer page in the lab section of Daustinn.',
    images: {
      hash: 'og-image-lab-drawer',
      host: 'https://daustinn.com',
      pathname: '/og/drawer.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/drawer.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/drawer.webp',
      alt: 'Drawer',
      height: 630,
      secureUrl: 'https://daustinn.com/og/drawer.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function DrawerPage() {
  return (
    <div className="animate-fade-in">
      <HeaderItem
        blurBackground="from-violet-500/10 to-violet-500/5 dark:from-violet-600/5 dark:to-violet-700/0"
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
      <FooterItem
        references={[
          {
            name: 'Vaul',
            url: 'https://vaul.emilkowal.ski/'
          }
        ]}
      />
    </div>
  )
}
