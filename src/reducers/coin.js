import { FETCH_COINS, RELOAD_COIN_STOCK } from '../constants/action-types'
import { COINS } from '../api'

const initialState = {
    coins: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COINS:
            return { ...state, coins: COINS }
        case RELOAD_COIN_STOCK:
            return { ...state, coins: state.coins.map(coin =>
                coin.id === action.id
                ? { ...coin, stock: coin.stock + action.stock }
                : coin
            )}
        default:
            return state
    }
}