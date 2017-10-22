import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import { userSignInRequest } from '../../actions/signinActions';


class SignInPage extends React.Component {
  render () {
    const { userSignInRequest } = this.props;
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <SignInForm userSignInRequest={userSignInRequest} />
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  userSignInRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignInRequest })(SignInPage);