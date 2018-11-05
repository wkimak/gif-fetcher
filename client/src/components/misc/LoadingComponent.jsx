import React from 'react';
import Loader from 'react-loader-spinner';

// Spinner used in gifFeedContainer
const Loading = () => (
  <div className='loader_container'>
     <Loader type="Oval"
             color="#00BFFF"
             height="75" 
             width="75" />  
  </div>
);

export default Loading;

