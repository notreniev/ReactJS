import { ADD_CHECKOUT } from './actions'
import { CLEAR_CHECKOUT } from './actions'

const initializeState = {
    checkout: undefined
}

const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case ADD_CHECKOUT:
            return Object.assign({}, state, {
                checkout: true
            })
        case CLEAR_CHECKOUT:
            return Object.assign({}, state, {
                checkout: undefined
            })
        default: 
        return state
    }
}

export { reducer }