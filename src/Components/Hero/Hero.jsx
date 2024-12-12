import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import background_video from '../../assets/background-video.mp4'; // Ensure the video is saved in this path

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/detailed-info'); // Path to the detailed info page
  };

  return (
    <div className='hero container'>
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted>
        <source src={background_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-text">
        <h1>Powering a Sustainable Future Together</h1>
        <p>
          GreenSync is a revolutionary online marketplace that connects consumers, businesses, and energy providers to trade and access clean, renewable energy.
          Our platform empowers you to contribute to a sustainable future, reduce your carbon footprint, and support a greener planet through innovative energy solutions.
          Join us on our mission to sync the world with eco-friendly power sources, making renewable energy accessible and affordable for all.
        </p>
        <button className='hero-btn' onClick={handleButtonClick}>
          Explore More <img src={dark_arrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
