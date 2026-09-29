import { defineConfig } from 'kubb/config'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginFetch } from '@kubb/plugin-fetch'
import { http } from './src/server/http'

export default defineConfig(async () => {
  const response = await http.handle(new Request('http://localhost/api/openapi/json'))

  if (!response.ok) {
    throw new Error(`Failed to generate OpenAPI: ${response.status}`)
  }

  return {
    input: await response.json(),
    output: {
      path: 'src/api-client',
      clean: true
    },
    plugins: [
      pluginTs(),
      pluginFetch({
        baseURL: 'http://localhost:3000',
        resolver: {
          name(name) {
            return name.replace(/^(\w+?)Api(?=[A-Z]|$)/, '$1')
          }
        }
      })
    ]
  }
})
