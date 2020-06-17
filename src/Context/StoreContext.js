import React, { createContext, useReducer } from 'react';

import globalReducers from './globalReducers';

export const storeContext = createContext();

const initialState = {
  isLogged: false,
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducers, initialState);
  return (
    <storeContext.Provider value={[state, dispatch]}>
      {props.children}
    </storeContext.Provider>
  );
};
export default StoreProvider;
