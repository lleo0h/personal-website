import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

const locales = ['en-US', 'pt-BR']
const defaultLocale = 'pt-BR'

export default getRequestConfig(async () => {
  const store = await cookies()
  const preference = store.get('locale')?.value
  const locale = preference && locales.includes(preference) ? preference : defaultLocale

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
