'use client'

import ToggleTheme from 'app/theme-toggle'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'
import ToggleLanguage from 'ui/components/toggle-language'
import { ArrowBack } from 'ui/icons'

export default function Header() {
  const router = useRouter()
  const t = useTranslations()
  return (
    <div className="p-1.5 pointer-events-none px-3 md:fixed relative z-10 top-0 flex inset-x-0">
      <div className="grow flex items-center">
        <button
          onClick={() => router.back()}
          className="flex items-center pointer-events-auto gap-2"
        >
          <ArrowBack size={15} />
          <span>{t('childs.ui.back')}</span>
        </button>
      </div>
      <div className="flex pointer-events-auto gap-3">
        <ToggleTheme />
        <ToggleLanguage />
      </div>
    </div>
  )
}
