import fetchProducts from './fetchProducts'
import { type Product } from '../productSlice'
import _ from 'lodash'

const getProductsByIds = async (ids: string[]): Promise<Product[]> => {
  const data = await fetchProducts('get_items', {
    ids
  }) as Product[]

  return _.uniqBy(data, 'id')
}

export default getProductsByIds
