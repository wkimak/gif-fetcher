import React from 'react';
import { connect } from 'react-redux';

import { handleLogin, handleSignout } from '../redux/actions/loginActions.js';

import Navbar from '../components/NavbarComponent.jsx';

const mapStateToProps = (state) => ({
  userId: state.getUserId.userId,
  username: state.getUserId.username
})

const mapDispatchToProps = {
  handleLogin, handleSignout
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar);