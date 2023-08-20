import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from './types';
import AuthService from '../services/AuthService';

export const registerUser = (userData: any) => (dispatch: any) => {
  try {
    AuthService.register(userData); // Store user data in localStorage
    dispatch({ type: REGISTER_USER, payload: userData }); // Dispatch REGISTER_USER action
  } catch (error) {
    // Handle error
  }
};

// Define similar actions for login and logout