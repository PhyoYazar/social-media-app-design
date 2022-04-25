import {
  Article,
  ExpandLess,
  ExpandMore,
  Home,
  Inbox,
  ModeNight,
  People,
  Person,
  Settings,
  StarBorder,
  Storefront,
} from '@mui/icons-material';
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import React from 'react';

const SideBar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(() => !open);
  };

  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary='HomePage' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Article />
          </ListItemIcon>
          <ListItemText primary='Pages' />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary='Marketplace' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary='Friend' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary='Groups' />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary='Inbox' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='Starred' />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary='Settings' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default SideBar;
