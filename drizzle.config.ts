import { defineConfig } from 'drizzle-kit'
import { env } from '@/server/env'

export default defineConfig({
  out: 'drizzle',
  schema: 'src/server/db.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL
  }
})
