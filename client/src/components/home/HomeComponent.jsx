import React from 'react';
import Form from './FormComponent.jsx';
import GifItems from './GifItemsComponent.jsx';


const Home = ({ fetchGifs, gifList, isLoading, isError, handleFavorite }) => (
  <section>
    <Form fetchGifs={ fetchGifs } />
    <GifItems gifList={ gifList } isLoading={ isLoading } isError={ isError } handleFavorite={ handleFavorite } />
  </section>  
);

export default Home;