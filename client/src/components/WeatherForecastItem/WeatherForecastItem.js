import React from "react";
import Typography from '@material-ui/core/Typography';
import { getWeatherIcon } from "./WeatherIconMappings";
import { propTypes } from "./types";

const WeatherForecastItem = ({ forecastItem }) => {
    let icon = getWeatherIcon(forecastItem.text);
    return (
        <div>
            <Typography variant="headline">{icon}</Typography>
            <Typography variant="subheading">{forecastItem.high}</Typography>
            <Typography className="forecast-low" variant="subheading">{forecastItem.low}</Typography>
            <Typography variant="subheading">{forecastItem.dayOfWeek}</Typography>
        </div>
    );
}

WeatherForecastItem.propTypes = propTypes;
export default WeatherForecastItem;