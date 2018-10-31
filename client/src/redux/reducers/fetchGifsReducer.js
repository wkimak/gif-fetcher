const initialState = {
  gifList: [],
  isLoading: false,
  searchTerm: null,
  offset: 0
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
        gifList: [...state.gifList, ...action.payload.data],
        offset: action.payload.offset
      }
    case 'CHANGE_SEARCH':
      return {
        ...state,
        gifList: [],
        searchTerm: action.payload,
        offset: 0
      }
    default:
      return state;
  }
}


