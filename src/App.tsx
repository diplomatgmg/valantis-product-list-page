import React from 'react'
import ProductTableList from './components/ProductTableList'
import { Container } from 'react-bootstrap'

const App = (): React.ReactElement => {
  return (
    <Container className="mt-4">
      <ProductTableList />
    </Container>
  )
}

export default App
