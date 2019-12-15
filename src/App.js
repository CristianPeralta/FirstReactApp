import React, { useState } from 'react';
import lul from './lul.png';
import Book from './Book/Book';
import './App.css';

const app = props => {
  const [ booksState, setBooksState ] = useState({
    books: [
      { title: "The Host", price: 85 },
      { title: "At First Sight", price: 39 },
      { title: "Walking in Zen Sitting in Zen", price: 23 },
      { title: "Asterix The Gaul", price: 74 }
    ],
  });
  const [ anotherState, setAnotherState ] = useState("Hi im another state");

  console.log("booksState", booksState);
  console.log("anotherState", anotherState);

  const updateBookPrices = () => {
    setBooksState({
      books: [
        { title: "The Host", price: 74 },
        { title: "At First Sight", price: 45555 },
        { title: "Walking in Zen Sitting in Zen", price: 18 },
        { title: "Asterix The Gaul", price: 69 }
      ]
    })
  };

  const resetBookPrices = () => {
    setBooksState({
      books: [
        { title: "The Host", price: 85 },
        { title: "At First Sight", price: 39 },
        { title: "Walking in Zen Sitting in Zen", price: 23 },
        { title: "Asterix The Gaul", price: 74 }
      ]
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={lul} className="App-logo" alt="logo" />
        <h1 className="App-title">Hey Guys</h1>
        <button onClick={updateBookPrices} >Change Books Prices</button>
        <button onClick={resetBookPrices} >Reset Books Prices</button>
        <Book title={booksState.books[0].title} price={booksState.books[0].price}/>
        <Book title={booksState.books[1].title} price={booksState.books[1].price} >50% Off</Book>
        <Book title={booksState.books[2].title} price={booksState.books[2].price}>25% Off</Book>
        <Book title={booksState.books[3].title} price={booksState.books[3].price}/>
      </header>
    </div>
  );
}

export default app;
