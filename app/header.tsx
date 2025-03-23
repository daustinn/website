'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import ToggleLanguage from '~app/language-toggle'
import ToggleTheme from '~app/theme-toggle'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const t = useTranslations()
  const pathname = usePathname()
  return (
    <header className="flex items-center max-w-2xl px-4 py-10 w-full gap-4 mx-auto">
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
