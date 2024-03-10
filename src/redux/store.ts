import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import productReducer from './productSlice'
import { ErrorMiddleware } from './api/middleware'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, ErrorMiddleware)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
