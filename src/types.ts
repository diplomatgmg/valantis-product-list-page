interface Product {
  id: string
  product: string
  brand: string | null
  price: number
}

type Products = Product[]

export type { Product, Products }
