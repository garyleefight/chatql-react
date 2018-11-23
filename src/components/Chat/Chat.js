import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import './Chat.css';
import ChatUserList from './ChatUserList';
import ChatConversationList from './ChatConversationList';
import ChatMessageView from './ChatMessageView';
import ChatInput from './ChatInput';
import AuthContext from '../../AuthContext'

class Chat extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            selectedConversation: null
        }
    }

    render() {
        const currentUser = this.context;
        return (
            <div className="container-fluid mb-60px pb-2 align-middle">
                <div className="row">
                    <div className="col-sm-4 p-1">
                        <div className="border bg border-dark rounded rounded p-2 h-100">
                            <div className="left-pane bg">
                                <div className="text-center mb-2">
                                    <h4>
                                        <span className="badge badge-pill" className={this.props.registered ? 'badge-dark' : 'badge-light'}>
                                            {currentUser ? currentUser.username : 'Not Logged In'}
                                        </span>
                                    </h4>
                                </div>
                                {/* <app-chat-user-list [user]="me" (onNewConvo)="setNewConvo($event)" pageScroll href="#chat"></app-chat-user-list> */}
                                <ChatUserList />
                                {/* <app-chat-convo-list [user]="me" [current]="conversation" (onConvoClick)="setNewConvo($event)" pageScroll href="#chat"></app-chat-convo-list> */}
                                <ChatConversationList onChatSelected={this.changeConversation} />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8 p-1" id="chat">
                    <ChatMessageView conversation={this.state.selectedConversation} />
                    <ChatInput conversation={this.state.selectedConversation} />
                    {/* <div *ngIf="conversation; else instructions">
                        <app-chat-message-view #messageView [senderId]="me.cognitoId" [conversation]="conversation"></app-chat-message-view>
                        <app-chat-input [conversation]="conversation" [senderId]="me.cognitoId"></app-chat-input>
                    </div> */}
                    </div>
                </div>
                {/* <div className= "bg rounded p-2 border border-dark rounded text-center instructions">
                    <p className= "p-5 m-5 h5 text-white instructions-text">Welcome, <strong>TODO: Username</strong>! Select a User or a Conversation to start or continue a ChatQL</p>
                </div> */}
            </div>
        );
    }

    changeConversation = (conversation) => {
        this.setState({
            selectedConversation: conversation
        });
    }
}

export default Chat;
