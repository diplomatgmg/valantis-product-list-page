import React, { type FC, type ReactElement } from 'react'
import { type Product } from '../redux/productSlice'

interface ProductTableItemProps extends Product {

}

const ProductTableItem: FC<ProductTableItemProps> = ({ id, product, brand, price }): ReactElement => {

  return (
    <tr>
      <th></th>
      <th>{id}</th>
      <th>{product}</th>
      <th>{price}</th>
      <th>{brand}</th>
    </tr>
  )
}

export default ProductTableItem
