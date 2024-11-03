'use client'

import { locales } from 'const'
import { Link } from 'i18n/routing'
import { useLocale } from 'next-intl'
import React from 'react'
export const Language = () => {
  const locale = useLocale()

  return (
    <div className="flex items-center dark:text-stone-300 text-sm font-medium">
      {Object.entries(locales).map(([key]) => (
        <React.Fragment key={key}>
          <Link
            href="/"
            className="uppercase data-[selected]:dark:text-blue-600"
            locale={key as 'en' | 'es' | undefined}
            data-selected={locale === key ? '' : undefined}
          >
            {key}
          </Link>
          {key === 'en' && (
            <span className="block w-[1px] h-[20px] mx-1 dark:bg-stone-500/40"></span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
