'use client'

import { MoonIcon, SunIcon, MonitorIcon } from 'icons'
import { useTheme } from 'next-themes'
import React from 'react'

export function ToggleTheme() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2 px-3 opacity-0">
        <MoonIcon className="w-6" />
      </div>
    )
  }

  const icon =
    theme === 'system' ? (
      <MonitorIcon />
    ) : theme === 'dark' ? (
      <MoonIcon />
    ) : (
      <SunIcon />
    )

  return (
    <button
      title={'Switch Theme'}
      onClick={() => {
        theme === 'light'
          ? setTheme('dark')
          : theme === 'dark'
          ? setTheme('system')
          : setTheme('light')
      }}
      className="p-2 px-3 h-full justify-center hover:scale-105 transition-all rounded-xl"
    >
      <span className="w-6 block">{icon}</span>
    </button>
  )
}
