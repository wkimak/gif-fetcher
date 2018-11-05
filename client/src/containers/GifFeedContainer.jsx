import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchGifs, handleEndResults, handleSearch } from '../redux/actions/gifFeedActions.js';
import { postFavorite, fetchFavorites } from '../redux/actions/favoritesActions.js';

import Loading from '../components/misc/LoadingComponent.jsx';
import GifItems from '../components/gifFeed/GifItemsComponent.jsx';
import EndResults from '../components/gifFeed/EndResultsComponent.jsx';


class InfiniteScroll extends Component {

  state = { scrolling: false }
  
  componentDidMount() {
    const { userId, fetchFavorites, handleSearch } = this.props;
    if(userId) {
       fetchFavorites(this.props.userId);
    }
    
    handleSearch('trending', null, 12, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  // invoke action to fetch more gifs
  fetch = () => {
    const { fetchGifs, searchType, searchTerm, offset } = this.props;
    fetchGifs(searchType, searchTerm, 6, offset, () => {
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
    if(this.state.scrolling === true) return;

    const { handleEndResults, totalGifs, offset } = this.props;
    // If no more gifs left to fetch
    if(totalGifs <= offset && totalGifs > 0) {
      handleEndResults();
      return;
    } 

    const lastGif = document.querySelector('.masonry_container > div:last-child');
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
   showLoginMessage: state.handleFavorites.showLoginMessage,
   searchType: state.changeSearchType.searchType
});

const mapDispatchToProps = { postFavorite, handleEndResults, fetchGifs, fetchFavorites, handleSearch }

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteScroll);
