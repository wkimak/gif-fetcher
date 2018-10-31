import React, { Component } from 'react';
import GifItems from './GifItemsComponent.jsx';

class InfiniteScroll extends Component {

  state = { scrolling: false }
  
  componentDidMount() {

    if(this.props.userId) {
       this.props.fetchFavorites(this.props.userId);
    }
    
    window.addEventListener('scroll', this.handleScroll);
  }

  fetch = () => {
    this.props.fetchGifs(this.props.searchTerm, this.props.offset, () => {
      this.setState( prevProps => ({ 
        scrolling: false }));
    })
  }

  loadMore = () => {
    this.setState( prevProps => ({
      scrolling: true
    }), this.fetch);
  }

  handleScroll = (e) => {
    if(this.props.totalGifs <= this.props.offset) return;
    if(this.state.scrolling === true) return;
    const lastGif = document.querySelector('.gifs_container > div:last-child');
    const lastGifOffset = lastGif.offsetTop + lastGif.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if(pageOffset > lastGifOffset) {
      this.loadMore();
    }
  }

  render() {
    const { offset, userId, gifList, isLoading, isError, postFavorite } = this.props;
    return (
      <GifItems userId={ userId } 
                gifList={ gifList } 
                isLoading={ isLoading } 
                isError={ isError } 
                postFavorite={ postFavorite } />
    )
  }
}

export default InfiniteScroll;