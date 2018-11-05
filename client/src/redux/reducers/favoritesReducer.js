const initialState = {
  favoritesList: [],
  currentGifIds: {},
  favoritesOpen: false,
  showLoginMessage: false
}

export const handleFavorites = (state = initialState, action) => {
  switch(action.type) {
    case 'POST_FAVORITE_SUCCESS':
     //if gif has not been been favorited yet, add to object. Else, return so there are no duplicates.
     if(!state.currentGifIds.hasOwnProperty(action.payload.gifId)) {
       state.currentGifIds[action.payload.gifId] = true;
     } else {
       return state;
     }
     
      return {
        ...state,
        favoritesList: [...state.favoritesList, { gif_id: action.payload.gifId, 
                                                  still_url: action.payload.stillUrl, 
                                                  video_url: action.payload.videoUrl }]
      }
    case 'FETCH_FAVORITES_SUCCESS':
      action.payload.map((favorite) => {
        if(!state.currentGifIds.hasOwnProperty(favorite.gif_id)) {
           state.currentGifIds[favorite.gif_id] = true;
        }
      })
      return {
        ...state,
        favoritesList: action.payload
      }
    case 'DELETE_FAVORITE_SUCCESS':
      return {
        ...state,
        favoritesList: [...state.favoritesList.slice(0, action.payload.arrayIndex),
                        ...state.favoritesList.slice(action.payload.arrayIndex + 1)]
      }
    case 'TOGGLE_LOGIN_MESSAGE':
      return {
        ...state,
        showLoginMessage: !state.showLoginMessage
      }
    default:
      return state
  }
}

export const toggleFavoritesComponent = (state = initialState, action) => {
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

