import React from 'react';
import Loading from '../misc/LoadingComponent.jsx';

const WeirdGif = ({ url, isLoading }) => (
  <div className='translateGif_container'>
  { !isLoading ?
    <img key={ url } src={ url } />
    : <Loading /> }
  </div>
)

export default WeirdGif;