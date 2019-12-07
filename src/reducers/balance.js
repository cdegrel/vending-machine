import { INCREMENT_BALANCE } from '../constants/action-types'

const initialState = {
    value: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_BALANCE:
            return { ...state, value: state.value += action.value }
        default:
            return state
    }
}