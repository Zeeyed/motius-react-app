import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashMessages from './FlashMessages';

class FlashMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message => 
      <FlashMessages key={message.id} message={message} />
    );

    return (
      <div>
        { messages }
      </div>
    ); 
  }
}

function mapStateToProps(state){
  return {
    messages: state.flashMessages
  }
};

export default connect(mapStateToProps)(FlashMessagesList);