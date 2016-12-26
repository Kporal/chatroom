import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

class Chat extends Component {
  render() {
    const { name, messages, onMessage } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <MessageList chat={name} messages={messages} />
        <MessageInput chat={name} onMessage={onMessage} />
      </div>
    );
  }
}

export default Chat;
