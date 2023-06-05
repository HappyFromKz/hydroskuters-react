import {createStore, combineReducers, applyMiddleware} from 'redux'
import {cartReducer} from './cart/cartReducer'
import {composeWithDevTools} from "redux-devtools-extension"
const reducers = combineReducers({
  cart: cartReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

export { store }