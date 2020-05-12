import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';
import Pretzel from '../Assets/Images/Pretzel.JPG'
import Resume from '../Assets/Files/JacobAnderson-Resume.pdf'
import Fab from '@material-ui/core/Fab'
import {FaReact, FaJs, FaHtml5, FaCss3, FaSwift, FaGitAlt, FaAngular} from 'react-icons/fa'
import cSharp from '../Assets/Images/cSharp.png'
import sql from '../Assets/Images/sql.png'
 
const useStyles = makeStyles({
    root:{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "white"
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
    biography:{
        padding:"20px",
        textAlign: "left",
        margin: "auto",
        fontFamily: "'Oswald', sans-serif",
    },
    image:{
        borderRadius: "5px",
        display: "block",
        margin: 'auto',
        width: "100%",
        maxWidth: "350px"
    },
    imageSubTitle:{
        fontFamily: "'Oswald', sans-serif",
        textAlign: "center"
    },
    button:{
        width: "200px",
        margin: "10px",
        color: "black",
        fontFamily: "'Oswald', sans-serif",
        backgroundColor: "#5ec6cc"
    },
    iconBar:{
        textAlign: "center",
        width: "100",
    },
    iconWrapper:{
        display: "inline-block",
        padding: "20px",
    },
    devIcons:{
        height: "60px",
        width: "60px",
        color: "black"
    },
    iconLabel:{
        fontFamily: "'Oswald', sans-serif",
        fontSize: "12px",
    },
    break:{
        height: "7px"
    },

  });

function AboutMe(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CardContent>
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item
                        xl={8}
                        lg={8}
                        md={8}
                        sm={12}
                        xs={12}
                    >
                        <Typography variant="h1" className={classes.title}>
                        <Box fontWeight="fontWeightBold">Hello, I'm Jake Anderson</Box>
                        </Typography>
                        <Typography variant="h5" className={classes.subTitle}>
                            <Box fontWeight="fontWeightBold">a connoisseur of all things bread and cheese</Box>
                        </Typography>
                        <Typography variant="body1" className={classes.biography}>
                            Jake grew up in Denver, CO and graduated from Fort Lewis College in Durango, CO in 2012 with a B.A. in Spanish and minor in French. He spent five years as a Program Director for First Descents, a nonprofit organization that provides free outdoor adventures for young adults (ages 18-39) impacted by cancer and other serious health conditions. Jake joined Beaver Creek Ski Patrol in 2013, completed his AIARE Level III course in 2015 and became Beaver Creek’s Assistant Director of Snow Safety in 2016. 
                            <div className={classes.break}/>
                            To pursue his then growing passion for web development, Jake went back to school in 2017 and started working for Inntopia in Edwards, CO in early 2018. As a developer at Inntopia Jake, designed and implemented tooling that reduced time to billing for new clients, added new functionalities using Angular Elements to existing MVC application, and quickly resolved high priority bugs and issues.
                            <div className={classes.break}/>
                            Jake Anderson is the founder of Telemetry Stream, a web based solution for ski areas, guiding operations and avalanche centers to track current and historical sensor and observation data. <Link to="/telemetrystream">Learn More</Link>
                            <div className={classes.break}/>
                            An avid outdoorsman, Jake loves skiing, mountain biking, kayaking and photography, and hiking when his fiancé and dog make him. He also loves traveling, and has been lucky enough to spend time in some incredible places, including: Japan, Indonesia, Cambodia, Georgia, Turkey, Kyrgyzstan, France, Italy, UK, Austria, Germany, Switzerland, Spain, Cuba and Costa Rica. 
                            <div className={classes.break}/>
                            Jake is a passionate, versatile, and innovative individual that loves a good challenge and a good time. He is always looking to learn and apply his passion and skills to new projects, so please get in touch!
                        </Typography>
                    </Grid>
                    <Grid item
                        xl={4}
                        lg={4}
                        md={4}
                        sm={12}
                        xs={12}
                    >
                        <img className={classes.image} src={Pretzel} alt="me"/>
                        <Typography variant="body2" className={classes.imageSubTitle}>
                            
                        </Typography>
                    </Grid>
                </Grid>
                <div className={classes.iconBar}>
                    <div className={classes.iconWrapper}>
                        <FaReact className={classes.devIcons}/>
                        <Typography variant="body2" className={classes.iconLabel}>
                            React
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <FaJs className={classes.devIcons}/>
                        <Typography variant="body2" className={classes.iconLabel}>
                            JavaScript
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <img src={cSharp} alt="cSharp" className={classes.devIcons}/>
                        <Typography variant="body2" className={classes.iconLabel}>
                            C#
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <img src={sql} alt="sql" className={classes.devIcons}/> 
                        <Typography variant="body2" className={classes.iconLabel}>
                            SQL
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <FaHtml5 className={classes.devIcons}/>
                        <Typography variant="body2" className={classes.iconLabel}>
                            HTML5
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <FaCss3 className={classes.devIcons}/>
                        <Typography variant="body2" className={classes.iconLabel}>
                            CSS3
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <FaSwift className={classes.devIcons}/>
                        <Typography variant="body2" className={classes.iconLabel}>
                            Swift
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <FaGitAlt className={classes.devIcons}/>
                        <Typography variant="body2" className={classes.iconLabel}>
                            Git
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <FaAngular className={classes.devIcons}/>
                        <Typography variant="body2" className={classes.iconLabel}>
                            Angular
                        </Typography>
                    </div>
                </div> 
                <Fab href={Resume} download="Jake's Resume" variant="extended" className={classes.button}>Download My Resume</Fab>   
            </CardContent>
        </div>
    )

}

export default AboutMe