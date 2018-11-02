import axios from 'axios';

import { POST_FAVORITE_SUCCESS, 
         FETCH_FAVORITES_SUCCESS, 
         DELETE_FAVORITE_SUCCESS, 
         OPEN_FAVORITES } from '../constants/favoritesConstants.js';

import { TOGGLE_LOGIN_MESSAGE } from '../constants/navbarConstants.js';


const toggleLoginMessage = () => (dispatch) => {
  dispatch({ type: TOGGLE_LOGIN_MESSAGE });

  setTimeout(() => {
   dispatch({ type: TOGGLE_LOGIN_MESSAGE });
  }, 3000);
}

export const postFavorite = (userId, gifId, stillUrl, videoUrl) => async (dispatch) => {
  try {
    if(userId) {
      const favorite = await axios.post('/api/favorites', { userId, gifId, stillUrl, videoUrl });
      dispatch({ type: POST_FAVORITE_SUCCESS, payload: { gifId, stillUrl: stillUrl, videoUrl: videoUrl } })
    } else {
      dispatch(toggleLoginMessage());
    }
  } catch {
      console.error('Error posting favorite');
  }
}

export const fetchFavorites = (userId) => async (dispatch) => {
  try {
    if(userId) {
      const favorites = await axios.get('/api/favorites', { params: { userId } });
      dispatch({ type: FETCH_FAVORITES_SUCCESS, payload: favorites.data })
    } 
  } catch {
      console.error('Error fetching favorites');
  }
}

export const deleteFavorite = (userId, gifId, arrayIndex) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_FAVORITE_SUCCESS, payload: { arrayIndex, gifId }})
    const deletedFavorite = await axios.delete('/api/favorites', { params: { userId, gifId }})
  } catch {
    console.error('ERROR deleting favorite');
  }
}

export const toggleFavoritesComponent = (userId) => (dispatch) => {
  if(userId) {
    dispatch({ type: OPEN_FAVORITES })
  } else {
    dispatch(toggleLoginMessage())
  }
}






