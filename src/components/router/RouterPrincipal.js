import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import OnBoardingComponent from '../OnBoardingComponent';
import LoginComponent from '../LoginComponent';
import Calendar from 'react-calendar';
import PieChart from '../PieChart';


const RouterPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent/>} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/onboarding" element={<OnBoardingComponent />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/chart" element={<PieChart/>} />


    </Routes>
  );
};

export default RouterPrincipal;