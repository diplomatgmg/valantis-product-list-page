import React, { type ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import { LIMIT_PRODUCTS_ON_PAGE } from '../constants'
import ProductTableItem from './ProductTableItem'
import { useGetAllProductIdsQuery, useGetProductsQuery } from '../redux/api/api'

const ProductTableList = (): ReactElement => {
  const {
    data: productsIdsData,
    isError: isErrorProductIds,
    refetch: refetchProductIds
  } = useGetAllProductIdsQuery({ limit: LIMIT_PRODUCTS_ON_PAGE, offset: 0 })

  if (isErrorProductIds) {
    alert('error products ids')
    void refetchProductIds()
  }

  const {
    data: productsData,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    refetch: refetchProducts
  } = useGetProductsQuery({ ids: productsIdsData, skip: true })

  if (isErrorProducts) {
    alert('error products')
    void refetchProducts()
  }

  const renderProducts = (): ReactElement => {

    if (isLoadingProducts) {
      const emptyProducts = Array.from({ length: LIMIT_PRODUCTS_ON_PAGE }, () => null)

      return (
        <>
          {emptyProducts.map((emptyProduct, index) => <ProductTableItem key={index} product={emptyProduct} index={index}/>)}
        </>
      )
    }

    return (
      <>
        {productsData?.map((product, index) => <ProductTableItem key={product.id} product={product} index={index}/>)}
      </>
    )
  }

  return (
    <Table hover>
      <thead>
      <tr key="headers">
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Название</th>
        <th scope="col">Цена</th>
        <th scope="col">Бренд</th>
      </tr>
      </thead>
      <tbody>
      {renderProducts()}
      </tbody>
    </Table>
  )
}

export default ProductTableList
