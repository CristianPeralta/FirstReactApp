import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from "../context/auth-context";

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    useEffect(() => {
      console.log("[cockpit.js] useEffect");
      // Http request (for example)
      toggleBtnRef.current.click();
      return () => {
        console.log("[Cockpit.js] cleanup work in useEffect");
      }
    }, []);

    useEffect(() => {
      console.log("[cockpit.js] 2nd useEffect");
      // Http request (for example)
      return () => {
        console.log("[Cockpit.js] 2nd cleanup work in useEffect");
      }
    });

    let btnClass = '';
    if (props.showBooks) {
        btnClass = classes.Red;
    }
    const assignedClasses = [];
    if (props.booksLength >= 2) {
      assignedClasses.push(classes.green);
    } else if (props.booksLength < 2) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>{props.appTitle}</h1>
            <button
              ref={toggleBtnRef}
              className={btnClass}
              onClick={props.clicked}>
                Show Books
            </button>
            <button onClick={authContext.login}> Log in </button>
        </div>
    );
}
export default React.memo(cockpit);