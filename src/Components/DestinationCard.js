import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DestinationCard.css";

export default function DestinationCard({
  destination,
  onToggleFavorite,
  isFavorite,
}) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteToggle = () => {
    setFavorite(!favorite);
    onToggleFavorite(destination);
  };

  return (
    <div className="destination-card">
      <h2>{destination.name}</h2>
      <p>{destination.location}</p>
      <p>{destination.description}</p>
      <div className="image-gallery">
        {destination.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Destination ${destination.name} ${index}`}
            className="destination-image"
          />
        ))}
      </div>
      <div className="card-actions">
        <Link to={`/booking/${destination.id}`}>
          <button className="book-btn">Book</button>
        </Link>
        <button
          className={`favorite-btn ${favorite ? "favorite" : ""}`}
          onClick={handleFavoriteToggle}
        >
          {favorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
