const initialState = {
  weirdLevel: 7
}

export const handleWeirdness = (state = initialState, action) => {
  switch(action.type) {
    case 'ADJUST_WEIRDNESS_LEVEL':
    return {
      ...state,
      weirdLevel: action.payload
    }
    default:
      return state;
  }
}