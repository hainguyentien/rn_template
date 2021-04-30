import { useDispatch } from 'react-redux'
import { default as store } from './store'
export * from './actions'
export * from './reducers'
export { store }
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
