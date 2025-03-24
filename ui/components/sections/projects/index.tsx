import { PROJECTS } from '~const'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ArrowOutward } from '~ui/icons'
import { cn } from '~utils'
export const Projects = async () => {
  const t = await getTranslations()
  return (
    <ol className="flex flex-col">
      {Object.entries(PROJECTS).map(([key, project]) => {
        const isExternal = project.href?.startsWith('http')
        return (
          <li key={key}>
            <Link
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
              <div className="flex items-center gap-5">
                <div className="border relative border-stone-500/20 aspect-[16/12] p-2 grid place-content-center dark:text-stone-200 text-stone-950 dark:shadow-black/60 shadow-lg transition-colors w-[75px] overflow-hidden rounded-xl">
                  {project.media && (
                    <project.media
                      size={23}
                      className="opacity-70 z-[1] group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  <div
                    className={cn(
                      'absolute inset-0 opacity-40',
                      '[background-size:6px_6px]',
                      '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
                      'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]'
                    )}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#141210)] dark:bg-[#141210]" />
                </div>
                <div>
                  <h2 className="font-medium flex justify-between relative">
                    {project.title}
                  </h2>
                  <p className="dark:opacity-60 opacity-80">
                    {t(`projects.list.${key}.description`)}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
