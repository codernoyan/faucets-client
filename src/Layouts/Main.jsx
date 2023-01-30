/* eslint-disable linebreak-style */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Main() {
  return (
    <div style={{
      backgroundColor: '#EEF2FE',
    }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
