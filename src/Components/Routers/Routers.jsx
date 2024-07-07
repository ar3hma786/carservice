import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import HomePage from '../Home/HomePage';
import Services from '../Services/Services';
import AboutUs from '../About Us/AboutUs';
import ResourceCenter from '../ResourceCenter/ResourceCenter';
import EnquiryFillForm from '../Enquiry/EnquiryFillForm'
import EnquirySubmitted from '../Enquiry/EnquirySubmitted';
import Footer from '../Footer/Footer';

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
        <Route path="/enquiry-form" element={<EnquiryFillForm/>}/>
        <Route path="/enquiry-submitted" element={<EnquirySubmitted/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routers;
