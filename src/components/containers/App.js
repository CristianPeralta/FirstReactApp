import React, { useState } from 'react';
import lul from '../../assets/lul.png';
import Book from '../Books/Book/Book';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import classes from './App.css';

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

  let btnClass = '';

  let books = null;
  if (showBooksState) {
    books = booksState.books.map((b, index) => {
      return <ErrorBoundary key={b.id}>
        <Book
          id={b.id}
          title={b.title}
          price={b.price}
          click={() => deleteBookHandler(index)}
          changed={(event) => updateTitleHandler(event, b.id)}/>
      </ErrorBoundary>
    });
    /* style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }; */
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (booksState.books.length >= 2) {
    assignedClasses.push(assignedClasses.green);
  } else if (booksState.books.length < 2) {
    assignedClasses.push(assignedClasses.bold);
  }

  return (
    <div className={classes.App}>
      <header className="">
        <img src={lul} className={classes.logo} alt="logo" />
        <h1 className={assignedClasses.join(' ')}>Hey Guys</h1>
        <button className={btnClass} onClick={toggleBooksGandler} >Show Books</button>
          { books }
      </header>
    </div>
  );
}

export default app;
