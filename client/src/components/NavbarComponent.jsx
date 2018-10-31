import React from 'react';
import Login from './login/LoginComponent.jsx';

const Navbar = ({ handleLogin, handleSignout, username, userId }) => (
  <div className='navbar_container'>
  { !userId ?
    <Login handleLogin={ handleLogin } />
    :
    <div className='welcome_container'>
      <span> Welcome { username }! </span>
      <button onClick={ () => handleSignout(userId) } className='signout_btn'>Sign Out</button>
    </div>
  }
  </div>
)

export default Navbar;
