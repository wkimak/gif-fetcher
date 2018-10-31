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
    this.props.fetchGifs(this.state.searchTerm, this.props.userId);
  }

  render() {
    return (
      <form className='form_container' onSubmit={ this.handleSubmit }>
        <input type='text' 
               value={ this.state.searchTerm } 
               onChange={ this.handleChange } 
               placeholder='Search Gif' /> 
        <i className="fas fa-search fa-lg" onClick={ this.handleSubmit }></i>
      </form>
    );
  }
}

export default Form;