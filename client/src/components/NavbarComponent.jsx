import React from 'react';
import Login from './login/LoginComponent.jsx';

const Navbar = ({ handleLogin, userId, fetchFavorites }) => (
  <div className='navbar_container'>
    <Login handleLogin={ handleLogin } />
    <button onClick={ () => fetchFavorites(userId) }>Favorites</button>
  </div>
)

export default Navbar;