import { createFetch } from '@vueuse/core'

export const http = createFetch({
  baseUrl: import.meta.env.VITE_QUOTE_API_URL,
  options: {
    async beforeFetch({ options }) {
      options.headers = {
        'X-API-Key': `${import.meta.env.VITE_QUOTE_API_KEY}`
      }
      return { options }
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})
