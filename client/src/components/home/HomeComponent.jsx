import React, { Component, Fragment } from 'react';
import Form from './FormComponent.jsx';
import GifFeedContainer from '../../containers/GifFeedContainer.jsx';
import WeirdSlider from './WeirdSliderComponent.jsx';
import WeirdGif from '../gifFeed/WeirdGifComponent.jsx';
import ErrorMessage from '../misc/ErrorMessageComponent.jsx';


const Home = ({ handleSearch, handleWeirdSearch, searchType, translateGif , handleWeirdness, weirdLevel, errorMessage, isLoading }) => (
  <section>
    <Form handleSearch={ handleSearch } 
          handleWeirdSearch={ handleWeirdSearch } 
          searchType={ searchType } 
          weirdLevel={ weirdLevel } />

    { errorMessage ? <ErrorMessage message={ errorMessage }/> : null }

    { searchType === 'translate' ? 
      <Fragment>
        <WeirdSlider searchType={ searchType } 
                     handleWeirdness={ handleWeirdness } /> 
        <WeirdGif url={ translateGif } isLoading={ isLoading } />
      </Fragment>
      : <GifFeedContainer /> }
  </section>      
)
  

export default Home;