import { combineReducers } from 'redux';
import gifReducer from './gifReducer.js';

export default combineReducers({
    gifList: gifReducer.gifReducer
})
