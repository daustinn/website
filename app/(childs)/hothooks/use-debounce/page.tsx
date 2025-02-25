'use client'

import { useDebounce } from 'hothooks'
import * as React from 'react'

const TEXTS = [
  'TypeScript adds static typing to JavaScript',
  'Next.js enables server-side rendering',
  'React hooks simplify state management',
  'The virtual DOM improves performance',
  'Tailwind CSS is utility-first',
  'ESModules improve code organization',
  'GraphQL is a flexible API query language',
  'Node.js enables JavaScript on the backend',
  'Prisma simplifies database access',
  'Vite is a fast JavaScript bundler',
  'zustand is a lightweight state manager',
  'ShadCN provides styled UI components',
  'Edge functions run close to users',
  'Server Components optimize rendering',
  'Sanity is a flexible headless CMS'
]

type Log = {
  value: string
  delay: number
}

export default function UseDebouncePage() {
  const [logs, setLogs] = React.useState<Log[]>([])
  const logsListRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [delay, setDelay] = React.useState(500)
  const [typing, setTyping] = React.useState(false)

  const { value, onChange, setValue } = useDebounce({
    onFinish: (value) => {
      setLogs((prev) => [
        ...prev,
        {
          value,
          delay
        }
      ])
    },
    delay
  })

  React.useEffect(() => {
    let isMounted = true

    const typeText = async () => {
      while (isMounted) {
        const text = TEXTS[Math.floor(Math.random() * TEXTS.length)]
        let typedText = ''
        for (const char of text) {
          if (!isMounted) return
          typedText += char
          setValue(typedText)
          let randomDelay = Math.random() * (delay * 0.1 - 20) + 10
          if (Math.random() < 0.1) {
            randomDelay += (delay + 200) * (Math.random() * 0.5 + 0.5)
          }
          await new Promise((res) => setTimeout(res, randomDelay))
        }
        await new Promise((res) => setTimeout(res, 500 + delay))
      }
    }

    if (!typing) {
      typeText()
    }

    return () => {
      isMounted = false
    }
  }, [setValue, delay, typing])

  return (
    <div>
      <article>
        <h2 className="font-medium tracking-tight text-2xl">
          useDebounce hook
        </h2>
        <div className="pt-10">
          <div className="pb-4 flex flex-col gap-5">
            <label htmlFor="">
              <input
                onFocus={() => setTyping(true)}
                onBlur={() => setTyping(false)}
                value={value}
                ref={inputRef}
                onChange={onChange}
                className="pb-4 dark:text-stone-400 border-b text-xl bg-transparent dark:border-stone-800 w-full outline-none placeholder:text-stone-700 placeholder:font-medium"
                placeholder="Type anything"
              />
            </label>
            <div className="flex items-center gap-2">
              {[500, 1000, 1500, 2000, 2500].map((d) => (
                <button
                  key={d}
                  data-current={delay === d ? '' : undefined}
                  onClick={() => setDelay(d)}
                  className="text-xs text-stone-600 dark:text-stone-400 data-[current]:dark:text-blue-500 data-[current]:text-blue-700 font-medium border border-stone-500/30 p-1 rounded-full px-3"
                >
                  {d}ms
                </button>
              ))}
            </div>
          </div>
          <div className="relative ">
            <div className="absolute inset-0 select-none pointer-events-none bg-gradient-to-b dark:from-[#0a0908] from-white via-white/50 dark:via-[#0a0908b7] to-transparent dark:to-transparent"></div>
            <div className="max-h-[150px] flex flex-col justify-end overflow-hidden overflow-y-auto text-base tracking-tight font-medium font-mono">
              <div ref={logsListRef} className="flex flex-col gap-1">
                {logs.map((log, index) => (
                  <div key={index} className="line-clamp-1 log-item">
                    <span className="dark:text-stone-500 text-stone-600">
                      Log after{' '}
                      <span className="dark:text-blue-500 text-blue-600">
                        {log.delay}ms
                      </span>
                      :{' '}
                    </span>
                    {log.value || '-'}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
