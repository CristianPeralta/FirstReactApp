import React from 'react';
import Radium from 'radium';
import './Book.css';

const book = (props) => {
    return (
        <div className="Book">
            <p onClick={props.click} >This book called {props.title} cost {props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.title} />
        </div>
    );
}
export default Radium(book);