import React, { Component } from 'react';
import lul from './lul.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={lul} className="App-logo" alt="logo" />
          <h1 className="App-title">Hey Guys</h1>
        </header>
      </div>
    );
  }
}

export default App;
