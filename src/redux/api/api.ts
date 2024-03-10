import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import _ from 'lodash'
import { type ProductIds, type Products } from '../../types'
import { generateAuthString } from '../../utils'

const API_URL = 'https://api.valantis.store:41000'

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
      transformResponse: (response: { result: ProductIds }) => {
        return _.uniq(response.result)
      }
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
      transformResponse: (response: { result: Products }) => {
        return _.uniqBy(response.result, 'id')
      }
    })
  })
})

export const { useGetAllProductIdsQuery, useGetProductsQuery } = api

export { api, API_URL, generateAuthString }
