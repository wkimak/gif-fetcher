import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGifs, handleLoading, handleEndResults } from '../redux/actions/fetchGifsActions.js';
import { postFavorite, fetchFavorites } from '../redux/actions/favoriteActions.js';

import GifItems from '../components/gifFeed/GifItemsComponent.jsx';
import EndResults from '../components/gifFeed/EndResultsComponent.jsx';


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
      this.setState( () => ({ 
        scrolling: false }));
    })
  }

  loadMore = () => {
    this.setState( () => ({
      scrolling: true
    }), this.fetch);
  }

  handleScroll = (e) => {
    if(this.props.totalGifs <= this.props.offset && this.props.totalGifs > 0) {
      this.props.handleEndResults();
      return;
    } 
    if(this.state.scrolling === true) return;
    const lastGif = document.querySelector('.gifs_container > div:last-child');
    const lastGifOffset = lastGif.offsetTop + lastGif.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
   
    if(pageOffset > lastGifOffset) {
      this.loadMore();
    }
  }

  render() {
    const { offset, userId, gifList, isLoading, isError, postFavorite, endResults } = this.props;
    return (
      <Fragment>
        <GifItems userId={ userId } 
                  gifList={ gifList } 
                  isLoading={ isLoading } 
                  isError={ isError } 
                  postFavorite={ postFavorite } />
        { endResults ? <EndResults /> : null }
      </Fragment>
    )
  }
}


const mapStateToProps = (state) => ({
   gifList: state.getGifs.gifList,
   isLoading: state.handleLoading.isLoading,
   userId: state.getUserId.userId,
   searchTerm: state.getGifs.searchTerm,
   totalGifs: state.getGifs.totalGifs,
   endResults: state.handleEnd.endResults,
   offset: state.getGifs.offset,
   showLoginMessage: state.handleFavorites.showLoginMessage
});

const mapDispatchToProps = { postFavorite, handleLoading, handleEndResults, fetchGifs, fetchFavorites }

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteScroll);
