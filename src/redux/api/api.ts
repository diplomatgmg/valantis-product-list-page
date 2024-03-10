import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import md5 from 'md5'
import _ from 'lodash'
import { type ProductIds, type Products } from '../../types'

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
    getAllProductIds: builder.query({
      query: () => ({
        url: '/',
        method: 'POST',
        body: {
          action: 'get_ids'
        }
      }),
      transformResponse: (response: { result: ProductIds }) =>
        Array.from(new Set(response.result))
    }),
    getProducts: builder.query({
      query: (params) => (
        {
          url: '/',
          method: 'POST',
          body: {
            action: 'get_items',
            params
          }
        }),
      transformResponse: (response: { result: Products }) =>
        _.uniqBy(response.result, 'id')
    })
  })
})
//
export const { useGetAllProductIdsQuery, useGetProductsQuery } = api

export { api, API_URL, generateAuthString }
