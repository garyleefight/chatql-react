import React, { Component } from 'react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import AuthContext from '../../../AuthContext';
import * as queries from '../../../graphql/queries';
import * as subscriptions from '../../../graphql/subscriptions';
import './ChatConversationList.css';

class ChatConversationList extends Component {
    static contextType = AuthContext;
    render() {
        const username = this.context ? this.context.username : null;
        return (
            <div>
                <div className="d-block font-weight-bold bg-dark text-white text-right rounded p-2">
                    <h6 className='mb-0'><i className="ion-person-stalker" data-pack="default" data-tags="talk"></i> Conversations</h6>
                </div>
                <div className="convo-list">
                    <div className="list-group mb-2">
                    {
                        username ?
                            <Connect
                                query={graphqlOperation(queries.GetUserAndConversations, { id: username })}
                                subscription={graphqlOperation(subscriptions.OnCreateUserConversation, {
                                    userId: username
                                })}
                                onSubscriptionMsg={(prev, { onCreateUserConversation }) => {
                                    try {
                                        prev.getUser.conversations.items.push(onCreateUserConversation);
                                    } catch (e) {
                                        console.log('Failed to merge user conversation subscription');
                                    }
                                    return prev;
                                }}
                            >
                                {({ data, loading, error }) => {
                                    const { getUser } = data || { getUser: { conversations: [] } }
                                    console.log(getUser);
                                    if (error) return (<h3>Error: {error}</h3>);
                                    let userConversations;
                                    try {
                                        userConversations = getUser.conversations.items;
                                    } catch (e) {
                                        userConversations = [];
                                    }
                                    if (loading || !userConversations) return (<h3>Loading...</h3>);
                                    return userConversations.map((userConversation, i) => (
                                        <a
                                            key={i}
                                            className={this.conversationClassNames()}
                                            onClick={() => this.props.onChatSelected(userConversation.conversation)}>
                                            {userConversation.conversation.name}
                                        </a>
                                    ));
                                }}
                            </Connect> : null
                    }
                    </div>
                </div>
            </div>
        );
    }

    conversationClassNames = (id) => {
        return "list-group-item list-group-item-action p-2 border-0 bg active"
    }
}

export default ChatConversationList;
