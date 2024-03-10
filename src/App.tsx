import React, { useEffect } from 'react'
import ProductTableList from './components/ProductTableList'
import { Container } from 'react-bootstrap'
import ProductPagination from './components/ProductPagination'
import { useGetAllProductIdsQuery } from './redux/api/api'

const App = (): React.ReactElement => {
  const {
    isError: isErrorProductIds,
    refetch: refetchProductIds
  } = useGetAllProductIdsQuery({})

  useEffect(() => {
    if (isErrorProductIds) {
      void refetchProductIds()
    }
  }, [isErrorProductIds])

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
