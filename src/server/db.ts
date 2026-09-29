import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from './env'
import { integer, varchar, pgTable } from 'drizzle-orm/pg-core'

export const views = pgTable('views', {
  id: varchar({ length: 4 }).primaryKey(),
  count: integer().default(0).notNull()
})

export const schema = { views }

export const db = drizzle(env.DATABASE_URL)
