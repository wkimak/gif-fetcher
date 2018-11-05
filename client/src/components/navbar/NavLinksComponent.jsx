import React from 'react';

const NavLinks = ({ handleSearch }) => {
  
  const handleClick = (searchType) => {
    handleSearch(searchType, null, 0);
  }

  return (
    <ul className='nav_links_ul'>
      <li onClick={ () => handleClick('trending') }>Trending</li>
      <li onClick={ () => handleClick('entertainment') }>Entertainment</li>
      <li onClick={ () => handleClick('sports') }>Sports</li>
      <li onClick={ () => handleClick('politics') }>Politics</li>
      <li onClick={ () => handleClick('weird') }>Weird</li>
    </ul>
  )
};

export default NavLinks;