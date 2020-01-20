import React, { Component } from 'react';
import Book from './Book/Book';

class Books extends Component {
    render() {
        console.log("[Books.js] rendering");
        return this.props.books.map((b, index) => <Book
            id={b.id}
            key={b.id}
            title={b.title}
            price={b.price}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, b.id)}/>);
    }
}

export default Books;