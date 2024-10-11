'use client'

import { locales } from 'const'
import { Link } from 'i18n/routing'
import { useLocale, useTranslations } from 'next-intl'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from 'ui/commons/dialog'

export const Language = () => {
  const locale = useLocale()
  const t = useTranslations('header')
  const currentLocale = locales[locale as 'en' | 'es']

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-1">
        <svg
          width={25}
          height={25}
          viewBox="0 0 200 156"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M177.166 0.5H22.833C10.242 0.5 0 10.743 0 23.333V132.666C0 145.256 10.243 155.499 22.833 155.499H177.166C189.756 155.499 200 145.256 200 132.666V23.333C200 10.743 189.756 0.5 177.166 0.5ZM100 143.5H22.833C16.86 143.5 12 138.641 12 132.667V23.333C12 17.359 16.86 12.5 22.833 12.5H100V143.5ZM182.58 54.129C182.033 63.274 176.912 81.39 161.711 93.974C166.326 94.996 171.34 95.547 176.631 95.547V107.547C166.08 107.547 156.393 105.628 148.162 102.222C140.473 105.523 131.193 107.547 120.037 107.547V95.547C125.169 95.547 129.961 95.046 134.403 94.049C125.991 87.033 121.021 77.738 121.021 67.269H133.02C133.02 76.126 138.68 83.786 147.904 88.892C152.545 86.232 156.606 82.78 160.068 78.541C165.696 71.655 168.57 64.02 169.822 58.499H120.037V46.499H142.334V34.513H154.334V46.5H175.389C177.375 46.5 179.291 47.331 180.647 48.78C181.986 50.199 182.697 52.155 182.58 54.129Z"
            fill="currentColor"
          />
          <path
            d="M43.035 96.262L38.585 107.52H22.614L48.969 46.43H64.94L90.686 107.52H74.103L69.74 96.262H43.035ZM56.475 61.876L47.573 84.48H65.202L56.475 61.876Z"
            fill="currentColor"
          />
        </svg>
        <span className="opacity-90">|</span>
        <span className="opacity-90">{currentLocale.locale}</span>
      </DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogTitle>{t('language.title')}</DialogTitle>
        <DialogDescription>{t('language.description')}</DialogDescription>
        <div className="flex text-center font-medium flex-col pt-4 gap-2">
          {Object.entries(locales).map(([key, value]) => (
            <Link
              key={key}
              href="/"
              locale={key as 'en' | 'es' | undefined}
              data-selected={locale === key}
              className="dark:data-[selected=true]:text-blue-600 data-[selected=true]:text-blue-500"
            >
              {value.name}
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
