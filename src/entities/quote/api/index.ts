import { http } from '@/shared/api'
interface Params {
  headers?: any
  query?: any
  body?: any
}
export const fetchQuote = async (endpoint: string = '', params?: Params) => {
  const queryString = new URLSearchParams(params?.query).toString()
  const fullUrl = `${endpoint}${queryString ? '?' + queryString : ''}`

  const { isFetching, error, data } = await http(fullUrl, {
    // headers: params?.headers,
    // query: params?.query,
    body: params?.body
  }).json()

  return { isFetching, error, data: data.value[0] }
}
