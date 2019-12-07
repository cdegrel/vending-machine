import { FETCH_COINS, FETCH_PRODUCTS, INCREMENT_BALANCE } from '../constants/action-types'

// Product
export const fetchProducts = () => ({
    type: FETCH_PRODUCTS
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