import {
    BUY_PRODUCT,
    BUY_PRODUCT_FAILURE, DECREMENT_BALANCE,
    FETCH_COINS,
    FETCH_PRODUCTS,
    INCREMENT_BALANCE,
    SELECT_PRODUCT
} from '../constants/action-types'

// Product
export const fetchProducts = () => ({
    type: FETCH_PRODUCTS
})

export const selectProduct = id => ({
    type: SELECT_PRODUCT,
    id
})

// Coin
export const fetchCoins = () => ({
    type: FETCH_COINS
})

// Balance
export const incrementBalance = value => ({
    type: INCREMENT_BALANCE,
    value
})

export const decrementBalance = value => ({
    type: DECREMENT_BALANCE,
    value
})

// Purchase product
export const buyProduct = () => ({
    type: BUY_PRODUCT
})
export const buyProductFailure = status => ({
    type: BUY_PRODUCT_FAILURE,
    status
})
