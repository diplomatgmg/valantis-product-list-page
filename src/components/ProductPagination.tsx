import React, { type ReactElement, useEffect } from 'react'
import { useGetAllProductIdsQuery } from '../redux/api/api'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { Pagination } from 'antd'
import { setCurrentPage, setIsLoadingProducts } from '../redux/productSlice'

const ProductPagination = (): ReactElement => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector((state) => state.products.currentPage)
  const isLoadingProducts = useAppSelector((state) => state.products.isLoadingProducts)

  const {
    data: productIds
  } = useGetAllProductIdsQuery({})

  useEffect(() => {
    void dispatch(setIsLoadingProducts(isLoadingProducts))
  }, [isLoadingProducts])

  const handleChangePage = (newPage: number): void => {
    void dispatch(setCurrentPage(newPage))
  }

  return <Pagination defaultCurrent={currentPage}
                     total={productIds?.length}
                     showQuickJumper={true}
                     showSizeChanger={false}
                     onChange={handleChangePage}
                     disabled={isLoadingProducts}
  />
}

export default ProductPagination
