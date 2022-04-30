import React, { useState } from 'react';
import Feed from './components/Feed/Feed';
import SideBar from './components/SideBar/SideBar';
import RightBar from './components/RightBar/RightBar';
import Stack from '@mui/material/Stack';

import './App.css';
import NavBar from './components/NavBar';
import Add from './components/Add';
import { Box, createTheme, ThemeProvider } from '@mui/material';

export const darkContext = React.createContext({
  mode: '',
  setMode: () => {},
});

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  // to make the dark theme, i can use "Paper" components or just like "Box with extra attribute"

  return (
    <ThemeProvider theme={darkTheme}>
      <darkContext.Provider value={{ mode, setMode }}>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          {/* <Paper> */}
          <NavBar />
          <Stack direction='row' spacing={2}>
            <SideBar />
            <Feed />
            <RightBar />
          </Stack>
          <Add />
        </Box>
      </darkContext.Provider>
    </ThemeProvider>
  );
}

export default App;
