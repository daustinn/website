'use client'

import React, { useState, useEffect } from 'react'

export default function BodyGradients() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 0) setShowTop(true)
      else setShowTop(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <span
      data-show={showTop ? '' : undefined}
      className="dark:h-[100px] h-[30px] transition-[opacity] duration-500 opacity-0 data-[show]:opacity-100 pointer-events-none select-none z-10 fixed top-0 inset-x-0 bg-gradient-to-b from-[#141210] dark:via-[#141210]/90 dark:from-[#141210] to-transparent"
    />
  )
}
