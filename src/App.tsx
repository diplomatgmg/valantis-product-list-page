import React from 'react'
import ProductTableList from './components/ProductTableList'
import { Container } from 'react-bootstrap'
import ProductPagination from './components/ProductPagination'

const App = (): React.ReactElement => {
  return (
    <Container className="mb-4">
      <ProductTableList />
      <ProductPagination />
    </Container>
  )
}

export default App
