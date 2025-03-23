'use client'

import React from 'react'
import { Moon, Sun } from '~ui/icons'
import { useTheme } from '~hooks/use-theme'

export default function ThemeToggle() {
  const { toggleTheme, theme } = useTheme()
  return (
    <button
      onClick={toggleTheme.bind(null)}
      className="flex gap-2 p-2 rounded-lg font-medium text-xs items-center transition-all"
    >
      <Sun size={17} className="dark:hidden block" />
      <Moon size={17} className="hidden dark:block" />
      <p>{!theme ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}</p>
    </button>
  )
}
