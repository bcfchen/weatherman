import React from "react";
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

const CurrentWeatherIndicator = ({ isLoading, currentHourlyForecast }) => {
    return (
        <Grow in={!isLoading}>
            <div className="current-weather-indicator-container">
                <Typography variant="display4">
                    {currentHourlyForecast && currentHourlyForecast.temperature}
                </Typography>
                <Typography variant="headline" gutterBottom>
                    {currentHourlyForecast && currentHourlyForecast.text}
                </Typography>
            </div>
        </Grow >
    );
};

export default CurrentWeatherIndicator;