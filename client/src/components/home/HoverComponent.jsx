import React from 'react';

const Hover = ({ userId, url, gifId, postFavorite }) => {

  const handleFavorite = () => {
    postFavorite(userId, gifId, url)
  }

  return (
    <div className='hover_container'>
      <div className='top_hover_container'>
       { true  ?
        <i onClick={ handleFavorite } className="far fa-star fa-lg"></i>
        :
        <i className="fas fa-star fa-lg"></i>
       }
       </div>
       <div className='bottom_hover_container'></div>
    </div>
  )
}



export default Hover;