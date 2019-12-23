import React from 'react';
import Radium from 'radium';
import './Book.css';

const book = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Book" style={style}>
            <p onClick={props.click} >This book called {props.title} cost {props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.title} />
        </div>
    );
}
export default Radium(book);