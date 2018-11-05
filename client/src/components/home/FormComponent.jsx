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
    if(this.state.searchTerm !== '') {
      if(this.props.searchType === 'translate') {
        this.props.handleWeirdSearch(this.state.searchTerm, this.props.weirdLevel);
      } else {
        this.props.handleSearch('search', this.state.searchTerm, 12, 0);
      }
      this.setState({ searchTerm: ''})
    }
  }

  render() {
    return (
      <div className='form_container'>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' 
                 value={ this.state.searchTerm } 
                 onChange={ this.handleChange } 
                 placeholder='Search Gif' /> 
          <i className="fas fa-search fa-lg" onClick={ this.handleSubmit }></i>
        </form>
      </div>
    );
  }
}

export default Form;