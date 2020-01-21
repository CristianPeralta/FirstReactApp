import React, { Component } from 'react';
import classes from './Book.css';
import Aux from "../../hoc/Auxiliary";

class Book extends Component {
    render() {
        console.log("[Book.js] rendering");
        return (
            <Aux>
                <p onClick={this.props.click} >This book called {this.props.title} cost {this.props.price}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.title} />
            </Aux>
        );
    }
}

export default Book;