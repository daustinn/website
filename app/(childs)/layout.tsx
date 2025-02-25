import React from 'react'
import Header from './header'
import BodyGradients from './gradients'

export default function ChildLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BodyGradients />
      <Header />
      <section className="flex relative flex-col flex-grow w-full px-4">
        {children}
      </section>
    </>
  )
}
