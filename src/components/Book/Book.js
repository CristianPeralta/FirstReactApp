import React from 'react';
import classes from './Book.css';

const book = (props) => {
    if (props.id < 100) {
        throw new Error('Something went wrong');
    }
    return (
        <div className={classes.Book}>
            <p onClick={props.click} >This book called {props.title} cost {props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.title} />
        </div>
    );
}
export default book;