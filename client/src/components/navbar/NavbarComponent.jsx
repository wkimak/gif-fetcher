import React from 'react';
import Login from './login/LoginComponent.jsx';
import LoginMessage from './login/LoginMessageComponent.jsx';
import ErrorMessage from '../misc/ErrorMessageComponent.jsx';
import NavLinks from './NavLinksComponent.jsx';

const Navbar = ({ handleLogin, handleSignout, username, userId, showLoginMessage, errorMessage, navbarHeight, favoritesOpen, handleSearch }) => {

  const scrollToTop = () => window.scroll(0,0);

  return (
    <div className={navbarHeight === 100 ? 'large_navbar_container' : 'small_navbar_container' }>
      <div>
      <img src='https://cdn.stashinvest.com/assets/images/globals/logo.svg' />
      { navbarHeight === 50 && !favoritesOpen ? <i onClick={ scrollToTop } className="fas fa-arrow-up fa-lg bounce_arrow"></i> : null }
       </div>
       <div className={ navbarHeight === 100 ? 'large_nav_content' : 'small_nav_content' }>
        { showLoginMessage ? <LoginMessage /> : null }
       
        { !userId ?
          <Login handleLogin={ handleLogin } />
          :
          <button onClick={ () => handleSignout(userId) } 
                  className='signout_btn'>Sign Out</button>
        }
          <NavLinks handleSearch={ handleSearch } navbarHeight={ navbarHeight } />
        </div>

    </div>
  );
}

export default Navbar;
