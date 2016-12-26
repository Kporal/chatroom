import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Chat extends Component {
  constructor(props) {
    super(props);
    // bind this
    this.pushMessage = this.pushMessage.bind(this);
  }

  pushMessage(e) {
    // prevent submit
    e.preventDefault();
    const { value } = this.refs.msgInput;
    if (value) {
      // save the new message
      this.props.onMessage({ time: Date.now(), value });
      // clear the input
      this.refs.msgInput.value = '';
    }
  }

  render() {
    const messageList = this.props.messages.map(msg =>
      <ListGroupItem header={new Date(msg.time).toDateString()} key={msg.time.toString()}>{msg.value}</ListGroupItem>
    );

    return (
      <div>
        <h1>{this.props.title}</h1>
        <ListGroup>{messageList}</ListGroup>
        <form action="#" method="post">
          <input type="text" name="msg" ref="msgInput" />
          <button onClick={this.pushMessage}>Ok</button>
        </form>
      </div>
    );
  }
}

export default Chat;
