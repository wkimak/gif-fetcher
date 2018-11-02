import React from 'react';
import Gif from './GifComponent.jsx';
import Loading from './LoadingComponent.jsx';
import EndResults from './EndResultsComponent.jsx';


const GifItems = ({ userId, gifList, isLoading, postFavorite, showLoginMessage }) => (
  <div className='gifs_container'>
    { gifList.length ? gifList.map((item) => {
      return (
        <Gif userId={ userId } 
             key={ item.id } 
             gifId={ item.id } 
             stillUrl={ item.images.original_still.url } 
             videoUrl={ item.images.downsized_large.url }
             postFavorite={ postFavorite } />
      )
    }): null }
     { isLoading ? <Loading /> : null }
  </div>
);

export default GifItems;