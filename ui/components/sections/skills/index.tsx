import React from 'react'
import { Html } from '~ui/icons/html'
import { JavaScript } from '~ui/icons/javascript'
import { TypeScript } from '~ui/icons/typescript'
import ReactJS from '~ui/icons/reactjs'
import { NextJS } from '~ui/icons/nextjs'
import { TailwindCss } from '~ui/icons/tailwindcss'
import { NodeJS } from '~ui/icons/nodejs'
import { MongoDB } from '~ui/icons/mongodb'
import { Laravel } from '~ui/icons/laravel'
import { Git } from '~ui/icons/git'
// import { Github } from '~ui/icons/github'
import { Figma } from '~ui/icons/figma'
import { Firebase } from '~ui/icons/firebase'
import { Vercel } from '~ui/icons/vercel'
import Marquee from '~ui/commons/markee'
import { cn } from '~utils'

export function Skills() {
  const skills = [
    {
      icon: Html,
      title: 'HTML',
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    // {
    //   icon: <Css />,
    //   title: 'CSS',
    //   href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    // },
    {
      icon: JavaScript,
      title: 'JavaScript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      icon: TypeScript,
      title: 'TypeScript',
      href: 'https://www.typescriptlang.org/'
    },
    {
      icon: ReactJS,
      title: 'React',
      href: 'https://reactjs.org/'
    },
    {
      icon: NextJS,
      title: 'Next.js',
      href: 'https://nextjs.org/'
    },
    {
      icon: TailwindCss,
      title: 'Tailwind CSS',
      href: 'https://tailwindcss.com/'
    },
    {
      icon: NodeJS,
      title: 'Node.js',
      href: 'https://nodejs.org/'
    },
    {
      icon: MongoDB,
      title: 'MongoDB',
      href: 'https://www.mongodb.com/'
    },
    {
      icon: Laravel,
      title: 'Laravel',
      href: 'https://laravel.com/'
    },
    {
      icon: Git,
      title: 'Git',
      href: 'https://git-scm.com/'
    },
    // {
    //   icon: Github,
    //   title: 'Github',
    //   href: 'https: //github.com/'
    // },
    {
      icon: Figma,
      title: 'Figma',
      href: 'https://www.figma.com/'
    },
    {
      icon: Firebase,
      title: 'Firebase',
      href: 'https://firebase.google.com/'
    },
    {
      icon: Vercel,
      title: 'Vercel',
      href: 'https://vercel.com/'
    }
  ]
  return (
    <article className="space-y-2 animate-fade-in-down [animation-delay:300ms]">
      <div className="ml-5 flex relative justify-center dark:text-stone-300 overflow-y-hidden">
        <div className="bg-gradient-to-l from-transparent dark:via-[#0a0908]/80 to-white dark:to-[#0a0908] pointer-events-none select-none absolute left-0 z-10 w-[200px] h-full" />
        <div className="bg-gradient-to-r from-transparent dark:via-[#0a0908]/80 to-white dark:to-[#0a0908] pointer-events-none select-none absolute right-0 z-10 w-[200px] h-full" />
        <Marquee>
          {skills.map((skill, index) => (
            <a
              href={skill.href}
              key={index}
              target="_blank"
              rel="noreferrer"
              title={`Go to ${skill.title} website`}
              className={cn(
                'p-2 text-center slide hover:scale-110 flex flex-col mx-10 transition-transform rounded-2xl'
              )}
            >
              <skill.icon
                size={20}
                className="mx-auto opacity-60 dark:opacity-100"
              />
              <p className="text-xs mt-2">{skill.title}</p>
            </a>
          ))}
        </Marquee>
      </div>
    </article>
  )
}
