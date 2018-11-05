import '@babel/polyfill';
import axios from 'axios';
import { LOGIN_SUCCESS,
         LOGIN_FAILURE,  
         LOGOUT_SUCCESS, 
         TOGGLE_LOGIN_MESSAGE, 
         ANIMATE_NAVBAR } from '../constants/navbarConstants.js';
import { RESET_QUERY } from '../constants/gifFeedConstants.js';

export const handleLogin = (username, password) => async (dispatch) => {
  try {
    const login = await axios.post('/api/users', { username, password })
    dispatch({ type: LOGIN_SUCCESS, payload: { userId: login.data, username } })
  } catch {
     dispatch({ type: LOGIN_FAILURE, payload: 'Error logging in. Pease try again' })
  }
}

export const handleSignout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS })
}

// Adjust height of navbar depending on scroll position from NavContainer
export const handleNavbarStyle = (height) => (dispatch) => {
  dispatch({ type: ANIMATE_NAVBAR, payload: height })
}

