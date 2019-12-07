import { FETCH_COINS, FETCH_PRODUCTS } from '../constants/action-types'

// Product
export const fetchProducts = () => ({
    type: FETCH_PRODUCTS
})

// Coin
export const fetchCoins = () => ({
    type: FETCH_COINS
})