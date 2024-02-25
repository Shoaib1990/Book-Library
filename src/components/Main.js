import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Books from './Books';
import Header from './Header';
import Footer from "./Footer";


function Main() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState('react');
  const [apiKey, setApiKey] = useState('AIzaSyAdhldfich2CimQosSXfvY7VAu5lr_BXrY');

  const searchName = name => {
    setName(name)
  }

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=${apiKey}&maxResults=30`)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setBooks(data);
      })
      .catch(err => {
        console.log(err.message);
      })
  }, [name]);
  return (
    <div className="main">
      
        <Header />
        {/* Passing props/var 'searchName' to grap search term */}
        <SearchBar searchName={searchName} /> 
        <Books searchedBooks={books} />
        <Footer />
        
    </div>
  );
}

export default Main;
