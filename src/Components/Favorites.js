
import React, { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import './Favorites.css'; 

export default function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const handleToggleFavorite = (destination) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== destination.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container">
      <h1 className="favorites-title">Favorites</h1>
      {favorites.length > 0 ? (
        <div className="destination-list">
          {favorites.map(destination => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={true} 
            />
          ))}
        </div>
      ) : (
        <p>No favorite destinations added yet.</p>
      )}
    </div>
  );
}
