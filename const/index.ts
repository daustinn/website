import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

export const conections = [
  {
    icon: FaGithub,
    title: 'Github profile of daustinn',
    username: '@daustinn',
    href: 'https://github.com/daustinn'
  },
  {
    icon: FaXTwitter,
    title: 'X profile of @daustinndev',
    username: '@daustinndev',
    href: 'https://x.com/daustinndev'
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn profile of daustinn',
    username: '@daustinn',
    href: 'https://linkedin.com/in/daustinn/'
  },
  {
    icon: SiGmail,
    title: 'Email me at',
    username: '',
    href: 'mailto:daustinn.dev@gmail.com'
  }
]

const seoTecnologiesBase = {
  target: '_blank',
  rel: 'noreferrer'
}

export const seoTecnologies = {
  nodejs: {
    title: 'Run JavaScript Everywhere',
    href: 'https://nodejs.org/',
    ...seoTecnologiesBase
  },
  typescript: {
    title: 'TypeScript is JavaScript with syntax for types.',
    href: 'https://www.typescriptlang.org/',
    ...seoTecnologiesBase
  },
  react: {
    title: 'A JavaScript library for building user interfaces',
    href: 'https://reactjs.org/',
    ...seoTecnologiesBase
  },
  nextjs: {
    title: 'The React Framework for Production',
    href: 'https://nextjs.org/',
    ...seoTecnologiesBase
  },

  astro: {
    title: 'The modern static site generator',
    href: 'https://astro.build/',
    ...seoTecnologiesBase
  },

  php: {
    title: 'PHP: Hypertext Preprocessor',
    href: 'https://www.php.net/',
    ...seoTecnologiesBase
  },
  laravel: {
    title: 'The PHP Framework For Web Artisans',
    href: 'https://laravel.com/',
    ...seoTecnologiesBase
  },
  mongodb: {
    title: 'The most popular database for modern apps',
    href: 'https://www.mongodb.com/',
    ...seoTecnologiesBase
  },
  postgresql: {
    title: 'The world’s most advanced open source database',
    href: 'https://www.postgresql.org/',
    ...seoTecnologiesBase
  },
  mysql: {
    title: 'The world’s most popular open source database',
    href: 'https://www.mysql.com/',
    ...seoTecnologiesBase
  },
  sqlite: {
    title:
      'A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine',
    href: 'https://www.sqlite.org/',
    ...seoTecnologiesBase
  },
  redis: {
    title:
      'Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker',
    href: 'https://redis.io/',
    ...seoTecnologiesBase
  },
  aws: {
    title: 'Amazon Web Services (AWS)',
    href: 'https://aws.amazon.com/',
    ...seoTecnologiesBase
  },
  linux: {
    title: 'Linux Operating System',
    href: 'https://www.linux.org/',
    ...seoTecnologiesBase
  },
  git: {
    title: 'Git is a free and open source distributed version control system',
    href: 'https://git-scm.com/',
    ...seoTecnologiesBase
  },
  github: {
    title: 'GitHub is a development platform inspired by the way you work',
    href: 'https://github.com',
    ...seoTecnologiesBase
  }
}

export const projects = [
  {
    id: 'nanui',
    href: 'https://nanui.daustinn.com'
  },
  {
    id: 'apigraph',
    href: 'https://apigraph.daustinn.com'
  }
]

export const experiences = [
  {
    id: 'airzel',
    title: 'Airzel',
    years: ['2024', 'Actuality'],
    description: 'CEO and co-founder'
  },
  {
    id: 'la-pontificia',
    title: 'La Pontificia',
    years: ['2023', 'Actuality'],
    description: 'Fullstack Developer, Next.js and Laravel',
    href: 'https://lp.com.pe'
  },
  {
    id: 'nueva-acropolis',
    title: 'Nueva Acrópolis',
    years: ['2022', '2023'],
    description: 'Fullstack Developer, React.js & Firebase',
    href: 'https://ayacuchoacropolis1.com'
  }
]

export const locales = {
  en: {
    name: 'English',
    href: '/en',
    locale: 'en'
  },
  es: {
    name: 'Español',
    href: '/es',
    locale: 'es'
  }
}