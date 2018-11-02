import React from 'react';

// This component is used withing GifComponent and FavoriteComponent
const Hover = ({ children, toggleVideo, isVideo }) => (
  <div className='hover_container'>
    <div>
      <i onClick={ toggleVideo } className={isVideo ? 'far fa-pause-circle fa-lg' : 'fas fa-play-circle fa-lg'}></i>
        { children() }
     
    </div>
  </div>
)




export default Hover;
