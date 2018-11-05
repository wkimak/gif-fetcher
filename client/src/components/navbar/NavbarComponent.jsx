import React from 'react';
import Login from './login/LoginComponent.jsx';
import LoginMessage from './login/LoginMessageComponent.jsx';
import ErrorMessage from '../ErrorMessageComponent.jsx';
import NavLinks from './NavLinksComponent.jsx';

const Navbar = ({ handleLogin, handleSignout, username, userId, showLoginMessage, errorMessage, navbarHeight, favoritesOpen, handleSearch }) => {

  const scrollToTop = () => window.scroll(0,0);

  return (
    <div className={navbarHeight === 100 ? 'navbar_container' : 'small_navbar' }>
      <img src='https://cdn.stashinvest.com/assets/images/globals/logo.svg' />
       <div className='nav_content_container'>
     
        { showLoginMessage ? <LoginMessage /> : null }
       
        { !userId ?
          <Login handleLogin={ handleLogin } />
          :
          <button onClick={ () => handleSignout(userId) } 
                  className='signout_btn'>Sign Out</button>
        }
           <NavLinks handleSearch={ handleSearch } />
        </div>
        { navbarHeight === 50 && !favoritesOpen ? <i onClick={ scrollToTop } className="fas fa-arrow-up fa-lg bounce_arrow"></i> : null }
    </div>
  );
}

export default Navbar;
