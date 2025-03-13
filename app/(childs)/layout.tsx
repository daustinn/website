import React from 'react'
import Header from './header'
import BodyGradients from './gradients'
import { Chivo_Mono } from 'next/font/google'
import { cn } from 'utils'

const mono = Chivo_Mono({ subsets: ['latin'] })

export default function ChildLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BodyGradients />
      <Header />
      <section
        className={cn(
          'flex relative flex-col flex-grow w-full',
          mono.className
        )}
      >
        {children}
      </section>
    </>
  )
}
