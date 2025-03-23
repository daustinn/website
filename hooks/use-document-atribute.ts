'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export const useDocumentAtribute = (key: string, defaultValue?: string) => {
  if (typeof window === 'undefined') return defaultValue

  const pathname = usePathname()
  const [value, setValue] = React.useState(defaultValue)

  const handleChange = () => {
    const atributeValue = document.documentElement.getAttribute(key)
    if (atributeValue) setValue(atributeValue)
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleChange)
    return () => window.removeEventListener('scroll', handleChange)
  }, [])

  React.useEffect(() => {
    handleChange()
    return () => handleChange()
  }, [pathname])

  return value
}
