import { combineReducers, reduceReducers } from 'redux';
import { getGifs, handleLoading, handleError, handleEnd } from './fetchGifsReducer.js';
import { getUserId } from './loginReducer.js';
import { handleFavorites, toggleFavoritesComponent } from './favoritesReducer.js';
import { switchSearchType, handleWeirdness } from './formControlReducer.js';

export default combineReducers({
  getGifs,
  handleLoading,
  handleError,
  getUserId,
  handleFavorites,
  toggleFavoritesComponent,
  handleEnd,
  switchSearchType,
  handleWeirdness
})
