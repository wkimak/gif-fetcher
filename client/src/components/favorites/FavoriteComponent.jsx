import React from 'react';

const FavoriteComponent = ({ url, deleteFavorite, userId, gifId, index }) => (
     <iframe className='favorite_iframe' src={ url }></iframe>
)

export default FavoriteComponent;