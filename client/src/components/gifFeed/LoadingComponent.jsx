import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => (
  <div className='loader_container'>
     <Loader type="Oval"
             color="#00BFFF"
             height="75" 
             width="75" />  
  </div>
);

export default Loading;

