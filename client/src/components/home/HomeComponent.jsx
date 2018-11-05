import React, { Component } from 'react';
import Form from './FormComponent.jsx';
import GifFeedContainer from '../../containers/GifFeedContainer.jsx';
import WeirdSlider from './WeirdSliderComponent.jsx';
import WeirdGif from '../gifFeed/WeirdGifComponent.jsx';
import ErrorMessage from '../ErrorMessageComponent.jsx';


const Home = ({ handleSearch, handleWeirdSearch, searchType, translateGif , handleWeirdness, weirdLevel, errorMessage, isLoading }) => (
  <section>

    <Form handleSearch={ handleSearch } 
          handleWeirdSearch={ handleWeirdSearch } 
          searchType={ searchType } 
          weirdLevel={ weirdLevel } />
    { searchType === 'weird' ? 
       <WeirdSlider  searchType={ searchType } 
                     handleWeirdness={ handleWeirdness } /> : null }

    { errorMessage ? <ErrorMessage message={ errorMessage }/> : null }
    
    {searchType === 'weird' ? 
    <WeirdGif url={ translateGif } isLoading={ isLoading } />
    :
    <GifFeedContainer />
    }

  </section>      
)
  

export default Home;