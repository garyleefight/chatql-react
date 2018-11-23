import React, { Component } from 'react';
import './ChatConversationList';

class ChatConversationList extends Component {
    render() {
        const conversations = [
            { id: 1, name: "Michael" }
        ]
        return (
            <div>
                <div className="d-block font-weight-bold bg-dark text-white text-right rounded p-2">
                    <h6 className='mb-0'><i className="ion-person-stalker" data-pack="default" data-tags="talk"></i> Conversations</h6>
                </div>
                <div className="convo-list">
                    <div className="list-group mb-2">
                        {
                            conversations.map((convo, i) => (
                                <a
                                    key={i}
                                    className={this.conversationClassNames()}
                                    onClick={() => this.changeConversation(convo)}>
                                    {convo.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }

    conversationClassNames = (id) => {
        return "list-group-item list-group-item-action p-2 border-0 bg active"
    }

    changeConversation = () => {
        console.log(`Changing conversation`);
    }
}

export default ChatConversationList;
