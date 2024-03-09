import React, { type ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import { useGetAllIdsQuery, useGetItemsQuery } from '../redux/api/api'
import { LIMIT_PRODUCTS_ON_PAGE } from '../constants'
import { type Product } from '../redux/productSlice'
import ProductTableItem from './ProductTableItem'

const ProductTableList = (): ReactElement => {
  const {
    data: allProductsIdsData
  } = useGetAllIdsQuery({ limit: LIMIT_PRODUCTS_ON_PAGE, offset: 0 })

  const {
    data: allProductsData
  } = useGetItemsQuery({ ids: allProductsIdsData, skip: true })

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
      {
        allProductsData?.map((product: Product) => (
          <ProductTableItem key={product.id}
                            product={product}
          />
        ))
      }
      </tbody>
    </Table>
  )
}

export default ProductTableList
