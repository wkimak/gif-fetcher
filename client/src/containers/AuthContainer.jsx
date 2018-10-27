import React from 'react';
import { connect } from 'react-redux';

import { handleSignup } from '../redux/actions/handleAuth.js';

import Login from '../components/auth_components/Login.jsx';
import Signup from '../components/auth_components/Signup.jsx';

const AuthContainer = ({ handleSignup }) => (
  <div>
    <Login />
    <Signup handleSignup={ handleSignup } />
  </div>
)

const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = {
  handleSignup
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);