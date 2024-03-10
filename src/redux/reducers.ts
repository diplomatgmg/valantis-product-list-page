import { type ProductState } from './productSlice'
import { type PayloadAction } from '@reduxjs/toolkit'

export default {
  setCurrentPage (state: ProductState, action: PayloadAction<number>) {
    state.currentPage = action.payload
  }
}
