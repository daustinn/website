'use client'

import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      defaultTheme={'system'}
      disableTransitionOnChange={true}
      attribute="class"
      {...props}
    >
      {children}
    </NextThemeProvider>
  )
}
