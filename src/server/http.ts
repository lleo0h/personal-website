import { Elysia } from 'elysia'
import { openapi, fromTypes } from '@elysia/openapi'

export const http = new Elysia({ prefix: '/api' })
  .get('/', () => ({ message: 'Hello World' }))
  .use(
    openapi({
      references: fromTypes('src/server/http.ts'),
      documentation: {
        info: {
          title: '',
          description: '',
          version: ''
        }
      }
    })
  )
