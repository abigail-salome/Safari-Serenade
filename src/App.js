import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import DestinationList from "./Components/DestinationList";
import BookingForm from "./Components/BookingForm";
import Favorites from "./Components/Favorites";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<DestinationList />} />
        <Route path="/booking/:id" element={<BookingForm />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
