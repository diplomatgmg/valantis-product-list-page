import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

interface ProductState {
  currentPage: number
}

const initialState: ProductState = {
  currentPage: 1
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers
})

export const { setCurrentPage } = productSlice.actions
export { type ProductState }
export default productSlice.reducer
