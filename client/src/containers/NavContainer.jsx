import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleLogin, handleSignout, handleNavbarStyle } from '../redux/actions/navbarActions.js';

import Navbar from '../components/navbar/NavbarComponent.jsx';



const NavbarScroll = ({ handleLogin, handleSignout, username, userId, showLoginMessage, errorMessage, navbarHeight, handleNavbarStyle }) => {
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
            username={ username }
            userId={ userId }
            showLoginMessage={ showLoginMessage }
            errorMessage={ errorMessage }
            navbarHeight={ navbarHeight } />
  );
}

npx heroku addons:add amazon_rds url=mysql://wkimak:Jkpywb98@giffetcherinstance.cv4ydzzllfqa.us-east-2.rds.amazonaws.com/gifFetcher


const mapStateToProps = (state) => ({
  userId: state.getUserId.userId,
  username: state.getUserId.username,
  showLoginMessage: state.handleFavorites.showLoginMessage,
  errorMessage: state.getUserId.errorMessage,
  navbarHeight: state.animateNavbar.navbarHeight
})

const mapDispatchToProps = {
  handleLogin, handleSignout, handleNavbarStyle
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarScroll);