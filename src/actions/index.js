import { FETCH_COINS, FETCH_PRODUCTS, INCREMENT_BALANCE, SELECT_PRODUCT } from '../constants/action-types'

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