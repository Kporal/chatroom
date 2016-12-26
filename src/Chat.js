import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    };
    // bind this
    this.pushMessage = this.pushMessage.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
  }

  pushMessage(e) {
    e.preventDefault();
    this.props.onMessage({ time: Date.now(), value: this.state.msg });
  }

  handleMsgChange(e) {
    this.setState({ msg: e.target.value });
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
          <input type="text" name="msg" value={this.state.value} onChange={this.handleMsgChange} />
          <button onClick={this.pushMessage}>Ok</button>
        </form>
      </div>
    );
  }
}

export default Chat;
