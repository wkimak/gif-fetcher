import React from 'react';

const Hover = ({ children, toggleVideo, isVideo }) => (
  <div className='hover_container'>
    <div>
      <i onClick={ toggleVideo } className={isVideo ? 'far fa-pause-circle fa-lg' : 'fas fa-play-circle fa-lg'}></i>
        { children() }
     
    </div>
  </div>
)




export default Hover;
