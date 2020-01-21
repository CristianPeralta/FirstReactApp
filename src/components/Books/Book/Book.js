import React, { Component } from 'react';
import classes from './Book.css';
import Aux from "../../hoc/Auxiliary";
import withClass from "../../hoc/withClass";
import PropTypes from "prop-types";

class Book extends Component {
    componentDidMount() {
        this.inputElement.focus();
    };
    render() {
        console.log("[Book.js] rendering");
        return (
            <Aux>
                <p onClick={this.props.click} >This book called {this.props.title} cost {this.props.price}</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    ref={(inputEl) => { this.inputElement = inputEl}}
                    onChange={this.props.changed}
                    value={this.props.title}
                />
            </Aux>
        );
    }
}

Book.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    title: PropTypes.string,
    price: PropTypes.number,
};

export default withClass(Book, classes.Book);