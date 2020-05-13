import React from 'react'
import { Typography } from '@material-ui/core'

class Ticker extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Reading: {}
        }
        this.getReading =  this.getReading.bind(this)
    }

    componentDidMount(){
        this.getReading()
        this.timer = setInterval(() => {this.getReading()}, 10000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    getReading(){
        fetch('https://telemeteryapi.wxlogger.net/v1/demo')
        .then(response =>{
            if(!response.ok)
                throw new Error('Problem getting latest reading')
            
            return response.json()
        })
        .then((json) => {
            this.setState({Reading: json})
        })
        .catch(error => console.log(error))
    }

    getWindDirection(windBearing){
        if(windBearing < 22 ){
            return {abbr:'N',verbose:"North"}
        }else if(windBearing < 67){
            return {abbr:'NE',verbose:"Northeast"}
        }else if(windBearing < 112){
            return {abbr:'E',verbose:"East"}
        }else if(windBearing < 157){
            return {abbr:'SE',verbose:"Southeast"}
        }else if(windBearing < 212){
            return {abbr:'S',verbose:"South"}
        }else if(windBearing < 247){
            return {abbr:'SW',verbose:"Southwest"}
        }else if(windBearing < 292){
            return {abbr:'W',verbose:"West"}
        }else if(windBearing < 337){
            return {abbr:'NW',verbose:"Northwest"}
        }else{
            return {abbr:'N',verbose:"North"}
        }
    }

    render(){
        return(
            <div style={{padding: "20px"}}>
                <Typography variant="body1" style={{fontFamily: "'Oswald', sans-serif", color: "#5ec6cc"}}>
                    Live telemetry data from a remote site @ 11,440ft elevation outside Vail, CO 
                </Typography>
                <div>
                    <Typography variant="body2" style={{fontFamily: "'Oswald', sans-serif"}}> 
                        Temp: {this.state.Reading.temp}°F | Barometer: {this.state.Reading.baroValue}mmhg | Humidity: {parseInt(this.state.Reading.humidity)}% 
                    </Typography>
                    <Typography variant="body2" style={{fontFamily: "'Oswald', sans-serif"}}>
                        Wind Direction: {this.getWindDirection(this.state.Reading.windBearing).verbose} | Wind Speed: {this.state.Reading.windSpeed}mph | Battery Voltage: {this.state.Reading.batteryVoltage}v
                    </Typography>
                </div>
            </div>
        )
    }
}

export default Ticker