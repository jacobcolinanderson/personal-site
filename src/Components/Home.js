import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
    root:{
        borderColor: "white",
        borderStyle: "solid",
        marginLeft: "10px",
        marginRight: "10px",
        top: "25%",
        position: "relative",
        backdropFilter: "blur(20px) brightness(90%)",
    },
    title:{
        textAlign: "center",
        fontFamily: "'Amatic SC', cursive",
        color: "white",
        padding: "10px 30px",  
    }
})

function Home(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Typography variant="h1" className={classes.title}>
                <Box fontWeight="fontWeightBold">Jacob C. Anderson</Box>
            </Typography>
        </div>
    )
}

export default Home