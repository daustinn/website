import { conections, seoTecnologies } from 'const'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export async function About({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })
  return (
    <section className="px-4 space-y-10 max-w-2xl mx-auto w-full">
      <article className="space-y-3 [&>p>a]:opacity-90 dark:[&>p>a]:opacity-70 hover:[&>p>a]:opacity-100 hover:[&>p>a]:underline">
        <h2 className="font-semibold py-2">{t('about.title')}</h2>
        <p className="dark:opacity-80">
          {t('about.description_0')}
          <a {...seoTecnologies.nodejs}>Node.js</a>,{' '}
          <a {...seoTecnologies.typescript}>TypeScript</a>,{' '}
          <a {...seoTecnologies.react}>React</a>,{' '}
          <a {...seoTecnologies.nextjs}>Next.js</a> {t('global.and')}{' '}
          <a {...seoTecnologies.astro}>Astro</a>, {t('global.along_with')}{' '}
          <a {...seoTecnologies.php}>PHP</a> {t('global.using')}{' '}
          <a {...seoTecnologies.laravel}>Laravel</a>.
        </p>
        <p className="dark:opacity-80">
          {t('about.description_1')} <a {...seoTecnologies.mongodb}>MongoDB</a>,{' '}
          <a {...seoTecnologies.postgresql}>PostgreSQL</a>,{' '}
          <a {...seoTecnologies.mysql}>MySQL</a>,{' '}
          <a {...seoTecnologies.sqlite}>SQLite</a>, {t('global.and')}{' '}
          <a {...seoTecnologies.redis}>Redis</a>, {t('about.description_2')}{' '}
        </p>
        <p className="dark:opacity-80">
          {t('about.description_3')} <a {...seoTecnologies.git}>Git</a>{' '}
          {t('global.and')} <a {...seoTecnologies.github}>GitHub</a>{' '}
          {t('about.description_4')}{' '}
        </p>
        <footer className="flex items-center hover:[&>a]:dark:text-blue-600 hover:[&>a]:text-blue-600 hover:[&>a]:opacity-100 py-1 gap-4">
          {conections.map((conection, key) => (
            <a
              href={conection.href}
              target={conection.href ? '_blank' : '_self'}
              className="opacity-70"
              title={conection.title}
              key={key}
              rel="noreferrer"
            >
              <conection.icon size={20} />
            </a>
          ))}
        </footer>
        <footer>
          <p className="text-sm opacity-70 dark:opacity-50">
            {t('about.about_ubdated')}
          </p>
        </footer>
      </article>
    </section>
  )
}
