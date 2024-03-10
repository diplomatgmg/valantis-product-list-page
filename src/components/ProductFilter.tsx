import React, { type ReactElement, useState } from 'react'
import ProductFilterValues from './ProductFilterValues'
import { useFilterFieldsQuery } from '../redux/api/api'
import { Button, Col, Form, Row, Select } from 'antd'

const ProductFilter = (): ReactElement => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

  const {
    data: productFields = [],
    isLoading: isLoadingProductFields
  } = useFilterFieldsQuery({})

  const productFieldsOptions = productFields.map((field) => ({
    value: field, label: field
  }))

  return (
    <Form className="mb-4">
      <Row gutter={30} align="middle">
        <Col>
          <Select showSearch
                  placeholder={'Выберите фильтр'}
                  options={productFieldsOptions}
                  value={selectedFilter}
                  onChange={setSelectedFilter}
                  style={{ width: '300px' }}
          />
        </Col>
        {selectedFilter !== null && (
          <>
            <Col flex="auto">
              <ProductFilterValues field={selectedFilter} isLoading={isLoadingProductFields}/>
            </Col>
            <Col>
              <Button type="primary">Применить фильтр</Button>
            </Col>
            <Col>
              <Button>Сбросить фильтры</Button>
            </Col>
          </>
        )}
      </Row>
    </Form>

  )
}

export default ProductFilter
