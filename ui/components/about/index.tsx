import React from 'react'

export function About() {
  return (
    <section className="mt-10 px-10 space-y-10 max-w-2xl max-lg:max-w-full mx-auto w-full">
      <article className="space-y-2 animate-fade-in-down [animation-delay:100ms]">
        <h2 className="font-semibold text-xl">About me</h2>
        <p className="text-stone-700 dark:text-stone-300 font-medium">
          More than 3 years creating beautiful and minimalist websites and
          applications with the latest technologies.
        </p>
      </article>
      <article className="space-y-2 animate-fade-in-down [animation-delay:200ms]">
        <h2 className="font-semibold text-xl">Now</h2>
        <p className="text-stone-700 dark:text-stone-300 font-medium">
          Right now, {"I'm"} focused on improving my freelance business. I spend
          more time sharing my work online and honing my design skills.
        </p>
        <p className="text-stone-700 dark:text-stone-300 font-medium">
          Additionally, I am exploring new projects and looking for
          opportunities to expand my work.
        </p>
      </article>
    </section>
  )
}
