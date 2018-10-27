import React from 'react';
import Gif from './Gif.jsx';
import Loading from './Loading.jsx';
import ErrorMessage from './ErrorMessage.jsx';


const GifItems = ({ gifList, isLoading, isError }) => (
  <div className='gifs_container'>
    { isLoading ? <Loading /> : null }
    { isError ? <ErrorMessage /> : null }
    { gifList.length ? gifList.map((item) => {
      return (
        <Gif key={ item.id } url={ item.images.fixed_height_small.url } />
      )
    }): null }
  </div>
);

export default GifItems;