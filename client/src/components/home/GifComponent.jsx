import React from 'react';

const Gif = ({ url, gifId, handleFavorite }) => (
  <div className='gif_container'>
    <iframe src={ url }></iframe> 
    <i onClick={ () => handleFavorite(gifId) } className="far fa-star"></i>
    <i className="fas fa-star"></i>
  </div>
)

export default Gif;