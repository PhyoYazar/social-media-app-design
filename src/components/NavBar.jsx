import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import {
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
} from '@mui/material';
import { Mail, Notifications } from '@mui/icons-material';

const BoxMenuTypo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const Search = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const IconsContainer = styled('div')(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: 20,
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBoxMobile = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar position='sticky'>
        <StyledToolbar>
          <BoxMenuTypo>
            <IconButton
              sx={{
                display: { xs: 'block', md: 'none' },
                mr: '10px',
                pt: 2,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div'>
              Yazu
            </Typography>
          </BoxMenuTypo>
          <Search>
            <InputBase placeholder='Search...' />
          </Search>
          <IconsContainer>
            <Badge badgeContent={4} color='error'>
              <Mail />
            </Badge>
            <Badge badgeContent={4} color='error'>
              <Notifications />
            </Badge>
            <Avatar
              alt='Remy Sharp'
              src='https://material-ui.com/static/images/avatar/1.jpg'
              sx={{ width: 30, height: 30 }}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            />
          </IconsContainer>
          <UserBoxMobile>
            <SearchIcon />
            <Avatar
              alt='Remy Sharp'
              src='https://material-ui.com/static/images/avatar/1.jpg'
              sx={{ width: 30, height: 30 }}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            />
          </UserBoxMobile>
          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            anchorEl={anchorEl}
            open={open}
            onClose={(e) => setAnchorEl(null)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem sx={{ display: { xs: 'block', sm: 'none' } }}>
              Message
            </MenuItem>
            <MenuItem sx={{ display: { xs: 'block', sm: 'none' } }}>
              Notifications
            </MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
