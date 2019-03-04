import React from 'react'
import blankCover from './assets/images/blank-cover.gif'
import './Book.scss'

function Book({book}) {
    function setBookThumbnail(imageLinks) {
        let thumbnailUrl
        if (imageLinks) {
            // remove edge curl from picture
            thumbnailUrl = imageLinks.thumbnail.replace(/&edge=curl/,'')
        } else {
            // the default cover picture if the book doens't have one
            thumbnailUrl = blankCover
        }
        return thumbnailUrl
    }

    return (
        <div className='book--card mdc-elevation--z3 d-flex flex-row'>
            <img className='book--cover-photo'
                src={setBookThumbnail(book.volumeInfo.imageLinks)}
                alt='book cover'
            />
            
            <div className='book--info d-flex flex-col'>
                <h1 className='book--title'>{book.volumeInfo.title}</h1>
                <span className='book--author-publisher'>
                    { book.volumeInfo.authors &&
                        <span>Author: {book.volumeInfo.authors[0]}<br /></span>
                    }
                    { book.volumeInfo.publisher && 
                        <span>Published by: {book.volumeInfo.publisher}</span>
                    }
                </span>
                
                <a
                    className='btn book--more-info-button mdc-elevation--z4'
                    href={book.volumeInfo.previewLink}
                    target='_blank'
                    rel='noopener noreferrer'>
                        More Info
                </a>
            </div>
        </div>
    )
}

export default Book