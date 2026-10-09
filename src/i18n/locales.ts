export type Locale = (typeof locales)[number]
export const locales = ['en-US', 'pt-BR'] as const
export const defaultLocale: Locale = 'pt-BR'
export const timeZone = 'America/Sao_Paulo'

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value)
}
