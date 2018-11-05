const initialState = {
  userId: null,
  errorMessage: null,
  navbarHeight: 100,
  searchType: 'trending'
}

export const switchSearchType = (state = initialState, action) => {
  switch(action.type) {
    case 'CHOOSE_SEARCH_TYPE':
    console.log('YOOOOOO', action.payload)
      return {
        ...state,
        searchType: action.payload
      }
    default:
      return state;
  }
}

export const animateNavbar = (state = initialState, action) => {
  switch(action.type) {
    case 'ANIMATE_NAVBAR':
      return {
        ...state,
        navbarHeight: action.payload
      }
    default:
      return state;
  }
}

export const getUserId = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USERID':
      return {
        ...state,
        userId: action.payload.userId,
        errorMessage: null
      }

    case 'REMOVE_USERID':
      return {
        ...state,
        userId: null,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}


