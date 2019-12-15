import React, { useState } from 'react';
import lul from './lul.png';
import Book from './Book/Book';
import './App.css';

const app = props => {
  const [ booksState, setBooksState ] = useState({
    books: [
      { title: "The Host", price: 74 },
      { title: "At First Sight", price: 45 },
      { title: "Walking in Zen Sitting in Zen", price: 18 },
      { title: "Asterix The Gaul", price: 69 }
    ],
  });
  const [ anotherState, setAnotherState ] = useState("Hi im another state");

  console.log("booksState", booksState);
  console.log("anotherState", anotherState);

  const updateBookPrices = (event, discount) => {
    console.log("discount");
    console.log(discount);
    setBooksState({
      books: [
        { title: "The Host", price: 74 * (1- (discount/100)) },
        { title: "At First Sight", price: 45 * (1- (discount/100)) },
        { title: "Walking in Zen Sitting in Zen", price: 18 * (1- (discount/100)) },
        { title: "Asterix The Gaul", price: 69 * (1- (discount/100)) }
      ]
    })
  };

  const resetBookPrices = () => {
    setBooksState({
      books: [
        { title: "The Host", price: 74 },
        { title: "At First Sight", price: 45 },
        { title: "Walking in Zen Sitting in Zen", price: 18 },
        { title: "Asterix The Gaul", price: 69 }
      ]
    })
  };

  
  const updateTitleHandler = (event) => {
    setBooksState({
      books: [
        { title: "The Host", price: 74 },
        { title: event.target.value, price: 45 },
        { title: "Walking in Zen Sitting in Zen", price: 18 },
        { title: "Asterix The Gaul", price: 69 }
      ]
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={lul} className="App-logo" alt="logo" />
        <h1 className="App-title">Hey Guys</h1>
        <button onClick={(event => updateBookPrices(event, 50))} >Change Books Prices</button>
        <button onClick={resetBookPrices} >Reset Books Prices</button>
        <Book
          title={booksState.books[0].title}
          price={booksState.books[0].price}/>
        <Book
          title={booksState.books[1].title}
          price={booksState.books[1].price}
          changed={updateTitleHandler}
          click={(event => updateBookPrices(event, 10))}>Popular</Book>
        <Book
          title={booksState.books[2].title}
          price={booksState.books[2].price}>Popular</Book>
        <Book
          title={booksState.books[3].title}
          price={booksState.books[3].price}/>
      </header>
    </div>
  );
}

export default app;
