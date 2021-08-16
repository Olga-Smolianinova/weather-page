import React, { useState } from 'react';

import PropTypes from 'prop-types';

import './Searchbar.css';

export default function Searchbar({ onSubmit }) {
  // useState
  const [query, setQuery] = useState('');

  // Function
  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    //  передача  props onSubmit из App.js для обработки действий когда будет изменяться query
    onSubmit(query);

    //   обновление input
    setQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter your location"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
