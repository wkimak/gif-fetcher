const initialState = {
  userId: null,
  username: null,
  errorMessage: null,
  navbarHeight: 100
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
        username: action.payload.username,
        errorMessage: null
      }

    case 'REMOVE_USERID':
      return {
        ...state,
        userId: null,
        username: null
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


