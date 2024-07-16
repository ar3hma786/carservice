import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import HomePage from '../Pages/Home/HomePage';
import Services from '../Pages/Services/Services';
import AboutUs from '../Pages/About Us/AboutUs';
import ResourceCenter from '../Pages/ResourceCenter/ResourceCenter';
import Footer from '../Footer/Footer';
import Auth from '../Auth/Auth';
import Dashboard from '../UserDashboard/Dashboard';

function MainPage() {
  return (
    <div>
      <HomePage />
      <Services />
      <AboutUs />
      <ResourceCenter /> 
    </div>
  );
}

function Routers() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<MainPage />} />
        <Route path="/login" element={<MainPage />} />
        <Route path="/forgot-password" element={<MainPage />} />
        <Route path="/update-password" element={<MainPage/>} />
        <Route path="/update-password-completed" element={<MainPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Auth/>
      <Footer />
    </Router>
  );
}

export default Routers;
