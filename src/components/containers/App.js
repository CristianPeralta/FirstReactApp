import React, { Component } from 'react';
import lul from '../../assets/lul.png';
import Books from '../Books/books';
import Cockpit from '../Cockpit/Cockpi';
import classes from './App.css';

class App extends Component {
  state = {
    books: [
      { id: 123, title: "The Host", price: 74 },
      { id: 124, title: "At First Sight", price: 45 },
      { id: 125, title: "Walking in Zen Sitting in Zen", price: 18 },
      { id: 126, title: "Asterix The Gaul", price: 69 }
    ],
    showBooks: false
  };
  updateTitleHandler = (event, id) => {
    const books = [...this.state.books];
    const index = books.findIndex(b => (b.id === id));
    books[index] = {
      ...books[index],
      title: event.target.value,
    };
    this.setState({ books });
  };

  toggleBooksGandler = () => {
    const doesShow = this.state.showBooks;
    this.setState({ showBooks: !doesShow });
  };

  deleteBookHandler = (bookIndex) => {
    const booksUpdated = [...this.state.books];
    booksUpdated.splice(bookIndex, 1);
    this.setState({ books: booksUpdated });
  };

  render() {
    let books = null;
    if (this.state.showBooks) {
      books = <Books
        books={this.state.books}
        clicked={this.deleteBookHandler}
        changed={this.updateTitleHandler}/>
    }
  
    const assignedClasses = [];
    if (this.state.books.length >= 2) {
      assignedClasses.push(assignedClasses.green);
    } else if (this.state.books.length < 2) {
      assignedClasses.push(assignedClasses.bold);
    }

    return (
      <div className={classes.App}>
        <header className="">
          <img src={lul} className={classes.logo} alt="logo" />
          <Cockpit
            showBooks={this.state.showBooks}
            books={this.state.books}
            clicked={this.toggleBooksGandler}
          />
          { books }
        </header>
      </div>
    );
  }
}

export default App;
