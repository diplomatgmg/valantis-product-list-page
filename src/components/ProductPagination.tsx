import React, { type ReactElement } from 'react'
import { useGetAllProductIdsQuery, useGetProductsQuery } from '../redux/api/api'
import { useAppSelector } from '../redux/hooks'
import { Pagination } from 'antd'

const ProductPagination = (): ReactElement => {
  const currentPage = useAppSelector((state) => state.products.currentPage)
  const isLoadingProducts = useAppSelector((state) => state.products.isLoadingProducts)

  const {
    data: productIds
  } = useGetAllProductIdsQuery({})

  const handleChangePage = (): void => {
    console.log('change page')
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
