export const ADD_CHECKOUT = 'ADD_CHECKOUT'
export const CLEAR_CHECKOUT = 'CLEAR_CHECKOUT'

export const addCheckout = () => {
    return {
        type: ADD_CHECKOUT
    }
}

export const clearCheckout = () => {
    return {
        type: CLEAR_CHECKOUT
    }
}