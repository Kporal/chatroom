import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

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
      this.props.onMessage({ time: Date.now(), value });
      // clear the input
      this.msgInputRef.value = '';
    }
  }

  render() {
    return (
      <form action="#" method="post">
        <FormGroup>
          <InputGroup>
            <FormControl
              id="msgInput"
              name="msgInput"
              type="text"
              placeholder="Type your message..."
              inputRef={ref => { this.msgInputRef = ref; }} />
            <InputGroup.Button>
              <Button onClick={this.pushMessage}>Ok</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

export default MessageInput;
