import axios from 'axios';
import { FETCH_GIFS_SUCCESS, 
  FETCH_GIFS_FAILURE,
  CHANGE_QUERY, 
  DISPLAY_SPINNER, 
  END_RESULTS, 
  FETCH_TRANSLATE_GIF } from '../constants/gifFeedConstants.js';



export const handleWeirdSearch = (searchTerm, weirdLevel) => async (dispatch) => {
  try {
    const response = await axios.get('/api/gifs', { params: { searchTerm, weirdLevel }})
    dispatch({ type: FETCH_TRANSLATE_GIF, payload: response.data.data.images.downsized_large.url })
  } catch {
     dispatch({ type: FETCH_GIFS_FAILURE, payload: 'Error fetching gif, please try again.' })
  }
}

export const handleSearch = (searchTerm, offset) => (dispatch) => {
  dispatch({ type: CHANGE_QUERY, payload: searchTerm })
  dispatch({ type: END_RESULTS, payload: false })
  dispatch(fetchGifs(searchTerm, offset));
}


export const fetchGifs = (searchTerm, offset, callback) => async (dispatch) => {
    try {
    dispatch({ type: DISPLAY_SPINNER, payload: true })
    const response = await axios.get('/api/gifs', { params: { searchTerm, offset }});
    if(!response.data.data.length){
      dispatch({ type: FETCH_GIFS_FAILURE, payload: 'No results found'})
    } else {
      dispatch({ type: FETCH_GIFS_SUCCESS, payload: { data: response.data.data, 
                                              offset: offset,
                                              totalGifs: response.data.pagination.total_count,
                                              scrolling: false } })
     
    }
       dispatch({ type: DISPLAY_SPINNER, payload: false });
       if (typeof callback === 'function') callback();
    } catch(err) {
    console.log(err)
      dispatch({ type: FETCH_GIFS_FAILURE, payload: 'Error fetching gifs, please try again.' })
    }
}

export const handleEndResults = () => (dispatch) => {
  dispatch({ type: END_RESULTS, payload: true });
}

