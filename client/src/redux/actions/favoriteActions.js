import axios from 'axios';
import { POST_FAVORITE, FETCH_FAVORITES, DELETE_FAVORITE, OPEN_FAVORITES, TOGGLE_LOGIN_MESSAGE } from '../constants/constants.js';



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
      dispatch({ type: POST_FAVORITE, payload: { gifId, stillUrl: stillUrl, videoUrl: videoUrl } })
    } else {
      dispatch(toggleLoginMessage());
    }
  } catch {
    console.log('ERROR posting favorite');
  }
}

export const toggleFavoritesComponent = (userId) => (dispatch) => {
  if(userId) {
    dispatch({ type: OPEN_FAVORITES })
  } else {
      dispatch(toggleLoginMessage())
  }
}

export const fetchFavorites = (userId) => async (dispatch) => {
  try {
    if(userId) {
      const favorites = await axios.get('/api/favorites', { params: { userId } });
      dispatch({ type: FETCH_FAVORITES, payload: favorites.data })
    } 
  } catch {
    console.log('ERROR fetching favorites');
  }
}

export const deleteFavorite = (userId, gifId, arrayIndex) => async (dispatch) => {
  try {
  dispatch({ type: DELETE_FAVORITE, payload: { arrayIndex, gifId }})
  const deletedFavorite = await axios.delete('/api/favorites', { params: { userId, gifId }})
  } catch {
    console.log('ERROR deleting favorite');
  }
}


