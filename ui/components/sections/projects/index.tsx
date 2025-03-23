import { PROJECTS } from '~const'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ArrowOutward } from '~ui/icons'
export const Projects = async () => {
  const t = await getTranslations()
  return (
    <ul className="flex flex-col">
      {Object.entries(PROJECTS).map(([key, project]) => {
        const isExternal = project.href?.startsWith('http')
        return (
          <Link
            key={key}
            href={project.href}
            target={isExternal ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group flex justify-between relative py-2"
          >
            <span className="inset-0 absolute group-hover:scale-100 group-hover:scale-x-[1.04] scale-90 opacity-0 group-hover:opacity-100 transition-all bg-stone-500/10 dark:bg-stone-500/20 rounded-2xl block"></span>
            <div className="absolute inset-y-0 right-0">
              <ArrowOutward
                size={9}
                className="inline-block group-hover:dark:text-cyan-600 group-hover:text-cyan-500 group-hover:opacity-100 group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-125 transition-transform ml-1 dark:opacity-50 opacity-70"
              />
            </div>
            <div className="flex items-start gap-5">
              <div className="aspect-[16/12] dark:text-stone-200 text-stone-700 dark:shadow-black/50 shadow-md grid place-content-center bg-white dark:bg-stone-500/20 transition-colors w-[60px] overflow-hidden rounded-lg">
                {project.media && (
                  <project.media
                    size={30}
                    className="opacity-20 group-hover:opacity-70 transition-opacity"
                  />
                )}
              </div>
              <div>
                <h2 className="font-medium flex justify-between relative">
                  {project.title}
                </h2>
                <p className="dark:opacity-60 opacity-80 text-sm">
                  {t(`projects.list.${key}.description`)}
                </p>
              </div>
            </div>
          </Link>
        )
      })}
    </ul>
  )
}
