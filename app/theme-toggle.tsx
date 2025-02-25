'use client'

import React from 'react'
import { Moon, Sun } from 'ui/icons'
import { useTheme } from 'hooks/use-theme'

export default function ToggleTheme() {
  const { toggleTheme, theme } = useTheme()
  return (
    <button
      onClick={toggleTheme.bind(null)}
      className="flex gap-2 group font-mono p-2 rounded-lg font-medium text-xs text-stone-500  hover:text-black hover:dark:text-stone-50 items-center hover:!opacity-100 data-[state=open]:!opacity-100 transition-all"
    >
      <p className="opacity-0 transition-opacity group-hover:opacity-100">
        {!theme ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
      </p>
      <Sun size={20} className="dark:hidden block" />
      <Moon size={20} className="hidden dark:block" />
    </button>
  )
}
