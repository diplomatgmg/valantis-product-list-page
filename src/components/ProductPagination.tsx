import React, { type ReactElement, useEffect } from 'react'
import { useGetAllProductIdsQuery } from '../redux/api/api'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { Pagination } from 'antd'
import { setCurrentPage, setIsLoadingProducts } from '../redux/productSlice'
import { LIMIT_PRODUCTS_ON_PAGE } from '../constants'

const ProductPagination = (): ReactElement => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector((state) => state.products.currentPage)
  const isLoadingProducts = useAppSelector((state) => state.products.isLoading)

  const {
    data: productIds = []
  } = useGetAllProductIdsQuery({})

  useEffect(() => {
    void dispatch(setIsLoadingProducts(isLoadingProducts))
  }, [])

  const handleChangePage = (newPage: number): void => {
    void dispatch(setCurrentPage(newPage))
  }

  console.log(productIds.length)

  return <Pagination defaultCurrent={currentPage}
                     total={productIds.length / LIMIT_PRODUCTS_ON_PAGE * 10}
                     showQuickJumper={true}
                     showSizeChanger={false}
                     onChange={handleChangePage}
                     disabled={isLoadingProducts}
  />
}

export default ProductPagination
