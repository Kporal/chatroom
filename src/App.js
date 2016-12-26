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
        { time: new Date(2016,10,12).getTime(), value: "Hoz qre you?"},
      ]
    };
  }

  render() {
    return (
      <div>
        <Chat title="Chat A" messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
