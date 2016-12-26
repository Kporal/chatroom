import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import MessageInput from './MessageInput';

class Chat extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const messageList = this.props.messages.map(msg =>
      <ListGroupItem header={new Date(msg.time).toDateString()} key={msg.time.toString()}>{msg.value}</ListGroupItem>
    );

    return (
      <div>
        <h1>{this.props.title}</h1>
        <ListGroup>{messageList}</ListGroup>
        <MessageInput onMessage={this.props.onMessage} />
      </div>
    );
  }
}

export default Chat;
