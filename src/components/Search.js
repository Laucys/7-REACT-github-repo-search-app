import React from 'react';

const Search = ({handleInput, handleSearch}) => {
    return (
        <section className='search'>
            <input
            type='text'
            placeholder='Enter Github repository name'
            className='searchbox'
            onChange={handleInput}
            onKeyPress={handleSearch}
            />
        </section>
    )
}

export default Search;