import axios from 'axios';
import { FETCH_USERID, REMOVE_USERID } from '../constants/constants.js';
import { fetchFavorites } from './favoriteActions.js';

export const handleLogin = (username, password) => async (dispatch) => {
  const login = await axios.post('/api/users', { username: username, password: password })
  localStorage.setItem('userId', login.data);
  dispatch({ type: FETCH_USERID, payload: { userId: login.data, username: username } })
}

export const handleSignout = (userId) => (dispatch) => {
  localStorage.removeItem('userId');
  dispatch({ type: REMOVE_USERID })
}