import { combineReducers, reduceReducers } from 'redux';
import { getGifs, handleLoading, handleError } from './fetchGifsReducer.js';
import { getUserId } from './loginReducer.js';
import { handleFavorites, toggleFavoritesComponent } from './favoritesReducer.js';

export default combineReducers({
  getGifs,
  handleLoading,
  handleError,
  getUserId,
  handleFavorites,
  toggleFavoritesComponent
})
