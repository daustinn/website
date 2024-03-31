'use client'

import { ArrowNextIcon } from 'icons'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from 'ui/lab/button'

export function BackButton() {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.back()}
      className="w-9 dark:text-stone-400 bg-stone-300 -rotate-180 hover:scale-105 transition-all aspect-square p-1 dark:bg-stone-800 rounded-full block"
    >
      <ArrowNextIcon />
    </Button>
  )
}
