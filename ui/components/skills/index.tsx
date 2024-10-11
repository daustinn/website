import {
  CSSIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GithubIcon,
  HTMLIcon,
  JavaScriptIcon,
  LaravelIcon,
  MongoDBIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactJSIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  VercelIcon
} from 'icons'
import React from 'react'
import Skill from './skill'

export function Skills() {
  const skills = [
    {
      icon: <HTMLIcon />,
      title: 'HTML',
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      icon: <CSSIcon />,
      title: 'CSS',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      icon: <JavaScriptIcon />,
      title: 'JavaScript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      icon: <TypeScriptIcon />,
      title: 'TypeScript',
      href: 'https://www.typescriptlang.org/'
    },
    {
      icon: <ReactJSIcon />,
      title: 'React',
      href: 'https://reactjs.org/'
    },
    {
      icon: <NextJSIcon />,
      title: 'Next.js',
      href: 'https://nextjs.org/'
    },
    {
      icon: <TailwindCSSIcon />,
      title: 'Tailwind CSS',
      href: 'https://tailwindcss.com/'
    },
    {
      icon: <NodeJSIcon />,
      title: 'Node.js',
      href: 'https://nodejs.org/'
    },
    {
      icon: <MongoDBIcon />,
      title: 'MongoDB',
      href: 'https://www.mongodb.com/'
    },
    {
      icon: <LaravelIcon />,
      title: 'Laravel',
      href: 'https://laravel.com/'
    },
    {
      icon: <GitIcon />,
      title: 'Git',
      href: 'https://git-scm.com/'
    },
    {
      icon: <GithubIcon />,
      title: 'Github',
      href: 'https: //github.com/'
    },
    {
      icon: <FigmaIcon />,
      title: 'Figma',
      href: 'https://www.figma.com/'
    },
    {
      icon: <FirebaseIcon />,
      title: 'Firebase',
      href: 'https://firebase.google.com/'
    },
    {
      icon: <VercelIcon />,
      title: 'Vercel',
      href: 'https://vercel.com/'
    }
  ]
  return (
    <section className="mt-10 space-y-10">
      <article className="space-y-2 animate-fade-in-down [animation-delay:300ms]">
        <div className="ml-5 flex relative justify-center dark:text-stone-300 overflow-y-hidden">
          <div className="bg-gradient-to-l from-transparent dark:via-[#0b0b0b]/80 to-white dark:to-[#0b0b0b] pointer-events-none select-none absolute left-0 z-10 w-[200px] h-full" />
          <div className="bg-gradient-to-r from-transparent dark:via-[#0b0b0b]/80 to-white dark:to-[#0b0b0b] pointer-events-none select-none absolute right-0 z-10 w-[200px] h-full" />
          <div className="skills-container py-5 overflow-x-auto px-20 flex gap-20 hidden-scroll">
            {skills.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
