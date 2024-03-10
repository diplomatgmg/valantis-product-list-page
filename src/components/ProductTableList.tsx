import React, { type ReactElement } from 'react'
import { Table, type TableColumnsType } from 'antd'
import { useGetAllProductIdsQuery, useGetProductsQuery } from '../redux/api/api'
import { type Product } from '../types'
import { useAppSelector } from '../redux/hooks'
import { LIMIT_PRODUCTS_ON_PAGE } from '../constants'

const columns: TableColumnsType<Product> = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: (a, b) => b.id.localeCompare(a.id)
  },
  {
    title: 'Название',
    dataIndex: 'product'
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
    width: '10%'
  },
  {
    title: 'Бренд',
    dataIndex: 'brand',
    width: '10%'
  }
]

const ProductTableList = (): ReactElement => {
  const currentPage = useAppSelector(state => state.products.currentPage)

  const {
    data: productIds,
    isError: isErrorProductIds,
    refetch: refetchProductIds
  } = useGetAllProductIdsQuery({})

  if (isErrorProductIds) {
    console.log('product ids refetch...')
    void refetchProductIds()
  }

  const productIdsForCurrentPage = productIds?.slice(
    (currentPage - 1) * LIMIT_PRODUCTS_ON_PAGE,
    currentPage * LIMIT_PRODUCTS_ON_PAGE
  )

  const {
    data: productsData,
    isError: isErrorProducts,
    isLoading: isLoadingProducts,
    refetch: refetchProducts
  } = useGetProductsQuery({ ids: productIdsForCurrentPage, skip: true })

  if (isErrorProducts) {
    console.log('product fetch error')
    void refetchProducts()
  }

  return (
    <Table rowKey={(product) => product.id}
           columns={columns}
           dataSource={productsData}
           loading={isLoadingProducts}
           pagination={false}
    />
  )
}

export default ProductTableList
