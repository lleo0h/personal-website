import { Elysia } from 'elysia'
import { sql } from 'drizzle-orm'
import { db, schema } from '../db'

export const incrementViews = new Elysia().post('/views', async () => {
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
})
