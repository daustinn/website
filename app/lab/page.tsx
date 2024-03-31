import { Metadata } from 'next'
import React from 'react'
import {
  AmbientModePreview,
  DrawerPreview,
  SortablePreview,
  SpinnerPreview,
  SpotlightPreview,
  SwitchPreview,
  ThreadDropDownPreview,
  TimePickerPreview
} from 'ui/lab'

export const metadata: Metadata = {
  title: 'Lab',
  description:
    'Experimental UI elements and components. Mostly built with React and Tailwind CSS.',
  keywords: [
    'lab',
    'ui',
    'components',
    'react',
    'tailwindcss',
    'nextjs',
    'typescript',
    'javascript',
    'web development'
  ],
  openGraph: {
    type: 'website',
    title: 'Lab',
    description:
      'Experimental UI elements and components. Mostly built with React and Tailwind CSS.',
    images: {
      hash: 'og-image-lab',
      host: 'https://daustinn.com',
      pathname: '/og/lab.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/og/lab.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/og/lab.webp',
      alt: 'Lab',
      height: 630,
      secureUrl: 'https://daustinn.com/og/lab.webp',
      type: 'image/webp',
      width: 1200
    }
  }
}

export default function LabsPage() {
  return (
    <div className="space-y-14">
      <TimePickerPreview />
      <AmbientModePreview />
      <SwitchPreview />
      <DrawerPreview />
      <SpinnerPreview />
      <ThreadDropDownPreview />
      <SpotlightPreview />
      <SortablePreview />
    </div>
  )
}
