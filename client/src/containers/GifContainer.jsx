import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchGifs } from '../redux/actions/fetchGifs.js';

import Form from '../components/gif_components/Form.jsx'
import GifItems from '../components/gif_components/GifItems.jsx';

class GifContainer extends Component {
  render() {
    return (
      <Fragment>
        <Form fetchGifs={ this.props.fetchGifs } />
        <GifItems gifList={ this.props.gifList } />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
   gifList: state.gifList.gifList
})

const mapDispatchToProps = {
  fetchGifs
}


export default connect(mapStateToProps, mapDispatchToProps)(GifContainer);