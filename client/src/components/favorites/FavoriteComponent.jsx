import React from 'react';

const FavoriteComponent = ({ url, deleteFavorite, userId, gifId, index }) => (
    <div>
     <iframe className='favorite_iframe' src={ url }></iframe>
     <i onClick={ () => deleteFavorite(userId, gifId, index) } className="fas fa-trash-alt fa-lg"></i>
    </div>
)

export default FavoriteComponent;