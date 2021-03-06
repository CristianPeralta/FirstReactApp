import React, { Component } from 'react';
import classes from './Book.css';
import Aux from "../../hoc/Auxiliary";
import withClass from "../../hoc/withClass";
import AuthContext from "../../context/auth-context";
import PropTypes from "prop-types";

class Book extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        console.log("[Book.js] rendering");
        return (
            <Aux>
                {this.context.authenticated ? (<p>Authenticated!</p>) : (<p>Log in please</p>)}
                <p onClick={this.props.click} >This book called {this.props.title} cost {this.props.price}</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    ref={this.inputElementRef}
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
    isAuth: PropTypes.bool
};

export default withClass(Book, classes.Book);