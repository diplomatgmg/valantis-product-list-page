import React, { type FC, type ReactElement } from 'react'
import { useFilterValuesQuery } from '../redux/api/api'
import _ from 'lodash'
import { Select } from 'antd'

interface ProductFilterValuesProps {
  field: string
  isLoading: boolean
}

const ProductFilterValues: FC<ProductFilterValuesProps> = ({ field, isLoading }): ReactElement => {

  const {
    data: filterValues = []
  } = useFilterValuesQuery({ field }, { skip: isLoading })

  const notEmptyFilterValues = _.sortBy(_.uniq(_.compact(filterValues))).map(item => ({
    value: item, label: item
  }))

  return (
    <div>
      <Select showSearch
              placeholder={`Select ${field}`}
              style={{ width: '100%' }}>

        {notEmptyFilterValues.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}

      </Select>
    </div>
  )

}

export default ProductFilterValues
