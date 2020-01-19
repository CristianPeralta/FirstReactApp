import React from 'react';
import Book from './Book/Book';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const books = (props) => props.books.map((b, index) => {
    console.log("[Books.js] rendering")
    return <ErrorBoundary key={b.id}>
        <Book
            id={b.id}
            title={b.title}
            price={b.price}
            click={() => props.clicked(index)}
            changed={(event) => props.changed(event, b.id)}/>
    </ErrorBoundary>
});
export default books;