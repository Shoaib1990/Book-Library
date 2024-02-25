import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import Main from './components/Main';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/books/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
