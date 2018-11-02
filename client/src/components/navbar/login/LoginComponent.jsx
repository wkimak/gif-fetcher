import React, { Component } from 'react';

class Login extends Component {

  state={ username: '', password: '' }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className='login_form'>
        <input name='username' onChange={ this.handleChange } value={ this.state.username } type='text' placeholder='username' required />
        <input name='password' onChange={ this.handleChange } value={ this.state.password } type='password' placeholder='password' required />
        <input type='submit' value='Login' />
      </form>
    );
  }
}

export default Login;