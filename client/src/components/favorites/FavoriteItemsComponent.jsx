import React from 'react';
import Masonry from 'react-masonry-component';
import FavoriteComponent from './FavoriteComponent.jsx';

// Component that animates to left. It is the container for all Favorite gifs
const FavoriteItems = ({ userId, favoritesList, deleteFavorite, favoritesOpen, toggleFavoritesComponent }) => {

  const toggleFavorites = () => {
    toggleFavoritesComponent(userId);
    if(!favoritesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }

  return (
    <div className={favoritesOpen ? 'grow_favorites_container favorites_container' : 'favorites_container'} aria-hidden="true">
      <button className='open_favorites_btn' onClick={ toggleFavorites }>Favorites</button>
        <Masonry className={'masonry_container'} options={ {fitWidth: true} } elementType={'div'}>
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
        </Masonry>
    </div>
  );
}

export default FavoriteItems;