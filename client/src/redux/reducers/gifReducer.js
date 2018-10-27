const initialState = {
  gifList: []
}

const gifReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_GIFS':
      return {
        ...state,
        gifList: action.payload
      }
    default:
      return state;
  }
}

export default { gifReducer };
