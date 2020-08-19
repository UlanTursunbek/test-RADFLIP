import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import items from './items'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    items
  })

export default createRootReducer
