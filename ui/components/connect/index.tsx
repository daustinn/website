import { DaustinnIcon, ExternalIcon } from 'icons'
import React from 'react'

export function Connect() {
  return (
    <section className="mt-10 px-10 space-y-10 max-w-2xl max-lg:max-w-full mx-auto w-full">
      <article className="space-y-2 animate-fade-in-down [animation-delay:100ms]">
        <h2 className="font-semibold text-xl">Connect</h2>
        <div className="dark:text-stone-400 text-stone-600 font-semibold space-y-2">
          <DaustinnIcon className="w-10 text-black dark:text-white" />
          <p>
            Github
            <a
              title="Github profile of daustinn"
              href="https://github.com/daustinn"
              target="_blank"
              rel="noreferrer"
              className="hover:underline dark:text-white/90 text-black ml-5 inline-block"
            >
              @daustinn
              <ExternalIcon className="w-5 inline-block" />
            </a>
          </p>
          <p>
            Twitter
            <a
              title="X profile of @daustinndev"
              href="https://x.com/daustinndev"
              target="_blank"
              rel="noreferrer"
              className="hover:underline dark:text-white/90 text-black ml-5 inline-block"
            >
              @daustinndev
              <ExternalIcon className="w-5 inline-block" />
            </a>
          </p>
          <p>
            LinkedIn
            <a
              title="LinkedIn profile of daustinn"
              href="https://linkedin.com/in/daustinn/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline dark:text-white/90 text-black ml-5 inline-block"
            >
              @daustinn
              <ExternalIcon className="w-5 inline-block" />
            </a>
          </p>
          <p>
            Email
            <a
              title="Email me at"
              href="mailto:daustinn.dev@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline dark:text-white/90 text-black ml-5 inline-block"
            >
              daustinn.dev@gmail.com
              <ExternalIcon className="w-5 inline-block" />
            </a>
          </p>
        </div>
      </article>
    </section>
  )
}
