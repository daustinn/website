import * as React from 'react'

export function withHeadingId(children: React.ReactNode) {
  const textPlainByChildren = React.useMemo(() => {
    return React.Children.map(children, (el) => {
      if ('string' === typeof el) {
        return el
      }
      return el
    })
  }, [children])

  const id = textPlainByChildren
    ?.toString()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return (
    <span className="relative">
      <a
        href={`#${id}`}
        className="absolute px-3 -left-[2rem] top-0.5 invisible [span:hover_&]:visible font-mono font-normal opacity-30 hover:opacity-100"
      >
        #
      </a>
      <a id={`${id}`} className="absolute"></a>
      {textPlainByChildren}
    </span>
  )
}
