import axios from 'axios';
import { FETCH_GIFS, DISPLAY_SPINNER, HIDE_SPINNER, DISPLAY_ERROR, HIDE_ERROR } from '../constants/constants.js';

export const handleLoading = (isLoading) => {
  if(isLoading) {
    return { type: DISPLAY_SPINNER }
  } else {
    return { type: HIDE_SPINNER }
  }

}

export const handleError = (isError) => {
  if(isError) {
    return { type: DISPLAY_ERROR }
  } else {
    return { type: HIDE_ERROR }
  }
}


export const fetchGifs = (searchTerm, userId) => async (dispatch) => {
    dispatch(handleLoading(true));
    const response = await axios.get('/api/gifs', { params: { searchTerm: searchTerm, userId: userId }});
    console.log(response)
    if(!response.data.data.length){
      dispatch(handleError(true))
    } else {
      dispatch({ type: FETCH_GIFS, payload: response.data.data })
      dispatch(handleError(false));
    }
    dispatch(handleLoading(false))
}

