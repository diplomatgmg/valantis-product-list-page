import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

interface Product {
  id: string
  product: string
  brand: string | null
  price: number
}

interface ProductState {
  products: Product[]
}

const initialState: ProductState = {
  products: []
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers
})

export const { setProducts } = productSlice.actions
export { type Product, type ProductState }
export default productSlice.reducer
