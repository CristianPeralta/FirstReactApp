import React, { Component } from 'react';
import Book from './Book/Book';

class Books extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Boooks.js] shouldComponentUpdate");
        if (nextProps.books !== this.props.books ) {
            return true;
        } else { 
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Books.js] getSnapshotBeforeUpdate");
        return { message: "Snapshot"};
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log("[Books.js] componentDidUpdate");
        console.log(Snapshot);
    }

    componentWillUnmount() {
        console.log("[Books.js] componentWillUnmount");
    }

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