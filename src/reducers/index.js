import { combineReducers } from "redux"

import productReducer from './product'
import coinReducer from './coin'

const reducers = combineReducers({
    productReducer,
    coinReducer
})

export default reducers