import React, { useState } from 'react';
import SearchBar from './SearchBar'
import BookList from './BookList'
import Loading from './Loading'
import './App.scss';

const API_URL = 'https://www.googleapis.com/books/v1/volumes?printType=books&startIndex=0&maxResults=10&fields=kind,totalItems,items(id,selfLink,volumeInfo(title,authors,publisher,publishedDate,description,imageLinks/thumbnail,previewLink))'
const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY

function App() {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    function handleSearch(searchTerms) {
        const query = searchTerms.split(' ').join('+')
        const url = `${API_URL}&key=${API_KEY}&q=${query}`

        setBooks([])
        setIsError(false)
        setIsLoading(true)

        fetch(url)
            .then(response => response.json())
            .then(bookResponse => {
                setIsLoading(false)
                
                if (bookResponse.error) {
                    setIsError(true)
                } else {
                    setBooks(bookResponse.items)
                }
            })
            .catch(() => {
                setIsError(true)
            })
    }

    return (
        <div className='d-flex flex-col flex-center'>
            <div id='container' className='d-flex flex-col'>
                <header className='d-flex flex-col flex-center'>
                    <h1 id='title'>Book Search</h1>
                    <SearchBar onSearch={handleSearch}></SearchBar>
                </header>
                
                <main className='d-flex flex-center'>
                    {isLoading && <Loading />}
                    {isError && <div id='status-area'>Search Failed</div>}
                    <BookList books={books} />
                </main>
            </div>
        </div>
    )
}

export default App
