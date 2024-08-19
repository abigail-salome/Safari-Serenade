
import React, { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import './DestinationList.css'; 

export default function DestinationList() {
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    fetch('https://phase-2-project-gamma.vercel.app/destinations') 
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleFavorite = (destination) => {
    const isFavorite = favorites.some(fav => fav.id === destination.id);
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.id !== destination.id));
    } else {
      setFavorites([...favorites, destination]);
    }
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search destinations"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='search-btn'>Search</button>
      </div>
      <div className="destination-list">
        {filteredDestinations.map(destination => (
          <DestinationCard 
            key={destination.id} 
            destination={destination} 
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favorites.some(fav => fav.id === destination.id)}
          />
        ))}
      </div>
    </div>
  );
}
