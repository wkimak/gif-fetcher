import React from 'react';
import Form from './FormComponent.jsx';
import GifItems from './GifItemsComponent.jsx';


const Home = ({ userId, fetchGifs, gifList, isLoading, isError, postFavorite }) => (
  <section>
    <Form fetchGifs={ fetchGifs } />
    <GifItems userId={ userId } gifList={ gifList } isLoading={ isLoading } isError={ isError } postFavorite={ postFavorite } />
  </section>  
);

export default Home;