import React, { Component } from 'react';

class ChatMessage extends Component {
    render() {
        const momentAgo = new Date().toTimeString();
        return (
            <div className={this.messageClassNames()}>
                <div className="card-body p-2 border rounded">
                <div className='clearfix'>
                    <h6 className={this.cardTitleClassNames()}>
                        {this.props.message.user.username}
                    </h6>
                <div className='float-right'>
                    <small className="card-subtitle mb-0 text-muted">{this.props.message.createdAt | momentAgo}</small>
                    &nbsp;
                    <i className={this.checkmarkClassNames()} data-pack="default" data-tags="talk"></i>
                </div>
                </div>
                    <p className="card-text mb-0">{this.props.message.content}</p>
                </div>
            </div>
        );
    }

    messageClassNames = () => {
        // [class.float-right]="fromMe"
        // [class.border-primary]="fromMe"
        // [class.border-success]="!fromMe">
        return "card w-75 mb-2 chat-message float-right";
    }

    cardTitleClassNames = () => {
        // [class.text-primary]="fromMe"
        // [class.text-success]="!fromMe"
        return "card-title mb-1 float-left text-primary text-success"
    }

    checkmarkClassNames = () => {
        // [class.text-muted]="!message.isSent" [class.text-info]="message.isSent"
        return "ion-checkmark text-info"
    }
}

export default ChatMessage;
