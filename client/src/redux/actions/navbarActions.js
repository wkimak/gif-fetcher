import axios from 'axios';
import { FETCH_USERID, 
         REMOVE_USERID, 
         TOGGLE_LOGIN_MESSAGE, 
         LOGIN_FAILURE, 
         ANIMATE_NAVBAR } from '../constants/navbarConstants.js';


export const handleLogin = (username, password) => async (dispatch) => {
  try {
    const login = await axios.post('/api/users', { username, password })
    dispatch({ type: FETCH_USERID, payload: { userId: login.data, username } })
  } catch {
     dispatch({ type: LOGIN_FAILURE, payload: 'Error logging in. Pease try again' })
  }
}

export const handleSignout = () => (dispatch) => {
  dispatch({ type: REMOVE_USERID })
}

// Adjust height of navbar depending on scroll position from NavContainer
export const handleNavbarStyle = (height) => (dispatch) => {
  dispatch({ type: ANIMATE_NAVBAR, payload: height })
}
