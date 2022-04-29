import Feed from './components/Feed/Feed';
import SideBar from './components/SideBar';
import RightBar from './components/RightBar/RightBar';
import Stack from '@mui/material/Stack';

import './App.css';
import NavBar from './components/NavBar';
import Add from './components/Add';

function App() {
  return (
    <>
      <NavBar />
      <Stack direction='row' spacing={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </>
  );
}

export default App;
