import React, { Component } from 'react';
import SearchBar from './SearchBar'
import BookList from './BookList'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App d-flex flex-col'>
                <div id='container' className='d-flex flex-col'>
                    <header>
                        <SearchBar></SearchBar>
                    </header>

                    <main id='book-container' className='d-flex'>
                        <BookList />
                    </main>
                </div>
            </div>
        )
    }
}

export default App
