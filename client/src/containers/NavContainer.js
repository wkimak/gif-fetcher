import React from 'react';
import { connect } from 'react-redux';

import { handleLogin } from '../redux/actions/loginActions.js';

import Navbar from '../components/NavbarComponent.jsx';

const mapStateToProps = (state) => ({
  userId: state.userId.userId
})

const mapDispatchToProps = {
  handleLogin
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar);