import { conections } from 'const'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export async function About({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })
  return (
    <article className="space-y-3 [&>p>a]:opacity-90 dark:[&>p>a]:opacity-70 hover:[&>p>a]:opacity-100 hover:[&>p>a]:underline">
      <p className="dark:opacity-80">{t('about.description_0')}</p>
      <p className="dark:opacity-80">{t('about.description_1')}</p>
      <footer className="flex items-center hover:[&>a]:dark:text-cyan-400 hover:[&>a]:text-cyan-700 hover:[&>a]:opacity-100 py-1 gap-4">
        {conections.map((conection, key) => (
          <a
            href={conection.href}
            target={conection.href ? '_blank' : '_self'}
            className="opacity-70"
            title={t(`conections.list.${conection.id}.description`)}
            key={key}
            rel="noreferrer"
          >
            {!conection.icon && t(`conections.list.${conection.id}.title`)}
            {conection.icon && <conection.icon size={20} />}
          </a>
        ))}
      </footer>
      <footer>
        <p className="text-sm opacity-70 dark:opacity-50">
          {t('about.about_ubdated')}
        </p>
      </footer>
    </article>
  )
}
