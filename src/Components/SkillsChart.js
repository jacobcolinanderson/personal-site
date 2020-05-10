import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts'


const frameworkData = [
    { name: "JavaScript", value: 9},
    { name: "C#", value: 8},
    { name: "HTML", value: 10},
    { name: "CSS", value: 8},
    { name: "SQL", value: 7},
    { name: "Swift", value: 6},
    { name: "React", value: 9},
    { name: ".NetCore", value: 8},
    { name: "Angular", value: 6},
    { name: "SSMS", value: 8},
    { name: "Git", value: 8},
    { name: "XCode", value: 5},
]

const useStyles = makeStyles({
    root:{
        paddingTop: "20px",
        paddingBottom: "20px",
        fontFamily: "'Oswald', sans-serif",
    },
})
function SkillsChart() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ResponsiveContainer minHeight={300} width="100%" >
                <BarChart data={frameworkData} layout="vertical" barCategoryGap="5%" margin={{ top: 0, right: 60, left: 60, bottom: 0 }} >
                    <YAxis dataKey="name" type="category" tickLine={false} axisLine={{ stroke: '#5ec6cc' }}/>
                    <XAxis hide type="number" tickLine axisLine={{ stroke: '#5ec6cc' }} domain={[0, 10]} />
                    <Bar isAnimationActive={false} dataKey="value" fill="#5ec6cc" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SkillsChart