import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import Message from './Message';

class MessageInput extends Component {

  constructor(props) {
    super(props);
    // define a reference for the input
    this.msgInputRef = '';
    // bind this
    this.pushMessage = this.pushMessage.bind(this);
  }

  pushMessage(e) {
    // prevent submit
    e.preventDefault();
    const { value } = this.msgInputRef;
    // prevent empty message
    if (value) {
      // save the new message
      const message =  new Message(this.props.name, Date.now(), value);
      this.props.onMessage(message);
      // clear the input
      this.msgInputRef.value = '';
    }
  }

  render() {
    return (
      <form action="#" method="post" onSubmit={this.pushMessage}>
        <FormGroup>
          <InputGroup>
            <FormControl
              id="msgInput"
              name="msgInput"
              type="text"
              placeholder="Type your message..."
              inputRef={ref => { this.msgInputRef = ref; }} />
            <InputGroup.Button>
              <Button type="submit"><Glyphicon glyph="send" /></Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

export default MessageInput;
