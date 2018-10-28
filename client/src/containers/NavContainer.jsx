import React from 'react';
import { connect } from 'react-redux';

import { handleLogin} from '../redux/actions/handleAuth.js';

import Navbar from '../components/NavbarComponent.jsx';

const mapDispatchToProps = {
  handleLogin
}

export default connect(null, mapDispatchToProps)(Navbar);