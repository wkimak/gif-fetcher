const initialState = {
  userId: null,
  errorMessage: null,
  navbarHeight: 100,
  searchType: 'trending'
}

export const changeSearchType = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_TYPE':
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
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        userId: action.payload.userId,
        errorMessage: null
      }
    case 'LOGOUT_SUCCESS':
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


