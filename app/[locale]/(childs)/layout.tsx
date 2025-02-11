'use client'

import { useRouter } from 'node_modules/next/navigation'
import React from 'react'
import { ArrowBack } from 'ui/icons'

export default function ChildsLayout({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  return (
    <section className="flex flex-col flex-grow">
      <nav className="p-5 max-lg:px-0 lg:absolute inset-x-0 top-0">
        <button
          onClick={() => router.back()}
          className="flex items-center opacity-60 group gap-2"
        >
          <ArrowBack
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back home
        </button>
      </nav>
      {children}
    </section>
  )
}
