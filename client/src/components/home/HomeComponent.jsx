import React, { Component } from 'react';
import Form from './FormComponent.jsx';
import GifItems from './GifItemsComponent.jsx';
import LoginMessage from '../login/LoginMessageComponent.jsx';

class Home extends Component {

  componentDidMount() {
    if(this.props.userId) {
       this.props.fetchFavorites(this.props.userId);
    }
  }

  getMoreGifs = () => {
    const nextOffset = this.props.offset + 6;
    this.props.fetchGifs(this.props.searchTerm, nextOffset);
  }

  render() {
    const { handleSearch, offset, userId, fetchGifs, gifList, isLoading, isError, postFavorite } = this.props;
    return (
      <section>
        {!userId ?
        <LoginMessage />
        : null}
        <Form handleSearch={ handleSearch } offset={ offset } />
        <GifItems userId={ userId } 
                  gifList={ gifList } 
                  isLoading={ isLoading } 
                  isError={ isError } 
                  postFavorite={ postFavorite } />
        <button onClick={ this.getMoreGifs }>Load More</button>
      </section>  
    )
  }
}


export default Home;