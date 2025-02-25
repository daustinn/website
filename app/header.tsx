'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import ToggleLanguage from 'ui/components/toggle-language'
import ToggleTheme from 'app/theme-toggle'
import { usePathname } from 'node_modules/next/navigation'
import Link from 'node_modules/next/link'

export default function Header() {
  const t = useTranslations()
  const pathname = usePathname()
  return (
    <header className="flex items-center max-w-2xl px-4 py-10 w-full mx-auto">
      <div className="grow">
        <span className="font-medium tracking-tight text-xl">
          {pathname === '/' ? (
            'Daustinn.'
          ) : (
            <Link href="/" className="hover:underline">
              Daustinn.
            </Link>
          )}
        </span>
        <p className="text-md opacity-80">{t('header.subtitle')}</p>
      </div>
      <ToggleTheme />
      <ToggleLanguage />
    </header>
  )
}
