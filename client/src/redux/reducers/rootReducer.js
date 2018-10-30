import { combineReducers, reduceReducers } from 'redux';
import getGifs from './gifReducer.js';
import handleLoading from './gifReducer.js';
import handleError from './gifReducer.js';
import getUserId from './authReducer.js';

export default combineReducers({
    gifList: getGifs.getGifs,
    isLoading: handleLoading.handleLoading,
    isError: handleError.handleError,
    userId: getUserId.getUserId
})
