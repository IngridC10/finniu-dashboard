import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import OnBoardingComponent from '../OnBoardingComponent';
import LoginComponent from '../LoginComponent';
import Calendar from 'react-calendar';
import PieChart from '../PieChart';
import CurveChart from '../CurveChart';


const RouterPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent/>} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/onboarding" element={<OnBoardingComponent />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/chart" element={<PieChart/>} />
      <Route path="/curve-chart" element={<CurveChart/>} />


    </Routes>
  );
};

export default RouterPrincipal;