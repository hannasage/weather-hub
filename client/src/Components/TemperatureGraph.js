import React, { useState, useEffect } from 'react';
import { AreaChart, Area, LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    subtitle: {
      marginBottom: '20px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

function TemperatureGraph(props) {

    //TODO: Process incoming data to dailyData for use in graph
    const [dailyData, setDailyData] = useState([])
    const classes = useStyles();

    useEffect(() => {
        setDailyData(props.daily.data)
    }, [])

    return (
        <Paper className={classes.paper}>
            <Typography className={classes.subtitle} style={{textAlign: 'left'}} variant='h5'>
                {props.title}
            </Typography>
            <ResponsiveContainer width="99%" height="80%" aspect={3}>
                <AreaChart data={dailyData}>
                    <defs>
                        <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(194,24,24,1)" stopOpacity={1}/>
                            <stop offset="100%" stopColor="rgba(255,76,0,1)" stopOpacity={1}/>
                        </linearGradient>
                        <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#667eea" stopOpacity={1}/>
                            <stop offset="100%" stopColor="#764ba2" stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="temperatureHigh" stroke="#8884d8" strokeWidth={2} fill="url(#colorHigh)"/>
                    <Area type="monotone" dataKey="temperatureLow" stroke="#8884d8" strokeWidth={2} fill="url(#colorLow)"/>
                </AreaChart>
            </ResponsiveContainer>
        </Paper>
    )
}

export default TemperatureGraph
