// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./about/About";
import Ace from "./ace/Ace";
import Contact from "./contact/Contact";
import Property from "./property/Property";
import Services from "./services/Services";
import Terms from "./terms/Terms";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ace" element={<Ace />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/property" element={<Property />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
