import React, { useState } from 'react'
import './SearchBar.scss'

function SearchBar({onSearch}) {
    const [searchTerms, setSearchTerms] = useState('')

    function handleUserInput(e) {
        setSearchTerms(e.target.value)
    }

    function handleKeyUp(e) {
        // don't submit an empty search query
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            onSearch(searchTerms)
        }
    }

    return (
        <input
            type='text'
            id='search-bar'
            placeholder='Search Books'
            aria-label='search-bar'
            value={searchTerms}
            onChange={handleUserInput}
            onKeyUp={handleKeyUp}
        />
    )
}

export default SearchBar