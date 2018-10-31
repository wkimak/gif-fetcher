import React, { Component } from 'react';
import Form from './FormComponent.jsx';
import LoginMessage from '../login/LoginMessageComponent.jsx';
import InfiniteScroll from './InfiniteScrollComponent.jsx';



const Home = ({ handleSearch, offset, userId, fetchGifs, gifList, isLoading, isError, postFavorite, fetchFavorites }) => (
      <section>
        {!userId ?
        <LoginMessage />
        : null}
        <Form handleSearch={ handleSearch } offset={ offset } />
        <InfiniteScroll userId={ userId } 
                        gifList={ gifList } 
                        isLoading={ isLoading } 
                        isError={ isError } 
                        postFavorite={ postFavorite }
                        fetchGifs={ fetchGifs }
                        offset={ offset }
                        fetchFavorites={ fetchFavorites } />
      </section>  
)
  

export default Home;