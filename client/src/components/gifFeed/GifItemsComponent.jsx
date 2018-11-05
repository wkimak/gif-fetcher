import React from 'react';
import Gif from './GifComponent.jsx';
import EndResults from './EndResultsComponent.jsx';
import Loading from './LoadingComponent.jsx';

import Masonry from 'react-masonry-component';


const GifItems = ({ userId, gifList, postFavorite, showLoginMessage }) => (
  <Masonry className={'masonry_container'} options={ {fitWidth: true} } elementType={'div'}>
    { gifList.length ? gifList.map((item) => {
      return (
        <Gif userId={ userId } 
             key={ item.id } 
             gifId={ item.id } 
             stillUrl={ item.images.fixed_width_still.url } 
             videoUrl={ item.images.fixed_width.url }
             postFavorite={ postFavorite } />
      )
    }): null }
  </Masonry>
);

export default GifItems;