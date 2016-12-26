import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class MessageList extends Component {

  render() {
    const messageList = this.props.messages.map(msg => {
      const { chatName, time, value } = msg;
      const dateFormat = new Date(time).toDateString();
      const isCurrentChat = chatName === this.props.chat;
      const msgPosition = isCurrentChat ? 'text-right' : 'text-left';
      return (
        <ListGroupItem
          header={dateFormat}
          key={time.toString()}
          active={isCurrentChat}
          className={msgPosition}>{value}</ListGroupItem>);
    });

    return (
        <ListGroup>{messageList}</ListGroup>
    );
  }
}

export default MessageList;
