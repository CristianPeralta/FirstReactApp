import React from 'react';
import classes from './Book.css';

const book = (props) => {
    return (
        <div className={classes.Book}>
            <p onClick={props.click} >This book called {props.title} cost {props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.title} />
        </div>
    );
}
export default book;