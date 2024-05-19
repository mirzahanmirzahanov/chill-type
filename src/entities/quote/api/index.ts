import { http } from '@/shared/api'
interface Quote {
  quote?: String
}
export const fetchQuote = async (endpoint: string = '', params: object = {}) => {
  let requestData: Quote | null = null
  let error: Promise<object> | null = null
  let status: 'pending' | 'resolved' | 'rejected' = 'pending'

  try {
    const { data } = await http(
      import.meta.env.VITE_QUOTE_API_URL,
      import.meta.env.VITE_QUOTE_API_KEY
    ).get(endpoint, {
      params: params
    })

    requestData = data[0]
    status = 'resolved'
  } catch (e) {
    status = 'rejected'
    error = Promise.reject(e)
  }

  return { requestData, status, error }
}
