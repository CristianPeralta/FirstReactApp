import React, { Component } from 'react';
import lul from './lul.png';
import Book from './Book/Book';
import './App.css';

class App extends Component {
  state = {
    books: [
      { title: "The Host", price: 85 },
      { title: "At First Sight", price: 39 },
      { title: "Walking in Zen Sitting in Zen", price: 23 },
      { title: "Asterix The Gaul", price: 74 }
    ]
  }
  updateBookPrices = () => {
    this.setState({
      books: [
        { title: "The Host", price: 74 },
        { title: "At First Sight", price: 34 },
        { title: "Walking in Zen Sitting in Zen", price: 18 },
        { title: "Asterix The Gaul", price: 69 }
      ]
    })
  }
  resetBookPrices = () => {
    this.setState({
      books: [
        { title: "The Host", price: 85 },
        { title: "At First Sight", price: 39 },
        { title: "Walking in Zen Sitting in Zen", price: 23 },
        { title: "Asterix The Gaul", price: 74 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={lul} className="App-logo" alt="logo" />
          <h1 className="App-title">Hey Guys</h1>
          <button onClick={this.updateBookPrices} >Change Books Prices</button>
          <button onClick={this.resetBookPrices} >Reset Books Prices</button>
          <Book title={this.state.books[0].title} price={this.state.books[0].price}/>
          <Book title={this.state.books[1].title} price={this.state.books[1].price} ><p>50% Off</p></Book>
          <Book title={this.state.books[2].title} price={this.state.books[2].price}><p>25%Off</p></Book>
          <Book title={this.state.books[3].title} price={this.state.books[3].price}/>
        </header>
      </div>
    );
  }
}

export default App;
