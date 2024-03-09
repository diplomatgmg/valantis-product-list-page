import React, { type FC, type ReactElement } from 'react'
import { type Product } from '../redux/productSlice'

interface ProductTableItemProps {
  product: Product
}

const ProductTableItem: FC<ProductTableItemProps> = ({ product }): ReactElement => {
  return (
    <tr>
      <th></th>
      <th>{product.id}</th>
      <th>{product.product}</th>
      <th>{product.price}</th>
      <th>{product.brand}</th>
    </tr>
  )
}

export default ProductTableItem
