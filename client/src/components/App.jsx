import React, { Component, Fragment } from 'react';
import GifContainer from '../containers/GifContainer.jsx';
import Navbar from './Navbar.jsx';

const App = () => (
  <Fragment>
    <Navbar />
    <GifContainer />
  </Fragment>
)

export default App;