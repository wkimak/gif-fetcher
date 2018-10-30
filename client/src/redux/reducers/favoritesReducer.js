const initialState = {
  favoritesList: []
}

const handleFavorites = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_FAVORITES':
      return {
        ...state,
        favoritesList: action.payload
      }

    case 'DELETE_FAVORITE':
      return {
        ...state,
        favoritesList: [...state.favoritesList.slice(0, action.payload),
                        ...state.favoritesList.slice(action.payload + 1)]
      }
    default:
      return state
  }
}

export default { handleFavorites };