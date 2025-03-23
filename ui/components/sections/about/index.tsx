import { conections } from '~const'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export async function About() {
  const t = await getTranslations()
  return (
    <article className="space-y-3 pb-10">
      <p className="dark:opacity-80">{t('about.description_0')}</p>
      <p className="dark:opacity-80">{t('about.description_1')}</p>
      {/* <p className="dark:opacity-80">{t('about.description_2')}</p> */}
      <p className="dark:opacity-80">{t('about.description_3')}</p>
      <footer className="flex items-center [&>a]:hover:dark:text-cyan-400 [&>a]:hover:text-cyan-700 [&>a]:hover:opacity-100 py-1 gap-4">
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
