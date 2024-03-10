import React from 'react'
import ProductTableList from './components/ProductTableList'
import { Container } from 'react-bootstrap'
import ProductPagination from './components/ProductPagination'

const App = (): React.ReactElement => {
  return (
    <Container className="mt-4">
      <ProductTableList />
      <div className="mt-4 text-center">
        <ProductPagination />
      </div>
    </Container>
  )
}

export default App
