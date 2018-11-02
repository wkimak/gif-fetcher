// These function are used within store.js to save the userId in state on page refresh
export const loadState = () => {
  try {
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    if(!userId) return undefined;
    return { getUserId: { userId: JSON.parse(userId) }};
  } catch {
    console.log('ERROR getting from local storage');
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem('userId', state.userId);
  } catch {
     console.log('ERROR saving into local storage');
    return undefined;
  }
}