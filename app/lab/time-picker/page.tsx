import { Metadata } from 'next'
import React from 'react'
import { Content } from './content'
import { HeaderItem } from 'ui/components/lab/header-item'
import { FooterItem } from 'ui/components/lab/footer-item'

export const metadata: Metadata = {
  title: 'Time Picker',
  description:
    'Time Picker in React & TailwindCSS, inspired by Material Design.',
  keywords: [
    'lab',
    'time picker',
    'Material Design',
    'react',
    'tailwindcss',
    'nextjs',
    'typescript',
    'javascript',
    'web development'
  ],
  openGraph: {
    type: 'website',
    title: 'Time Picker',
    description:
      'Time Picker in React & TailwindCSS, inspired by Material Design.',
    images: {
      hash: 'og-image-lab-time-picker',
      host: 'https://daustinn.com',
      pathname: '/og/time-picker.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/time-picker.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/time-picker.webp',
      alt: 'Time Picker',
      height: 630,
      secureUrl: 'https://daustinn.com/og/time-picker.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function TimePickerPage() {
  return (
    <div className="animate-fade-in">
      <HeaderItem
        dependencies={[
          {
            name: 'framer-motion',
            url: 'https://www.framer.com/api/motion/'
          }
        ]}
        date="Mar 2024"
        title="Time Picker"
      />
      <Content />
      <FooterItem
        references={[
          {
            name: 'Material Design - Time Pickers',
            url: 'https://m3.material.io/components/time-pickers/overview'
          }
        ]}
      />
    </div>
  )
}
