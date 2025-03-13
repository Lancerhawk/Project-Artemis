import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Layout from './Pages/LandingPages/LayoutArea/Layout';
import Login from './Pages/AuthPages/LoginPage/Login';
import Register from './Pages/AuthPages/RegisterPage/Register';
import HomePage from './Pages/LandingPages/Homepage/HomePage';
import AboutPage from './Pages/LandingPages/AboutPage/AboutPage';
import Services from './Pages/LandingPages/Services/Services';
import ContactUs from './Pages/LandingPages/ContactUs/ContactUs';
import LayoutDashboard from './Pages/Dashboard/LayoutDashboard/LayoutDashboard';
import Dashboard from './Pages/Dashboard/UserDashboard/UserDashboard';
import SoloDev_Guild from './Pages/Dashboard/Dev-Guild/SoloDev_Guild';
import GroupDev_Guild from './Pages/Dashboard/Dev-Guild/GroupDev_Guild';
import Settings_Area from './Pages/Settings/Settings_Area';
import Busi_Guild from "./Pages/Dashboard/Busi-Guild/Busi_Guild";
import Creative_Guild from "./Pages/Dashboard/Creative-Guild/Creative_Guild";
import Tutor_Guild from "./Pages/Dashboard/Tutor-Guild/Tutor_Guild";
import Report from "./Pages/Dashboard/Report/Report";
import TechNews from "./Pages/Dashboard/TechNews/TechNews";
import MarketCenter from "./Pages/Dashboard/MarketCenter/MarketCenter";
import Notifications from "./Pages/Dashboard/Notifications/Notifications";
import ForgotPass from "./Pages/AuthPages/ForgotPass/ForgotPass";
import Recovery from "./Pages/AuthPages/Recovery/Recovery";

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpass" element={<ForgotPass />} />
          <Route path="recovery" element={<Recovery/>} />
        </Route>

        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} /> 
          <Route path="solo-dev-guild" element={<SoloDev_Guild />} />
          <Route path="group-dev-guild" element={<GroupDev_Guild />} />
          <Route path="settings" element={<Settings_Area />} />
          <Route path="busi-guild" element={<Busi_Guild />} />
          <Route path="creative-guild" element={<Creative_Guild />} />
          <Route path="tutor-guild" element={<Tutor_Guild />} />
          <Route path="report" element={<Report />} />
          <Route path="technews" element={<TechNews />} />
          <Route path="marketcenter" element={<MarketCenter />} />
          <Route path="notification" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
