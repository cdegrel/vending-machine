import { FETCH_PRODUCTS, SELECT_PRODUCT } from '../constants/action-types'
import { PRODUCTS } from '../api'

const initialState = {
    products: [],
    selectedIndex: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, products: PRODUCTS }
        case SELECT_PRODUCT:
            return { ...state, selectedIndex: action.id }
        default:
            return state
    }
}