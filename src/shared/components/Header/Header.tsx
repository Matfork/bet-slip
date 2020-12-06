import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComponent from '../Drawer/Drawer';
import './Header.scss';

const HeaderComponent: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleToggleDrawer = (value: boolean): void => {
    setShowDrawer(value);
  };

  return (
    <>
      <AppBar position="static" className="Header-component__container">
        <Toolbar>
          <Typography variant="h6" className="Header-component__title">
            Bet Split
          </Typography>

          <IconButton
            onClick={() => handleToggleDrawer(true)}
            edge="end"
            className="Header-component__hamburger"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <DrawerComponent showDrawer={showDrawer} onToggleDrawer={() => handleToggleDrawer(false)} />
    </>
  );
};

export default HeaderComponent;
