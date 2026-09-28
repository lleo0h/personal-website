import { Elysia } from 'elysia'
import { openapi, fromTypes } from '@elysia/openapi'

export const http = new Elysia({ prefix: '/api' })
  .use(
    openapi({
      documentation: {
        info: {
          title: '',
          description: '',
          version: ''
        }
      },
      references: fromTypes('src/server/http.ts')
    })
  )
  .get('/', { message: 'Hello World' })
