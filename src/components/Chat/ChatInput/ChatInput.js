import React, { Component } from 'react';
import './ChatInput';

class ChatInput extends Component {
  render() {
    return (
        <div className="rounded p-2 mt-2 bg border border-dark rounded">
            <div className="input-group">
                <input type="text" className="form-control no-focus"
                required placeholder="Type a Message"
                id="message" name="message" onKeyUp={this.onKeyUp} />
                <span className="input-group-btn">
                <button className="btn btn-dark" onClick={this.createNewMessage} type="button">
                    Send&nbsp;<i className='ion-chatbubble-working'></i>
                </button>
                </span>
            </div>
        </div>
    );
  }

  createNewMessage = () => {
      console.log(`Creating new message`);
  }

  onKeyUp = (e) => {
      // enter
      if (e.keyCode === 13) {
          this.createNewMessage()
      }
  }
}

export default ChatInput;
