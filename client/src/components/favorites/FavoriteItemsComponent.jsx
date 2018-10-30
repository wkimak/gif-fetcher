import React from 'react';
import FavoriteComponent from './FavoriteComponent.jsx';

const FavoriteItems = ({ userId, favoritesList, deleteFavorite, fetchFavorites, favoritesOpen }) => (
  <div className={favoritesOpen ? 'main_container main_container_open' : null }>
  <div className={favoritesOpen ? 'favorites_container_open favorites_container' : 'favorites_container_closed favorites_container'}>
    <button className='open_favorites_btn' onClick={ () => fetchFavorites(userId) }>Favorites</button>
    <div className='favorites_items_container'>
      { favoritesList.length ? favoritesList.map((item, i) => {
        return (
          <FavoriteComponent key={ item.gif_id} 
                           index={ i } 
                           userId={ userId } 
                           gifId={ item.gif_id } 
                           url={ item.url } 
                           deleteFavorite={ deleteFavorite } />
        );
      }) : null}
    </div>
  </div>
  </div>
)

export default FavoriteItems;