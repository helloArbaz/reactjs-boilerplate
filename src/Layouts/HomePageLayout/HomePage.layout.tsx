import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <Outlet />
        </Container>
    );
};

export default HomePageLayout;