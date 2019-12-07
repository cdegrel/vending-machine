import { combineReducers } from "redux"

import productReducer from './product'
import coinReducer from './coin'
import balanceReducer from './balance'

const reducers = combineReducers({
    productReducer,
    coinReducer,
    balanceReducer
})

export default reducers