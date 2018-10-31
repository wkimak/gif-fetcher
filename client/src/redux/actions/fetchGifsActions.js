import axios from 'axios';
import { FETCH_GIFS, CHANGE_SEARCH, DISPLAY_SPINNER, HIDE_SPINNER, DISPLAY_ERROR, HIDE_ERROR } from '../constants/constants.js';

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

export const handleSearch = (searchTerm, offset) => (dispatch) => {
  dispatch(handleLoading(true));
  dispatch({ type: CHANGE_SEARCH, payload: searchTerm })
  dispatch(fetchGifs(searchTerm, offset, () => {
     dispatch(handleLoading(false))
  }));
}


export const fetchGifs = (searchTerm, offset, callback) => async (dispatch) => {
    const response = await axios.get('/api/gifs', { params: { searchTerm, offset }});
    if(!response.data.data.length){
      dispatch(handleError(true))
    } else {

      dispatch({ type: FETCH_GIFS, payload: { data: response.data.data, 
                                              offset: offset,
                                              totalGifs: response.data.pagination.total_count,
                                              scrolling: false } })
      dispatch(handleError(false));
    }
        callback();
}

