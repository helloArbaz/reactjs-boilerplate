import React from 'react';
import './App.css';
import AppInitializer from './AppInitializer';
import { ThemeProvider } from '@emotion/react';
import AppThemeConfig from './Configurations/AppThemeConfig';
import { CssBaseline } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={AppThemeConfig}>
      <CssBaseline>
        <AppInitializer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

