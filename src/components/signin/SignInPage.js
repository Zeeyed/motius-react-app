import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import { userSignInRequest } from '../../actions/signinActions';
import { addFlashMessages } from '../../actions/flashMessages';


class SignInPage extends React.Component {
  render () {
    const { userSignInRequest, addFlashMessages } = this.props;
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <SignInForm
            userSignInRequest={userSignInRequest}
            addFlashMessages={addFlashMessages}
          />
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  userSignInRequest: PropTypes.func.isRequired,
  addFlashMessages: PropTypes.func.isRequired
}

export default connect(null, { userSignInRequest, addFlashMessages })(SignInPage);