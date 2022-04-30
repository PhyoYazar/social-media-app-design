import Box from '@mui/material/Box';
import React from 'react';
import ListItems from './ListItems';

const SideBar = () => {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box position={'fixed'}>
        <ListItems />
      </Box>
    </Box>
  );
};

export default SideBar;
