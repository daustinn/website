'use client'

import { ArrowNextIcon } from 'icons'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from 'ui/lab/button'
import { cn } from 'utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  to: string
}

export function CardPreview({ children, to, className, ...rest }: Props) {
  const router = useRouter()
  return (
    <div
      className={cn(
        'p-10 rounded-3xl animate-fade-in relative dark:bg-stone-900/80 shadow-[rgba(0,_0,_0,_0.25)_0px_5px_50px_-12px]',
        className
      )}
      {...rest}
    >
      {children}
      <Button
        onClick={() => router.push(to)}
        className="w-8 dark:text-stone-400 text-stone-500 -rotate-45 hover:scale-105 transition-all aspect-square p-1 dark:bg-stone-800 bg-stone-200 rounded-full block absolute top-4 right-4"
      >
        <ArrowNextIcon />
      </Button>
    </div>
  )
}
