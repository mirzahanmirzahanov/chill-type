import axios from 'axios'

export const http = (baseUrl: string, apiKey: string) => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-type': 'application/json',
      'X-Api-Key': apiKey
    }
  })
}
