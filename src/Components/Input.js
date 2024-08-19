import React from "react";
import './Input.css'

const Input = ({ searchTerm, onSearchChange, onSearchClick }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        id="search"
        placeholder="Search destinations"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button className="search-btn" onClick={onSearchClick}>
        Search
      </button>
    </div>
  );
};

export default Input;
