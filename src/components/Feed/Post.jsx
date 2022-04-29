import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { styled } from '@mui/material';

const StyleCard = styled(Card)(({ theme }) => ({
  margin: '5px 0',
  [theme.breakpoints.up('sm')]: {
    margin: '15px 10px',
  },
  [theme.breakpoints.up('md')]: {
    margin: '15px 35px',
  },
}));

const Post = () => {
  return (
    <StyleCard>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Yazuu'
        subheader='September 14, 2022'
      />
      <CardMedia
        component='img'
        height='20%'
        image='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
        alt='cereals food'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </StyleCard>
  );
};

export default Post;
