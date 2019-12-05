import React, { Component } from 'react';
import lul from './lul.png';
import Book from './Book/Book';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={lul} className="App-logo" alt="logo" />
          <h1 className="App-title">Hey Guys</h1>
          <Book title="The Host" price="30"/>
          <Book title="At First Sight" price="15"><p>50% Off</p></Book>
          <Book title="Walking in Zen Sitting in Zen" price="64"><p>25%Off</p></Book>
          <Book title="Asterix The Gaul" price="34"/>
        </header>
      </div>
    );
  }
}

export default App;
