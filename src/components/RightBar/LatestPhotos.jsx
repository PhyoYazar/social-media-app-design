import { ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react';

const LatestPhotos = () => {
  return (
    <>
      <Typography variant='h6' fontWeight={100} mt={3} mb={1}>
        Latest Photos
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt=':'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt=':'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt=':'
          />
        </ImageListItem>
      </ImageList>
    </>
  );
};

export default LatestPhotos;
