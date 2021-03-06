import React from 'react';
import Gif from './GifComponent.jsx';
import EndResults from './EndResultsComponent.jsx';
import Loading from '../misc/LoadingComponent.jsx';

import Masonry from 'react-masonry-component';

const GifItems = ({ userId, gifList, postFavorite }) => (
  <Masonry className={'masonry_container'} options={ {fitWidth: true} } elementType={'div'}>
    { gifList.length ? gifList.map((item, i) => {
      return (
        <Gif userId={ userId } 
             key={ item.id + i } 
             gifId={ item.id } 
             stillUrl={ item.images.fixed_width_still.url } 
             videoUrl={ item.images.fixed_width.url }
             postFavorite={ postFavorite } />
      )
    }): null }
  </Masonry>
);

export default GifItems;