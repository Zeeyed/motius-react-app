import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

class FlashMessages extends React.Component {
  render() {
    const { id, type, text } = this.props.message;

    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error',
      })}>
        { text }
      </div>
    ); 
  }
}

export default FlashMessages;