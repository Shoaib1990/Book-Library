import React, { useState } from 'react';

const SearchBar = ({searchName}) => {

    const [book, setBook] = useState('');

    function handleChange(e) {
        const book = e.target.value;
        setBook(book);
    }

    function handleSubmit(e) {
        e.preventDefault();
        searchName(book.replace(/\s+/g, '+').trim());
        console.log(book);
    }
    return (
        <div className='form_container'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Search for books e.g, React'
                    onChange={handleChange}
                />
                <button type='submit'>
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;