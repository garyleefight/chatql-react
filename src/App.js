import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './bootstrap/css/bootstrap.min.css'
import './App.css';
import AppNav from './components/AppNav'
import AppFooter from './components/AppFooter'
import Home from './components/Home'
import Chat from './components/Chat'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNav />
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />
          <AppFooter />
        </div>
      </Router>
    );
  }
}

export default App;
