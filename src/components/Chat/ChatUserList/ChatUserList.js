import React, { Component } from 'react';
import './ChatUserList.css';

class ChatUserList extends Component {
    render() {
        const users = [{ username: 'Jay'}, { username: 'Michael'}, { username: 'Zach'} ]
        const noUsers = true;
        return (
            <div>
                <div className="d-block font-weight-bold bg-dark text-white text-right rounded p-2">
                    <h6 className='mb-0'><i className="ion-ios-person" data-pack="default" data-tags="talk" /> Users</h6>
                </div>
                <div className="user-list">
                    <div className="list-group mb-2">
                        {
                            noUsers ?
                                <div>
                                    <br/>
                                    <div className="alert alert-success" role="alert">
                                        It looks lonely here... Sign up another user
                                    </div>
                                </div> : null
                        }
                        {
                            users.map((user, i) => (
                                <a href='#'
                                    key={i}
                                    className="list-group-item list-group-item-action p-2 border-0 bg"
                                    onClick={this.createNewConversation}>
                                    {user.username}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }

    createNewConversation = () => {
        console.log("Create conversation");
    }
}

export default ChatUserList;
