import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComponent from '../Drawer/Drawer';
import styles from './Header.module.scss';

const className = 'Header-component';

const HeaderComponent: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleToggleDrawer = (value: boolean): void => {
    setShowDrawer(value);
  };

  return (
    <>
      <AppBar position="static" className={styles[className]}>
        <Toolbar>
          <Typography variant="h6" className={styles[`${className}__title`]}>
            Bet Split
          </Typography>

          <IconButton
            onClick={() => handleToggleDrawer(true)}
            edge="end"
            className={styles[`${className}__hamburger`]}
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
