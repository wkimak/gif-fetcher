const initialState = {
  userId: null,
  username: null
}

export const getUserId = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USERID':
      return {
        ...state,
        userId: action.payload.userId,
        username: action.payload.username
      }

    case 'REMOVE_USERID':
      return {
        ...state,
        userId: null,
        username: null
      }
    default:
      return state;
  }
}


