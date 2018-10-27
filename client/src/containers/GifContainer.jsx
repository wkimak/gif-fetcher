import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchGifs } from '../redux/actions/fetchGifs.js';

import Form from '../components/gif_components/Form.jsx'
import GifItems from '../components/gif_components/GifItems.jsx';

const GifContainer = ({ fetchGifs, gifList, isLoading, isError }) => (
  <Fragment>
    <Form fetchGifs={ fetchGifs } />
    <GifItems gifList={ gifList } isLoading={ isLoading } isError={ isError } />
  </Fragment> 
)

const mapStateToProps = (state) => ({
   gifList: state.gifList.gifList,
   isLoading: state.isLoading.isLoading,
   isError: state.isError.isError
})

const mapDispatchToProps = { fetchGifs }


export default connect(mapStateToProps, mapDispatchToProps)(GifContainer);