import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { FiSearch } from "react-icons/fi";

const App = () => {
  const [searchresults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
        );
        setSearchResults(response.data.items);
      } catch (error) {
        console.error('cant find your search. please try again', error);
      }
    };

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (query.trim()) {
      setTypingTimeout(
        setTimeout(() => {
          search();
        }, 300)
      );
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const getRandomColor = () => {
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="app__Search">
      <h1>
        <span className="google-text">Google</span>{" "}
        <span className="books-text">Books</span>{" "}
        <span className="search-text">Search</span>
      </h1>

      <div className="app__search-container">
        <input type="text" value={query} onChange={handleInputChange} placeholder="Search..." className="searchbar" />
        <button className="search-button"><FiSearch /></button>
      </div>

      <div className="app__book-list">
        {searchresults.map((book) => (
          <div key={book.id} className="book-item" style={{ backgroundColor: getRandomColor() }}>
            {book.volumeInfo.imageLinks && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="book-cover" />
            )}
            <a href={book.selfLink} className="book-title">
              {book.volumeInfo.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
