import React from "react";
import { Link } from "react-router-dom";
import "./model.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MedAI Captioner</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/llmmodel">Captioning</Link>
      </div>
    </nav>
  );
};

export default Navbar;
