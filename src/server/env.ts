import * as z from 'zod'

process.loadEnvFile()

const schema = z.object({
  DATABASE_URL: z.url().startsWith('postgresql://')
})

export const env = schema.parse(process.env)
