'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import React from 'react'
import { cn } from 'utils'

export const ToggleTheme = () => {
  const [mounted, setMounted] = React.useState(false)
  const { theme: currentTheme, setTheme } = useTheme()

  const t = useTranslations('footer')

  const themes = {
    light: t('light'),
    dark: t('dark'),
    system: t('system')
  }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="p-3"></div>

  return (
    <div className="rounded-full border flex items-center p-0.5 dark:border-blue-600 border-blue-500">
      {Object.entries(themes).map(([key, value]) => {
        return (
          <button
            data-value={key}
            onClick={() => setTheme(key)}
            key={key}
            className={cn(
              'rounded-full text-blue-600 dark:text-blue-500 px-1.5 py-0.5 text-xs',
              currentTheme === key &&
                'dark:bg-blue-600 bg-blue-600 text-white dark:text-white'
            )}
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}
