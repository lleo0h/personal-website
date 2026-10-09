import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'
import { defaultLocale, isLocale, timeZone } from './locales'

export default getRequestConfig(async () => {
  const store = await cookies()
  const preference = store.get('locale')?.value
  const locale = preference && isLocale(preference) ? preference : defaultLocale

  return {
    locale,
    timeZone,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
