import { Metadata } from 'next'
import React from 'react'
import { ContentSwitch } from './content'
import { HeaderItem } from 'ui/components/lab/header-item'

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
      pathname: '/og/switch.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/switch.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/switch.webp',
      alt: 'Drawer',
      height: 630,
      secureUrl: 'https://daustinn.com/og/switch.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function SwitchPage() {
  return (
    <div className="animate-fade-in">
      <HeaderItem
        blurBackground="from-blue-500/10 to-blue-500/5 dark:from-blue-600/5 dark:to-blue-700/0"
        dependencies={[
          {
            name: 'react-aria',
            url: 'https://react-spectrum.adobe.com/react-aria/index.html'
          }
        ]}
        date="Febr 2024"
        title="Switch"
      />
      <ContentSwitch />
    </div>
  )
}
