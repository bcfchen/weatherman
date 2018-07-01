import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LocationSearch from "../LocationSearch/LocationSearch";

const CurrentWeatherIndicator = ({ currentHourlyForecast, location }) => {
    return (
        <div className="current-weather-indicator-container">
            <Typography variant="display4">
                {currentHourlyForecast && currentHourlyForecast.temperature}
            </Typography>
            <Typography variant="headline" gutterBottom>
                {currentHourlyForecast && currentHourlyForecast.text}
            </Typography>
        </div>
    );
};

export default CurrentWeatherIndicator;