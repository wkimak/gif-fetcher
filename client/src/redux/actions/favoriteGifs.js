import axios from 'axios';
import { POST_FAVORITE, FETCH_FAVORITES } from '../constants/constants.js';

export const postFavorite = (userId, gifId, gifUrl) => async (dispatch) => {
  const favorite = await axios.post('/api/favorites', { userId: userId, gifId: gifId, gifUrl: gifUrl });
  console.log('FAVORITES', favorite);
}

export const fetchFavorites = (userId) => async (dispatch) => {
  const favorites = await axios.get('/api/favorites', { params: { userId: userId } });
  console.log('FAVORITES', favorites);
}