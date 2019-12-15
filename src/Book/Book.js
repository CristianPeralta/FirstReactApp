import React from 'react';

const book = (props) => {
    return (
        <div>
            <p onClick={props.click} >This book called {props.title} cost {props.price}</p>
            <p>{props.children}</p>
        </div>
    );
}
export default book;