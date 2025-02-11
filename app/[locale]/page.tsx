import { getTranslations } from 'next-intl/server'
import { About } from 'ui/components/sections/about'
import { Experiences } from 'ui/components/sections/experiences'
import Header from 'ui/components/sections/header'
import { Projects } from 'ui/components/sections/projects'

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
    <>
      <header className="md:pt-14 pt-4 w-full">
        <Header locale={locale} />
      </header>
      <section className="lg:pt-14 pt-14 w-full">
        <h2 className="font-medium tracking-tight text-xl pb-3">
          {t('experiences.title')}
        </h2>
        <Experiences locale={locale} />
      </section>
      <section className="lg:pt-14 pt-14 w-full">
        <h2 className="font-medium tracking-tight text-xl pb-3">
          {t('projects.title')}
        </h2>
        <Projects locale={locale} />
      </section>
      <section className="lg:pt-14 pt-14 w-full">
        <h2 className="font-medium tracking-tight text-xl pb-3">
          {t('about.title')}
        </h2>
        <About locale={locale} />
      </section>
    </>
  )
}
