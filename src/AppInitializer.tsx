import React from 'react';
import { Box, } from '@mui/material';
import {  RouterProvider } from 'react-router-dom';
import { appRouter } from './Configurations/getAppRoutes';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from "./Store/store"

function AppInitializer() {
    return (
        <Provider store={store}>
            <PersistGate
                loading={<Box>Feeleo</Box>}
                persistor={persistStore(store)}
            >
                <RouterProvider router={appRouter} fallbackElement={<Box>Loading</Box>} />
            </PersistGate>
        </Provider>
    );
}

export default AppInitializer;