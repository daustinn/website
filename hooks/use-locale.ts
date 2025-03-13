'use client'

import { LANGUAGE_KEY, languages } from 'const'
import { useRouter } from 'next/navigation'
import React from 'react'

type Locale = keyof typeof languages
export const useLocale = () => {
  const router = useRouter()
  const [locale, setLocale] = React.useState<Locale>()

  React.useEffect(() => {
    const cookieLocale = document.cookie
      .split(';')
      .map((row) => row.trim())
      .find((row) => row.startsWith(`${LANGUAGE_KEY}=`))
      ?.split('=')[1]

    if (cookieLocale) {
      setLocale(cookieLocale as Locale)
    } else {
      const browserLocale = navigator.language.slice(0, 2) as Locale
      setLocale(browserLocale)

      document.cookie = `${LANGUAGE_KEY}=${browserLocale}; path=/`
      router.refresh()
    }
  }, [router])

  const handleLocale = (locale: Locale) => {
    setLocale(locale)
    document.cookie = `${LANGUAGE_KEY}=${locale}; path=/`
    router.refresh()
  }
  return [locale, handleLocale] as const
}
