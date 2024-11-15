import { projects } from 'const'
import { getTranslations } from 'next-intl/server'
import { MdArrowOutward } from 'react-icons/md'
export const Projects = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale })
  return (
    <ul className="flex flex-col gap-1">
      {projects.map((project, key) => (
        <a
          href={project.href ?? '#'}
          target={project.href ? '_blank' : '_self'}
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
              {project.title}
            </h2>
            <p className="dark:opacity-60 opacity-80 text-sm">
              {t(`projects.list.${project.id}.description`)}
            </p>
          </div>
        </a>
      ))}
    </ul>
  )
}
