import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const CurrentWeatherIndicator = ({ currentCondition, location }) => {
    return (
        <div className="current-weather-indicator-container">
            <Typography variant="display2" gutterBottom>
                {currentCondition.getTime()}
            </Typography>
            <Typography variant="display2" gutterBottom>
                {location.getLocationString()}
            </Typography>
            <Typography variant="display1" gutterBottom>
                {currentCondition.temp}
            </Typography>
            <Typography variant="display1" gutterBottom>
                {currentCondition.text}
            </Typography>
        </div>
    );
};

export default CurrentWeatherIndicator;