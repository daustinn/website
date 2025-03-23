import React from 'react'
import SetAtributes from './set-attributes'
import { Metadata } from 'next'
import Hero from './hero'
import { Fredoka } from 'next/font/google'
import Steps from './steps'
import TypesExamples from './types'
import PositionsExample from './positions'
import MediaExample from './media'
import Theming from './theming'
import Info from './info'
import Link from 'next/link'

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Anni - Simple and easy-to-use notification system for React.',
  description: 'Simple easy-to-use notification system for React.',
  icons: 'anni.svg',
  keywords: 'React, Notification, Toast, Anni',
  authors: {
    name: 'Daustinn',
    url: 'https://daustinn.com'
  },
  category: 'UI Components'
}

export default function AnniPage() {
  return (
    <>
      <span
        style={{
          backgroundImage: 'url(/noise.png)'
        }}
        className="fixed opacity-20 pointer-events-none z-[9] inset-0"
      />
      <SetAtributes />
      <div className="bg-oasis-50 grow w-full text-brown-700 flex gap-5 flex-col">
        <Hero fredoka={fredoka} />
        <Steps />
        <TypesExamples />
        <PositionsExample />
        <MediaExample />
        <Theming />
        <Info />
        <footer className="font-sans max-w-2xl mx-auto w-full space-y-2 px-4 pb-10">
          <p>
            Build by{' '}
            <Link href="/" className="font-semibold underline">
              Daustinn
            </Link>
          </p>
        </footer>
      </div>
    </>
  )
}
