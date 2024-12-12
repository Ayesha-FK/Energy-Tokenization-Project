import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the user is not on the homepage
  const isNotHomePage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prevMenuState) => !prevMenuState);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo" className="logo" />

        {isNotHomePage ? (
          // Show "Go Back" link when not on the main page, without the title attribute
          <div className="go-back" onClick={handleBackClick}>
            Go Back
          </div>
        ) : (
          // Show full navbar when on the main page
          <>
            <ul className={`nav-links ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
              <li><ScrollLink to="hero" smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
              <li><ScrollLink to="program" smooth={true} offset={-260} duration={500}>Products</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} offset={-150} duration={500}>About Us</ScrollLink></li>
              <li><ScrollLink to="campus" smooth={true} offset={-260} duration={500}>Energy Credits</ScrollLink></li>
              <li><ScrollLink to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact Us</ScrollLink></li>
              <li><Link to="/LoginSignup" className="nav-link">Login/Signup</Link></li>
            </ul>

            {/* Menu Icon for Mobile Toggle */}
            <img src={menu_icon} alt="menu icon" className="menu-icon" onClick={toggleMenu} />
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
