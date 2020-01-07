import React, { useState } from 'react';
import lul from '../../assets/lul.png';
import Books from '../Books/Books';
import Cockpit from '../Cockpit/Cockpi';
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

  let books = null;
  if (showBooksState) {
    books = <Books
      books={booksState.books}
      clicked={deleteBookHandler}
      changed={updateTitleHandler}/>
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
        <Cockpit
          showBooks={showBooksState}
          books={booksState.books}
          clicked={toggleBooksGandler}
        />
        { books }
      </header>
    </div>
  );
}

export default app;
