import axios from 'axios';
import { FETCH_USERID, REMOVE_USERID } from '../constants/constants.js';
import { fetchFavorites } from './favoriteActions.js';

export const handleLogin = (username, password) => async (dispatch) => {
  const login = await axios.post('/api/users', { username, password })
  dispatch({ type: FETCH_USERID, payload: { userId: login.data, username } })
}


export const handleSignout = () => (dispatch) => {
  dispatch({ type: REMOVE_USERID })
}