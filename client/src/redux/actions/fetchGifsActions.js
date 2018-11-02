import axios from 'axios';
import { FETCH_GIFS, CHANGE_QUERY, DISPLAY_SPINNER, HIDE_SPINNER, DISPLAY_ERROR, HIDE_ERROR, END_RESULTS, FETCH_TRANSLATE_GIF } from '../constants/constants.js';

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

export const handleTranslate = (searchTerm, weirdLevel) => async (dispatch) => {
  try {
    const response = await axios.get('/api/gifs', { params: { searchTerm, weirdLevel }})
    dispatch({ type: FETCH_TRANSLATE_GIF, payload: response.data.data.images.downsized_large.url })
  } catch {
    console.log('ERROR getting translate search');
  }
}

export const handleSearch = (searchTerm, offset) => (dispatch) => {
  dispatch({ type: CHANGE_QUERY, payload: searchTerm })
  dispatch({ type: END_RESULTS, payload: false })
  dispatch(fetchGifs(searchTerm, offset, () => {
     dispatch(handleLoading(false))
  }));
}


export const fetchGifs = (searchTerm, offset, callback) => async (dispatch) => {
    dispatch(handleLoading(true));
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
    dispatch(handleLoading(false));
        callback();
}

export const handleEndResults = () => (dispatch) => {
  dispatch(handleLoading(false));
  dispatch({ type: END_RESULTS, payload: true });
}

