import { DAUSTINN } from '@/const'
const seo = {
  title: 'Daustinn (David Bendezú) — Software Engineer',
  prefix: 'Daustinn',
  description:
    'Software engineer based in Ayacucho, Peru. I turn ideas into products with focus on quality and user experience.',
  url: 'https://daustinn.com',
  ogImage: '/og-image.jpg',
  themeColor: '#f5e9e1',
  siteName: DAUSTINN.alias,
  author: DAUSTINN.name,
  twitter: '@daustinndev',
  keywords: ['software engineer', 'peru', 'html', 'css'],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DAUSTINN.name,
    alternateName: DAUSTINN.alias,
    url: 'https://daustinn.com',
    jobTitle: 'Software Engineer',
    image: 'https://daustinn.com/og-image.jpg',
    email: DAUSTINN.mail,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ayacucho',
      addressCountry: 'PE'
    },
    sameAs: [DAUSTINN.githubURL, DAUSTINN.xURL, DAUSTINN.linkedinURL]
  }
} as const
export default seo
