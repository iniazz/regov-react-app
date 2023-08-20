import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const clothReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      // Update state for user registration/login
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT_USER:
      // Update state for user logout
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default clothReducer;