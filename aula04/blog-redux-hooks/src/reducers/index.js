import { SIGN_IN, SIGN_OUT } from "../actions";

const initialState = {
    userLogged: false,
    userVisits: 0
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGN_IN:
        return Object.assign({}, state, {
          userLogged: true,
          username: action.data.username
        });
  
      case SIGN_OUT:
        return {
          userLogged: false
        };
  
      default:
        return state;
    }
  };
  