'use client'

import React from 'react'
import { Moon, Sun } from 'ui/icons'
import { useTheme } from 'hooks/use-theme'

export default function ToggleTheme() {
  const { toggleTheme, theme } = useTheme()
  return (
    <button
      onClick={toggleTheme.bind(null)}
      className="flex gap-2 p-2 rounded-lg font-medium text-xs hover:text-black hover:dark:text-stone-50 items-center transition-all"
    >
      <Sun size={17} className="dark:hidden block" />
      <Moon size={17} className="hidden dark:block" />
      <p>{!theme ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}</p>
    </button>
  )
}
