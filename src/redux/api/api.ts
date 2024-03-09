import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import md5 from 'md5'

const API_URL = 'https://api.valantis.store:41000/'

const generateAuthString = (password: string): string => {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '')
  const authString = `${password}_${timestamp}`
  return md5(authString)
}

// const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: API_URL,
//     prepareHeaders: (headers) => {
//       headers.set('X-Auth', generateAuthString('Valantis'))
//       return headers
//     }
//   }),
//   endpoints: (builder) => ({
//     getAllIds: builder.query({
//       query: () => ({
//         url: '/',
//         method: 'POST',
//         body: {
//           action: 'get_ids'
//         }
//       })
//     })
//   })
// })
//
// export const { useGetAllIdsQuery } = api

export { API_URL, generateAuthString }
