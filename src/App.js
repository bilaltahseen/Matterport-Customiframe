import React from 'react';

import './App.css';

import Home from './Screens/Home';
import Cred from './Screens/Cred';
import { Route } from 'react-router-dom';
import StoreProvider from './Context/StoreContext';

import Logo from './Components/Logo';
import Intro from './Screens/Intro';
import Blur from './Components/Blur';
import Play from './Components/Play';

function App() {
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
                <Blur />
                <Play />
              </div>
            );
          }}
        />
      </StoreProvider>
    </React.Fragment>
  );
}

export default App;
