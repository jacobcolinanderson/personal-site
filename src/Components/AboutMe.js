import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';
import Pretzel from '../Assets/Images/Pretzel.png'

const useStyles = makeStyles({
    title:{
        textAlign: "center",
        fontFamily: "'Amatic SC', cursive",
    },
    biography:{
        margin: "20px"
    },
    image:{
        borderRadius: "5px",
        display: "block",
        margin: 'auto'
    }
  });

function AboutMe(){

    const classes = useStyles();
    return(
        <div>
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
                    sm={7}
                    xs={12}
                >
                    <Typography variant="h2" className={classes.title}>
                        <Box fontWeight="fontWeightBold">Hello, I'm Jacob Anderson</Box>
                    </Typography>
                    <div className={classes.biography}>
                        <Typography variant="p">
                            I'm baby paleo YOLO cloud bread pok pok typewriter gluten-free organic flexitarian. Salvia poutine photo booth keffiyeh ennui, freegan cloud bread iceland occupy pour-over. Cloud bread flannel unicorn listicle ugh whatever stumptown venmo wayfarers viral chicharrones distillery tumblr occupy single-origin coffee. Godard leggings humblebrag chartreuse thundercats tacos art party deep v iceland hashtag roof party quinoa kickstarter keffiyeh. Cray vape fam whatever quinoa locavore, vice brooklyn glossier kitsch affogato you probably haven't heard of them la croix. Poke disrupt pinterest hexagon fam humblebrag.
                        </Typography>
                    </div>                    
                </Grid>
                <Grid item
                    xl={4}
                    lg={4}
                    md={4}
                    sm={5}
                    xs={12}
                >
                    <img className={classes.image} src={Pretzel} alt="me"/>
                </Grid>
            </Grid>
                
            </CardContent>
        </div>
    )

}

export default AboutMe