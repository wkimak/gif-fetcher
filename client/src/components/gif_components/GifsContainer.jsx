import React from 'react';
import Gif from './Gif.jsx';

const GifsContainer = ({ gifList }) => (
  <div className='gifs_container'>
    { gifList.length ? gifList.map((item) => {
      return (
        <Gif key={ item.id } url={ item.images.fixed_height_small.url } />
      )
    }): null }
  </div>
);

export default GifsContainer;