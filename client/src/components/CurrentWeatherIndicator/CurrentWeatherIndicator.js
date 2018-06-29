import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const CurrentWeatherIndicator = ({ currentCondition, location }) => {
    return (
        <div className="current-weather-indicator-container">
            <Typography variant="display2" gutterBottom>
                {location.getLocationString()}
            </Typography>
            <Typography variant="display1" gutterBottom>
                {currentCondition.text}
            </Typography>
            <Typography variant="display1" gutterBottom>
                {currentCondition.temp}
            </Typography>
        </div>
    );
};

export default CurrentWeatherIndicator;