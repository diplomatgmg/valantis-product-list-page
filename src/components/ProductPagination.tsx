import React, { type ReactElement } from 'react'
import { useGetAllProductIdsQuery } from '../redux/api/api'
import { LIMIT_PRODUCTS_ON_PAGE } from '../constants'
import { Pagination } from 'antd'

const ProductPagination = (): ReactElement => {
  const {
    data: allProductsIds,
    isLoading
  } = useGetAllProductIdsQuery({ limit: LIMIT_PRODUCTS_ON_PAGE, offset: 0 })

  const renderPagination = (): ReactElement => {
    if (isLoading) {
      return <Pagination showQuickJumper defaultCurrent={1} total={500} disabled />
    }

    return <Pagination showQuickJumper defaultCurrent={1} total={allProductsIds?.length ?? 0} />
  }

  return (
    <div className="text-center">
      {renderPagination()}
    </div>
  )
}

export default ProductPagination
