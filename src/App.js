import React, { Component } from 'react';
import logo from './dev-tools.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Advanced Debugging with Chrome Developer Tools</h2>
        </div>
        <p className="App-intro">
          Helping you to be a better pairing partner with Chrome Dev Tools.
        </p>
      </div>
    );
  }
}

export default App;
