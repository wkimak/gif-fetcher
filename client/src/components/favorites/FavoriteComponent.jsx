import React from 'react';

const FavoriteComponent = ({ url, deleteFavorite, userId, gifId, index }) => (
  <div className='favorite_container'>
     <iframe src={ url }></iframe>
     <i onClick={ () => deleteFavorite(userId, gifId, index) } className="fas fa-star"></i>
  </div>
)

export default FavoriteComponent;