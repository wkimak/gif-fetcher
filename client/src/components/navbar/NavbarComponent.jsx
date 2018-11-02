import React from 'react';
import Login from './login/LoginComponent.jsx';
import LoginMessage from './login/LoginMessageComponent.jsx';
import ErrorMessage from '../ErrorMessageComponent.jsx';

const Navbar = ({ handleLogin, handleSignout, username, userId, showLoginMessage, errorMessage, navbarHeight }) => (
  <div className={navbarHeight === 100 ? 'navbar_container' : 'small_navbar' }>
    <img src='https://cdn.stashinvest.com/assets/images/globals/logo.svg' />
      { showLoginMessage ? <LoginMessage /> : null }
     
      { !userId ?
        <Login handleLogin={ handleLogin } />
        :
        <button onClick={ () => handleSignout(userId) } 
                className='signout_btn'>Sign Out</button>
      }
      { navbarHeight === 50 ? <a href='#app'><i class="fas fa-arrow-up fa-lg bounce_arrow"></i></a> : null }
  </div>
)

export default Navbar;
