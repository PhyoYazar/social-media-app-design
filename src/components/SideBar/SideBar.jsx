import Box from '@mui/material/Box';
import React from 'react';
import ListItems from './ListItems';

const SideBar = (props) => {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        display: { xs: 'none', md: 'block' },
      }}
    >
      <ListItems mode={props.mode} setMode={props.setMode} />
    </Box>
  );
};

export default SideBar;
