import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Pages/Shared/Footer/Footer';
import Navbar from '../component/Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <Box>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </Box>
    );
};

export default Main;