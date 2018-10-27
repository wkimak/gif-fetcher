import React, { Component, Fragment } from 'react';
import GifContainer from '../containers/GifContainer.jsx';
import AuthContainer from '../containers/AuthContainer.jsx';
import Navbar from './Navbar.jsx';

const App = () => (
  <Fragment>
    <Navbar />
    <AuthContainer />
    <GifContainer />
  </Fragment>
)

export default App;