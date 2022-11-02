import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Shopping from '../pages/Shopping';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import SignDetail from '../pages/SignDetail';
import MyPage from '../pages/MyPage';
import Detail from '../pages/Detail';
import Carts from '../pages/Carts';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Shopping />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signup/register" element={<SignDetail />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Carts" element={<Carts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
