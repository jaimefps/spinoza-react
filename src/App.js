import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
