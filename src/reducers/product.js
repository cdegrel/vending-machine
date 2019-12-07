import {
    BUY_PRODUCT,
    BUY_PRODUCT_FAILURE,
    FETCH_PRODUCTS,
    RELOAD_PRODUCT_STOCK,
    SELECT_PRODUCT
} from '../constants/action-types'
import { PRODUCTS } from '../api'

const initialState = {
    products: [],
    selectedIndex: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, products: PRODUCTS }
        case SELECT_PRODUCT:
            return { ...state, selectedIndex: action.id }
        case RELOAD_PRODUCT_STOCK:
            return { ...state, products: state.products.map(product =>
                    product.id === action.id
                        ? { ...product, stock: product.stock + action.stock }
                        : product
                )
            }
        case BUY_PRODUCT:
            return { ...state, products: state.products.map(product =>
                    product.id === state.selectedIndex
                    ? { ...product, stock: --product.stock }
                    : product
                ),
                selectedIndex: null
            }
        case BUY_PRODUCT_FAILURE:
            return { ...state, error: action.error }
        default:
            return state
    }
}