import { applyMiddleware, createStore } from 'redux'
import reducers from '../reducers'
import { BUY_PRODUCT } from '../constants/action-types'
import { buyProductFailure, decrementBalance, reloadCoinStock } from '../actions'

function coinRefund(coins, amount) {
    let refund = new Map()
    for (let coin of coins.slice().filter(coin => coin.stock > 0).reverse()) {
        while (Number(amount.toFixed(2)) >= coin.value) {
            amount -= coin.value
            refund.set(coin.id, refund.has(coin.id) ? refund.get(coin.id) + 1 : 1)
        }
    }
    return refund
}

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
            return store.dispatch(buyProductFailure('Insufficient funds!'))
        }

        const refund = coinRefund(store.getState().coinReducer.coins, value - price)
        refund.forEach((value, key) => store.dispatch(reloadCoinStock(key, -value)))

        store.dispatch(decrementBalance(value))
    }
    next(action)
}

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(buyMiddleware)
)

export default store