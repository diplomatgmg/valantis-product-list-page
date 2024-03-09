import fetchProducts from './fetchProducts'
import { LIMIT_PRODUCTS_ON_PAGE } from '../../constants'
import _ from 'lodash'

const getProductsIds = async (offset: number): Promise<string[]> => {
  const data = await fetchProducts('get_ids', {
    offset,
    limit: LIMIT_PRODUCTS_ON_PAGE
  }) as string[]

  return _.uniq(data)
}

export default getProductsIds
