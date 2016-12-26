import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
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
          <button>Ok</button>
        </form>
      </div>
    );
  }
}

export default Chat;
