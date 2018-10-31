const initialState = {
  favoritesList: [],
  favoritesOpen: false
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
        favoritesList: [...state.favoritesList.slice(0, action.payload.arrayIndex),
                        ...state.favoritesList.slice(action.payload.arrayIndex + 1)]
      }
    default:
      return state
  }
}

const toggleFavoritesComponent = (state = initialState, action) => {
  switch(action.type) {
    case 'OPEN_FAVORITES':
      return {
        ...state,
        favoritesOpen: !state.favoritesOpen
      }
    default:
      return state
  }
}

export default { handleFavorites, toggleFavoritesComponent };