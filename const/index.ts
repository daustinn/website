import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

export const conections = [
  {
    id: 'github',
    icon: FaGithub,
    title: 'Github profile of daustinn',
    username: '@daustinn',
    href: 'https://github.com/daustinn'
  },
  {
    id: 'x',
    icon: FaXTwitter,
    title: 'X profile of @daustinndev',
    username: '@daustinndev',
    href: 'https://x.com/daustinndev'
  },
  {
    id: 'email',
    icon: SiGmail,
    username: '',
    href: 'mailto:daustinn.dev@gmail.com'
  },
  {
    id: 'resume',
    username: '',
    href: '/resume.pdf'
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
    id: 'anni',
    title: 'Anni',
    href: 'https://anni.daustinn.com'
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    href: 'https://ecommerce.daustinn.com'
  }
]

export const experiences = [
  {
    id: 'airzel',
    title: 'Airzel',
    year: 2024,
    now: true,
    description:
      'Front End Developer, Next.js, TypeScript, Tailwind CSS & Vercel',
    href: 'https://airzel.com'
  },
  {
    id: 'la-pontificia',
    title: 'La Pontificia',
    year: 2023,
    now: false,
    description: 'Full Stack Developer, Next.js, Laravel, MySQL & Redis',
    href: 'https://lp.com.pe'
  },
  {
    id: 'nueva-acropolis',
    title: 'Nueva Acrópolis',
    year: 2022,
    now: false,
    description: 'Front End Developer, React.js & Firebase (Maintenance)',
    href: 'https://acropolisperu.org/'
  }
]

export const languages = {
  en: {
    name: 'English (US)',
    region: 'United States',
    locale: 'en'
  },
  es: {
    name: 'Español (ES)',
    region: 'España',
    locale: 'es'
  }
}
