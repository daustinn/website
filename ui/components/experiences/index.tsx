import { ExternalIcon } from 'icons'
import React from 'react'

export function Experiences() {
  return (
    <section className="mt-10 px-10 space-y-10 max-w-2xl max-lg:max-w-full mx-auto w-full">
      <article className="space-y-2 animate-fade-in-down [animation-delay:100ms]">
        <h2 className="font-semibold text-xl">Featured experiences</h2>
        <div className="dark:text-stone-400 text-stone-600 font-medium space-y-2">
          <a
            href="https://ci.ilp.edu.pe"
            target="_blank"
            title="Information Center La Pontificia - Fullstack Developer"
            rel="noreferrer"
            className="hover:underline block"
          >
            <b>2023 - Actuality</b>: Information Center La Pontificia -
            Fullstack Developer
            <ExternalIcon className="w-5 inline-block" />
          </a>
          <a
            title="Payment Administration Nueva Acropolis - Fullstack Developer"
            href="https://ayacuchoacropolis1.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline block"
          >
            <b>2022 - 2023</b>: Payment Administration Nueva Acropolis -
            Fullstack Developer
            <ExternalIcon className="w-5 inline-block" />
          </a>
        </div>
      </article>
    </section>
  )
}
