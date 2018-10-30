import React from 'react';

const Gif = ({ userId, url, gifId, postFavorite }) => (
  <div className='gif_container'>
    <iframe src={ url }></iframe> 
    <i onClick={ () => postFavorite(userId, gifId, url) } className="far fa-star"></i>
    <i className="fas fa-star"></i>
  </div>
)

export default Gif;