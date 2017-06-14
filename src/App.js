import React, { Component } from 'react';
import './App.css';
import Thingy from './Thingy'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Redux Intro</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Thingy />
      </div>
    );
  }
}

export default App;
