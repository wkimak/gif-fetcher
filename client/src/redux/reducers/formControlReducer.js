const initialState = {
  searchType: 'search',
  weirdLevel: 0
}

export const switchSearchType = (state = initialState, action) => {
  switch(action.type) {
    case 'CHOOSE_SEARCH_TYPE':
      return {
        ...state,
        searchType: action.payload
      }
    default:
      return state;
  }
}

export const handleWeirdness = (state = initialState, action) => {
  switch(action.type) {
    case 'ADJUST_WEIRDNESS':
    return {
      ...state,
      weirdLevel: action.payload
    }
    default:
      return state;
  }
}