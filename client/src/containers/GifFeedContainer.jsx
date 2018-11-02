import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchGifs, handleEndResults } from '../redux/actions/gifFeedActions.js';
import { postFavorite, fetchFavorites } from '../redux/actions/favoritesActions.js';

import Loading from '../components/gifFeed/LoadingComponent.jsx';
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
  
  // invoke action to fetch more gifs
  fetch = () => {
    this.props.fetchGifs(this.props.searchTerm, this.props.offset, () => {
      this.setState( () => ({ 
        scrolling: false }));
    })
  }
  // set scrolling state to true so fetch function is not rapidly invoked
  loadMore = () => {
    this.setState( () => ({
      scrolling: true
    }), this.fetch);
  }

  handleScroll = (e) => {
    // If no more gifs left to fetch
    if(this.props.totalGifs <= this.props.offset && this.props.totalGifs > 0) {
      this.props.handleEndResults();
      return;
    } 
    if(this.state.scrolling === true) return;
    const lastGif = document.querySelector('.gifs_container > div:last-child');
    if(!lastGif) return;
    const lastGifOffset = lastGif.offsetTop + lastGif.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    
    if(pageOffset > lastGifOffset) {
      this.loadMore();
    }
  }

  render() {
    const { offset, userId, gifList, isLoading, postFavorite, endResults } = this.props;
    return (
      <Fragment>
        <GifItems isLoading={ isLoading } 
                  userId={ userId } 
                  gifList={ gifList } 
                  postFavorite={ postFavorite } />
        { isLoading ? <Loading /> : null }
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
