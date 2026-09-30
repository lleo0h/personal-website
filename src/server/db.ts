import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from './env'
import { integer, varchar, pgTable } from 'drizzle-orm/pg-core'
import { sql, eq } from 'drizzle-orm'

export const views = pgTable('views', {
  id: varchar({ length: 4 }).primaryKey(),
  count: integer().default(0).notNull()
})

export const schema = { views }

export const db = drizzle(env.DATABASE_URL)

export async function readViewCount() {
  const [view] = await db
    .select({ count: schema.views.count })
    .from(schema.views)
    .where(eq(schema.views.id, 'home'))

  return { count: view?.count ?? 0 }
}

export async function incrementViewCount() {
  const [view] = await db
    .insert(schema.views)
    .values({ id: 'home', count: 1 })
    .onConflictDoUpdate({
      target: schema.views.id,
      set: {
        count: sql`${schema.views.count} + 1`
      }
    })
    .returning()

  return { count: view!.count }
}
