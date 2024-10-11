import { experiences } from 'const'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export async function Experiences({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })
  return (
    <>
      <section className="px-4 space-y-10 mt-6 max-w-2xl mx-auto w-full">
        <article className="space-y-3">
          <h2 className="font-semibold py-2">{t('experiences.title')}</h2>
          <ul className="flex flex-col gap-2">
            {experiences.map((experience, key) => (
              <a
                href={experience.href ?? '#'}
                target={experience.href ? '_blank' : '_self'}
                rel="noopener noreferrer"
                key={key}
                className="group"
              >
                <h2 className="group-hover:underline font-medium">
                  {t(`experiences.list.${experience.id}.title`)}
                  <MdArrowOutward
                    size={15}
                    className="inline-block group-hover:dark:text-blue-600 group-hover:text-blue-500 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform ml-1 dark:opacity-50 opacity-70"
                  />
                </h2>
                <p className="opacity-80">
                  {t(`experiences.list.${experience.id}.description`)}
                </p>
              </a>
            ))}
          </ul>
        </article>
      </section>
    </>
  )
}
