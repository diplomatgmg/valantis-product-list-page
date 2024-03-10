import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'
import { type Products } from '../types'

interface ProductState {
  products: Products
  currentPage: number
}

const initialState: ProductState = {
  products: [],
  currentPage: 1
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers
})

export const { setProducts } = productSlice.actions
export { type ProductState }
export default productSlice.reducer
