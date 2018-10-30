import axios from 'axios';
import { POST_FAVORITE, FETCH_FAVORITES, DELETE_FAVORITE } from '../constants/constants.js';

export const postFavorite = (userId, gifId, gifUrl) => async (dispatch) => {
  const favorite = await axios.post('/api/favorites', { userId: userId, gifId: gifId, gifUrl: gifUrl });
}

export const fetchFavorites = (userId) => async (dispatch) => {
  const favorites = await axios.get('/api/favorites', { params: { userId: userId } });
  dispatch({ type: FETCH_FAVORITES, payload: favorites.data })
}

export const deleteFavorite = (userId, gifId, arrayIndex) => async (dispatch) => {
  dispatch({ type: DELETE_FAVORITE, payload: arrayIndex })
  const deletedFavorite = await axios.delete('/api/favorites', { params: { userId: userId, gifId: gifId }})
}