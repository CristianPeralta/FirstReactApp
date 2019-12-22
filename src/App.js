import React, { useState } from 'react';
import lul from './lul.png';
import Book from './Book/Book';
import './App.css';

const app = props => {
  const [ booksState, setBooksState ] = useState({
    books: [
      { id: 123, title: "The Host", price: 74 },
      { id: 124, title: "At First Sight", price: 45 },
      { id: 125, title: "Walking in Zen Sitting in Zen", price: 18 },
      { id: 126, title: "Asterix The Gaul", price: 69 }
    ],
  });

  const [ showBooksState, setShowBooksState ] = useState(false);

  const updateTitleHandler = (event, id) => {
    const books = [...booksState.books];
    const index = books.findIndex(b => (b.id === id));
    books[index] = {
      ...books[index],
      title: event.target.value,
    };
    setBooksState({ books });
  };

  const toggleBooksGandler = () => {
    setShowBooksState(!showBooksState);
  };

  const deleteBookHandler = (bookIndex) => {
    const booksUpdated = [...booksState.books];
    booksUpdated.splice(bookIndex, 1);
    setBooksState({ books: booksUpdated });
  };

  let books = null;
  if (showBooksState) {
    books = booksState.books.map((b, index) => {
      return <Book
        key={b.id}
        title={b.title}
        price={b.price}
        click={() => deleteBookHandler(index)}
        changed={(event) => updateTitleHandler(event, b.id)}/>
    });
  }

  const style = {
    backGroundColor: `white`,
    font: `inherit`,
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={lul} className="App-logo" alt="logo" />
        <h1 className="App-title">Hey Guys</h1>
        <button style={style} onClick={toggleBooksGandler} >Show Books</button>
        { books }
      </header>
    </div>
  );
}

export default app;
