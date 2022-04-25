import { Box } from '@mui/material';
import React from 'react';

const RightBar = () => {
  return (
    <Box
      sx={{
        flex: 2,
        bgcolor: 'green',
        p: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      RightBar
    </Box>
  );
};

export default RightBar;
