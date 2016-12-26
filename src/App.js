import React, { Component } from 'react';
import Chat from './Chat';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      messages: [
        { time: new Date(2016,10,10).getTime(), value: "Hello"},
        { time: new Date(2016,10,11).getTime(), value: "Hi"},
        { time: new Date(2016,10,12).getTime(), value: "How are you?"},
      ]
    };
    // bind this
    this.saveMessage = this.saveMessage.bind(this);
  }

  saveMessage(message) {
    // shallow copy of the messages already in the state
    const messages = this.state.messages.slice();
    // push the new message
    messages.push(message);
    // save it in the state
    this.setState({ messages });
  }

  render() {
    return (
      <div>
        <Chat title="Chat A" messages={this.state.messages} onMessage={this.saveMessage} />
      </div>
    );
  }
}

export default App;
