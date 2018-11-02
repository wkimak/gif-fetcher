import React from 'react';

const TranslateGif = ({ url }) => (
  <div className='translateGif_container'>
  { url ?
    <iframe src={ url }/>
    : null
  }
  </div>
)

export default TranslateGif;