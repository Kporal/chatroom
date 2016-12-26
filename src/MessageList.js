import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class MessageList extends Component {

  render() {
    const messageList = this.props.messages.map(msg => {
      const { chatName, time, value } = msg;
      const dateFormat = new Date(time).toDateString();
      const msgPosition = chatName === this.props.chat ? 'text-left' : 'text-right';
      return <ListGroupItem header={dateFormat} key={time.toString()} className={msgPosition}>{value}</ListGroupItem>;
    });

    return (
        <ListGroup>{messageList}</ListGroup>
    );
  }
}

export default MessageList;
