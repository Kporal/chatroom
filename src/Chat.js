import React, { Component } from 'react';

class Chat extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <textarea></textarea>
        <form>
          <input type="text" name="entry" />
          <button>Ok</button>
        </form>
      </div>
    );
  }
}

export default Chat;
