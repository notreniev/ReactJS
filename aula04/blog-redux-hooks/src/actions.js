export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

export const signIn = (username) => {
    return {
        type: SIGN_IN,
        data: {
            username: username
        }
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}
