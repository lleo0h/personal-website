import { Elysia } from 'elysia'
import { z } from 'zod'
import { createMessage } from '../db'

export const sendMessage = new Elysia().post(
  '/messages',
  async ({ body, set }) => {
    const message = await createMessage(body)
    set.status = 201
    return message
  },
  {
    body: z.object({
      name: z.string().trim().min(1).max(25),
      content: z.string().trim().min(1).max(500),
      referenceId: z.uuid().optional()
    })
  }
)
