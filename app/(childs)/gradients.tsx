'use client'

import React, { useState, useEffect } from 'react'

export default function BodyGradients() {
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollBottom = window.scrollY + window.innerHeight

      if (scrollTop > 0) {
        setShowTop(true)
      } else {
        setShowTop(false)
      }

      if (scrollBottom >= document.body.scrollHeight) {
        setShowBottom(false)
      } else {
        setShowBottom(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <span
        data-show={showTop ? '' : undefined}
        className="dark:h-[50px] h-[30px] transition-[opacity] duration-500 opacity-0 data-[show]:opacity-100 pointer-events-none select-none z-10 fixed top-0 inset-x-0 bg-gradient-to-b from-[#fcfcfc3b] dark:from-[#141210] to-transparent"
      />
      <span
        data-show={showBottom ? '' : undefined}
        className="dark:h-[50px] h-[30px] transition-[opacity] duration-500 opacity-0 data-[show]:opacity-100 pointer-events-none select-none z-10 fixed bottom-0 inset-x-0 bg-gradient-to-t from-[#fcfcfc3b] dark:from-[#141210] to-transparent"
      />
    </>
  )
}
