import React, { useState } from 'react';
import Radium, { StyleRoot } from 'radium';
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

  const style = {
    backgroundColor: `green`,
    color: 'white',
    font: `inherit`,
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
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
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    };
  }

  const classes = [];
  if (booksState.books.length >= 2) {
    classes.push('green');
  } else if (booksState.books.length < 2) {
    classes.push('bold');
  }

  return (
    <StyleRoot>
      <div className="App">
        <header className="">
          <img src={lul} className="App-logo" alt="logo" />
          <h1 className={classes.join(' ')}>Hey Guys</h1>
          <button style={style} onClick={toggleBooksGandler} >Show Books</button>
          { books }
        </header>
      </div>
    </StyleRoot>
  );
}

export default Radium(app);
