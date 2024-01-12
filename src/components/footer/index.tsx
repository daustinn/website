import { GithubIcon, GmailIcon, LinkedinIcon, SpotifyIcon } from 'icons'
import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-neutral-700 bg-neutral-900">
      <div className="max-w-3xl flex items-center gap-4 p-5 mx-auto w-full">
        <div>
          <h4 className="text-neutral-300">From Peru David Bendezú 🙂🎨</h4>
          <p className="text-xs font-light text-neutral-400">
            Deployed on{' '}
            <a
              target="_blank"
              referrerPolicy="no-referrer"
              href="http://vercel.com"
            >
              Vercel
            </a>
          </p>
        </div>
        <a
          data-noline
          href="https://github.com/daustinn"
          className="text-neutral-400 hover:text-neutral-100 ml-auto"
        >
          <GithubIcon className="w-6" />
        </a>
        <a
          data-noline
          href="https://www.linkedin.com/in/daustinn/"
          className="text-neutral-400 hover:text-neutral-100"
        >
          <LinkedinIcon className="w-6" />
        </a>
        <a
          data-noline
          href="mailto:daustinn.dev@gmail.com"
          className="text-neutral-400 hover:text-neutral-100"
        >
          <GmailIcon className="w-6" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
