import { isRejectedWithValue, type Middleware, type PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { notification } from 'antd'

const handleRejectedValue = (action: unknown): boolean => {
  return (
    isRejectedWithValue(action) &&
    _.isObject(action) &&
    'type' in action &&
    'payload' in action
  )
}

interface ErrorPayload {
  data: string
}

export const ErrorMiddleware: Middleware = () => (next) => (action) => {
  if (handleRejectedValue(action)) {
    const payloadAction = action as PayloadAction<ErrorPayload>
    console.error(payloadAction)

    notification.error({
      message: 'API Error',
      description: payloadAction.payload.data,
      placement: 'bottomRight',
      type: 'error',
      duration: 10
    })
  }
  return next(action)
}
