import React from 'react';
import Gif from './GifComponent.jsx';
import Loading from './LoadingComponent.jsx';
import ErrorMessage from './ErrorComponent.jsx';


const GifItems = ({ userId, gifList, isLoading, isError, postFavorite }) => (
  <div className='gifs_container'>
    { isLoading ? <Loading /> : null }
    { isError ? <ErrorMessage /> : null }
    { gifList.length ? gifList.map((item) => {
      return (
        <Gif userId={ userId } key={ item.id } gifId={ item.id } url={ item.images.fixed_height_small.url } postFavorite={ postFavorite } />
      )
    }): null }
  </div>
);

export default GifItems;