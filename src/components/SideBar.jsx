import { Box } from '@mui/material';
import React from 'react';

const SideBar = () => {
  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: 'blue',
        p: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      SideBar
    </Box>
  );
};

export default SideBar;
