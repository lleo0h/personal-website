import { readViewCount, incrementViewCount } from './db'

const MEMORY_COOLDOWN_TIMER = 600000

const memoryCooldownViewCounter = new Map<string, number>()

setInterval(() => {
  const now = Date.now()
  for (const [k, cooldown] of memoryCooldownViewCounter) {
    if (now > cooldown + MEMORY_COOLDOWN_TIMER) memoryCooldownViewCounter.delete(k)
  }
}, 60000)

export async function trackView(headers: Headers) {
  const ip = headers.get('cf-connecting-ip')?.trim()
  const now = Date.now()
  if (!ip) return readViewCount()
  const cooldown = memoryCooldownViewCounter.get(ip)
  if (cooldown && now < cooldown + MEMORY_COOLDOWN_TIMER) return readViewCount()
  memoryCooldownViewCounter.set(ip, now)
  return incrementViewCount()
}
