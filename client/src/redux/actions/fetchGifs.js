import axios from 'axios';
import { FETCH_GIFS, DISPLAY_SPINNER, HIDE_SPINNER, DISPLAY_ERROR, HIDE_ERROR } from '../constants.js';

export const fetchGifs = (searchTerm) => async (dispatch) => {
    dispatch({ type: DISPLAY_SPINNER })
    const response = await axios.get('/api/gif', { params: { searchTerm: searchTerm }});
    if(!response.data.data.length){
      dispatch({ type: DISPLAY_ERROR })
    } else {
      dispatch({ type: FETCH_GIFS, payload: response.data.data })
      dispatch({ type: HIDE_ERROR })
    }
    dispatch({ type: HIDE_SPINNER })
}