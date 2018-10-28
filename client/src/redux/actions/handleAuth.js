import axios from 'axios';

export const handleLogin = (username, password) => async (dispatch) => {
  const signup = await axios.post('/api/user', { username: username, password: password })
}