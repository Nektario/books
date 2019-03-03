import React, { useState } from 'react'
import './SearchBar.scss'

function SearchBar({onSearch}) {
    const [searchTerms, setSearchTerms] = useState('')

    function handleUserInput(e) {
        setSearchTerms(e.target.value)
    }

    function submitSearch(e) {
        e.preventDefault()
        // don't submit an empty search query
        if (searchTerms.trim() !== '') {
            onSearch(searchTerms.trim().replace(/\s+/, ' '))
        }
    }

    return (
        <form id='search-container' onSubmit={submitSearch}>
            <input
                type='text'
                id='search-bar'
                placeholder='Search Books'
                aria-label='search-bar'
                value={searchTerms}
                onChange={handleUserInput}
            />
            <button
                type='submit'
                id='search-button'
                className='btn'
                onClick={submitSearch}>
                    <i id='search-icon' className='material-icons'>search</i>
            </button>
        </form>
    )
}

export default SearchBar