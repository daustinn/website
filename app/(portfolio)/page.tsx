import { getTranslations } from 'next-intl/server'
import { About } from 'ui/components/sections/about'
import { Experiences } from 'ui/components/sections/experiences'
import { Projects } from 'ui/components/sections/projects'

export default async function Home() {
  const t = await getTranslations()

  return (
    <>
      <article className="w-full">
        <h2 className="font-medium tracking-tight text-xl pb-3">
          {t('experiences.title')}
        </h2>
        <Experiences />
      </article>
      <article className="w-full">
        <h2 className="font-medium tracking-tight text-xl pb-3">
          {t('projects.title')}
        </h2>
        <Projects />
      </article>
      <article className="w-full">
        <h2 className="font-medium tracking-tight text-xl pb-3">
          {t('about.title')}
        </h2>
        <About />
      </article>
    </>
  )
}
