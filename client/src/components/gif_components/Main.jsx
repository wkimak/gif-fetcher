import React, { Component } from 'react';
import { fetchGifs } from './api.js';
import View from './View.jsx';
import "@babel/polyfill";

class Main extends Component {

  state={ gifList: [] }

  fetchApi = async (searchTerm) => {
    try {
      const response = await fetchGifs(searchTerm);
      this.setState({
        gifList: response.data.data
      })
    } catch {
      console.log('ERROR WITH FETCHAPI');
    }
  }

  render() {
    return (
      <View fetchApi={ this.fetchApi } 
            gifList={ this.state.gifList} />
    )
  }
}

export default Main;



