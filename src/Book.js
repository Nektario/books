import React from 'react'
import './Book.scss'

function Book({book}) {
    // function resizeBookDescription(description) {
    //     if (description && description.length > 150) {
    //         description = description.substr(0, 147) + '...'
    //     }
    //     return description
    // }

    function setBookThumbnail(imageLinks) {
        let thumbnailUrl
        if (imageLinks) {
            // set the zoom to 10 for a better quality picture & remove edge curl from picture
            thumbnailUrl = imageLinks.thumbnail.replace(/zoom=\d+/, 'zoom=10')
            thumbnailUrl = thumbnailUrl.replace(/&edge=curl/,'')
        } else {
            // the default picture if the book doens't have one
            thumbnailUrl = 'http://lgimages.s3.amazonaws.com/gc-md.gif'
        }
        console.log(thumbnailUrl)
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
                {/* <p className='book--description'>{resizeBookDescription(book.volumeInfo.description)}</p> */}
                <span className='book--author'>
                    Author: {book.volumeInfo.authors[0]}
                    { book.volumeInfo.publisher && 
                        <span><br />Published by: {book.volumeInfo.publisher}</span>
                    }
                </span>

                <button
                    className='book--more-info-button mdc-elevation--z4'>
                    more info
                </button>
            </div>
        </div>
    )
}

export default Book