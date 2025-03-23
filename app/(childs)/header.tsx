'use client'

import ThemeToggle from '~app/theme-toggle'
import LanguageToggle from '~app/language-toggle'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowBack } from '~ui/icons'
import {
  DATA_HEADER_KEY,
  DATA_LANGUAGE_KEY,
  DATA_THEME_KEY,
  DICTIONARIES
} from '~const'
import { useDocumentAtribute } from '~hooks/use-document-atribute'
import { cn } from '~utils'
import React from 'react'

export default function Header() {
  const router = useRouter()
  const pathame = usePathname()
  const firstPath = pathame.split('/')[1]
  const siteName =
    DICTIONARIES[firstPath as keyof typeof DICTIONARIES] || firstPath

  const dataValue = useDocumentAtribute(
    DATA_HEADER_KEY,
    'dark:text-white text-black'
  )

  const themeDataValue = useDocumentAtribute(DATA_THEME_KEY, 'visible')
  const languageDataValue = useDocumentAtribute(DATA_LANGUAGE_KEY, 'visible')

  const windowHistory = React.useMemo(() => window?.history?.length, [])
  return (
    <div
      className={cn(
        'p-1.5 pointer-events-none px-2 md:fixed relative z-10 top-0 flex inset-x-0',
        dataValue
      )}
    >
      <div className="grow flex items-center">
        {windowHistory > 1 && (
          <button
            onClick={() => router.back()}
            className="flex items-center font-semibold text-sm tracking-tight pointer-events-auto gap-2"
          >
            <div className="bg-stone-500/30 rounded-full p-2">
              <ArrowBack size={18} />
            </div>
            {siteName}
          </button>
        )}
      </div>
      <div className="flex pointer-events-auto gap-3">
        {themeDataValue !== 'hidden' && <ThemeToggle />}
        {languageDataValue !== 'hidden' && <LanguageToggle />}
      </div>
    </div>
  )
}
