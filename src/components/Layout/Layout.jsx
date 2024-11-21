// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div >
        {' '}
        {/* 헤더의 높이만큼 margin-top 추가 */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
