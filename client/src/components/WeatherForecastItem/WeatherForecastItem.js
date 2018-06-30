import React from "react";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const WeatherForecastItem = ({ forecastItem }) => {
    return (
        <div className="weather-forecast-item-container-even">
            <div>{forecastItem.high}</div>
            <div>{forecastItem.low}</div>
            <div>{forecastItem.day}</div>
        </div>
    );
}

export default WeatherForecastItem;