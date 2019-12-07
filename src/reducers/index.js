import { combineReducers } from "redux"

import productReducer from './product'
import coinReducer from './coin'
import balanceReducer from './balance'
import productPurchasedReducer from './purchasedProduct'

const reducers = combineReducers({
    productReducer,
    coinReducer,
    balanceReducer,
    productPurchasedReducer
})

export default reducers