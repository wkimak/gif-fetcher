import React, { Component, Fragment } from 'react';

import HomeContainer from '../containers/HomeContainer.js';
import NavContainer from '../containers/NavContainer.jsx';
import FavoritesContainer from '../containers/FavoritesContainer.js';

const App = () => (
  <Fragment>
    <NavContainer />
    <HomeContainer />
    <FavoritesContainer />
  </Fragment>
)

export default App;