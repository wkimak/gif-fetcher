import axios from 'axios';
import { FETCH_GIFS } from '../constants.js';

export const fetchGifs = (searchTerm) => async (dispatch) => {
  const response = await axios.get('/api/gifs', { params: { searchTerm: searchTerm }});
  console.log('action', response);
  dispatch({ type: FETCH_GIFS, payload: response.data.data })
}