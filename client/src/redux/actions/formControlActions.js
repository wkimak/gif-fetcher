import { ADJUST_WEIRDNESS } from '../constants/formControlConstants.js';


// This action receives the weirdness rating from the FormControlsComponent.
// Need to save this in state to send back down to FormComponent
export const handleWeirdness = (value) => (dispatch) => {
  dispatch({ type: ADJUST_WEIRDNESS, payload: value })
}