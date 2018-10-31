import axios from 'axios';
import { POST_FAVORITE, FETCH_FAVORITES, DELETE_FAVORITE, OPEN_FAVORITES } from '../constants/constants.js';

export const postFavorite = (userId, gifId, gifUrl) => async (dispatch) => {
  try {
    const favorite = await axios.post('/api/favorites', { userId: userId, gifId: gifId, gifUrl: gifUrl });
    dispatch({ type: POST_FAVORITE, payload: { gif_id: gifId, url: gifUrl } })
  } catch {
    console.log('ERROR posting favorite');
  }
}

export const toggleFavoritesComponent = () => (dispatch) => {
  dispatch({ type: OPEN_FAVORITES })
}

export const fetchFavorites = (userId) => async (dispatch) => {
  try {
  const favorites = await axios.get('/api/favorites', { params: { userId: userId } });
  dispatch({ type: FETCH_FAVORITES, payload: favorites.data })
  } catch {
    console.log('ERROR fetching favorites');
  }
}

export const deleteFavorite = (userId, gifId, arrayIndex) => async (dispatch) => {
  try {
  dispatch({ type: DELETE_FAVORITE, payload: { arrayIndex: arrayIndex, gifId: gifId }})
  const deletedFavorite = await axios.delete('/api/favorites', { params: { userId: userId, gifId: gifId }})
  } catch {
    console.log('ERROR deleting favorite');
  }
}


