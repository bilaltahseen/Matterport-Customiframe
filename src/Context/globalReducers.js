const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGGED':
      return { ...state, isLogged: true };

    case 'PLAY':
      return { ...state, playbtn: '1' };

    default:
      return { ...state };
  }
};

export default reducer;
