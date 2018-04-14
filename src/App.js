import React, { Component } from 'react';
import swlogo from './starwarslogo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={swlogo} className="sw-logo" alt="logo" />
          <h1 className="App-title">Star Wars API fetching</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
