import Box from '@mui/material/Box';
import React from 'react';
import FriendList from './FriendList';
import LatestConversation from './LatestConversation';
import LatestPhotos from './LatestPhotos';

const RightBar = () => {
  return (
    <Box
      sx={{
        flex: 2,
        p: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position='fixed' width={320}>
        <FriendList />
        <LatestPhotos />
        <LatestConversation />
      </Box>
    </Box>
  );
};

export default RightBar;
