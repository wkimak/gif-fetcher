import React, { Component } from 'react';
import Form from './FormComponent.jsx';
import ErrorMessage from './ErrorComponent.jsx';
import GifFeedContainer from '../../containers/GifFeedContainer.jsx';
import FormControls from './FormControlsComponent.jsx';
import TranslateGif from './TranslateGifComponent.jsx';


const Home = ({ handleSearch, handleTranslate, handleSearchType, isError, searchType, translateGif , handleWeirdness, weirdLevel }) => (
  <section>
    <Form handleSearch={ handleSearch } handleTranslate={ handleTranslate } searchType={ searchType } weirdLevel={ weirdLevel } />
    <FormControls handleSearchType={ handleSearchType } searchType={ searchType } handleWeirdness={ handleWeirdness } />
    { isError ? <ErrorMessage /> : null }
    {searchType === 'translate' ? 
    <TranslateGif url={ translateGif } />
    :
    <GifFeedContainer />
    }
  </section>      
)
  

export default Home;