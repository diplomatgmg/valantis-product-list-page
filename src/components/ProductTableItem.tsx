import React, { type FC, type ReactElement } from 'react'
import { type Product } from '../types'

interface ProductTableItemProps {
  product: Product | null
  index: number
}

const ProductTableItem: FC<ProductTableItemProps> = ({ product, index }): ReactElement => {
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{product?.id ?? 'Loading...'}</th>
      <th>{product?.product ?? null}</th>
      <th>{product?.price ?? null}</th>
      <th>{product?.brand ?? null}</th>
    </tr>
  )
}

export default ProductTableItem
