/* eslint-disable @typescript-eslint/no-explicit-any */
import { withHeadingId } from './utils'

export function H1({ children }: any) {
  return (
    <h1 className="text-2xl border-b border-stone-300 dark:border-stone-500/30 pb-2 mb-4 font-bold dark:text-gray-100">
      {withHeadingId(children)}
    </h1>
  )
}
