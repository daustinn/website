import { DAUSTINN } from '@/const'
import updatedRaw from '@/UPDATED?raw'

export const seoConfig = {
  url: 'https://daustinn.com',
  siteName: DAUSTINN.alias,
  author: DAUSTINN.name,
  twitter: '@daustinndev',
  themeColor: '#f5f5f5',
  ogImage: '/og-image.avif',
  ogImageType: 'image/avif',
  ogImageWidth: 460,
  ogImageHeight: 460,
  defaultTitle: `${DAUSTINN.alias} (${DAUSTINN.name}) — Software Developer | Systems Engineering Background`,
  defaultDescription:
    'David Bendezú (Daustinn) — Software Developer with a Systems Engineering background. Designing and building web applications, cloud architectures, and open-source developer tools.',
  defaultKeywords:
    'David Bendezú, Daustinn, Software Developer, Systems Engineering, Web Developer, Full Stack Developer, Developer Tools, TypeScript, React, Astro, Node.js, Cloudflare'
} as const

export const getModifiedIsoDate = () => {
  const parsed = new Date(updatedRaw.trim())
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}

export const getImageMimeType = (src: string) => {
  const clean = src.split('?')[0].toLowerCase()
  if (clean.endsWith('.avif')) return 'image/avif'
  if (clean.endsWith('.webp')) return 'image/webp'
  if (clean.endsWith('.jpg') || clean.endsWith('.jpeg')) return 'image/jpeg'
  if (clean.endsWith('.png')) return 'image/png'
  return seoConfig.ogImageType
}

const getPersonSchema = (locale: 'en' | 'es') => {
  const isEs = locale === 'es'
  const ogImageUrl = `${seoConfig.url}${seoConfig.ogImage}`

  return {
    '@type': 'Person',
    '@id': `${seoConfig.url}/#person`,
    name: DAUSTINN.name,
    alternateName: [DAUSTINN.alias, 'daustinndev'],
    url: seoConfig.url,
    image: {
      '@type': 'ImageObject',
      '@id': `${seoConfig.url}/#personimage`,
      url: ogImageUrl,
      width: seoConfig.ogImageWidth,
      height: seoConfig.ogImageHeight,
      caption: `${DAUSTINN.name} (${DAUSTINN.alias})`
    },
    jobTitle: isEs
      ? 'Desarrollador de Software | Ingeniería de Sistemas'
      : 'Software Developer | Systems Engineering Background',
    description: isEs
      ? 'Desarrollador de Software con formación en Ingeniería de Sistemas. Construyo software moderno, herramientas para desarrolladores y aplicaciones web enfocadas en calidad, rendimiento y experiencia de usuario.'
      : seoConfig.defaultDescription,
    email: `mailto:${DAUSTINN.mail}`,
    knowsLanguage: ['en', 'es'],
    sameAs: [
      DAUSTINN.githubURL,
      DAUSTINN.xURL,
      DAUSTINN.linkedinURL,
      DAUSTINN.bmc
    ],
    knowsAbout: [
      'Software Engineering',
      'Systems Engineering',
      'Web Development',
      'Full Stack Development',
      'Developer Tools',
      'TypeScript',
      'JavaScript',
      'React',
      'Astro',
      'Node.js',
      'SQL',
      'GraphQL',
      'DevOps',
      'CI/CD',
      'AWS',
      'Google Cloud',
      'Cloudflare',
      'Supabase',
      'Firebase',
      'Tailwind CSS'
    ]
  }
}

const getWebSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${seoConfig.url}/#website`,
  url: seoConfig.url,
  name: seoConfig.siteName,
  description: seoConfig.defaultDescription,
  inLanguage: ['en', 'es'],
  publisher: {
    '@id': `${seoConfig.url}/#person`
  }
})

export type ProjectSchemaItem = {
  title: string
  description?: string
  url: string
}

export const getJsonLd = ({
  url,
  title,
  description,
  locale,
  projects = []
}: {
  url: string
  title: string
  description: string
  locale: 'en' | 'es'
  projects?: ProjectSchemaItem[]
}) => {
  const isEs = locale === 'es'
  const dateModified = getModifiedIsoDate()

  const graph: Record<string, unknown>[] = [
    getWebSiteSchema(),
    getPersonSchema(locale),
    {
      '@type': 'ProfilePage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      ...(dateModified ? { dateModified } : {}),
      isPartOf: {
        '@id': `${seoConfig.url}/#website`
      },
      about: {
        '@id': `${seoConfig.url}/#person`
      },
      mainEntity: {
        '@id': `${seoConfig.url}/#person`
      },
      ...(projects.length > 0
        ? {
            hasPart: {
              '@id': `${url}#projects`
            }
          }
        : {}),
      inLanguage: locale
    }
  ]

  if (projects.length > 0) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#projects`,
      name: isEs ? 'Proyectos Destacados' : 'Featured Works',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          ...(project.description ? { description: project.description } : {}),
          url: project.url,
          author: {
            '@id': `${seoConfig.url}/#person`
          }
        }
      }))
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  }
}

export const getArticleJsonLd = ({
  url,
  title,
  projectTitle,
  description,
  locale,
  image,
  site
}: {
  url: string
  title: string
  projectTitle?: string
  description: string
  locale: 'en' | 'es'
  image?: string
  site?: string
}) => {
  const ogImageUrl = image
    ? new URL(image, seoConfig.url).toString()
    : `${seoConfig.url}${seoConfig.ogImage}`
  const dateModified = getModifiedIsoDate()
  const homeUrl = `${seoConfig.url}/${locale}/`
  const headline = projectTitle ?? title

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        url,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url
        },
        name: title,
        headline,
        description,
        inLanguage: locale,
        ...(dateModified ? { dateModified } : {}),
        image: {
          '@type': 'ImageObject',
          url: ogImageUrl
        },
        author: {
          '@id': `${seoConfig.url}/#person`
        },
        publisher: {
          '@id': `${seoConfig.url}/#person`
        },
        isPartOf: {
          '@id': `${seoConfig.url}/#website`
        },
        ...(site
          ? {
              about: {
                '@type': 'SoftwareApplication',
                name: headline,
                url: site,
                description,
                applicationCategory: 'DeveloperApplication',
                author: {
                  '@id': `${seoConfig.url}/#person`
                }
              }
            }
          : {})
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: DAUSTINN.alias,
            item: homeUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: headline,
            item: url
          }
        ]
      },
      getWebSiteSchema(),
      getPersonSchema(locale)
    ]
  }
}

export default seoConfig
