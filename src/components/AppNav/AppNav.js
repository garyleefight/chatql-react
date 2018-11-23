import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import logo from '../../assets/img/chat.png';

class AppNav extends Component {

    render() {
        console.log(this.props.location);
        if (this.props.location.pathname !== '/' && !this.props.isLoggedIn) {
            return <Redirect to="/" />
        } else if (this.props.location.pathname === '/' && this.props.isLoggedIn) {
            return <Redirect to="/chat" />
        }
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse navbar-dark bg-dark fixed-top">
                <a className="navbar-brand text-white" href='/'>
                    <img src={logo} width="30" height="30" className="App-logo" alt="http://freepngimg.com/png/11489-chat-free-download-png" />
                    <strong>ChatQL</strong>
                </a>
                <ul className="nav navbar-nav">
                    {
                        this.props.isLoggedIn ?
                        <li className="nav-item">
                            <button className="btn btn-primary" onClick={this.props.onSignOut}>Sign Out <i className="ion-log-in" data-pack="default" data-tags="sign in"></i></button>
                        </li> :
                        null
                    }
                </ul>
            </nav>
        );
    }
}

export default withRouter(AppNav);
