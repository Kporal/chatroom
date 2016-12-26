import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class MessageList extends Component {

  render() {
    const messageList = this.props.messages.map(msg =>
      <ListGroupItem header={new Date(msg.time).toDateString()} key={msg.time.toString()}>{msg.value}</ListGroupItem>
    );

    return (
        <ListGroup>{messageList}</ListGroup>
    );
  }
}

export default MessageList;
