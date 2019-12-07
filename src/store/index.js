import { applyMiddleware, createStore } from 'redux'
import reducers from '../reducers'
import { BUY_PRODUCT } from '../constants/action-types'
import { buyProductFailure, decrementBalance } from '../actions'

const initialState = {}

const buyMiddleware = store => next => action => {
    if (action.type === BUY_PRODUCT) {
        const { products, selectedIndex } = store.getState().productReducer
        if (!selectedIndex) {
            return store.dispatch(buyProductFailure('No products selected!'))
        }

        const { price } = products.find(product => product.id === selectedIndex)
        const value = store.getState().balanceReducer.value
        if (value <= 0 || price > value) {
            return store.dispatch(buyProductFailure('Insufficient funds have been inserted'))
        }

        store.dispatch(decrementBalance(value - (value - price)))
    }
    next(action)
}

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(buyMiddleware)
)

export default store