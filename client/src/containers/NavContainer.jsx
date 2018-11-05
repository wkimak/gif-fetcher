import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleLogin, handleSignout, handleNavbarStyle, handleSearchType } from '../redux/actions/navbarActions.js';
import { handleSearch } from '../redux/actions/gifFeedActions.js';

import Navbar from '../components/navbar/NavbarComponent.jsx';



const NavbarScroll = ({ handleLogin, handleSignout, userId, showLoginMessage, errorMessage, navbarHeight, handleNavbarStyle, favoritesOpen, handleSearch }) => {
  // Invoking action to let navbar know what height to adjust to.
  const handleScroll = () => {
    if(window.pageYOffset < 300) {
      if(window.pageYOffset > 50) {
        handleNavbarStyle(50);
      } else if(window.pageYOffset < 150) {
        handleNavbarStyle(100);
      }
    }
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <Navbar handleLogin={ handleLogin }
            handleSignout={ handleSignout }
            userId={ userId }
            showLoginMessage={ showLoginMessage }
            errorMessage={ errorMessage }
            navbarHeight={ navbarHeight }
            favoritesOpen={ favoritesOpen }
            handleSearch={ handleSearch } />
  );
}


const mapStateToProps = (state) => ({
  userId: state.getUserId.userId,
  showLoginMessage: state.handleFavorites.showLoginMessage,
  errorMessage: state.getUserId.errorMessage,
  navbarHeight: state.animateNavbar.navbarHeight,
  favoritesOpen: state.toggleFavoritesComponent.favoritesOpen,
})

const mapDispatchToProps = {
  handleLogin, handleSignout, handleNavbarStyle, handleSearch
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarScroll);