import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Box, CircularProgress } from '@material-ui/core';
import Home from './Screens/Home';
import Cred from './Screens/Cred';
import { Route } from 'react-router-dom';
import StoreProvider, { storeContext } from './Context/StoreContext';
import { CSSTransition } from 'react-transition-group';
import Logo from './Components/Logo';
import Intro from './Screens/Intro';

function App() {
  // const [state] = React.useContext(storeContext);
  return (
    <React.Fragment>
      <StoreProvider>
        <Route
          path='/'
          component={() => {
            return (
              <div style={{ position: 'relative' }}>
                <Logo />

                <Cred />

                <Intro />

                <Home />
              </div>
            );
          }}
        />
      </StoreProvider>
    </React.Fragment>
  );
}

export default App;
