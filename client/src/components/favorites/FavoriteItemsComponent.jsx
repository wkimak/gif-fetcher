import React from 'react';
import FavoriteComponent from './FavoriteComponent.jsx';

const FavoriteItems = ({ userId, favoritesList, deleteFavorite, favoritesOpen, toggleFavoritesComponent }) => (
    <div className={favoritesOpen ? 'grow_favorites_container favorites_container' : 'favorites_container'}>
      <button className='open_favorites_btn' onClick={ () => toggleFavoritesComponent(userId) }>Favorites</button>
      <div className='favorites_items_container'>
        { favoritesList.length ? favoritesList.map((item, i) => {
            return (
              <FavoriteComponent key={ item.gif_id} 
                                 index={ i } 
                                 userId={ userId } 
                                 gifId={ item.gif_id } 
                                 stillUrl={ item.still_url }
                                 videoUrl={ item.video_url } 
                                 deleteFavorite={ deleteFavorite } />
            );
        }) : null}
      </div>
    </div>
)

export default FavoriteItems;