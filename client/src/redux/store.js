import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';
import { saveState, loadState } from './localStorage.js';

const middleware = [thunk];
const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(...middleware));
store.subscribe(() => {
  saveState(store.getState().getUserId);
})


export default store;