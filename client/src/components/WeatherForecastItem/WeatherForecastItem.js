import React from "react";
import Typography from '@material-ui/core/Typography';
import { getWeatherIcon } from "./WeatherIconMappings";

const WeatherForecastItem = ({ forecastItem }) => {
    let icon = getWeatherIcon(forecastItem.text);
    return (
        <div className="weather-forecast-item-container">
            <Typography variant="subheading">{icon}</Typography>
            <Typography variant="subheading">{forecastItem.high}</Typography>
            <Typography variant="subheading">{forecastItem.low}</Typography>
            <Typography variant="subheading">{forecastItem.dayOfWeek}</Typography>
        </div>
    );
}

export default WeatherForecastItem;