import enMessages from './messages/en.json'
import esMessages from './messages/es.json'

type Messages = typeof enMessages

type DotPaths<T, Prefix extends string = ''> = {
  [K in keyof T & string]:
    | `${Prefix}${K}`
    | (T[K] extends object ? DotPaths<T[K], `${Prefix}${K}.`> : never)
}[keyof T & string]

type DeepGet<
  T,
  Path extends string
> = Path extends `${infer Head}.${infer Tail}`
  ? Head extends keyof T
    ? DeepGet<T[Head], Tail>
    : never
  : Path extends keyof T
    ? T[Path]
    : never

export type TranslationKey = DotPaths<Messages>

export const messages = {
  es: esMessages,
  en: enMessages
} as const

export const getLocaleByUrl = (url: URL) => {
  const segment = url.pathname.split('/')[1]
  return (segment in messages ? segment : 'en') as keyof typeof messages
}

export const toggleLocale = (url: URL) => {
  const currentLocale = getLocaleByUrl(url)
  const newLocale = currentLocale === 'es' ? 'en' : 'es'
  return url.pathname.replace(`/${currentLocale}`, `/${newLocale}`)
}

export const href = (url: URL, to: string) => {
  const locale = getLocaleByUrl(url)
  const path = to.replace(/^\//, '')
  return `/${locale}/${path}`
}

const resolve = (obj: Record<string, unknown>, path: string): unknown => {
  const parts = path.split('.')
  let current: unknown = obj
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined
    current = (current as Record<string, unknown>)[part]
  }
  return current
}

export const t = <K extends TranslationKey>(
  key: K,
  url: URL
): DeepGet<Messages, K> => {
  const locale = getLocaleByUrl(url)
  return resolve(
    messages[locale] as unknown as Record<string, unknown>,
    key
  ) as DeepGet<Messages, K>
}
