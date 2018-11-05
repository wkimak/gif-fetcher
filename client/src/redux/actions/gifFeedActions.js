import '@babel/polyfill';
import axios from 'axios';
import { FETCH_GIFS_SUCCESS, 
  FETCH_GIFS_FAILURE,
  RESET_QUERY, 
  DISPLAY_SPINNER, 
  END_RESULTS, 
  FETCH_TRANSLATE_GIF } from '../constants/gifFeedConstants.js';
import { CHOOSE_SEARCH_TYPE } from '../constants/navbarConstants.js';

export const handleWeirdSearch = (searchTerm, weirdLevel) => async (dispatch) => {
  try {
    dispatch({ type: DISPLAY_SPINNER, payload: true }) 
    const response = await axios.get('/api/weirdgifs', { params: { searchTerm, weirdLevel }})
    dispatch({ type: FETCH_TRANSLATE_GIF, payload: response.data.data.images.downsized_large.url })
    dispatch({ type: DISPLAY_SPINNER, payload: false });
  } catch {
     dispatch({ type: FETCH_GIFS_FAILURE, payload: 'Error fetching gif, please try again.' })
  }
}

// This action is only called after hitting submit in FormComponent.
// It resets the infinite scroll
export const handleSearch = (searchType, searchTerm, offset) => (dispatch) => {
  dispatch({ type: CHOOSE_SEARCH_TYPE, payload: searchType })
  if(searchType !== 'weird') {
    dispatch({ type: RESET_QUERY, payload: searchTerm })
    dispatch({ type: END_RESULTS, payload: false })

    dispatch(fetchGifs(searchType, searchTerm, offset));
  }
}


export const fetchGifs = (searchType, searchTerm, offset, callback) => async (dispatch) => {
    try {
    // display loading spinner
    dispatch({ type: DISPLAY_SPINNER, payload: true })
    const response = await axios.get('/api/gifs', { params: { searchType, searchTerm, offset }});
    console.log('RESPONSE', response)
    if(!response.data.data.length){
      dispatch({ type: FETCH_GIFS_FAILURE, payload: 'No results found'})
    } else {
      dispatch({ type: FETCH_GIFS_SUCCESS, payload: { data: response.data.data, 
                                              offset: offset,
                                              totalGifs: response.data.pagination.total_count,
                                              scrolling: false } })
     
    }
       // hide loading spinner once items are retrieved
       dispatch({ type: DISPLAY_SPINNER, payload: false });
       // this callback is used within handleSearch function and InfiniteScrollComponent
       // InfiniteScrollComponent needs to set its scrolling state to false once items are retrieved
       if (typeof callback === 'function') callback();
    } catch(err) {
    console.log(err)
      dispatch({ type: FETCH_GIFS_FAILURE, payload: 'Error fetching gifs, please try again.' })
    }
}

// When no items are left to be scrolled, show indicator at bottom of page
export const handleEndResults = () => (dispatch) => {
  dispatch({ type: END_RESULTS, payload: true });
}

