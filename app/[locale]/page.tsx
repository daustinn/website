import { getTranslations } from 'next-intl/server'
import { About } from 'ui/components/sections/about'
import { Experiences } from 'ui/components/sections/experiences'
import { Projects } from 'ui/components/sections/projects'
import Header from 'ui/components/sections/header'
import { Skills } from 'ui/components/sections/skills'

export default async function Home({
  params
}: {
  params: Promise<{
    locale: string
  }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <main className="flex flex-col flex-grow">
      <header className="md:pt-14 pt-4 px-4 lg:px-10 max-w-2xl mx-auto w-full">
        <Header locale={locale} />
      </header>
      <section className="lg:pt-14 pt-14 px-4 lg:px-10 max-w-2xl mx-auto w-full">
        <h2 className="font-medium tracking-tight text-xl pb-3">
          {t('experiences.title')}
        </h2>
        <Experiences locale={locale} />
      </section>
      <section className="lg:pt-14 pt-14 px-4 lg:px-10 max-w-2xl mx-auto w-full">
        <h2 className="font-medium tracking-tight text-xl pb-3">
          {t('projects.title')}
        </h2>
        <Projects locale={locale} />
      </section>
      <section className="lg:pt-14 pt-14 px-4 lg:px-10 max-w-2xl mx-auto w-full">
        <h2 className="font-medium tracking-tight text-xl pb-3">
          {t('about.title')}
        </h2>
        <About locale={locale} />
      </section>
      <section className="lg:pt-14 pt-14 px-2 lg:px-5 w-full">
        <Skills />
      </section>
    </main>
  )
}
