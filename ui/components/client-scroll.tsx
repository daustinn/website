// client-scroll.tsx
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function ClientScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0,
      smoothWheel: true,
      syncTouch: true,
      orientation: 'vertical'
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return null
}
