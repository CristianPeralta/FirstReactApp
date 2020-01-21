import React, { Component } from 'react';
import lul from '../../assets/lul.png';
import Books from '../Books/Books';
import Cockpit from '../Cockpit/Cockpit';
import Aux from "../hoc/Auxiliary";
import withClass from "../hoc/withClass";
import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    books: [
      { id: 123, title: "The Host", price: 74 },
      { id: 124, title: "At First Sight", price: 45 },
      { id: 125, title: "Walking in Zen Sitting in Zen", price: 18 },
      { id: 126, title: "Asterix The Gaul", price: 69 }
    ],
    showBooks: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps (props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[App.js] componentDidUpdate");
  }

  updateTitleHandler = (event, id) => {
    const books = [...this.state.books];
    const index = books.findIndex(b => (b.id === id));
    books[index] = {
      ...books[index],
      title: event.target.value,
    };
    this.setState((prevState, props) => {
      return { books, changeCounter: prevState.changeCounter + 1 };
    });
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
    console.log("[App.js] render")
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
      <Aux classes={classes.App}>
        <header className="">
          <button onClick={() => (this.setState({ showCockpit: false }))}>Remove Cockpit</button>
          <br></br>
          <img src={lul} className={classes.logo} alt="logo" />

          {this.state.showCockpit ? <Cockpit
            appTitle={this.props.appTitle}
            showBooks={this.state.showBooks}
            booksLength={this.state.books.length}
            clicked={this.toggleBooksGandler}
          /> : null}
          { books }
        </header>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
