import React from 'react';
import SideDrawer from "./SideDrawer/SideDrawer"
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { } from "./Header.css"

import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@material-ui/core';



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: false };
  }

  toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ ...this.state, [anchor]: open });
  };

  render() {
    return (
      <React.Fragment>
        <SideDrawer openDrawer={this.state["left"]} onCloseDrawer={() => this.toggleDrawer("left", false)} />
        <AppBar className="header" position="static">
          <Toolbar className="toolbar">
            <Box className="menu-icon-box">
              <IconButton onClick={this.toggleDrawer("left", true)} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Box>
            <Box className="app-name-box">
              <Typography variant="h6" style={{ flexGrow: 1 }} >
                APP
              </Typography>
            </Box>
            <Box className="desktop-menu-box">
              <Button color="inherit" component={RouterLink} to='/'>Home</Button>
              <Button color="inherit" component={RouterLink} to='/about'>About</Button>
              <Button color="inherit" component={RouterLink} to='/login'>Login</Button>
            </Box>
          </Toolbar>

        </AppBar>
      </React.Fragment>
    )
  }
}

export default Header