import { type Product, type ProductState } from './productSlice'
import { type PayloadAction } from '@reduxjs/toolkit'

export default {
  setProducts (state: ProductState, action: PayloadAction<Product[]>) {
    state.products = action.payload
  }
}
