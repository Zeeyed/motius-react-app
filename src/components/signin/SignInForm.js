import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignInRequest } from '../../actions/signinActions';

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
    this.props.userSignInRequest(this.state).then(
      () => {
        this.props.addFlashMessages({
          type: 'success',
          text: 'You are successfully loged in'
        })
        this.context.router.push('/projects');
      },
    );
  }

  render () {
    const { username, password } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign In Here</h1>

        <div className='form-group'>
          <label className='control-label'>Username</label>
          <input
            value={ username }
            onChange={this.onChange}
            type='text'
            name='username'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label className='control-label'>Password</label>
          <input
            value={ password }
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

SignInForm.propTypes = {
  userSignInRequest: PropTypes.func.isRequired,
  addFlashMessages: PropTypes.func.isRequired
}

SignInForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { userSignInRequest })(SignInForm);