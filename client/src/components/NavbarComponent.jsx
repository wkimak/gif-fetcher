import React from 'react';
import Login from './login/LoginComponent.jsx';

const Navbar = ({ handleLogin }) => (
  <div className='navbar_container'>
    <Login handleLogin={ handleLogin } />
  </div>
)

export default Navbar;
