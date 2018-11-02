import React from 'react';

const WeirdGif = ({ url }) => (
  <div className='translateGif_container'>
  { url ?
    <iframe src={ url }/>
    : null }
  </div>
)

export default WeirdGif;