import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

function Layout() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="layout-container">
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> 
      <div className="main-content">
        <Outlet />  
      </div>
      <Footer />
    </div>
  );
}

export default Layout;