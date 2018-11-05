import '@babel/polyfill';
import axios from 'axios';
import { FETCH_GIFS_SUCCESS, 
  FETCH_GIFS_FAILURE,
  RESET_QUERY, 
  TOGGLE_SPINNER, 
  TOGGLE_END_RESULTS, 
  FETCH_WEIRD_GIF_SUCCESS } from '../constants/gifFeedConstants.js';
import { CHANGE_SEARCH_TYPE } from '../constants/navbarConstants.js';

export const handleWeirdSearch = (searchTerm, weirdLevel) => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_SPINNER, payload: true }) 
    const response = await axios.get('/api/weirdgifs', { params: { searchTerm, weirdLevel }})
    dispatch({ type: FETCH_WEIRD_GIF_SUCCESS, payload: response.data.data.images.downsized_large.url })
    dispatch({ type: TOGGLE_SPINNER, payload: false });
  } catch {
     dispatch({ type: FETCH_GIFS_FAILURE, payload: 'Error fetching gif, please try again.' })
  }
}

// This action is only called after hitting submit in FormComponent.
// It resets the infinite scroll
export const handleSearch = (searchType, searchTerm, limit, offset) => (dispatch) => {
  dispatch({ type: CHANGE_SEARCH_TYPE, payload: searchType })
  if(searchType !== 'translate') {
    dispatch({ type: RESET_QUERY, payload: searchTerm })
    dispatch({ type: TOGGLE_END_RESULTS, payload: false })
    dispatch(fetchGifs(searchType, searchTerm, limit, offset));
  }
}

export const fetchGifs = (searchType, searchTerm, limit, offset, callback) => async (dispatch) => {
    try {
    // display loading spinner
    dispatch({ type: TOGGLE_SPINNER, payload: true })
    const response = await axios.get('/api/gifs', { params: { searchType, searchTerm, limit, offset }});
    if(!response.data.data.length){
      dispatch({ type: FETCH_GIFS_FAILURE, payload: 'No results found'})
    } else {
      dispatch({ type: FETCH_GIFS_SUCCESS, payload: { data: response.data.data, 
                                                      offset: offset,
                                                      totalGifs: response.data.pagination.total_count,
                                                      scrolling: false } })
     
    }
       // hide loading spinner once items are retrieved
       dispatch({ type: TOGGLE_SPINNER, payload: false });
       // this callback is used within handleSearch function and InfiniteScrollComponent
       // InfiniteScrollComponent needs to set its scrolling state to false once items are retrieved
       if (typeof callback === 'function') callback();
    } catch(err) {
        dispatch({ type: FETCH_GIFS_FAILURE, payload: 'Error fetching gifs, please try again.' })
    }
}

// When no items are left to be scrolled, show indicator at bottom of page
export const handleEndResults = () => (dispatch) => {
  dispatch({ type: TOGGLE_END_RESULTS, payload: true });
}

