// DashboardRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../UserDashboard/Dashboard';
import Claims from '../UserDashboard/Claims';
import SubmitClaim from '../UserDashboard/SubmitClaim';
import ThankYou from '../UserDashboard/Thankyou';

function DashboardRouter() {
  return (
    <>
      <Dashboard />
      <Routes>
        <Route path="/dashboard">
          <Route path="claims" element={<Claims />} />
          <Route path="claims/submit-claim" element={<SubmitClaim />} />
          <Route path="claims/submit-claim/thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </>
  );
}

export default DashboardRouter;
