import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'transparent', 
        boxShadow: 'none', 
        color: 'black', 
        top: 0, 
        left: 0, 
        right: 0
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Medora
        </Typography>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Typography variant="body1">About Us</Typography>
          <Typography variant="body1">Furniture</Typography>
          <Typography variant="body1">Our Stores</Typography>
          <Typography variant="body1">Blog</Typography>
        </div>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={handleMenu}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
