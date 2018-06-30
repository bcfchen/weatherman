import React from "react";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { getWeatherIcon } from "./WeatherIconMappings";

const WeatherForecastItem = ({ forecastItem }) => {
    let icon = getWeatherIcon(forecastItem.text);
    return (
        <div className="weather-forecast-item-container">
            {icon}
            <div>{forecastItem.high}</div>
            <div>{forecastItem.low}</div>
            <div>{forecastItem.dayOfWeek}</div>
        </div>
    );
}

export default WeatherForecastItem;