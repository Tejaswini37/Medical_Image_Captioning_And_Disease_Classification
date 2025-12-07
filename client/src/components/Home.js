import React from 'react';
import { Link } from 'react-router-dom';
import './model.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="card">
        <h1>Welcome to Medical Image Captioning</h1>
        <p className="subtitle">Upload a chest X-ray and generate a radiology-style caption using AI.</p>

        <Link to="/llmmodel">
          <button className="primary-btn">Start Captioning</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
