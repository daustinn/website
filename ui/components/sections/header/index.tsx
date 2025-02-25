'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import ToggleLanguage from 'ui/components/toggle-language'
import ToggleTheme from 'app/theme-toggle'

export default function Header() {
  const t = useTranslations()
  return (
    <nav className="flex items-center">
      <div className="grow">
        <h1 className="font-medium tracking-tight text-xl">Daustinn.</h1>
        <h2 className="text-md opacity-80">{t('header.subtitle')}</h2>
      </div>
      <ToggleTheme />
      <ToggleLanguage />
    </nav>
  )
}
