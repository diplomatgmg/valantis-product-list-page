import { API_URL, generateAuthString } from './api'

type Action = 'get_ids' | 'get_items'

const fetchProducts = async (action: Action, params: any): Promise<any> => {
  const headers = {
    'X-Auth': generateAuthString('Valantis'),
    'Content-Type': 'application/json'
  }

  const body = JSON.stringify({
    action,
    params
  })

  const response = await fetch(API_URL, {
    method: 'POST',
    headers,
    body
  })

  const { result }: { result: string[] } = await response.json()
  return result
}

export default fetchProducts
