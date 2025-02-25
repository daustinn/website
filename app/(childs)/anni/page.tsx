/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import { toast } from 'anni'

const posiblesToast = [
  'React is a JavaScript library for building user interfaces.',
  'Next.js is a React framework for production.',
  'Vercel combines the best developer experience with an obsessive focus on end-user performance.',
  "Image, Fonts, and Script your application's Core Web Vitals and User Experience."
]

const posibleTypes = ['default', 'success', 'error', 'warning', 'info']

export default function AnniPage() {
  const handleToast = () => {
    const randomToast =
      posiblesToast[Math.floor(Math.random() * posiblesToast.length)]
    const randomType =
      posibleTypes[Math.floor(Math.random() * posibleTypes.length)]
    toast(randomToast, {
      type: randomType as any
    })
  }
  return (
    <div>
      <button onClick={handleToast.bind(null)}>Toast</button>
    </div>
  )
}
