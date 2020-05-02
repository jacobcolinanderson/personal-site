import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {MailOutline, LinkedIn, Instagram} from '@material-ui/icons';

const useStyles = makeStyles({
  appBar: {
    background: "transparent",
    boxShadow: "none"
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    background: "transparent",
    width: "100%",
  },
  icon: {
    width: 30,
    height: 30,
    color: "white"
  }
});

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <AppBar 
        position="fixed" 
        color="inherit"
        className={classes.appBar}
      >
        <Toolbar>
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="menu" 
            > 
                <MenuIcon className={classes.icon} />
            </IconButton>
        </Toolbar>
      </AppBar>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          if(newValue === 0)
            window.open("mailto:jacob.colin.anderson@icloud.com")
          if(newValue === 1)
            window.open("https://www.linkedin.com/in/jacobcolinanderson/")
          if(newValue === 2)
            window.open("https://www.instagram.com/schnitzelvonschwein/")
          setValue(newValue);
        }}
        showLabels
        className={classes.bottomNav}
      >
          <BottomNavigationAction value={0} icon={<MailOutline className={classes.icon}/>} />
          <BottomNavigationAction value={1} icon={<LinkedIn className={classes.icon}/>} />
          <BottomNavigationAction value={2} icon={<Instagram className={classes.icon}/>} />
      </BottomNavigation>
    </div>
    
  );
}

export default App;
