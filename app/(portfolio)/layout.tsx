import Header from '~app/header'
import React from 'react'

export default function PortfolioLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <section className="flex flex-col space-y-10 flex-grow max-w-2xl mx-auto w-full px-4">
        {children}
      </section>
    </>
  )
}
