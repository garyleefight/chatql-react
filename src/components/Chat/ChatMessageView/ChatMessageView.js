import React, { Component } from 'react';
import './ChatMessageView.css';
import ChatMessage from './ChatMessage';

class ChatMessageView extends Component {
    render() {
        const messages = [
            {
                content: "Message",
                user: {
                    username: "Michael"
                },
                createdAt: "10:16 pm"
            }
        ]
        return (
            <div className="bg rounded p-2 border border-dark rounded">
                <div className="p-0 bg">
                    <span className="d-block font-weight-bold bg-dark text-white text-right rounded p-2 mb-2">
                    <i className="ion-chatbubbles" data-pack="default" data-tags="talk"></i> {this.props.conversation.name}
                    </span>
                    <div className="chat"> {/* [appInfscroll]="loadMoreMessages" [completedFetching]="completedFetching" */}
                    {
                        messages.map((message, i) => (
                            <ChatMessage key={i} message={message} />
                        ))
                    }
                    {/* <app-chat-message *ngFor="let message of messages; last as isLast; first as isFirst"
                    [message]="message"
                    [fromMe]="fromMe(message)"
                    [isLast]="isLast"
                    [isFirst]="isFirst"
                    (added)="messageAdded(isFirst, $event)"
                    ></app-chat-message> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatMessageView;
