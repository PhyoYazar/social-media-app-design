import React, { useState, useContext } from 'react';
import { darkContext } from '../../App';

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
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';

let darkModeOpen;

const ListItems = () => {
  const darkCtx = useContext(darkContext);
  const [open, setOpen] = useState(true);

  const darkModeChangeHandler = (event) => {
    darkCtx.setMode(event.target.checked ? 'dark' : 'light');
  };

  const handleClick = () => {
    setOpen(() => !open);
  };

  if (darkCtx.mode === 'light') darkModeOpen = false;
  else darkModeOpen = true;

  return (
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
        <Switch checked={darkModeOpen} onChange={darkModeChangeHandler} />
      </ListItemButton>
    </List>
  );
};

export default ListItems;
