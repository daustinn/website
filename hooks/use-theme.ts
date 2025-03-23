import { themeEffect } from '~app/theme-effect'
import React from 'react'

export const useTheme = () => {
  const [theme, setTheme] = React.useState<null | string>(null)
  const [resolvedTheme, setResolvedTheme] = React.useState<null | string>(null)

  const onMediaChange = React.useCallback(() => {
    const current = themeEffect()
    setResolvedTheme(current)
  }, [])

  React.useEffect(() => {
    setTheme(localStorage.getItem('theme'))
    const current = themeEffect()
    setResolvedTheme(current)

    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
    matchMedia.addEventListener('change', onMediaChange)
    return () => matchMedia.removeEventListener('change', onMediaChange)
  }, [onMediaChange])

  const onStorageChange = React.useCallback(
    (event: StorageEvent) => {
      if (event.key === 'theme') {
        setTheme(event.newValue)
        setResolvedTheme(themeEffect())
      }
    },
    [setTheme]
  )

  React.useEffect(() => {
    setResolvedTheme(themeEffect())
  }, [theme])

  React.useEffect(() => {
    window.addEventListener('storage', onStorageChange)
    return () => window.removeEventListener('storage', onStorageChange)
  })

  const toggleTheme = () =>
    handleTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  const handleTheme = (newTheme: string) => {
    let newPreference: string | null = newTheme

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    if (theme !== null && systemTheme === resolvedTheme) {
      newPreference = null
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', newPreference)
    }
    setTheme(newPreference)
  }

  return { theme, resolvedTheme, handleTheme, toggleTheme }
}
