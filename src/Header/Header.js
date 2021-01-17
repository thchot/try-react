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
            <Toolbar>
              <IconButton onClick={this.toggleDrawer("left", true)} edge="start" color="inherit" aria-label="menu">
                <MenuIcon  />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: 1 }} >
                APP
          </Typography>
              
              <Button color="inherit" component={RouterLink} to='/'>Home</Button>
              <Button color="inherit" component={RouterLink} to='/about'>About</Button>
              <Button color="inherit" component={RouterLink} to='/login'>Login</Button>
              
            </Toolbar>
            
          </AppBar>
      </React.Fragment>
    )
  }
}

export default Header