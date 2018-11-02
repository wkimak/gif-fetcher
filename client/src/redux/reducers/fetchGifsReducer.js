const initialState = {
  gifList: [],
  translateGif: null,
  isLoading: false,
  isError: false,
  searchTerm: null,
  offset: 0,
  totalGifs: 0,
  endResults: false
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

export const handleEnd = (state = initialState, action) => {
  switch(action.type) {
    case 'END_RESULTS':
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
    case 'FETCH_GIFS':
      return {
        ...state,
        gifList: [...state.gifList, ...action.payload.data],
        totalGifs: action.payload.totalGifs,
        offset: state.offset + 6
      }
    case 'CHANGE_QUERY':
      return {
        ...state,
        gifList: [],
        searchTerm: action.payload,
        offset: 0
      }
    case 'FETCH_TRANSLATE_GIF':
    console.log('TRANSLATE GIF', action.payload)
      return {
        ...state,
        translateGif: action.payload
      }
    default:
      return state;
  }
}


