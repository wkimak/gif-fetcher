const initialState = {
  gifList: [],
  translateGif: null,
  isLoading: false,
  searchTerm: null,
  offset: 0,
  totalGifs: 0,
  endResults: false,
  errorMessage: null,
  searchCategory: 'trending'
}

export const handleLoading = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_SPINNER':
      return {
        ...state,
        isLoading: action.payload
      }
      default:
        return state;
   }
}

export const handleEnd = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_END_RESULTS':
      return {
        ...state,
        endResults: action.payload
      }
      default:
        return state;
  }
}

export const getGifs = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_GIFS_SUCCESS':
      if(state.offset === 0) {
        var newOffset = 13;
      } else {
        newOffset = 7;
      }
      return {
        ...state,
        gifList: [...state.gifList, ...action.payload.data],
        totalGifs: action.payload.totalGifs,
        offset: state.offset + newOffset,
        errorMessage: null
      }
    case 'FETCH_WEIRD_GIF_SUCCESS':
      return {
        ...state,
        translateGif: action.payload,
        errorMessage: null
      }
    case 'FETCH_GIFS_FAILURE':
      return {
        ...state,
        errorMessage: action.payload
      }
    case 'RESET_QUERY':
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


