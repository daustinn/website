import { Metadata } from 'next'
import React from 'react'
import { Content } from './content'
import { HeaderItem } from 'ui/components/lab/header-item'

export const metadata: Metadata = {
  title: 'Threads DropDown',
  description: 'Threads DropDown page in the lab section of Daustinn.',
  keywords: [
    'lab',
    'threads',
    'threads dropdown',
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
    title: 'Threads DropDown',
    description: 'Threads DropDown page in the lab section of Daustinn.',
    images: {
      hash: 'og-image-lab-threads-dropdown',
      host: 'https://daustinn.com',
      pathname: '/og/threads-dropdown.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/threads-dropdown.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/threads-dropdown.webp',
      alt: 'Threads DropDown',
      height: 630,
      secureUrl: 'https://daustinn.com/og/threads-dropdown.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function TrheadsDropDownPage() {
  return (
    <div className="animate-fade-in">
      <HeaderItem
        blurBackground="from-red-500/10 to-red-500/5 dark:from-red-600/5 dark:to-red-700/0"
        dependencies={[
          {
            name: '@radix-ui/react-popover',
            url: 'https://radix-ui.com/docs/popover/react-popover'
          },
          {
            name: 'framer-motion',
            url: 'https://www.framer.com/api/motion/'
          }
        ]}
        date="Febr 2024"
        title="Threads DropdDown"
      />
      <Content />
    </div>
  )
}
