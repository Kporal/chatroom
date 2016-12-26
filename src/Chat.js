import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    // bind this
    this.pushMessage = this.pushMessage.bind(this);
  }

  pushMessage(e) {
    // prevent submit
    e.preventDefault();
    // save the new message
    this.props.onMessage({ time: Date.now(), value: this.refs.msgInput.value });
    // clear the input
    this.refs.msgInput.value = '';
  }

  render() {
    const messageList = this.props.messages.map(msg =>
      <li key={msg.time.toString()}>{msg.value}</li>
    );

    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>{messageList}</ul>
        <form>
          <input type="text" name="msg" ref="msgInput" />
          <button onClick={this.pushMessage}>Ok</button>
        </form>
      </div>
    );
  }
}

export default Chat;
