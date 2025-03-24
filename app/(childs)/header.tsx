'use client'

import ThemeToggle from '~app/theme-toggle'
import LanguageToggle from '~app/language-toggle'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowBack } from '~ui/icons'
import { DICTIONARIES } from '~const'
import React from 'react'

export default function Header() {
  const router = useRouter()
  const pathame = usePathname()
  const firstPath = pathame.split('/')[1]
  const siteName =
    DICTIONARIES[firstPath as keyof typeof DICTIONARIES] || firstPath

  return (
    <div className="p-1.5 pointer-events-none px-2 md:fixed relative z-10 top-0 flex inset-x-0 dark:text-white text-black">
      <div className="grow flex items-center">
        <button
          onClick={() => router.back()}
          className="flex px-2 items-center font-semibold text-sm tracking-tight pointer-events-auto gap-2"
        >
          <ArrowBack size={18} />
          {siteName}
        </button>
      </div>
      <div className="flex pointer-events-auto gap-3">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  )
}
