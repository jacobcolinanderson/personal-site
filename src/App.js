import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {MailOutline, LinkedIn, Instagram, GitHub} from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab'
import Card from '@material-ui/core/Card'
import AboutMe from './Components/AboutMe'

const useStyles = makeStyles({
  appBar: {
    background: "transparent",
    boxShadow: "none",
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
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog:{
    backgroundColor: "white",  
    padding: "15px",
  },
  card:{
    marginTop: "60px",
    maxWidth: "93%",
    //backgroundColor: "white",
    //display: "inline-block",
    maxHeight: "calc(100vh - 120px)",
    overflowY: "scroll",
  },  
  button:{
    width: "200px",
    margin: "10px",
    color: "white",
    backgroundColor: "#a7d4db",
  }
});

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false)
  
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.content}>
      <Router>
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
                onClick={handleClick}
              > 
                  <MenuIcon className={classes.icon} />
              </IconButton>
          </Toolbar>
        </AppBar>
        <Card className={classes.card}>
            <Route path="/aboutme" component={AboutMe}/>
        </Card>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            if(newValue === 0)
              window.location.href = "mailto:jacob.colin.anderson@icloud.com"
            if(newValue === 1)
              window.open("https://www.linkedin.com/in/jacobcolinanderson/")
            if(newValue === 2)
              window.open("https://www.instagram.com/schnitzelvonschwein/")
            if(newValue === 3)
              window.open("https://github.com/jacobcolinanderson")
            setValue(newValue);
          }}
          showLabels
          className={classes.bottomNav}
        >
            <BottomNavigationAction value={0} icon={<MailOutline className={classes.icon}/>} />
            <BottomNavigationAction value={1} icon={<LinkedIn className={classes.icon}/>} />
            <BottomNavigationAction value={2} icon={<Instagram className={classes.icon}/>} />
            <BottomNavigationAction value={3} icon={<GitHub className={classes.icon}/>} />
        </BottomNavigation>
        <Dialog onClose={handleClick} aria-labelledby="simple-dialog-title" open={open}>
          <Card className={classes.dialog}>
            <Fab component={Link} onClick={handleClick} to="/aboutme" key={1} variant="extended" className={classes.button}>About Me</Fab>
            <br/>
            <Fab component={Link} onClick={handleClick} to="/wxlogger" key={1} variant="contained" size="large" className={classes.button}>Wx Logger</Fab>
          </Card>
        </Dialog>
      </Router>
    </div>
    
  );
}

export default App;
