import React, { Component } from 'react';
import Chat from './Chat';
import { Grid, Row, Col } from 'react-bootstrap';

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
      <Grid>
        <Row>
          <Col xs={12} sm={6} md={6}>
            <Chat title="Chat A" messages={this.state.messages} onMessage={this.saveMessage} />
          </Col>
          <Col xs={12} sm={6} md={6}>
            <Chat title="Chat B" messages={this.state.messages} onMessage={this.saveMessage} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
