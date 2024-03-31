import { Metadata } from 'next'
import React from 'react'
import { HeaderItem } from 'ui/components/lab/header-item'
import { Content } from './content'

export const metadata: Metadata = {
  title: 'Sortable',
  description: 'Sortable page in the lab section of Daustinn.',
  keywords: [
    'lab',
    'sortable',
    'react',
    'tailwindcss',
    'nextjs',
    'typescript',
    'javascript',
    'web development'
  ],
  openGraph: {
    type: 'website',
    title: 'Sortable',
    description: 'Sortable page in the lab section of Daustinn.',
    images: {
      hash: 'og-image-lab-sortable',
      host: 'https://daustinn.com',
      pathname: '/og/sortable.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/sortable.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/sortable.webp',
      alt: 'Sortable',
      height: 630,
      secureUrl: 'https://daustinn.com/og/sortable.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function SortablePage() {
  return (
    <div className="animate-fade-in">
      <HeaderItem
        blurBackground="from-violet-500/10 to-violet-500/5 dark:from-violet-600/5 dark:to-violet-700/0"
        dependencies={[
          {
            name: '@dnd-kit/sortable',
            url: 'https://docs.dndkit.com/presets/sortable'
          },
          {
            name: '@dnd-kit/utilities',
            url: 'https://www.npmjs.com/package/@dnd-kit/utilities'
          },
          {
            name: '@dnd-kit/core',
            url: 'https://www.npmjs.com/package/@dnd-kit/core'
          }
        ]}
        date="March 2024"
        title="Drawer"
      />
      <Content />
    </div>
  )
}
