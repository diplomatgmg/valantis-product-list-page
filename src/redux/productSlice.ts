import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

interface ProductState {
  currentPage: number
  isLoadingProducts: boolean
}

const initialState: ProductState = {
  currentPage: 1,
  isLoadingProducts: false
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers
})

export const { setCurrentPage, setIsLoadingProducts } = productSlice.actions
export { type ProductState }
export default productSlice.reducer
