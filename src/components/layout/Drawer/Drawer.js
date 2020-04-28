import React, { useState } from 'react';
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
    backgroundColor: '#383937',
    zIndex: '0',
    width: '100px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState();

  React.useEffect(() => {
    const data = localStorage.getItem('lastState');
    if (data) {
      setSelectedIndex(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('lastState', JSON.stringify(selectedIndex));
  });

  return (
    <Drawer
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
            className={classes.link}
            activeStyle={{
              color: 'white',
            }}
            onClick={() => setSelectedIndex(0)}
          >
            <ListItem
              button
              key={'Home'}
              selected={selectedIndex === 0}
              style={{
                display: 'block',
                marginTop: '15px',
                borderLeft: selectedIndex === 0 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                style={{
                  color: selectedIndex === 0 ? 'white' : 'black',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <HomeIcon style={{ fontSize: '60px' }} />
              </ListItemIcon>
              <ListItemText
                primary={'Home'}
                style={{ width: '100%', margin: '0', textAlign: 'center' }}
              />
            </ListItem>
          </NavLink>

          <NavLink
            exact
            to={process.env.PUBLIC_URL + '/ordering'}
            activeClassName='active'
            className={classes.link}
            activeStyle={{
              color: 'white',
            }}
            onClick={() => setSelectedIndex(1)}
          >
            <ListItem
              button
              key={'Ordering'}
              selected={selectedIndex === 1}
              style={{
                display: 'block',
                marginTop: '15px',
                borderLeft: selectedIndex === 1 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                style={{
                  color: selectedIndex === 1 ? 'white' : 'black',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <RoomServiceIcon style={{ fontSize: '60px' }} />
              </ListItemIcon>
              <ListItemText
                primary={'Ordering'}
                style={{ width: '100%', margin: '0', textAlign: 'center' }}
              />
            </ListItem>
          </NavLink>

          <NavLink
            exact
            to={process.env.PUBLIC_URL + '/tables'}
            activeClassName='active'
            className={classes.link}
            activeStyle={{
              color: 'white',
            }}
            onClick={() => setSelectedIndex(2)}
          >
            <ListItem
              button
              key={'Booking'}
              selected={selectedIndex === 2}
              style={{
                display: 'block',
                marginTop: '15px',
                borderLeft: selectedIndex === 2 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                style={{
                  color: selectedIndex === 2 ? 'white' : 'black',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <MenuBookIcon style={{ fontSize: '60px' }} />
              </ListItemIcon>
              <ListItemText
                primary={'Booking'}
                style={{ width: '100%', margin: '0', textAlign: 'center' }}
              />
            </ListItem>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + '/kitchen'}
            activeClassName='active'
            className={classes.link}
            activeStyle={{
              color: 'white',
            }}
            onClick={() => setSelectedIndex(3)}
          >
            <ListItem
              button
              key={'Kitchen'}
              selected={selectedIndex === 3}
              style={{
                display: 'block',
                marginTop: '15px',
                borderLeft: selectedIndex === 3 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                style={{
                  color: selectedIndex === 3 ? 'white' : 'black',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <KitchenIcon style={{ fontSize: '60px' }} />
              </ListItemIcon>
              <ListItemText
                primary={'Kitchen'}
                style={{ width: '100%', margin: '0', textAlign: 'center' }}
              />
            </ListItem>
          </NavLink>
        </List>
        <Divider style={{ backgroundColor: '#65C241' }} />
        <List>
          <NavLink
            to={process.env.PUBLIC_URL + '/login'}
            activeClassName='active'
            className={classes.link}
            activeStyle={{
              color: 'white',
            }}
            onClick={() => setSelectedIndex(4)}
          >
            <ListItem
              button
              key={'Login'}
              selected={selectedIndex === 4}
              style={{
                display: 'block',
                marginTop: '15px',
                borderLeft: selectedIndex === 4 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                style={{
                  color: selectedIndex === 4 ? 'white' : 'black',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <PersonIcon style={{ fontSize: '60px' }} />
              </ListItemIcon>
              <ListItemText
                primary={'Login'}
                style={{ width: '100%', margin: '0', textAlign: 'center' }}
              />
            </ListItem>
          </NavLink>
        </List>
      </div>
    </Drawer>
  );
}
