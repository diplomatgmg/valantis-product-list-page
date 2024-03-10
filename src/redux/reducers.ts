import { type ProductState } from './productSlice'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type Products } from '../types'

export default {
  setProducts (state: ProductState, action: PayloadAction<Products>) {
    state.products = action.payload
  }
}
