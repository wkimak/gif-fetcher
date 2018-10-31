import { combineReducers, reduceReducers } from 'redux';
import getGifs from './fetchGifsReducer.js';
import handleLoading from './fetchGifsReducer.js';
import handleError from './fetchGifsReducer.js';
import getUserId from './loginReducer.js';
import handleFavorites from './favoritesReducer.js';
import toggleFavoritesComponent from './favoritesReducer.js';

export default combineReducers({
    gifList: getGifs.getGifs,
    isLoading: handleLoading.handleLoading,
    isError: handleError.handleError,
    userId: getUserId.getUserId,
    username: getUserId.getUserId,
    favoritesList: handleFavorites.handleFavorites,
    favoritesOpen: toggleFavoritesComponent.toggleFavoritesComponent
})
