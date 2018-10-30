const initialState = {
  userId: null
}

const getUserId = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USERID':
      return {
        ...state,
        userId: action.payload
      }
    default:
      return state;
  }
}

export default { getUserId };