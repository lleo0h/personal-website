import { Elysia } from 'elysia'
import { z } from 'zod'
import { readMessages } from '../db'

export const getMessages = new Elysia().get(
  '/messages',
  async ({ params }) =>
    readMessages({
      limit: params.limit,
      status: 'approved',
      referenceStatus: 'approved'
    }),
  {
    params: z.object({
      limit: z.coerce.number().int().min(1).max(100),
      cursor: z.string().optional()
    })
  }
)
