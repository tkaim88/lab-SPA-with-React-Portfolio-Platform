// src/components/SearchBar.jsx
// Search bar component - filters projects based on user input

import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-section">
      <h2>Search Projects</h2>
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {/* Show clear button only if there's text in search */}
        {searchTerm && (
          <button 
            className="clear-btn"
            onClick={() => onSearchChange('')}
          >
            ✕
          </button>
        )}
      </div>
      {/* Show search results info */}
      {searchTerm && (
        <p className="search-info">
          Showing results for: <strong>"{searchTerm}"</strong>
        </p>
      )}
    </div>
  );
}

export default SearchBar;