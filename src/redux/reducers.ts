import { type ProductState } from './productSlice'
import { type PayloadAction } from '@reduxjs/toolkit'

export default {
  setCurrentPage (state: ProductState, action: PayloadAction<number>) {
    state.isLoadingProducts = true
    state.currentPage = action.payload
  },
  setIsLoadingProducts (state: ProductState, action: PayloadAction<boolean>) {
    state.isLoadingProducts = action.payload
  }
}
