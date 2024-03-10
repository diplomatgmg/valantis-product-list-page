import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import productReducer from './productSlice'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
