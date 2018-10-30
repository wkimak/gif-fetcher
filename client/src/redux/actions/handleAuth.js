import axios from 'axios';
import { FETCH_USERID } from '../constants/constants.js';

export const handleLogin = (username, password) => async (dispatch) => {
  const login = await axios.post('/api/users', { username: username, password: password })
  dispatch({ type: FETCH_USERID, payload: login.data })
}