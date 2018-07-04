import React from "react";
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import { propTypes } from "./types";

const CurrentWeatherIndicator = ({ isLoading, currentHourlyForecast }) => {
    return (
        <Grow in={!isLoading}>
            <div className="current-weather-indicator-container">
                <Typography className="current-temperature" variant="display4">
                    {currentHourlyForecast && currentHourlyForecast.temperature}
                </Typography>
                <Typography variant="headline" gutterBottom>
                    {currentHourlyForecast && currentHourlyForecast.text}
                </Typography>
            </div>
        </Grow >
    );
};

CurrentWeatherIndicator.propTypes = propTypes;
export default CurrentWeatherIndicator;