import { Elysia } from 'elysia'
import { eq } from 'drizzle-orm'
import { db, schema } from '../db'

export const getViews = new Elysia().get('/views', async () => {
  const [view] = await db
    .select()
    .from(schema.views)
    .where(
      eq(schema.views.id, 'home')
    )

  return { count: view?.count || 0 }
})
