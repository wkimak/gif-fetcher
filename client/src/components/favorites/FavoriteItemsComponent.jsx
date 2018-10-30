import React from 'react';
import FavoriteComponent from './FavoriteComponent.jsx';

const FavoriteItems = ({ userId, favoritesList, deleteFavorite }) => (
  <div className='favorites_container'>
    { favoritesList.length ? favoritesList.map((item, i) => {
      return (
        <FavoriteComponent key={ item.gif_id} index={ i } userId={ userId } gifId={ item.gif_id } url={ item.url } deleteFavorite={ deleteFavorite } />
      );
    }) : null}
  </div>
)

export default FavoriteItems;