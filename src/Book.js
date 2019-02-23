import React from 'react'
import './Book.scss'

function Book({book}) {
    return (
        <div className='book--card mdc-elevation--z2 d-flex flex-row'>
            <img className='book--cover-photo' src={book.volumeInfo.imageLinks.thumbnail} alt='book cover photo' />

            <div className='book--info'>
                <h1 className='book--title'>{book.volumeInfo.title}</h1>
                {/* <p className='book--description'>{book.volumeInfo.description}</p> */}
                {/* <h4 className='book--author'>by: {book.volumeInfo.authors[0]}</h4>
                <h4 className='book--publisher'>Publisher: {book.volumeInfo.publisher}</h4> */}
            </div>
        </div>
    )
}

export default Book