import React, { Component, Fragment } from 'react';

import HomeContainer from '../containers/HomeContainer.js';
import NavContainer from '../containers/NavContainer.jsx';

const App = () => (
  <Fragment>
    <NavContainer />
    <HomeContainer />
  </Fragment>
)

export default App;