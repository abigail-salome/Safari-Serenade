import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="button-container">
        <button>Safari Serenade, Discover the Wonders of Kenya</button>
        <button>Phone: +254-101-295-214</button>
        <button>Contact</button>
      </div>
      <div className="heading-container">
        <h1>Safari Serenade</h1>
        <div className="nav-buttons">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/destinations">
            <button>Destinations</button>
          </Link>
        </div>
      </div>
      <div className="info-container">
        <h2>
          <span className="black-text">Popular</span>
          <span className="orange-text">Destinations</span>
        </h2>
        <p>
          Explore the stunning landscapes and diverse wildlife of Kenya, from
          national reserve safaris to traditional Swahili culture. Immerse
          yourself in the unique experiences this destination has to offer.
        </p>
      </div>
    </header>
  );
};

export default Header;
