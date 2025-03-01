import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/Logo/ArtenisLogo.png';

function Navbar({ toggleTheme, isDarkTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); 
  };

  const closeSidebar = () => {
    setIsOpen(false); 
  };

  return (
    <div>
      {isOpen && <div className="backdrop" onClick={closeSidebar}></div>}

      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-area">
            <img src={Logo} alt="Logo" className="logo" draggable="false" />
          </div>

          <button
            className={`burger-menu ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            {isOpen ? '☓' : '☰'} 
          </button>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  end
                  onClick={closeSidebar} 
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeSidebar} 
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeSidebar} 
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeSidebar} 
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <button
              className="theme-toggle"
              onClick={() => {
                toggleTheme();
                closeSidebar(); 
              }}
              aria-label="Toggle theme"
            >
              {isDarkTheme ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
