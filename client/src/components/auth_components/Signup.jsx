import React, { Component } from 'react';

class Signup extends Component {

  state={ username: '', password: '' }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSignup(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input name='username' onChange={ this.handleChange } value={ this.state.username } type='text' />
        <input name='password' onChange={ this.handleChange } value={ this.state.password } type='password' />
        <input type='submit' />
      </form>
    );
  }
}

export default Signup;