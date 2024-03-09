import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from './store'

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppDispatch, useAppSelector }
