import React from 'react';
import { connect } from 'react-redux';

import { handleLogin } from '../redux/actions/handleAuth.js';
import { fetchFavorites } from '../redux/actions/favoriteGifs.js';

import Navbar from '../components/NavbarComponent.jsx';


const mapStateToProps = (state) => ({
  userId: state.userId.userId
})

const mapDispatchToProps = {
  handleLogin, fetchFavorites
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar);