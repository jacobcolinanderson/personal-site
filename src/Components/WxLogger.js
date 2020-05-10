import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';
import WxDiagram from '../Assets/Images/WxLoggerDiagram.png'

const useStyles = makeStyles({
    root:{
        width: "100vw",
        minHeight: '100vh',
        backgroundColor: "white"
    },
    title:{
        textAlign: "center",
        fontFamily: "'Amatic SC', cursive",
    },
    image:{
        borderRadius: "5px",
        display: "block",
        margin: 'auto',
        width: '90%',
        maxWidth: '700px',
        padding: "20px",
        paddingTop: "50px"
    },
    description:{
        fontFamily: "'Oswald', sans-serif",
    }
})
function WxLogger(){

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <CardContent>
                <Typography variant="h1" className={classes.title}>
                    <Box fontWeight="fontWeightBold">Wx Logger</Box>
                </Typography>
                <Typography variant="h5" className={classes.title}>
                    <Box fontWeight="fontWeightBold">real-time weather data by ski professionals for ski professionals</Box>
                </Typography>
                <Grid container
                    spacing={1}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={12}
                        xs={12}
                        alignItems="center"
                    >
                        <img src={WxDiagram} alt="Weather Diagram" className={classes.image}/>
                    </Grid>
                    <Grid item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={12}
                        xs={12}
                    >
                        <Typography variant="body1" className={classes.description}>
                            Wx Logger [WIX - LOGGER] is a web based solution for ski areas, guiding operations and avalanche centers to track current and historical weather data. 
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </div>
    )
}

export default WxLogger