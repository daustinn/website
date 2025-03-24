import { EXPERIENCES } from '~const'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import { ArrowOutward } from '~ui/icons'

export async function Experiences() {
  const t = await getTranslations()
  return (
    <ul className="flex flex-col gap-1">
      {Object.entries(EXPERIENCES).map(([key, experience]) => (
        <a
          href={experience.href ?? '#'}
          target={experience.href ? '_blank' : '_self'}
          rel="noopener noreferrer"
          key={key}
          className="group flex justify-between relative py-2"
        >
          <span className="inset-0 absolute group-hover:scale-100 group-hover:scale-x-[1.04] scale-90 opacity-0 group-hover:opacity-100 transition-all bg-stone-500/20 dark:bg-stone-500/60 rounded-2xl block"></span>
          <div className="absolute inset-y-0 right-0">
            <ArrowOutward
              size={9}
              className="inline-block group-hover:dark:text-cyan-600 group-hover:text-cyan-500 group-hover:opacity-100 group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-125 transition-transform ml-1 dark:opacity-50 opacity-70"
            />
          </div>
          <div className="relative">
            <h2 className="font-medium flex justify-between relative">
              {experience.title}
            </h2>
            <p className="dark:opacity-60 opacity-80">
              {t(`experiences.list.${key}.description`)}
            </p>
          </div>
          <div className="pr-7 relative flex items-center ">
            <p className="text-xs font-medium">
              {experience.now ? (
                <span className="py-0.5 px-2 rounded-full bg-cyan-200/10 dark:bg-cyan-500/10 dark:text-cyan-300 text-cyan-500">
                  {t('experiences.now')}
                </span>
              ) : (
                <span className="opacity-60">{experience.year}</span>
              )}
            </p>
          </div>
        </a>
      ))}
    </ul>
  )
}
