import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
      console.log("[cockpit.js] useEffect");
      // Http request (for example)
      setTimeout(() => {
        alert("Saved data to cloud!");
      }, 1000);
    }, [props.books]);

    let btnClass = '';
    if (props.showBooks) {
        btnClass = classes.Red;
    }
    const assignedClasses = [];
    if (props.books.length >= 2) {
      assignedClasses.push(classes.green);
    } else if (props.books.length < 2) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>{props.appTitle}</h1>
            <button className={btnClass} onClick={props.clicked} >Show Books</button>
        </div>
    );
}
export default cockpit;