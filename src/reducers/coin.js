import { FETCH_COINS } from '../constants/action-types'
import { COINS } from '../api'

const initialState = {
    coins: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COINS:
            return { ...state, coins: COINS }
        default:
            return state
    }
}