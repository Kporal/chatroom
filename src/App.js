import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Chat from './Chat';
import Message from './Message';

class App extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      messages: [
        new Message('Chat A', new Date(2016,10,10).getTime(), "Hello"),
        new Message('Chat B', new Date(2016,10,11).getTime(), "Hi"),
        new Message('Chat A', new Date(2016,10,12).getTime(), "How are you?"),
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
            <Chat name="Chat A" messages={this.state.messages} onMessage={this.saveMessage} />
          </Col>
          <Col xs={12} sm={6} md={6}>
            <Chat name="Chat B" messages={this.state.messages} onMessage={this.saveMessage} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
