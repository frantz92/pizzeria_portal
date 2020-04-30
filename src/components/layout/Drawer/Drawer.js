import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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
    marginTop: '90px',
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
  listItem: {
    display: 'block',
  },
  listItemIcon: {
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '60px',
  },
  listItemText: {
    width: '100%',
    margin: '0',
    textAlign: 'center',
  },
  divider: {
    backgroundColor: '#65C241',
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState();

  React.useEffect(() => {
    const data = localStorage.getItem('previousState');
    if (data) {
      setSelectedIndex(JSON.parse(data));
    } else {
      setSelectedIndex(0);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('previousState', JSON.stringify(selectedIndex));
  });

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
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
              className={classes.listItem}
              button
              key={'Home'}
              selected={selectedIndex === 0}
              style={{
                borderLeft: selectedIndex === 0 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                className={classes.listItemIcon}
                style={{
                  color: selectedIndex === 0 ? 'white' : 'black',
                }}
              >
                <HomeIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText className={classes.listItemText} primary={'Home'} />
            </ListItem>
          </NavLink>
          <Divider className={classes.divider} />
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
              className={classes.listItem}
              button
              key={'Ordering'}
              selected={selectedIndex === 1}
              style={{
                borderLeft: selectedIndex === 1 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                className={classes.listItemIcon}
                style={{
                  color: selectedIndex === 1 ? 'white' : 'black',
                }}
              >
                <RoomServiceIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText
                className={classes.listItemText}
                primary={'Ordering'}
              />
            </ListItem>
          </NavLink>
          <Divider className={classes.divider} />
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
              className={classes.listItem}
              button
              key={'Booking'}
              selected={selectedIndex === 2}
              style={{
                borderLeft: selectedIndex === 2 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                className={classes.listItemIcon}
                style={{
                  color: selectedIndex === 2 ? 'white' : 'black',
                }}
              >
                <MenuBookIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText
                className={classes.listItemText}
                primary={'Booking'}
              />
            </ListItem>
          </NavLink>
          <Divider className={classes.divider} />
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
              className={classes.listItem}
              button
              key={'Kitchen'}
              selected={selectedIndex === 3}
              style={{
                borderLeft: selectedIndex === 3 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                className={classes.listItemIcon}
                style={{
                  color: selectedIndex === 3 ? 'white' : 'black',
                }}
              >
                <KitchenIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText
                className={classes.listItemText}
                primary={'Kitchen'}
              />
            </ListItem>
          </NavLink>
          <Divider className={classes.divider} />
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
              className={classes.listItem}
              button
              key={'Login'}
              selected={selectedIndex === 4}
              style={{
                borderLeft: selectedIndex === 4 ? '5px solid #65C241' : 'none',
              }}
            >
              <ListItemIcon
                className={classes.listItemIcon}
                style={{
                  color: selectedIndex === 4 ? 'white' : 'black',
                }}
              >
                <PersonIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText
                className={classes.listItemText}
                primary={'Login'}
              />
            </ListItem>
          </NavLink>
          <Divider className={classes.divider} />
        </List>
      </div>
    </Drawer>
  );
}
