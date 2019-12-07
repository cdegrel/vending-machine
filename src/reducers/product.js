import { FETCH_PRODUCTS } from '../constants/action-types'
import { PRODUCTS } from '../api'

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, products: PRODUCTS }
        default:
            return state
    }
}