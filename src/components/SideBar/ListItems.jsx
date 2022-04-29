import React from 'react';

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

const ListItems = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(() => !open);
  };

  return (
    <Box position={'fixed'}>
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
          <Switch
            onChange={(e) =>
              props.setMode(props.mode === 'light' ? 'dark' : 'light')
            }
          />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default ListItems;