import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './Pages/Dashboard/Dashboard';
import Layout from './Pages/LandingPages/LayoutArea/Layout';
import Login from './Pages/AuthPages/LoginPage/Login';
import Register from './Pages/AuthPages/RegisterPage/Register';
import HomePage from './Pages/LandingPages/Homepage/HomePage';
import AboutPage from './Pages/LandingPages/AboutPage/AboutPage';
import Services from './Pages/LandingPages/Services/Services';
import ContactUs from './Pages/LandingPages/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<Services/>} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
