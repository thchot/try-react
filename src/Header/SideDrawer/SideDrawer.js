import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer(props) {
  const classes = useStyles();
 

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={props.onCloseDrawer(anchor, false)}
      onKeyDown={props.onCloseDrawer(anchor, false)}
    >
      <List>
          <ListItem button key="Home" component={RouterLink} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="About" component={RouterLink} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button key="Login" component={RouterLink} to="/login">
            <ListItemText primary="Login" />
          </ListItem>
      </List>
      <Divider />
      <List>
        {['Hours', "Location"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key="left">
          <Drawer anchor="left" open={props.openDrawer} onClose={props.onCloseDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
