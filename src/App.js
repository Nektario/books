import React, { useState } from 'react';
import SearchBar from './SearchBar'
import BookList from './BookList'
import './App.css';

const apiUrl = 'https://www.googleapis.com/books/v1/volumes?printType=books&startIndex=0&maxResults=10&fields=kind,totalItems,items(id,volumeInfo(title,authors,publisher,publishedDate,description,imageLinks))'

function App() {
    const [books, setBooks] = useState([])

    function handleSearch(searchTerms) {
        const query = searchTerms.split(' ').join('+')

        fetch(`${apiUrl}&q=${query}`)
            .then(response => response.json())
            .then(bookResponse => { 
                console.log(bookResponse);
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
