export const loadState = () => {
  try {

    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    if(!userId) return undefined;
    return { getUserId: { userId: JSON.parse(userId), username: username }};
  } catch {
    console.log('ERROR getting from local storage');
    return {};
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem('userId', state.userId);
    localStorage.setItem('username', state.username);
  } catch {
     console.log('ERROR saving into local storage');
    return undefined;
  }
}