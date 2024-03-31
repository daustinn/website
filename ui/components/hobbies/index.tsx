import { ExternalIcon } from 'icons'
import React from 'react'

export function Hobbies() {
  return (
    <section className="mt-10 px-10 space-y-10 max-w-2xl max-lg:max-w-full mx-auto w-full">
      <article className="space-y-2 animate-fade-in-down [animation-delay:100ms]">
        <h2 className="font-semibold text-xl">Hobbies and achievements</h2>
        <div className="dark:text-stone-400 text-stone-600 font-medium space-y-2">
          <p className="pb-3">
            I also like to produce electronic music and play instruments like
            guitar, piano and drums. 😊 And watch live broadcasts like{' '}
            <a
              href="https://midu.dev"
              title="Midudev"
              target="_blank"
              rel="noreferrer"
              className="hover:underline inline-block dark:text-white/90 text-black"
            >
              Midudev
              <ExternalIcon className="w-5 inline-block" />
            </a>
            ,{' '}
            <a
              href="https://fernando-herrera.com/"
              title="Fernando Herrera"
              target="_blank"
              rel="noreferrer"
              className="hover:underline inline-block dark:text-white/90 text-black"
            >
              Fernando Herrera.
              <ExternalIcon className="w-5 inline-block" />
            </a>
          </p>
          <p>
            I got 953,648 views on my artistic{' '}
            <a
              href="https://www.youtube.com/@daustinnmusic"
              title="YouTube channel"
              target="_blank"
              rel="noreferrer"
              className="hover:underline inline-block dark:text-white/90 text-black"
            >
              YouTube channel
              <ExternalIcon className="w-5 inline-block" />
            </a>{' '}
            of which I am proud. You can also listen to it on{' '}
            <a
              href="https://open.spotify.com/artist/0obJdp3GLQg4OjpA97ZMNW"
              title="Spotify"
              target="_blank"
              rel="noreferrer"
              className="hover:underline inline-block dark:text-white/90 text-black"
            >
              Spotify
              <ExternalIcon className="w-5 inline-block" />
            </a>
            .
          </p>
        </div>
      </article>
    </section>
  )
}
