import React, { Component } from 'react';
import Form from './FormComponent.jsx';
import GifItems from './GifItemsComponent.jsx';
import LoginMessage from '../login/LoginMessageComponent.jsx';

class Home extends Component {

  componentDidMount() {
    
    this.props.fetchGifs('cars');
    if(this.props.userId) {
       this.props.fetchFavorites(this.props.userId);
    }
  }

  render() {
    const { userId, fetchGifs, gifList, isLoading, isError, postFavorite } = this.props;
    return (
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
    )
  }
}


export default Home;