import React, { useState } from 'react';
import SearchBar from './SearchBar'
import BookList from './BookList'
import './App.css';

const API_URL = 'https://www.googleapis.com/books/v1/volumes?printType=books&startIndex=0&maxResults=10&fields=kind,totalItems,items(id,selfLink,volumeInfo(title,authors,publisher,publishedDate,description,imageLinks/thumbnail,previewLink))'
const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY

function App() {
    const [books, setBooks] = useState([])

    function handleSearch(searchTerms) {
        const query = searchTerms.split(' ').join('+')
        const url = `${API_URL}&key=${API_KEY}&q=${query}`

        fetch(url)
            .then(response => response.json())
            .then(bookResponse => { 
                setBooks(bookResponse.items)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='App d-flex flex-col'>
            <div id='container' className='d-flex flex-col'>
                <header>
                    <SearchBar onSearch={handleSearch}></SearchBar>
                </header>

                <main className='d-flex'>
                    <BookList books={books} />
                </main>
            </div>
        </div>
    )
}

export default App
