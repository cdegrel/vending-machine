import { BUY_PRODUCT, BUY_PRODUCT_FAILURE } from '../constants/action-types'

const initialState = {
    purchases: [],
    status: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BUY_PRODUCT:
            return { ...state, purchases: [{
                product: action.selectedIndex,
                coins: action.coins
                }, ...state.purchases], status: 'Enjoy!!!' }
        case BUY_PRODUCT_FAILURE:
            return { ...state, status: action.status }
        default:
            return state
    }
}