import React from 'react';
import Login from './login/LoginComponent.jsx';
import LoginMessage from './login/LoginMessageComponent.jsx';

const Navbar = ({ handleLogin, handleSignout, username, userId, showLoginMessage }) => (
  <div className='navbar_container'>
    <img src='https://cdn.stashinvest.com/assets/images/globals/logo.svg' />
  { !userId ?
    <Login handleLogin={ handleLogin } />
    :
    <div className='welcome_container'>
      <span> Welcome { username }! </span>
      <button onClick={ () => handleSignout(userId) } className='signout_btn'>Sign Out</button>
    </div>
  }
  { showLoginMessage ? <LoginMessage /> : null }
  </div>
)

export default Navbar;
