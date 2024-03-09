import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import md5 from 'md5'
import { type Product } from '../productSlice'
import _ from 'lodash'

const API_URL = 'https://api.valantis.store:41000/'

const generateAuthString = (password: string): string => {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '')
  const authString = `${password}_${timestamp}`
  return md5(authString)
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set('X-Auth', generateAuthString('Valantis'))
      return headers
    }
  }),
  endpoints: (builder) => ({
    getAllIds: builder.query({
      query: (params) => ({
        url: '/',
        method: 'POST',
        body: {
          action: 'get_ids',
          params
        }
      }),
      transformResponse: (response: { result: string[] }) =>
        Array.from(new Set(response.result))
    }),
    getItems: builder.query({
      query: (params) => (
        {
          url: '/',
          method: 'POST',
          body: {
            action: 'get_items',
            params
          }
        }),
      transformResponse: (response: { result: Product[] }) =>
        _.uniqBy(response.result, 'id')
    })
  })
})
//
export const { useGetAllIdsQuery, useGetItemsQuery } = api

export { api, API_URL, generateAuthString }
