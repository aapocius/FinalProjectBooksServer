import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';

const VisitorLayout: React.FC = () => (
  <>
    <Navbar />
    <Box component="main">
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default VisitorLayout;
