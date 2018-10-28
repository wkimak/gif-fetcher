import React, { Component } from 'react';

class Form extends Component {
  
  state={ searchTerm: '' }
  
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchGifs(this.state.searchTerm);
  }

  render() {
    return (
      <form className='form_container' onSubmit={ this.handleSubmit }>
        <input type='text' 
               value={ this.state.searchTerm } 
               onChange={ this.handleChange } 
               placeholder='Search Gif' />
        <input type='submit' />
      </form>
    );
  }
}

export default Form;