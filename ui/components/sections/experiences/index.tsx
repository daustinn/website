import { experiences } from 'const'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export async function Experiences({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })
  return (
    <ul className="flex flex-col gap-1">
      {experiences.map((experience, key) => (
        <a
          href={experience.href ?? '#'}
          target={experience.href ? '_blank' : '_self'}
          rel="noopener noreferrer"
          key={key}
          className="group flex justify-between relative py-2"
        >
          <span className="inset-0 absolute group-hover:scale-100 group-hover:scale-x-[1.04] scale-90 opacity-0 group-hover:opacity-100 transition-all bg-stone-500/5 dark:bg-cyan-100/5 rounded-2xl block"></span>
          <div className="absolute inset-y-0 right-0">
            <MdArrowOutward
              size={15}
              className="inline-block group-hover:dark:text-cyan-600 group-hover:text-cyan-500 group-hover:opacity-100 group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-125 transition-transform ml-1 dark:opacity-50 opacity-70"
            />
          </div>
          <div>
            <h2 className="font-medium flex justify-between relative">
              {experience.title}
            </h2>
            <p className="dark:opacity-60 opacity-80 text-sm">
              {experience.description}
            </p>
          </div>
          <div className="pr-7 flex items-center ">
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
