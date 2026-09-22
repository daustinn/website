import { DAUSTINN } from '@/const'

export const seoConfig = {
  url: 'https://daustinn.com',
  siteName: DAUSTINN.alias,
  author: DAUSTINN.name,
  twitter: '@daustinndev',
  themeColor: '#f5e9e1',
  ogImage: '/og-image.png',
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  defaultTitle: `${DAUSTINN.alias} (${DAUSTINN.name}) — Software Developer`,
  defaultDescription:
    'Software developer based in Ayacucho, Peru. I turn ideas into products with a focus on quality and user experience.',
  defaultKeywords:
    'David Bendezú, Daustinn, Software Developer, Web Developer, Ayacucho Peru, Full Stack Developer, React, Astro, TypeScript, Cloudflare'
} as const

export const getJsonLd = ({
  url,
  title,
  description,
  locale
}: {
  url: string
  title: string
  description: string
  locale: 'en' | 'es'
}) => {
  const isEs = locale === 'es'
  const ogImageUrl = `${seoConfig.url}${seoConfig.ogImage}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${seoConfig.url}/#website`,
        url: seoConfig.url,
        name: seoConfig.siteName,
        description: seoConfig.defaultDescription,
        inLanguage: ['en-US', 'es-PE'],
        publisher: {
          '@id': `${seoConfig.url}/#person`
        }
      },
      {
        '@type': 'Person',
        '@id': `${seoConfig.url}/#person`,
        name: DAUSTINN.name,
        alternateName: [DAUSTINN.alias, 'daustinndev'],
        url: seoConfig.url,
        image: {
          '@type': 'ImageObject',
          '@id': `${seoConfig.url}/#personimage`,
          url: ogImageUrl,
          caption: `${DAUSTINN.name} (${DAUSTINN.alias})`
        },
        jobTitle: isEs ? 'Desarrollador de Software' : 'Software Developer',
        email: `mailto:${DAUSTINN.mail}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ayacucho',
          addressCountry: 'PE'
        },
        sameAs: [
          DAUSTINN.githubURL,
          DAUSTINN.xURL,
          DAUSTINN.linkedinURL,
          DAUSTINN.bmc
        ],
        knowsAbout: [
          'Software Engineering',
          'Web Development',
          'TypeScript',
          'JavaScript',
          'React',
          'Astro',
          'Node.js',
          'Tailwind CSS',
          'Cloudflare'
        ]
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: {
          '@id': `${seoConfig.url}/#website`
        },
        about: {
          '@id': `${seoConfig.url}/#person`
        },
        mainEntity: {
          '@id': `${seoConfig.url}/#person`
        },
        inLanguage: isEs ? 'es-PE' : 'en-US'
      }
    ]
  }
}

export const getArticleJsonLd = ({
  url,
  title,
  description,
  locale,
  image
}: {
  url: string
  title: string
  description: string
  locale: 'en' | 'es'
  image?: string
}) => {
  const isEs = locale === 'es'
  const ogImageUrl = image
    ? new URL(image, seoConfig.url).toString()
    : `${seoConfig.url}${seoConfig.ogImage}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        url,
        name: title,
        headline: title,
        description,
        inLanguage: isEs ? 'es-PE' : 'en-US',
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
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${seoConfig.url}/#website`,
        url: seoConfig.url,
        name: seoConfig.siteName,
        publisher: {
          '@id': `${seoConfig.url}/#person`
        }
      },
      {
        '@type': 'Person',
        '@id': `${seoConfig.url}/#person`,
        name: DAUSTINN.name,
        alternateName: [DAUSTINN.alias, 'daustinndev'],
        url: seoConfig.url
      }
    ]
  }
}

export default seoConfig
