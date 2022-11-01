import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Shopping from '../pages/Shopping';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Shopping />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
