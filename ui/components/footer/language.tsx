'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { languages } from 'const'
import { Link } from 'i18n/routing'
import { useLocale, useTranslations } from 'next-intl'
import { FaXmark } from 'react-icons/fa6'
import { Globe } from 'ui/icons/globe'

export default function Language() {
  const t = useTranslations()
  const locale = useLocale() as keyof typeof languages
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger className="flex items-center hover:underline text-sm gap-1 font-medium">
          <Globe size={20} />
          {languages[locale].name}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-stone-950/80 fixed inset-0 grid place-content-center">
            <Dialog.Content className="dark:bg-stone-900 bg-stone-50 w-[600px] max-w-full rounded-xl drop-shadow-[0_0_10px_rgba(0,0,0,.7)]">
              <header className="p-4 border-b flex items-center gap-4 dark:border-stone-700">
                <Dialog.Close>
                  <FaXmark />
                </Dialog.Close>
                <Dialog.Title>{t('footer.language.title')}</Dialog.Title>
              </header>
              <div>
                <Dialog.Description className="text-left font-semibold text-lg p-4">
                  {t('footer.language.description')}
                </Dialog.Description>
                <div className="p-2 pt-0 grid grid-cols-3 gap-1">
                  {Object.entries(languages).map(([key, language]) => {
                    return (
                      <Link
                        href={'/'}
                        locale={key as never}
                        key={key}
                        data-current={locale === key ? '' : undefined}
                        className="p-2 text-left hover:bg-stone-500/10 data-[current]:border-stone-700 border rounded-lg border-transparent px-4"
                      >
                        <p>{language.name}</p>
                        <p className="text-sm opacity-70">{language.region}</p>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
