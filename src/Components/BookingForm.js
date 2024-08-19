import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookingForm.css";

export default function BookingForm() {
  const { destinationId } = useParams(); // Get destinationId from URL params
  const [destination, setDestination] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  // Fetch the destination details
  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${destinationId}`)
      .then((response) => response.json())
      .then((data) => setDestination(data))
      .catch((error) => console.error("Error fetching destination:", error));
  }, [destinationId]);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the booking data with destinationId
    const newBooking = {
      ...formData,
      destinationId: destinationId, // Attach the destinationId to the booking
    };

    // POST request to save booking in the db.json file
    fetch("http://localhost:4000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((response) => {
        if (response.ok) {
          alert("Booking confirmed!");
        } else {
          alert("Failed to book. Please try again.");
        }
      })
      .catch((error) => console.error("Error submitting booking:", error));
  };

  return (
    <div className="container">
      <div className="booking-form">
        <h1 className="book-destination-title">
          Booking Form for {destination ? destination.name : "Destination"}
        </h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </label>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
