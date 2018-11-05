import React from 'react';
import Loading from './LoadingComponent.jsx';

const WeirdGif = ({ url, isLoading }) => (
  <div className='translateGif_container'>
  { console.log(url)}
  { !isLoading ?
    <img key={ url } src={ url } />
    : <Loading /> }
  </div>
)

export default WeirdGif;