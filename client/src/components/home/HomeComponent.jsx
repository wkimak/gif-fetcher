import React from 'react';
import Form from './FormComponent.jsx';
import GifItems from './GifItemsComponent.jsx';
import LoginMessage from '../login/LoginMessageComponent.jsx';


const Home = ({ userId, fetchGifs, gifList, isLoading, isError, postFavorite }) => (
  <section>
    {!userId ?
    <LoginMessage />
    : null}
    <Form fetchGifs={ fetchGifs } userId={ userId } />
    <GifItems userId={ userId } 
              gifList={ gifList } 
              isLoading={ isLoading } 
              isError={ isError } 
              postFavorite={ postFavorite } />
  </section>  
);

export default Home;