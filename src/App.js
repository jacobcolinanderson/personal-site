import React from 'react';
import './App.css';
import clsx from 'clsx';
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
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import WxLogger from './Components/WxLogger';

const useStyles = makeStyles({
  heroAppBar: {
    background: "transparent",
    boxShadow: "none",
  },
  appBar: {
    background: "white",
    boxShadow: "none",
  },
  heroBottomNav:{
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "transparent"
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "white"
  },
  heroIcon:{
    width: 30,
    height: 30,
    color: "white"
  },
  icon: {
    width: 30,
    height: 30,
    color: "black"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "55px",
  },
  dialog:{
    backgroundColor: "transparent",  
    padding: "15px",
  },
  card:{
    marginTop: "55px",
    height: "calc(100vh - 110px)",
    overflowY: "scroll",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  button:{
    width: "200px",
    margin: "10px",
    color: "black",
    backgroundColor: "white",
    fontFamily: "'Oswald', sans-serif",
  }
});

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false)
  const [home, setHome] = React.useState(false)
  
  const handleClick = (event) => {
    setOpen(!open)
  }

  return (
    <div className={classes.content}>
      <Router>
        <AppBar 
          position="fixed" 
          color="inherit"
          className={clsx(classes.heroAppBar, {[classes.appBar]: home})}>
          <Toolbar>
              <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="menu" 
                onClick={handleClick}
              > 
                  <MenuIcon className={clsx(classes.heroIcon, {[classes.icon]: home})} />
              </IconButton>
          </Toolbar>
        </AppBar>
        <Card className={classes.card}>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/wxlogger" component={WxLogger}/>
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
          className={clsx(classes.heroBottomNav, {[classes.bottomNav]: home})}
        >
            <BottomNavigationAction value={0} icon={<MailOutline className={clsx(classes.heroIcon, {[classes.icon]: home})}/>} />
            <BottomNavigationAction value={1} icon={<LinkedIn className={clsx(classes.heroIcon, {[classes.icon]: home})}/>} />
            <BottomNavigationAction value={2} icon={<Instagram className={clsx(classes.heroIcon, {[classes.icon]: home})}/>} />
            <BottomNavigationAction value={3} icon={<GitHub className={clsx(classes.heroIcon, {[classes.icon]: home})}/>} />
        </BottomNavigation>
        <Dialog onClose={handleClick} open={open}>
          <Card className={classes.dialog}>
            <Fab component={Link} onClick={function(event){setOpen(!open); setHome(false)}} to="/" key={0} variant="extended" className={classes.button}>Home</Fab>
            <br/>
            <Fab component={Link} onClick={function(event){setOpen(!open); setHome(true)}} to="/aboutme" key={1} variant="extended" className={classes.button}>About Me</Fab>
            <br/>
            <Fab component={Link} onClick={function(event){setOpen(!open); setHome(true)}} to="/wxlogger" key={2} variant="extended" className={classes.button}>Wx Logger</Fab>
          </Card>
        </Dialog>
      </Router>
    </div>
    
  );
}

export default App;
