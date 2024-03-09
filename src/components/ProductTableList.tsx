import React, { type ReactElement, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import ProductTableItem from './ProductTableItem'
import getProductsIds from '../redux/api/fetchProductIds'
import getProductsByIds from '../redux/api/fetchProductsData'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setProducts } from '../redux/productSlice'

const products = [
  {
    id: '1',
    product: 'T-shirt',
    brand: 'Nike',
    price: 29.99
  },
  {
    id: '2',
    product: 'Jeans',
    brand: "Levi's",
    price: 59.99
  },
  {
    id: '3',
    product: 'Sneakers',
    brand: 'Adidas',
    price: 79.99
  },
  {
    id: '4',
    product: 'Backpack',
    brand: 'Herschel',
    price: 49.99
  },
  {
    id: '5',
    product: 'Watch',
    brand: 'Fossil',
    price: 119.99
  },
  {
    id: '6',
    product: 'Sunglasses',
    brand: 'Ray-Ban',
    price: 99.99
  },
  {
    id: '7',
    product: 'Headphones',
    brand: 'Sony',
    price: 149.99
  },
  {
    id: '8',
    product: 'Gaming Mouse',
    brand: 'Logitech',
    price: 39.99
  },
  {
    id: '9',
    product: 'Smartphone',
    brand: 'Samsung',
    price: 699.99
  },
  {
    id: '10',
    product: 'Laptop',
    brand: 'Apple',
    price: 1299.99
  }
]

const ProductTableList = (): ReactElement => {
  const products = useAppSelector(state => state.products.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const ids = await getProductsIds(0)

      const productsData = await getProductsByIds(ids)
      dispatch(setProducts(productsData))
    }

    void fetchData()
  }, [])

  const renderProducts = (): ReactElement => {
    return (
      <>
        {products.map((product) => (
          <ProductTableItem
            key={product.id}
            {...product}
          />
        ))}
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
