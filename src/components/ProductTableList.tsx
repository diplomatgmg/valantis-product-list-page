import React, { type ReactElement, useEffect } from 'react'
import { Table, type TableColumnsType } from 'antd'
import { useGetAllProductIdsQuery, useGetProductsQuery } from '../redux/api/api'
import { type Product } from '../types'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { LIMIT_PRODUCTS_ON_PAGE } from '../constants'
import { setIsLoadingProducts } from '../redux/productSlice'

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
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(state => state.products.currentPage)

  const {
    data: productIds
  } = useGetAllProductIdsQuery({})

  const productIdsForCurrentPage = productIds?.slice(
    (currentPage - 1) * LIMIT_PRODUCTS_ON_PAGE,
    currentPage * LIMIT_PRODUCTS_ON_PAGE
  )

  const {
    data: productsData,
    isError: isErrorProducts,
    isFetching: isFetchingProducts,
    refetch: refetchProducts
  } = useGetProductsQuery({ ids: productIdsForCurrentPage })

  useEffect(() => {
    void dispatch(setIsLoadingProducts(isFetchingProducts))
  }, [isFetchingProducts])

  useEffect(() => {
    if (isErrorProducts) {
      void refetchProducts()
    }
  }, [isErrorProducts])

  const rowHeightPx = 60

  return (
    <div style={{ height: rowHeightPx * LIMIT_PRODUCTS_ON_PAGE }}>
      <Table rowKey={(product) => product.id}
             columns={columns}
             dataSource={productsData}
             pagination={false}
             loading={isFetchingProducts}
      />
    </div>

  )
}

export default ProductTableList
