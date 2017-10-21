import React, { Component } from 'react';

class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign In Here</h1>

        <div className='form-group'>
          <label className='control-label'>Username</label>
          <input
            value={ this.state.username }
            onChange={this.onChange}
            type='text'
            name='username'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label className='control-label'>Password</label>
          <input
            value={ this.state.password }
            onChange={this.onChange}
            type='password'
            name='password'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary btn-lg'>
            Sign In
          </button>  
        </div>
      </form>
    );
  }
}

export default SignInForm;