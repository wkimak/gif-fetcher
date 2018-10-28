import React from 'react';
import Gif from './GifComponent.jsx';
import Loading from './LoadingComponent.jsx';
import ErrorMessage from './ErrorComponent.jsx';


const GifItems = ({ gifList, isLoading, isError, handleFavorite }) => (
  <div className='gifs_container'>
    { isLoading ? <Loading /> : null }
    { isError ? <ErrorMessage /> : null }
    { gifList.length ? gifList.map((item) => {
      return (
        <Gif key={ item.id } gifId={ item.id } url={ item.images.fixed_height_small.url } handleFavorite={ handleFavorite } />
      )
    }): null }
  </div>
);

export default GifItems;