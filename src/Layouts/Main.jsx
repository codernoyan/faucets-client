/* eslint-disable linebreak-style */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Main() {
  return (
    <div>
      <Navbar />
      <div style={{
        backgroundColor: '#EEF2FE',
        paddingBottom: '2rem',
      }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
