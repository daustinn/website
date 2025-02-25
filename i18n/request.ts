import { LANGUAGE_KEY } from 'const'
import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const cookieStore = (await cookies().get(LANGUAGE_KEY)?.value) || 'en'
  const locale = cookieStore.split('-')[0]
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
