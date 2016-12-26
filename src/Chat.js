import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

class Chat extends Component {
  render() {
    const { title, messages, onMessage } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <MessageList messages={messages} />
        <MessageInput onMessage={onMessage} />
      </div>
    );
  }
}

export default Chat;
