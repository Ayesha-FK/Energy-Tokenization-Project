// src/components/Campus.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Campus.css';
import { Link } from 'react-router-dom';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';
// import energy1 from '../../assets/energy1.png';

const Campus = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/LoginSignup');
  };
  
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <Link to="/smart-contract">
        <button className='campus-btn dark-btn'>
          See More Here <img src={white_arrow} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Campus;
