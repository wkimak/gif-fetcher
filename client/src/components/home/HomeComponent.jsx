import React, { Component } from 'react';
import Form from './FormComponent.jsx';
import GifFeedContainer from '../../containers/GifFeedContainer.jsx';
import FormControls from './FormControlsComponent.jsx';
import WeirdGif from './WeirdGifComponent.jsx';
import ErrorMessage from '../ErrorMessageComponent.jsx';


const Home = ({ handleSearch, handleWeirdSearch, handleSearchType, searchType, translateGif , handleWeirdness, weirdLevel, errorMessage }) => (
  <section>
    <Form handleSearch={ handleSearch } 
          handleWeirdSearch={ handleWeirdSearch } 
          searchType={ searchType } 
          weirdLevel={ weirdLevel } />
    <FormControls handleSearchType={ handleSearchType } 
                  searchType={ searchType } 
                  handleWeirdness={ handleWeirdness } />

    { errorMessage ? <ErrorMessage message={ errorMessage }/> : null }
    
    {searchType === 'translate' ? 
    <WeirdGif url={ translateGif } />
    :
    <GifFeedContainer />
    }

  </section>      
)
  

export default Home;