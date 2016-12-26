import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    // bind this
    this.pushMessage = this.pushMessage.bind(this);
  }

  pushMessage(e) {
    e.preventDefault();
    this.props.onMessage({ time: Date.now(), value: "Fine, thank you!" });
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
          <input type="text" name="entry" />
          <button onClick={this.pushMessage}>Ok</button>
        </form>
      </div>
    );
  }
}

export default Chat;
