import { CheckIcon, CopyIcon } from 'icons'
import { Highlight } from 'prism-react-renderer'
import React from 'react'
import { Button } from 'ui/lab'
import { cn } from 'utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  codeBlock: string
  fileName: string
}

export function BlockCode({ codeBlock, className, fileName, ...rest }: Props) {
  const [copied, setCopied] = React.useState(false)

  const onClipboardCopy = () => {
    // set copied to true for 1 second
    setCopied(true)
    navigator.clipboard.writeText(codeBlock)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <div
      className={cn(
        'rounded-3xl relative max-h-[900px] flex flex-col overflow-hidden animate-fade-in bg-black shadow-[rgba(0,_0,_0,_0.25)_0px_5px_50px_-12px]',
        className
      )}
      {...rest}
    >
      <div className="flex border-b border-stone-900 items-center gap-2 p-2 px-4 z-[2]">
        <div className="flex items-center gap-1">
          <span className="w-3 rounded-full aspect-square bg-stone-700 block" />
          <span className="w-3 rounded-full aspect-square bg-stone-700 block" />
          <span className="w-3 rounded-full aspect-square bg-stone-700 block" />
        </div>
        <h2 className="text-sm flex-grow font-semibold text-white">
          {fileName}
        </h2>
        <Button
          onClick={onClipboardCopy}
          className="bg-stone-200 w-7 rounded-full p-1.5 dark:bg-stone-600 dark:hover:bg-stone-700 dark:text-black"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>
      <div className="bg-gradient-to-t from-transparent via-transparent to-black pointer-events-none select-none absolute top-0 z-[1] w-full h-[30%]" />
      <div className="bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none select-none absolute bottom-0 z-[1] w-full h-[30%]" />
      <div className="p-5 z-[0] relative overflow-auto">
        <Highlight code={codeBlock} language="tsx">
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              style={{
                ...style,
                fontSize: '0.8rem',
                backgroundColor: 'transparent'
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({ token })}
                      className="grayscale"
                    />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
