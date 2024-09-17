import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainContent from './components/MainContent'; // Import your MainContent component

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
