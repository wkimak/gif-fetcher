import { combineReducers } from 'redux';
import { getGifs, handleLoading, handleError, handleEnd } from './gifFeedReducer.js';
import { getUserId, animateNavbar, changeSearchType } from './navbarReducer.js';
import { handleFavorites, toggleFavoritesComponent } from './favoritesReducer.js';
import { handleWeirdness } from './weirdSliderReducer.js';

export default combineReducers({
  animateNavbar,
  getGifs,
  handleLoading,
  getUserId,
  handleFavorites,
  toggleFavoritesComponent,
  handleEnd,
  changeSearchType,
  handleWeirdness
})
