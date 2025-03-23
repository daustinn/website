'use client'

import { DATA_GRADIENTS_KEY } from '~const'
import { useDocumentAtribute } from '~hooks/use-document-atribute'
import React from 'react'
import { cn } from '~utils'

export default function BodyGradients() {
  const [showTop, setShowTop] = React.useState(false)

  const documentValue = useDocumentAtribute(
    DATA_GRADIENTS_KEY,
    'from-[#fcfcfc] via-[#fcfcfc]/90 dark:via-[#141210]/90 dark:from-[#141210]'
  )

  React.useEffect(() => {
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
      className={cn(
        'dark:h-[100px] h-[50px] transition-[opacity] duration-500 opacity-0 data-[show]:opacity-100 pointer-events-none select-none z-10 fixed top-0 inset-x-0 bg-gradient-to-b to-transparent',
        documentValue
      )}
    />
  )
}
