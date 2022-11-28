import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import User from './pages/User';

import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Footer from './components/Footer/Footer';

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: { main: "#FF963C", contrastText: "#fff" },
    },
    typography: {
      fontFamily: [
        'Noto Sans JP',
        'Inter',
        'sans-serif'
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <BrowserRouter>
          <Navbar setMode={setMode} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/user" element={<User />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
