interface Product {
  id: string
  product: string
  brand: string | null
  price: number
}

type Products = Product[]
type ProductIds = string[]

export type { Product, Products, ProductIds }
