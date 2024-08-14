import React from 'react'

const Input = () => {
  return (
    <div className="search-container">
        <input type="text" id="search" placeholder="search destinations"></input>
        <button id="search-btn">Search</button>
    </div>
  )
}

export { Input };