import { combineReducers, reduceReducers } from 'redux';
import { getGifs, handleLoading, handleError, handleEnd } from './gifFeedReducer.js';
import { getUserId, animateNavbar } from './navbarReducer.js';
import { handleFavorites, toggleFavoritesComponent } from './favoritesReducer.js';
import { switchSearchType, handleWeirdness } from './formControlReducer.js';

export default combineReducers({
  animateNavbar,
  getGifs,
  handleLoading,
  getUserId,
  handleFavorites,
  toggleFavoritesComponent,
  handleEnd,
  switchSearchType,
  handleWeirdness
})
