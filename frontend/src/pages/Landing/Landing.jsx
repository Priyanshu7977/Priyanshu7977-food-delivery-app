import React from "react";
import { useNavigate } from "react-router-dom";
import './Landing.css';

const Landing = ({ user, setShowLogin }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    if (user) {
      navigate("/home");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className="landing">
      <div className="landing-overlay">
        <h1>Order Your Favourite Food</h1>
        <p>Fresh. Fast. Delivered to your door.</p>
        <button onClick={handleStart}>Get Started</button>
      </div>
    </div>
  );
};

export default Landing;