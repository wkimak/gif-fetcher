const initialState = {
  gifList: [],
  isLoading: false
}

export const handleLoading = (state = initialState, action) => {
  switch(action.type) {
    case 'DISPLAY_SPINNER':
      return {
        ...state,
        isLoading: true
      }
    case 'HIDE_SPINNER':
      return {
        ...state,
        isLoading: false
      }
      default:
        return state;
   }
}

export const handleError = (state = initialState, action) => {
  switch(action.type) {
    case 'DISPLAY_ERROR':
      return {
        ...state,
        isError: true,
        isLoading: false
      }
    case 'HIDE_ERROR':
      return {
        ...state,
        isError: false
      }  
      default:
        return state;
  }
}

export const getGifs = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_GIFS':
      return {
        ...state,
        gifList: action.payload,
      }
    default:
      return state;
  }
}


