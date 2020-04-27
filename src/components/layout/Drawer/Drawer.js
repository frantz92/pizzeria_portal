import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import KitchenIcon from '@material-ui/icons/Kitchen';
import PersonIcon from '@material-ui/icons/Person';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  drawerContainer: {
    margin: '20px 0 0 0',
  },
  drawerPaper: {
    backgroundColor: '#868785',
    zIndex: '0',
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <NavLink
            exact
            to={process.env.PUBLIC_URL + '/'}
            activeClassName='active'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
            activeStyle={{
              color: '#65C241',
              textDecoration: 'underline',
            }}
          >
            <ListItem button key={'Home'}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </NavLink>

          <NavLink
            exact
            to={process.env.PUBLIC_URL + '/ordering'}
            activeClassName='active'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
            activeStyle={{
              color: '#65C241',
              textDecoration: 'underline',
            }}
          >
            <ListItem button key={'Ordering'}>
              <ListItemIcon>
                <RoomServiceIcon />
              </ListItemIcon>
              <ListItemText primary={'Ordering'} />
            </ListItem>
          </NavLink>

          <NavLink
            exact
            to={process.env.PUBLIC_URL + '/tables'}
            activeClassName='active'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
            activeStyle={{
              color: '#65C241',
              textDecoration: 'underline',
            }}
          >
            <ListItem button key={'Booking'}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary={'Booking'} />
            </ListItem>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + '/kitchen'}
            activeClassName='active'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
            activeStyle={{
              color: '#65C241',
              textDecoration: 'underline',
            }}
          >
            <ListItem button key={'Kitchen'}>
              <ListItemIcon>
                <KitchenIcon />
              </ListItemIcon>
              <ListItemText primary={'Kitchen'} />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
        <List>
          <NavLink
            to={process.env.PUBLIC_URL + '/login'}
            activeClassName='active'
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
            activeStyle={{
              color: '#65C241',
              textDecoration: 'underline',
            }}
          >
            <ListItem button key={'Login'}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={'Login'} />
            </ListItem>
          </NavLink>
        </List>
      </div>
    </Drawer>
  );
}
