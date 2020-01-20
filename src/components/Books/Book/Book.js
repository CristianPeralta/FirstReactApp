import React, { Component } from 'react';
import classes from './Book.css';

class Book extends Component {
    render() {
        console.log("[Book.js] rendering")
        return (
            <div className={classes.Book}>
                <p onClick={this.props.click} >This book called {this.props.title} cost {this.props.price}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.title} />
            </div>
        );
    }
}

export default Book;