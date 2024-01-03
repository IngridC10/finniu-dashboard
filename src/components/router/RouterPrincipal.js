import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import OnBoardingComponent from '../OnBoardingComponent';
import LoginComponent from '../LoginComponent';
import PieChartComponent from '../PieChartComponent';
import SideBarComponent from '../SideBarComponent';
import CalendarComponent from '../CalendarComponent';
import CurveChartComponent from '../CurveChartComponent';


const RouterPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent/>} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/onboarding" element={<OnBoardingComponent />} />
      <Route path="/calendar" element={<CalendarComponent />} />
      <Route path="/piechart" element={<PieChartComponent/>} />
      <Route path="/curvechart" element={<CurveChartComponent/>} />
      <Route path="/sidebar" element={<SideBarComponent/>} />

    </Routes>
  );
};

export default RouterPrincipal;