import axios from 'axios';

export const handleSignup = (username, password) => async (dispatch) => {
  const signup = await axios.post('/api/user', { username: username, password: password })
  console.log(signup);
}