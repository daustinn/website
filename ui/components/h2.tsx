/* eslint-disable @typescript-eslint/no-explicit-any */
import { withHeadingId } from './utils'

export function H2({ children }: any) {
  return (
    <h2 className="group font-bold text-xl mt-5 border-b border-stone-300 dark:border-stone-500/30 pb-2 mb-4 relative">
      {withHeadingId(children)}
    </h2>
  )
}
