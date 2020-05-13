import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';
import WxDiagram from '../Assets/Images/WxLoggerDiagram.png'
import Ticker from './Ticker'
// import Datalogger from '../Assets/Images/datalogger.png'
// import WebServer from '../Assets/Images/webServer.png'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles({
    root:{
        width: "100vw",
        minHeight: '100vh',
        backgroundColor: "white",
        textAlign: "center"
    },
    title:{
        textAlign: "center",
        fontFamily: "'Amatic SC', cursive",
    },
    subTitle:{
        textAlign: "center",
        fontFamily: "'Amatic SC', cursive",
        color: "#5ec6cc"
    },
    image:{
        borderRadius: "5px",
        display: "block",
        margin: 'auto',
        width: '90%',
        maxWidth: '600px',
        padding: "20px",
        paddingTop: "50px"
    },
    description:{
        fontFamily: "'Oswald', sans-serif",
        textAlign: "left"
    },
    contact:{
        width: "180px",
        margin: "10px",
        color: "black",
        fontFamily: "'Oswald', sans-serif",
        backgroundColor: "#5ec6cc",
    }
})
function TelemetryStream(){

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <CardContent>
                <Typography variant="h1" className={classes.title}>
                    <Box fontWeight="fontWeightBold">Telemetry Stream</Box>
                </Typography>
                <Typography variant="h5" className={classes.subTitle}>
                    <Box fontWeight="fontWeightBold">real-time sensor data by ski professionals for ski professionals</Box>
                </Typography>
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <img src={WxDiagram} alt="Weather Diagram" className={classes.image}/>
                        
                        
                    </Grid>
                    <Grid item
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <Typography variant="body1" className={classes.description}>
                            Telemetry Stream is a web based solution for ski areas, guiding operations and avalanche centers to track current and historical weather data.
                            <br/><br/>
                            This system is designed so that it can be used with existing sensors and hardware and modified to connect to Telemetry Stream either by calling out APIs directly from your data-loggers or processed by our Windows application on your system. If you dont have existing hardware we can build a station to your specifications and install it almost anywhere on the globe. Standard installs poll the sensors every ten seconds and are avaiable nearly intsantaniously. 
                            <br/><br/>
                            We provide many different options ranging from colleciton and storage of your data in our SQL databases all the way through to data systhesis and analysis on our web based platform.
                            <br/><br/>
                        </Typography>
                        
                    </Grid>
                    <Grid item
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <Ticker />
                    </Grid>
                    <Grid item
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <Fab  onClick={() => {window.location.href = "mailto:info@telemetrystream.com"}} key={0} variant="extended" className={classes.contact}>request a demo</Fab>
                    </Grid>
                </Grid>
                
                
            </CardContent>
        </div>
    )
}

export default TelemetryStream