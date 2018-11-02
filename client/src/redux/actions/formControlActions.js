import { CHOOSE_SEARCH_TYPE, ADJUST_WEIRDNESS } from '../constants/constants.js';

export const handleSearchType = (searchType) => (dispatch) => {
  dispatch({ type: CHOOSE_SEARCH_TYPE, payload: searchType })
}

export const handleWeirdness = (value) => (dispatch) => {
  dispatch({ type: ADJUST_WEIRDNESS, payload: value })
}