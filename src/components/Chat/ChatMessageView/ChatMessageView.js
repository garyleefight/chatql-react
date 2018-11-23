import React, { Component } from 'react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import AuthContext from '../../../AuthContext';
import * as queries from '../../../graphql/queries';
import * as subscriptions from '../../../graphql/subscriptions';
import './ChatMessageView.css';
import ChatMessage from './ChatMessage';

class ChatMessageView extends Component {
    static contextType = AuthContext;
    render() {
        const username = this.context ? this.context.username : null
        return (
            <div className="bg rounded p-2 border border-dark rounded">
                <div className="p-0 bg">
                    <span className="d-block font-weight-bold bg-dark text-white text-right rounded p-2 mb-2">
                    <i className="ion-chatbubbles" data-pack="default" data-tags="talk"></i> {this.props.conversation ? this.props.conversation.name : 'Select a conversation'}
                    </span>
                    <div className="chat"> {/* [appInfscroll]="loadMoreMessages" [completedFetching]="completedFetching" */}
                    {
                        this.props.conversation ?
                        <Connect
                            query={graphqlOperation(queries.GetConversation, { id: this.props.conversation.id })}
                            subscription={graphqlOperation(subscriptions.OnCreateMessage, {
                                conversationId: this.props.conversation.id
                            })}
                            onSubscriptionMsg={(prev, { onCreateMessage }) => {
                                try {
                                    prev.getConversation.messages.items.push(onCreateMessage);
                                } catch (e) {
                                    console.log('Failed to merge user conversation subscription');
                                }
                                return prev;
                            }}
                        >
                            {({ data, loading, error }) => {
                                const { getConversation } = data || { }
                                if (error) return (<h3>Error: {error}</h3>);
                                let messages;
                                try {
                                    messages = getConversation.messages.items;
                                } catch (e) {
                                    messages = [];
                                }
                                if (loading || !messages) return (<h3>Loading...</h3>);
                                return messages.map((message, i) => (
                                    <ChatMessage key={i} message={message} isFromMe={message.authorId === username} />
                                ))
                            }}
                        </Connect> : null
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
