import { CHOOSE_SEARCH_TYPE, 
         ADJUST_WEIRDNESS } from '../constants/formControlConstants.js';

// Change search type to either search by term ('search') or search by weirdness ('translate')
export const handleSearchType = (searchType) => (dispatch) => {
  dispatch({ type: CHOOSE_SEARCH_TYPE, payload: searchType })
}

// This action receives the weirdness rating from the FormControlsComponent.
// Need to save this in state to send back down to FormComponent
export const handleWeirdness = (value) => (dispatch) => {
  dispatch({ type: ADJUST_WEIRDNESS, payload: value })
}