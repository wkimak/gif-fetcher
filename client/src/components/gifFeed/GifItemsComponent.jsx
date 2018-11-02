import React from 'react';
import Gif from './GifComponent.jsx';
import EndResults from './EndResultsComponent.jsx';
import Loading from './LoadingComponent.jsx';


const GifItems = ({ userId, gifList, postFavorite, showLoginMessage, isLoading, offset }) => (
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
  </div>
);

export default GifItems;