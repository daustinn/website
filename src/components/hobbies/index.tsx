import React from 'react'

function Hobbies() {
  return (
    <section
      id="jobs"
      title="Daustinn's Works"
      className="w-full pt-3 border-t border-neutral-800"
    >
      <h3 className="text-xl opacity-70 font-medium">
        Hobbies and achievements
      </h3>
      <article className="pl-10 pt-5 text-neutral-200 flex flex-col gap-3">
        <p>
          I also like to produce electronic music, and play instruments like
          guitar, piano and drums. 😊 And of course, watch live streams like{' '}
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.twitch.tv/midudev"
            title="Midudev twitch"
          >
            Midudev
          </a>
          ,{' '}
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.twitch.tv/goncypozzo"
            title="Goncy twitch"
          >
            Goncy
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://fernando-herrera.com/"
            title="Fernando Herrera twitch"
          >
            Fernando Herrera
          </a>
          .
        </p>
        <p className="text-neutral-400">
          I got <b className="text-neutral-200">953,648</b> views on my artistic{' '}
          <a
            title="Youtube channel Daustinn"
            href="https://www.youtube.com/@daustinnmusic"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            YouTube channel
          </a>{' '}
          of which I am proud.
        </p>
      </article>
      <article className="pt-3 flex flex-col gap-3">
        <iframe
          className="rounded-2xl"
          src="https://open.spotify.com/embed/artist/0obJdp3GLQg4OjpA97ZMNW?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </article>
    </section>
  )
}

export default Hobbies
