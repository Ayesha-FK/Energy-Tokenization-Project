// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2024 GreenSync. All Rights Reserved.</p>
      <ul>
        <li><Link to="/terms-of-service" className="footer-link">Terms of Service</Link></li>
        <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
      </ul>
    </div>
  );
}

export default Footer;
