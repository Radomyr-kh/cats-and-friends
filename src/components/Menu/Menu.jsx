import React, { useState } from 'react';
import { MyList } from '../../styles/header';
import {
  ListItemButton,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Menu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MyList type="row">
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Home
      </ListItemButton>
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Volunteer
      </ListItemButton>
      <ListItemButton
        sx={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center'
        }}
        onClick={handleClick}
      >
        Stories
        <KeyboardArrowDownIcon />
      </ListItemButton>
      <MuiMenu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
      >
        <MuiMenuItem onClick={handleClose}>
          Blog
        </MuiMenuItem>
        <MuiMenuItem onClick={handleClose}>
          Podcast
        </MuiMenuItem>
      </MuiMenu>
      <ListItemButton
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        Login
      </ListItemButton>
    </MyList>
  );
}
