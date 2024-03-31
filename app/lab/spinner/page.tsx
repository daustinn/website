import { Metadata } from 'next'
import React from 'react'
import { Content } from './content'
import { HeaderItem } from 'ui/components/lab/header-item'

export const metadata: Metadata = {
  title: 'Spinner',
  description: 'Spinner page in the lab section of Daustinn.',
  keywords: [
    'lab',
    'spinner',
    'loading',
    'react',
    'tailwindcss',
    'nextjs',
    'typescript',
    'javascript',
    'web development'
  ],
  openGraph: {
    type: 'website',
    title: 'Spinner',
    description: 'Spinner page in the lab section of Daustinn.',
    images: {
      hash: 'og-image-lab-spinner',
      host: 'https://daustinn.com',
      pathname: '/og/spinner.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/spinner.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/spinner.webp',
      alt: 'Spinner',
      height: 630,
      secureUrl: 'https://daustinn.com/og/spinner.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function SpinnerPage() {
  return (
    <div className="animate-fade-in">
      <HeaderItem
        blurBackground="from-rose-500/10 to-rose-500/5 dark:from-rose-600/5 dark:to-rose-700/0"
        date="Febr 2024"
        title="Spinner"
      />
      <Content />
    </div>
  )
}
