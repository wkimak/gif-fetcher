import React from 'react';

const Hover = ({ userId, url, gifId, postFavorite, isFavorite }) => {

  const saveFavorite = () => {
    postFavorite(userId, gifId, url)
  }

  return (
    <div className='hover_container'>
      <div>
        <button onClick={ saveFavorite }>Add to Favorites</button>
       </div>
    </div>
  )
}



export default Hover;