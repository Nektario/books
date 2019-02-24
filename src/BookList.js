import React from 'react'
import Book from './Book'

function BookList({books}) {
    return (
        <>
            {books.map(book => 
                <Book key={book.id} book={book}></Book>
            )}
        </>
    )
}

export default BookList